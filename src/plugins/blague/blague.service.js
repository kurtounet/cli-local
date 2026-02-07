import path from "path";

export default class BlaguePlugin {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async execute(args) {
    this.ctx.log(`Exécution du plugin blague...`);

    // Logique du plugin
    // args contient les arguments passés

    return {
      success: true,
      message: "Plugin blague exécuté avec succès !",
    };
  }
}
