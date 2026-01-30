import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function apiPlatformEntityProcessorTemplate(entity: IEntityJson) {
  return `Processor Template ${entity.tableName}`;
}
