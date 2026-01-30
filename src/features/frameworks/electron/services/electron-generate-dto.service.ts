import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 * Generates an Electron DTO (Data Transfer Object).
 * @param entity The entity JSON object.
 */
export function generateElectronDto(entity: IEntityJson) {
  logInfo(`Génération du DTO Electron pour: ${entity.namePascalCase}`);
}
