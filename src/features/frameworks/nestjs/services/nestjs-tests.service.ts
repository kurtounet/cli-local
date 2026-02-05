import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 *
 * @param projectPath
 * @param entity
 */
export function nestjsCreateTests(projectPath: string, entity: IEntityJson) {
  logInfo(`Tests ${entity.nameCamelCase}`);
}
