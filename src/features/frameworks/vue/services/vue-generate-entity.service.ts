import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateVueEntity(entity: IEntityJson) {
  logInfo(`Génération de l'entité Vue.js pour: ${entity.namePascalCase}`);
}
