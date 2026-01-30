import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function nestjsGenerateEntity(entity: IEntityJson) {
  logInfo(`Génération de l'entité NestJS pour: ${entity.namePascalCase}`);
}
