import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates an Electron service.
 * @param entity The entity JSON object.
 */
export function generateElectronService(entity: IEntityJson) {
  logInfo(`Génération du service Electron pour: ${entity.namePascalCase}`);
}
