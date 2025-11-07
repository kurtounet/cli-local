import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function nestjsEntityDtoTemplate(entity: IEntityJson): string {
  logInfo(`Dto", ${entity.namePascalCase}`);
  return `export class Create${entity.namePascalCase}Dto {}`;
}
