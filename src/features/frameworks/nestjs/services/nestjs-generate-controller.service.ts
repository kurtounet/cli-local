import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 *
 * @param entity
 */
export function generateNestjsController(entity: IEntityJson) {
  logInfo(`Génération du contrôleur NestJS pour: ${entity.namePascalCase}`);
}
