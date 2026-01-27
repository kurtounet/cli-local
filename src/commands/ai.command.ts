import { AiService } from "@/services/ai.service.js";

export class AiCommand {
  public name = "ai";
  public description = "Gestionnaire d'IA et de plugins";
  public arguments = "<action> <pluginName> [prompt...]";
  private aiService = new AiService();

  public async execute(
    rawAction: any,
    rawPluginName: any,
    promptArgs: string[],
  ): Promise<void> {
    const action = Array.isArray(rawAction) ? rawAction[0] : rawAction;
    const pluginName = Array.isArray(rawAction) ? rawAction[1] : rawPluginName;
    const args = Array.isArray(rawAction) ? rawAction.slice(2) : promptArgs;

    switch (action) {
      case "run":
        console.log(`🚀 [PLUGIN] Lancement : ${pluginName}...`);
        await this.aiService.executeTool(pluginName, args);
        break;

      case "create":
        console.log(`🤖 [GENERATE] Création de l'outil : ${pluginName}...`);
        const code = await this.aiService.generatePlugin(args.join(" "));
        await this.aiService.savePlugin(pluginName, code);
        console.log(`✅ Outil '${pluginName}' enregistré.`);
        break;

      case "test":
        await this.handleTests(pluginName, args);
        break;

      default:
        console.log("❌ Action inconnue. Utilisez: run, create, ou test.");
    }
  }
  /**
   * Routeur interne pour tester les méthodes du service AiService.
   */
  private async handleTests(method: string, args: string[]) {
    console.log(`🧪 [TEST] Méthode : ${method}`);

    try {
      switch (method) {
        case "list":
          const tools = await this.aiService.listTools();
          console.log("Outils disponibles :", tools);
          break;

        case "read":
          if (!args[0]) throw new Error("Chemin requis : ai test read <path>");
          const content = await this.aiService.readFile(args[0]);
          console.log(`Contenu de ${args[0]} :\n`, content);
          break;

        case "write":
          if (!args[0] || !args[1])
            throw new Error("Usage : ai test write <path> <content>");
          await this.aiService.writeFile(args[0], args.slice(1).join(" "));
          console.log(`✅ Fichier ${args[0]} écrit avec succès.`);
          break;

        case "chat":
          const response = await this.aiService.chat(args.join(" ") || "Hello");
          console.log("Réponse IA :", response);
          break;

        default:
          console.log("Méthodes de test disponibles : list, read, write, chat");
      }
    } catch (error: any) {
      console.error(`❌ Erreur lors du test : ${error.message}`);
    }
  }
}
