import path from "node:path";
import { pathToFileURL } from "node:url";

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

import { AiService } from "./services/ai.service.js";

const aiService = new AiService();
/*
Capacité	Utilité pour ton projet
resources:	Permet à l'IA de consulter des fichiers en lecture seule (comme tes schémas de base de données) sans passer par un outil.
prompts:	Permet de proposer à l'IA des modèles de messages (ex: un prompt "Code Review" pré-configuré).
logging:	Permet au serveur d'envoyer des flux de logs en temps réel au client
*/
const server = new Server(
  { name: "mclp-mcp-server", version: "1.0.0" },
  {
    capabilities: {
      // Indique que ton serveur propose des outils exécutables
      tools: {},

      // Optionnel : si tu veux que l'IA puisse lire des ressources (fichiers de log, config, etc.)
      // resources: {},

      // Optionnel : si tu veux proposer des "prompts" pré-enregistrés
      // prompts: {}
    },
  },
);

/**
 * 1. DÉCOUVERTE : Expose tes plugins à l'application cliente (ex: Claude)
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  const tools = await aiService.listTools();
  const definitions = [];

  for (const name of tools) {
    try {
      // ON VISE LE DOSSIER SOURCE (OU DIST SELON TA CONFIG)
      // Utilise process.cwd() pour être sûr de partir de la racine du projet
      const pluginPath = path.resolve(
        process.cwd(),
        "src",
        "plugins",
        `${name}.plugin.js`,
      );

      const fileUrl = pathToFileURL(pluginPath).href;
      const module = await import(`${fileUrl}?update=${Date.now()}`);

      if (module.default?.definition) {
        definitions.push(module.default.definition);
      }
    } catch (error: any) {
      // Log l'erreur dans stderr pour ne pas polluer le flux JSON-RPC (stdio)
      console.error(`[MCP] Erreur sur ${name}:`, error.message);
    }
  }

  return { tools: definitions };
});

/**
 * 2. EXÉCUTION : Reçoit l'ordre de l'application cliente et lance le plugin
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    const result = await aiService.executeTool(name, args ? [args] : []);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  } catch (error: any) {
    return {
      isError: true,
      content: [{ type: "text", text: error.message }],
    };
  }
});

/**
 * 3. DÉMARRAGE : Utilise STDIO (Standard Input/Output) pour communiquer
 */
const transport = new StdioServerTransport();
await server.connect(transport);
console.error("🚀 MCP Server running on stdio");
