import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates an Angular module.
 * @param entity The entity JSON object.
 */
export function angularGenerateModule(entity: IEntityJson) {
  logInfo(`Génération du module Angular pour: ${entity.namePascalCase}`);
}
