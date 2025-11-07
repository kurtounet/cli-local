import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates an Angular controller.
 * @param entity The entity JSON object.
 */
export function angularGenerateController(entity: IEntityJson) {
  logInfo(
    `Génération du contrôleur Angular pour: ${entity.namePascalCase}`,
  );
}
