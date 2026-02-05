import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 *
 * @param entity
 */
export function generateReactTest(entity: IEntityJson) {
  logInfo(`Génération des testsreact pour: ${entity.namePascalCase}`);
}
