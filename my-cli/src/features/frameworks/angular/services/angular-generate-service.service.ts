import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates an Angular service.
 * @param entity The entity JSON object.
 */
export function angularGenerateService(entity: IEntityJson) {
  logInfo(`Génération du service Angular pour: ${entity.namePascalCase}`);
}
