import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 *
 * @param entity
 */
export function generateReactComponent(entity: IEntityJson) {
  logInfo(`Génération du composantreact pour: ${entity.namePascalCase}`);
}
