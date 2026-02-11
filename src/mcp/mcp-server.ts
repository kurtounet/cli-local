import path from "node:path";
import { pathToFileURL } from "node:url";

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import chokidar from "chokidar";
import { z } from "zod";

import { AppContextBuilder } from "@/context/context.js";
import { AiService } from "@/services/ai.service.js";
import { PluginService } from "@/services/plugin.service.js";

import {
  isMcpServerRunning,
  killAllMcpProcesses,
} from "./mcp-process-utils.js";

const aiService = new AiService();
let serverInstance: McpServer | null = null;
let transportInstance: StdioServerTransport | null = null;
let isConnected = false;

// Variables pour le contexte CLI
let cliContext: any = null;
let pluginService: PluginService | null = null;

/**
 * Arrête proprement le serveur
 */
export async function stopMcpServer() {
  if (transportInstance && isConnected) {
    await transportInstance.close();
    transportInstance = null;
    serverInstance = null;
    isConnected = false;
    console.error("🛑 Serveur MCP arrêté");
  }

  // S'assurer que tous les processus sont tués
  await killAllMcpProcesses();
}

/**
 * Surveillance et chargement dynamique des plugins
 * @param server
 */
async function watchPlugins(server: McpServer) {
  const watcher = chokidar.watch(aiService.pluginsPath, {
    ignored: /(^|[\/\\])\../, // ignorer les fichiers cachés
    persistent: true,
    ignoreInitial: false, // Charger les fichiers existants au démarrage
    depth: 1, // On doit voir les manifest.json dans les sous-dossiers
  });

  const loadTool = async (filePath: string) => {
    // Cas 1: Plugin fichier unique (Legacy)
    if (
      filePath.endsWith(".plugin.js") &&
      path.dirname(filePath) === aiService.pluginsPath
    ) {
      try {
        const name = path.basename(filePath, ".plugin.js");
        const fileUrl = pathToFileURL(filePath).href;
        const module = await import(`${fileUrl}?update=${Date.now()}`);

        if (module.default) {
          // Heuristique simple: on passe le SDK si disponible, sinon aiService
          const ctx = pluginService ? pluginService.getSDKContext() : aiService;

          const definition = module.default.definition || {
            name,
            description: "Outil dynamique",
          };
          server.registerTool(
            definition.name,
            {
              description: definition.description,
              inputSchema: module.default.schema || {},
            },
            async (args: any) => {
              const result = await aiService.executeTool(definition.name, args);
              return {
                content: [
                  {
                    type: "text" as const,
                    text: JSON.stringify(result, null, 2),
                  },
                ],
              };
            },
          );
          console.error(`[MCP] Plugin (Legacy) chargé: ${name}`);
        }
      } catch (err) {
        console.error(`[MCP] Erreur legacy ${filePath}`, err);
      }
      return;
    }

    // Cas 2: Plugin répertoire (Manifest)
    if (path.basename(filePath) === "manifest.json") {
      try {
        const pluginDir = path.dirname(filePath);
        const manifestContent = await import(
          `${pathToFileURL(filePath).href}?t=${Date.now()}`,
          {
            with: { type: "json" },
          }
        );

        // Validation du manifest
        const manifest = manifestContent.default;
        if (!manifest?.id || !manifest.service) {
          console.error(
            `[MCP] Manifest invalide pour ${filePath} (id ou service manquant)`,
          );
          return;
        }

        const servicePath = this.cli.path.join(pluginDir, manifest.service);
        const serviceUrl = pathToFileURL(servicePath).href;

        try {
          const module = await import(`${serviceUrl}?update=${Date.now()}`);

          if (module.default) {
            // Instanciation avec injection de contexte REEL (CLI SDK)
            let context = aiService;
            if (pluginService) {
              context = pluginService.getSDKContext() as any;
            }

            const pluginInstance = new module.default(context);

            // Tentative d'enregistrement (Gérer les doublons)
            try {
              server.registerTool(
                manifest.id,
                {
                  description:
                    manifest.description || `Plugin ${manifest.name}`,
                  inputSchema: {
                    type: "object",
                    properties: { project: { type: "object" } },
                  },
                },
                async (args: any) => {
                  const result = await pluginInstance.execute(args, {
                    project: {},
                  });
                  return {
                    content: [
                      {
                        type: "text" as const,
                        text: JSON.stringify(result, null, 2),
                      },
                    ],
                  };
                },
              );
              console.error(`[MCP] Plugin (Dir) chargé: ${manifest.name}`);

              // Notification désactivée pour éviter le spam/erreur JSON
              // server.sendNotification("notifications/tools/list_changed");
            } catch (regError: any) {
              if (regError.message?.includes("already registered")) {
                console.warn(
                  `[MCP] Warning: Plugin ${manifest.id} déjà enregistré (ignoré)`,
                );
              } else {
                throw regError;
              }
            }
          }
        } catch (importErr) {
          console.error(
            `[MCP] Erreur import service ${servicePath}`,
            importErr,
          );
        }
      } catch (err) {
        console.error(`[MCP] Erreur loading manifest ${filePath}`, err);
      }
    }
  };

  watcher
    .on("add", (path) => loadTool(path))
    .on("change", (path) => loadTool(path));
  // .on("unlink", ...)

  console.error(
    `[MCP] Surveillance des plugins activée dans ${aiService.pluginsPath}`,
  );
}

/**
 * Lancement du serveur MCP
 */
export async function runMcpServer() {
  // Initialization du contexte CLI complet
  try {
    console.error("🔄 Initialisation du contexte CLI pour MCP...");
    const builder = new AppContextBuilder();
    cliContext = await builder.buildContext();
    // On s'assure que tout est init
    pluginService = cliContext.services.get("PluginService");
    console.error("✅ Contexte CLI chargé. Service Plugin disponible.");
  } catch (error) {
    console.error("❌ Echec initialisation CLI Context:", error);
  }

  // Nettoyer les instances existantes par précaution
  if (serverInstance || transportInstance) {
    await stopMcpServer();
  }

  const server = new McpServer({
    name: "mclp-mcp-server",
    version: "1.0.0",
  });

  server.registerTool(
    "create-new-plugin",
    {
      title: "Create New Plugin",
      description: "Génère un nouveau plugin (Dossier + Manifest + Service).",
      inputSchema: {
        name: z.string().describe("Nom du plugin"),
        instruction: z.string().describe("Description de la tâche"),
      },
    },
    async ({ name, instruction }) => {
      try {
        const pluginId = await aiService.generatePlugin(instruction);
        return {
          content: [
            {
              type: "text" as const,
              text: `✅ Plugin '${pluginId}' créé avec succès (Format Dossier).`,
            },
          ],
        };
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        return {
          isError: true,
          content: [
            { type: "text" as const, text: `Erreur : ${errorMessage}` },
          ],
        };
      }
    },
  );

  await watchPlugins(server);

  const transport = new StdioServerTransport();
  await server.connect(transport);

  serverInstance = server;
  transportInstance = transport;
  isConnected = true;

  console.error("🚀 MCP Server running on stdio");
}

// Lancement initial seulement si appelé directement
if (import.meta.url === `file://${process.argv[1]}`) {
  runMcpServer().catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}
