// On n'importe plus les types TS ici car c'est un plugin runtime
export class SymfonyPlugin {
  constructor(ctx) {
    this.ctx = ctx; // Contient fileSystem, shell, logger, etc.
  }

  async generate(config, entitiesJson, manifest) {
    this.ctx.logger.info("🚀 Démarrage du plugin Symfony...");

    for (const entity of entitiesJson.entities) {
      for (const blueprint of manifest.blueprints) {
        // Utilisation de la Factory (que la CLI fournit au plugin)
        const content = this.ctx.templateFactory.render(
          manifest.id,
          blueprint.type,
          entity,
        );
        const fileName = `${entity.name}${blueprint.suffix}.php`;
        const destination = `${config.projectPath}/${blueprint.target}/${fileName}`;

        await this.ctx.fileSystem.writeAsync(destination, content);
      }
    }

    // Exécution des commandes post-génération
    this.ctx.shell.executeSyncSpawn(
      "composer",
      ["dump-autoload"],
      config.projectPath,
    );
  }
}
