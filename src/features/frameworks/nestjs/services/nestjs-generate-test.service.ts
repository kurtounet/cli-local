import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function nestjsGenerateTest(entity: IEntityJson) {
  logInfo(`Génération des tests NestJS pour: ${entity.namePascalCase}`);
}
