// Template pour un service Electron
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function getElectronServiceTemplate(entity: IEntityJson) {
  return "// Electron Service for ${entity.namePascalCase}\n";
}
