import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates Electron tests.
 * @param entity The entity JSON object.
 */
export function generateElectronTest(entity: IEntityJson) {
  console.log(`Génération des tests Electron pour: ${entity.namePascalCase}`);
}
