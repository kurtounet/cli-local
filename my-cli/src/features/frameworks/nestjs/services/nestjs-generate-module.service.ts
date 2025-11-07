import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function nestjsGenerateModule(entity: IEntityJson) {
  logInfo(`Génération du module NestJS pour: ${entity.namePascalCase}`);
}
