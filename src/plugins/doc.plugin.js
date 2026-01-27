// Plugin auto-généré
export default class GeneratedPlugin {
  // Définition statique pour que l'Hôte MCP puisse décrire l'outil à l'IA
  static definition = {
    name: "Documention",
    description:
      "Analyse la structure des fichiers source et les interfaces du projet.",
    inputSchema: {
      type: "object",
      properties: {
        deepScan: { type: "boolean", description: "Scanner les sous-dossiers" },
      },
    },
  };
  async execute(args, context) {
    context.log("Exécuté");
  }
}
