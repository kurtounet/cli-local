import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates Angular tests.
 * @param entity The entity JSON object.
 */
export function angularGenerateTest(entity: IEntityJson) {
  console.log(`Génération des tests Angular pour: ${entity.namePascalCase}`);
}
