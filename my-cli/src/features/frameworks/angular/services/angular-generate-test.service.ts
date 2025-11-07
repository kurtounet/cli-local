import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates Angular tests.
 * @param entity The entity JSON object.
 */
export function angularGenerateTest(entity: IEntityJson) {
  logInfo(`Génération des tests Angular pour: ${entity.namePascalCase}`);
}
