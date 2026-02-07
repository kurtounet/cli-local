import { pathToFileURL } from "node:url";

import { IAppContext } from "@/types/context.interface.js";
import { IAiService } from "@/types/services/ai-service.interface.js";

import { BaseService } from "./base-service.service.js";

/**
 * Service gérant les interactions avec l'IA et le système de plugins dynamiques.
 * Implémente une architecture de type 'Agentic' où l'IA peut lire, écrire et exécuter du code.
 */
export class AiService extends BaseService implements IAiService {
  readonly serviceName = "AiService";

  public get pluginsPath(): string {
    return this.cli.path.resolve(process.cwd(), "src", "plugins");
  }
  // private genAI: GoogleGenerativeAI;
  private model: unknown;

  constructor(protected cli: IAppContext) {
    // Récupère ta clé API depuis les variables d'environnement
    const apiKey = process.env.GEMINI_API_KEY ?? "";
    // this.genAI = new GoogleGenerativeAI(apiKey);
    // this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    super(cli);
  }
  public init(): Promise<void> {
    // Si tu n'as rien à initialiser pour l'instant :
    return Promise.resolve();
  }

  /**
   * Dans une architecture MCP, cette méthode devient le routeur.
   * Elle doit envoyer les définitions de tes plugins à l'IA.
   * @param prompt - La demande de l'utilisateur.
   * @returns  La réponse de l'IA.
   */
  async chat(prompt: string): Promise<string> {
    const tools = await this.listTools(); // Récupère les noms des plugins
    if (!process.env.GEMINI_API_KEY) return "Erreur : Clé GEMINI_API_KEY manquante.";

    // 1. On prépare le contexte MCP pour l'IA
    const mcpContext = `
      Tu as accès aux outils suivants via le protocole MCP : ${tools.join(", ")}.
      Si tu as besoin d'analyser le projet, utilise 'architect'.
      Si tu as besoin d'un nouvel outil, demande-le via 'generatePlugin'.
    `;

    // 2. Logique de décision (Simulée ici jusqu'à l'ajout de la clé API)
    console.error(`[MCP HOST] Analyse du prompt : "${prompt}"`);

    if (prompt.includes("analyse")) {
      return (await this.executeTool("architect")) as string; // Exécution dynamique
    }

    return "Réponse IA traitée via MCP.";
  }

  /**
   * Charge et exécute un plugin JavaScript de manière dynamique.
   * @param name - Le nom du plugin (avec ou sans l'extension .plugin.js).
   * @param [args] - Les arguments à passer à la méthode execute du plugin.
   * @returns Le résultat de l'exécution du plugin.
   * @throws {Error} Si le fichier est introuvable ou si l'export par défaut est manquant.
   */
  async executeTool(name: string, args: unknown = {}): Promise<unknown> {
    const fileName = name.endsWith(".plugin.js") ? name : `${name}.plugin.js`;
    const pluginPath = this.cli.path.join(this.pluginsPath, fileName);

    try {
      const fileUrl = pathToFileURL(pluginPath).href;
      // 'update' timestamp utilisé pour forcer le rechargement du module (cache-busting)
      const module: any = await import(`${fileUrl}?update=${Date.now()}`);

      if (!module.default) {
        throw new Error(`Le plugin ${name} ne possède pas d'exportation 'default'.`);
      }

      const plugin = new module.default();

      /**
       * Injection du SDK (Context)
       * Permet au plugin d'accéder aux capacités de la CLI sans imports circulaires.       *
       */
      return await plugin.execute(args, {
        ai: this,
        fs: fs,
        log: (msg: string) => console.error(`[PLUGIN:${name.toUpperCase()}] ${msg}`),
      });
    } catch (error: unknown) {
      throw new Error(`Erreur d'exécution [${name}]: ${error}`);
    }
  }

  /**
   * Exécute un outil selon le standard MCP
   * @param  name - Le nom du plugin (avec ou sans l'extension .plugin.js).
   * @param  args - Les arguments à passer à la.visitMethod execute du plugin.
   * @returns
   */
  async executeToolMCP(name: string, args: unknown[] = []): Promise<unknown> {
    const fileName = name.endsWith(".plugin.js") ? name : `${name}.plugin.js`;
    const pluginPath = this.cli.path.join(this.pluginsPath, fileName);

    try {
      const fileUrl = pathToFileURL(pluginPath).href;
      const module = await import(`${fileUrl}?update=${Date.now()}`);

      const plugin = new module.default();

      // On passe le SDK complet au plugin pour qu'il soit "Agentic"
      return await plugin.execute(args, {
        ai: this,
        fs: fs,
        log: (msg: string) => console.error(`[MCP:TOOL:${name.toUpperCase()}] ${msg}`),
      });
    } catch (error: unknown) {
      throw new Error(`Erreur MCP Tool [${name}]: ${error.message}`);
    }
  }

