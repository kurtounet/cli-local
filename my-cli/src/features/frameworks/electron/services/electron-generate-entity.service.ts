import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates an Electron entity.
 * @param entity The entity JSON object.
 */
export function generateElectronEntity(entity: IEntityJson) {
  logInfo(`Génération de l'entité Electron pour: ${entity.namePascalCase}`);
}
