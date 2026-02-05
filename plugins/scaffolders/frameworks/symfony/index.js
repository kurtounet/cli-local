export default class SymfonyPlugin {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async execute(args, data) {
    // FIX : Utilise 'this.ctx.log' et non 'this.ctx.logger.info'
    this.ctx.log("🚀 Démarrage du plugin Symfony...");

    // On récupère les blueprints définis dans le manifest.json
    // Note : Tu peux passer le manifest complet dans le SDK lors du load()
    const blueprints = data.blueprints;
    console.log(args);
    console.log(data.entities);

    for (const entity of data.entities) {
      for (const bp of blueprints) {
        // On cherche le template correspondant au 'type' (entity.php.ejs)
        const content = await this.ctx.render(`${bp.type}.php`, { entity });
        const fileName = `${entity.name}${bp.suffix}.php`;
        const destination = `./output/${bp.target}/${fileName}`;

        await this.ctx.fs.writeAsync(destination, content);
      }
    }
    this.ctx.log("✅ Tous les blueprints ont été générés.");
  }
}
