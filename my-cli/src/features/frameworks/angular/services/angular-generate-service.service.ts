import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates an Angular service.
 * @param entity The entity JSON object.
 */
export function angularGenerateService(entity: IEntityJson) {
  console.log(`Génération du service Angular pour: ${entity.namePascalCase}`);
}
