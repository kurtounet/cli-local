/** @typedef {import('../../core/src/types/sdk-context.interface').ISDKContext} ISDKContext */

import { ISDKContext } from "@/types/commun/sdk-context.interface.js";

/**
 * Plugin Symfony pour la génération d'entités et DTOs
 */
export default class SymfonyPlugin {
  /**
   * Le constructeur reçoit le SDK (ctx) préparé par PluginService
   * @param {ISDKContext} ctx - Contient log, fs, render, et config
   */
  constructor(ctx) {
    /** @type {ISDKContext} */
    this.ctx = ctx;
  }

  async execute(args, data) {
    this.ctx.log("Début de la génération Symfony...");

    // On récupère le chemin du projet depuis la config de la CLI
    const projectPath = this.ctx.config.projectPath || "./output";

    // On définit les types de fichiers à générer
    const blueprints = [
      { tpl: "entity.php", folder: "src/Entity", suffix: "" },
      { tpl: "dto.php", folder: "src/Dto", suffix: "Dto" },
    ];

    try {
      for (const entity of data.entities) {
        for (const bp of blueprints) {
          // 1. Rendu du template via le TemplateService (avec cache géré par le Core)
          // On passe le nom du template et l'objet de données
          const content = await this.ctx.render(bp.tpl, { entity });

          // 2. Construction du chemin de destination
          const fileName = `${entity.name}${bp.suffix}.php`;
          const destination = `${projectPath}/${bp.folder}/${fileName}`;

          // 3. Écriture du fichier via le service FileSystem du Core
          await this.ctx.fs.writeAsync(destination, content);

          this.ctx.log(`Fichier généré : ${fileName}`);
        }
      }

      this.ctx.log("✅ Génération terminée avec succès !");
      return { success: true };
    } catch (error) {
      this.ctx.log(`❌ Erreur : ${error.message}`);
      throw error;
    }
  }
}
