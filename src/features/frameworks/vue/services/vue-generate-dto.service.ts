import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateVueDto(entity: IEntityJson) {
  logInfo(`Génération du DTO Vue.js pour: ${entity.namePascalCase}`);
}
