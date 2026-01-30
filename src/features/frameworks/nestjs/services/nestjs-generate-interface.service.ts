import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateNestjsInterface(entity: IEntityJson) {
  logInfo(`Génération de l'interface NestJS pour: ${entity.namePascalCase}`);
}
