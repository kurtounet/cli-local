import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 *
 * @param entity
 */
export function generateVueEntity(entity: IEntityJson) {
  logInfo(`Génération de l'entité Vue.js pour: ${entity.namePascalCase}`);
}
