import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates an Angular module.
 * @param entity The entity JSON object.
 */
export function angularGenerateModule(entity: IEntityJson) {
  console.log(`Génération du module Angular pour: ${entity.namePascalCase}`);
}
