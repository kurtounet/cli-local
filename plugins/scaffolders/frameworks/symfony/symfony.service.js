export default class SymfonyPlugin {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async execute(args, data) {
    this.ctx.log.info("🚀 Démarrage du plugin Symfony...");

    for (const entity of data.entities) {
      for (const bp of data.blueprints) {
        const content = await this.ctx.render(
          data.pluginDir,
          data.manifest.templateDir,
          `${bp.template}`,
          {
            entity,
          },
        );

        const fileName = `${entity.name}${bp.suffix}.php`;
        const destination = `./output/${bp.target}/${fileName}`;
        await this.ctx.fs.writeAsync(destination, content);
      }
    }
    this.ctx.log.success("✅ Tous les blueprints ont été générés.");
  }
}
