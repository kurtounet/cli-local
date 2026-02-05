import path from "path";

export default class ArchitecturePlugin {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async createDirectoryStructure(nodes, parentPath) {
    for (const node of nodes) {
      if (node._type === "directory") {
        const newPath = path.join(parentPath, node.name);

        try {
          await this.ctx.fs.mkdirAsync(newPath, { recursive: true });
          this.ctx.log.info(`✓ Dossier créé : ${newPath}`);
        } catch (err) {
          this.ctx.log.error(`✗ Erreur lors de la création de ${newPath}:`, err);
          continue; // Continue with the next node even if one fails
        }

        if (node.children && node.children.length > 0) {
          await this.createDirectoryStructure(node.children, newPath);
        }
      }
    }
  }

  async execute(args, data) {
    this.ctx.log.info("🚀 Démarrage du plugin de génération d'architecture...");

    const projectConfig = data.project;
    if (!projectConfig || !projectConfig.frameworks) {
      this.ctx.log.error("✗ La configuration du projet (projectConfig.frameworks) est manquante.");
      return;
    }

    const projectBasePath = projectConfig.path || "./project-test";
    this.ctx.log.info(`Chemin de base du projet : ${projectBasePath}`);

    for (const framework of projectConfig.frameworks) {
      if (framework.architecture && framework.architecture.length > 0) {
        const frameworkName = framework.installOptions?.name || framework.name;
        this.ctx.log.info(`🏗️  Génération de l'architecture pour le framework: ${frameworkName}`);

        const frameworkRoot = path.join(projectBasePath, frameworkName);
        await this.createDirectoryStructure(framework.architecture, frameworkRoot);
      }
    }

    this.ctx.log.success("✅ Architecture des dossiers générée avec succès.");
  }
}
