import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 *
 * @param entity
 */
export function generateVueComponent(entity: IEntityJson) {
  logInfo(`Génération du composant Vue.js pour: ${entity.namePascalCase}`);
}
