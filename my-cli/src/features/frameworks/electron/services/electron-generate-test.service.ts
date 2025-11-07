import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates Electron tests.
 * @param entity The entity JSON object.
 */
export function generateElectronTest(entity: IEntityJson) {
  logInfo(`Génération des tests Electron pour: ${entity.namePascalCase}`);
}
