import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates an Electron module.
 * @param entity The entity JSON object.
 */
export function generateElectronModule(entity: IEntityJson) {
  logInfo(`Génération du module Electron pour: ${entity.namePascalCase}`);
}
