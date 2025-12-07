import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates an Electron interface.
 * @param entity The entity JSON object.
 */
export function generateElectronInterface(entity: IEntityJson) {
  logInfo(`Génération de l'interface Electron pour: ${entity.namePascalCase}`);
}
