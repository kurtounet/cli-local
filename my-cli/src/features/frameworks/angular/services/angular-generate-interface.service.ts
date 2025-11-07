import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates an Angular interface.
 * @param entity The entity JSON object.
 */
export function angularGenerateInterface(entity: IEntityJson) {
  logInfo(
    `Génération de l'interface Angular pour: ${entity.namePascalCase}`,
  );
}
