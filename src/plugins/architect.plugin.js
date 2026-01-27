/**
 * Plugin: Architect
 * Rôle: Analyse la structure du projet pour donner du contexte à l'IA.
 */
export default class ArchitectPlugin {
  // Définition statique pour que l'Hôte MCP puisse décrire l'outil à l'IA
  static definition = {
    name: "architect",
    description:
      "Analyse la structure des fichiers source et les interfaces du projet.",
    inputSchema: {
      type: "object",
      properties: {
        deepScan: { type: "boolean", description: "Scanner les sous-dossiers" },
      },
    },
  };
  // Définition MCP

  async execute(args, context) {
    context.log("args: ", args);
    context.log("context: ", context);
    context.log("Début de l'analyse structurelle du projet...");

    const projectRoot = "./src";
    const structure = {};

    try {
      // 1. Scanner les dossiers clés
      const folders = ["commands", "services", "interfaces"];

      for (const folder of folders) {
        const folderPath = `${projectRoot}/${folder}`;
        try {
          const files = await context.fs.readdir(folderPath);
          structure[folder] = files;
        } catch (e) {
          structure[folder] = "Dossier non trouvé";
        }
      }

      // 2. Lire l'interface principale pour connaître les capacités
      const interfacePath = "./src/types/ai-service.interface.ts";
      const interfaceContent = await context.fs.readFile(
        interfacePath,
        "utf-8",
      );

      // 3. Synthèse pour l'IA
      const report = {
        date: new Date().toISOString(),
        files: structure,
        capabilities: interfaceContent,
      };

      context.log("Analyse terminée. Voici ma structure actuelle :");
      console.table(structure);

      // On peut même demander à l'IA de commenter cette structure
      const feedback = await context.ai.chat(
        `Voici ma structure actuelle : ${JSON.stringify(structure)}. 
         Mes capacités sont : ${interfaceContent}. 
         Suggère une amélioration ou un nouvel outil manquant.`,
      );

      console.log("\n🤖 Suggestion de l'IA Architecte :");
      console.log(feedback);
    } catch (error) {
      context.log(`Erreur lors de l'analyse : ${error.message}`);
    }
  }
}