  /**
   * Demande à l'IA de concevoir le code source d'un nouveau plugin.
   * @param prompt - Description textuelle de ce que le plugin doit accomplir.
   * @returns Le nom du plugin créé.
   */
  async generatePlugin(prompt: string): Promise<string> {
    // 1. Extraction du nom et description
    const nameMatch = /nomm[ée]\s+['"]?([a-z0-9-_]+)['"]?/i.exec(prompt);
    const pluginId = nameMatch ? nameMatch[1] : `plugin_${Date.now()}`;
    const pluginName = pluginId.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

    const className =
      pluginId
        .split(/[-_]/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("") + "Plugin";

    const description =
      prompt
        .replace(/nomm[ée]\s+['"]?([a-z0-9-_]+)['"]?/i, "")
        .replace(/\s+/, " ")
        .trim() || prompt;

    // 2. Préparation des chemins
    const pluginDir = this.cli.path.join(this.pluginsPath, pluginId);
    await this.cli.fileSystem.mkdir(pluginDir, { recursive: true });

    const serviceFileName = `${pluginId}.service.js`;

    // 3. Import dynamique de EJS
    const ejsModule = await import("ejs");
    // @ts-ignore
    const ejs = ejsModule.default || ejsModule;

    // 4. Rendu et écriture du Manifest
    const manifestTemplatePath = this.cli.path.resolve(
      process.cwd(),
      "src",
      "templates",
      "manifest.ejs",
    );
    const manifestContent = await this.cli.fileSystem.readFile(manifestTemplatePath, "utf-8");
    const manifestCode = ejs.render(manifestContent, {
      pluginId,
      pluginName,
      serviceFileName,
    });
    await this.cli.fileSystem.writeFile(
      this.cli.path.join(pluginDir, "manifest.json"),
      manifestCode,
    );

    // 5. Rendu et écriture du Service
    const serviceTemplatePath = this.cli.path.resolve(
      process.cwd(),
      "src",
      "templates",
      "service.ejs",
    );
    const serviceContent = await this.cli.fileSystem.readFile(serviceTemplatePath);
    const serviceCode = ejs.render(serviceContent, {
      className,
      pluginName: pluginId,
    });
    await this.cli.fileSystem.writeFile(
      this.cli.path.join(pluginDir, serviceFileName),
      serviceCode,
    );

    return pluginId;
  }

  /**
   * Enregistre un nouveau plugin (Legacy - n'est plus utilisé par le workflow auto)
   * @param name
   * @param code
   */
  async savePlugin(name: string, code: string): Promise<void> {
    // Gardé pour compatibilité si nécessaire, mais generatePlugin fait le travail maintenant.
    console.warn("savePlugin est déprécié pour le nouveau format de plugins.");
  }

  /**
   * Analyse le dossier plugins et retourne la liste des outils disponibles.
   * @returns Tableau contenant les noms des plugins (sans extension).
   */
  async listTools(): Promise<string[]> {
    try {
      const entries = await this.cli.fileSystem.readDirWithFileTypes(this.pluginsPath);
      const toolNames: string[] = [];

      for (const entry of entries) {
        if (entry.isFile() && entry.name.endsWith(".plugin.js")) {
          toolNames.push(entry.name.replace(".plugin.js", ""));
        } else if (entry.isDirectory()) {
          const manifestPath = this.cli.path.join(this.pluginsPath, entry.name, "manifest.json");
          try {
            await fs.access(manifestPath);
            toolNames.push(entry.name);
          } catch {
            // Pas de manifest, pas un plugin
          }
        }
      }
      return toolNames;
    } catch {
      return [];
    }
  }

  /**
   * Lit le contenu d'un fichier de manière asynchrone.
   * @param targetPath - Chemin relatif ou absolu du fichier.
   * @returns Le contenu textuel du fichier.
   */
  async readFile(targetPath: string): Promise<string> {
    return await this.cli.fileSystem.readFile(this.cli.path.resolve(targetPath));
  }

  /**
   * Écrit du contenu dans un fichier, crée les répertoires si nécessaire.
   * @param targetPath - Chemin de destination.
   * @param content - Texte à écrire.
   */
  async writeFile(targetPath: string, content: string): Promise<void> {
    const fullPath = this.cli.path.resolve(targetPath);
    await this.cli.fileSystem.createDirectory(this.cli.path.getDirectory(fullPath));
    await this.cli.fileSystem.writeFile(fullPath, content);
  }
}
