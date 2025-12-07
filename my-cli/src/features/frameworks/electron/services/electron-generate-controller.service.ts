import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates an Electron controller.
 * @param entity The entity JSON object.
 */
export function generateElectronController(entity: IEntityJson) {
  logInfo(`Génération du contrôleur Electron pour: ${entity.namePascalCase}`);
}
