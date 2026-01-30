import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function nestjsCreateTests(projectPath: string, entity: IEntityJson) {
  logInfo(`Tests ${entity.nameCamelCase}`);
}
