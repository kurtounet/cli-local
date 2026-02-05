import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { IAppContext } from "@/types/context.interface.js";
import { IAiService } from "@/types/services/ai-service.interface.js";

import { BaseService } from "./base-service.service.js";

/**
 * Service gérant les interactions avec l'IA et le système de plugins dynamiques.
 * Implémente une architecture de type 'Agentic' où l'IA peut lire, écrire et exécuter du code.
 */
export class AiService extends BaseService implements IAiService {
  readonly serviceName = "AiService";

  private get pluginsPath(): string {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname, "..", "plugins");
  }
  // private genAI: GoogleGenerativeAI;
  private model: unknown;

  constructor(public cli: IAppContext) {
    super(cli);
    // Récupère ta clé API depuis les variables d'environnement
    const apiKey = process.env.GEMINI_API_KEY ?? "";
    // this.genAI = new GoogleGenerativeAI(apiKey);
    // this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
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
    if (!process.env.GEMINI_API_KEY)
      return "Erreur : Clé GEMINI_API_KEY manquante.";

    // 1. On prépare le contexte MCP pour l'IA
    const mcpContext = `
      Tu as accès aux outils suivants via le protocole MCP : ${tools.join(", ")}.
      Si tu as besoin d'analyser le projet, utilise 'architect'.
      Si tu as besoin d'un nouvel outil, demande-le via 'generatePlugin'.
    `;

    // 2. Logique de décision (Simulée ici jusqu'à l'ajout de la clé API)
    console.log(`[MCP HOST] Analyse du prompt : "${prompt}"`);

    if (prompt.includes("analyse")) {
      return await this.executeTool("architect"); // Exécution dynamique
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
  async executeTool(name: string, args: unknown[] = []): Promise<unknown> {
    const fileName = name.endsWith(".plugin.js") ? name : `${name}.plugin.js`;
    const pluginPath = path.join(this.pluginsPath, fileName);

    try {
      const fileUrl = pathToFileURL(pluginPath).href;
      // 'update' timestamp utilisé pour forcer le rechargement du module (cache-busting)
      const module: string = await import(`${fileUrl}?update=${Date.now()}`);

      if (!module.default) {
        throw new Error(
          `Le plugin ${name} ne possède pas d'exportation 'default'.`,
        );
      }

      const plugin = new module.default() as unknown;

      /**
       * Injection du SDK (Context)
       * Permet au plugin d'accéder aux capacités de la CLI sans imports circulaires.       *
       */
      return await plugin.execute(args, {
        ai: this,
        fs: fs,
        log: (msg: string) =>
          console.log(`[PLUGIN:${name.toUpperCase()}] ${msg}`),
      });
    } catch (error: any) {
      throw new Error(`Erreur d'exécution [${name}]: ${error.message}`);
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
    const pluginPath = path.join(this.pluginsPath, fileName);

    try {
      const fileUrl = pathToFileURL(pluginPath).href;
      const module = await import(`${fileUrl}?update=${Date.now()}`);

      const plugin = new module.default();

      // On passe le SDK complet au plugin pour qu'il soit "Agentic"
      return await plugin.execute(args, {
        ai: this,
        fs: fs,
        log: (msg: string) =>
          console.log(`[MCP:TOOL:${name.toUpperCase()}] ${msg}`),
      });
    } catch (error: any) {
      throw new Error(`Erreur MCP Tool [${name}]: ${error.message}`);
    }
  }

  /**
   * Demande à l'IA de concevoir le code source d'un nouveau plugin.
   * @param prompt - Description textuelle de ce que le plugin doit accomplir.
   * @returns Le code JavaScript source généré, prêt à être sauvegardé.
   */
  async generatePlugin(prompt: string): Promise<string> {
    const systemContext = `
      Tu es un agent de développement autonome.
      Génère un plugin ESM pour Node.js.
      SDK disponible : context.ai, context.fs, context.log.
      Format: export default class { async execute(args, context) { ... } }
      Tâche : ${prompt}
    `;

    // Retourne le contexte pour le moment (simulation)
    return `// Plugin auto-généré\nexport default class GeneratedPlugin {\n  async execute(args, context) {\n    context.log("Exécuté");\n  }\n}`;
  }

  /**
   * Enregistre un nouveau plugin sur le système de fichiers.
   * @param name - Le nom de l'outil à créer.
   * @param code - Le code source JavaScript du plugin.
   * @returns
   */
  async savePlugin(name: string, code: string): Promise<void> {
    await fs.mkdir(this.pluginsPath, { recursive: true });
    const fileName = name.endsWith(".plugin.js") ? name : `${name}.plugin.js`;
    const filePath = path.join(this.pluginsPath, fileName);
    await fs.writeFile(filePath, code, "utf-8");
  }

  /**
   * Analyse le dossier plugins et retourne la liste des outils disponibles.
   * @returns Tableau contenant les noms des plugins (sans extension).
   */
  async listTools(): Promise<string[]> {
    try {
      const files = await fs.readdir(this.pluginsPath);
      return files
        .filter((file) => file.endsWith(".plugin.js"))
        .map((file) => file.replace(".plugin.js", ""));
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
    return await fs.readFile(path.resolve(targetPath), "utf-8");
  }

  /**
   * Écrit du contenu dans un fichier, crée les répertoires si nécessaire.
   * @param targetPath - Chemin de destination.
   * @param content - Texte à écrire.
   * @returns
   */
  async writeFile(targetPath: string, content: string): Promise<void> {
    const fullPath = path.resolve(targetPath);
    await fs.mkdir(path.dirname(fullPath), { recursive: true });
    await fs.writeFile(fullPath, content, "utf-8");
  }

  /**
   * Envoie un message à l'IA et récupère sa réponse textuelle.
   * @param {string} prompt - La question ou l'instruction à envoyer à l'IA.
   * @returns {Promise<string>} La réponse générée par le modèle.
   */
  /*
  async chat(prompt: string): Promise<string> {
    // TODO: Implémenter l'appel API réel (Gemini/OpenAI)
    return `response de l'IA: ${prompt}`;
  }*/
}
