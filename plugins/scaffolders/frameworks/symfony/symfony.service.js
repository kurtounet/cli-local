import { snakeToCamel, snakeToPascal } from "./utils/convert.js";
import {
  symfonyGetAttributeTypeORM,
  symfonyGetPropertyType,
} from "./utils/mapping.js";
import pluralize from "pluralize";

export default class SymfonyPlugin {
  constructor(ctx) {
    this.ctx = ctx;
  }

  enrichEntity(entity) {
    // Assumons que entity.namePascalCase et entity.nameCamelCase sont déjà définis par entities.json
    // Et utilisons namePascalCase comme base pour dériver les autres formats.
    const baseNamePascal = entity.namePascalCase;
    const baseNameCamel = entity.nameCamelCase; // Si déjà fourni, l'utiliser. Sinon, le dériver de baseNamePascal.

    // On s'assure que nameKebabCase, nameSnakeCase, namePluralCamelCase, etc. sont dérivés ici.
    entity.nameKebabCase = snakeToCamel(baseNamePascal)
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase();
    entity.nameSnakeCase = snakeToCamel(baseNamePascal)
      .replace(/([A-Z])/g, "_$1")
      .toLowerCase();

    // Si nameCamelCase n'est pas fourni, le dériver
    if (!entity.nameCamelCase) {
      entity.nameCamelCase = snakeToCamel(baseNamePascal);
    }
    // Si namePascalCase n'est pas fourni, le dériver
    if (!entity.namePascalCase) {
      entity.namePascalCase = snakeToPascal(baseNamePascal);
    }

    entity.namePluralCamelCase = pluralize.plural(baseNameCamel);
    entity.namePluralPascalCase = pluralize.plural(baseNamePascal);

    if (entity.columns) {
      entity.columns.forEach((col) => {
        col.nameCamelCase = snakeToCamel(col.name);
        col.namePascalCase = snakeToPascal(col.name);
        col.phpType = symfonyGetPropertyType(col.typeSql);
        col.ormType = symfonyGetAttributeTypeORM(col.typeSql);
      });
    }

    if (entity.relationships) {
      entity.relationships.forEach((relation) => {
        relation.nameCamelCase = snakeToCamel(relation.name);
        relation.namePascalCase = snakeToPascal(relation.name);
        relation.targetPascalCase = snakeToPascal(relation.target);
        relation.targetCamelCase = snakeToCamel(relation.target);
        relation.targetPascalCaseSingular = pluralize.singular(
          relation.targetPascalCase,
        );
        relation.targetCamelCaseSingular = pluralize.singular(
          relation.targetCamelCase,
        );
        if (relation.owner) {
          relation.ownerPascalCase = snakeToPascal(relation.owner);
        }
      });
    }

    return entity;
  }

  async renderAndWrite(blueprint, data) {
    const content = await this.ctx.render(
      data.pluginDir,
      data.manifest.templateDir,
      blueprint.template,
      data,
    );

    // const targetPath = await this.ctx.renderTemplateString(
    //   blueprint.target,
    //   data,
    // );

    let fileName;
    if (blueprint.filename) {
      fileName = blueprint.filename;
    } else if (data.entity) {
      fileName = `${data.entity.namePascalCase}${blueprint.suffix}.php`;
    } else {
      fileName = `${blueprint.type}${blueprint.suffix}.php`;
    }

    const destination = `./output/${blueprint.target}/${fileName}`;

    await this.ctx.fs.writeAsync(destination, content);
    this.ctx.log.info(`✓ Fichier généré : ${destination}`);
  }

  async execute(args, data) {
    this.ctx.log.info("🚀 Démarrage du plugin Symfony...");

    //Traitement des blueprints scope project
    this.ctx.log.info("Génération des fichiers de projet...");
    const projectBlueprints = data.manifest.blueprints.filter(
      (bp) => bp.scope === "project",
    );
    const projectData = data.project || {}; // Utilise data.project si fourni, sinon un objet vide

    for (const bp of projectBlueprints) {
      await this.renderAndWrite(bp, { ...data, project: projectData });
    }

    //Traitement des blueprints scope entity
    this.ctx.log.info("Génération des fichiers par entité...");
    const entityBlueprints = data.manifest.blueprints.filter(
      (bp) => bp.scope === "entity",
    );
    if (data.entities && data.entities.length > 0) {
      for (const entity of data.entities) {
        const enrichedEntity = this.enrichEntity(
          JSON.parse(JSON.stringify(entity)),
        );
        const templateData = {
          entity: enrichedEntity,
          ...data,
        };
        for (const bp of entityBlueprints) {
          await this.renderAndWrite(bp, templateData);
          //this.ctx.shell.execute("");
        }
      }
    } else {
      this.ctx.log.warn(
        "Aucune entité fournie, les blueprints par entité ne seront pas générés.",
      );
    }
    this.ctx.log.success("✅ Tous les blueprints ont été générés.");
  }
}
