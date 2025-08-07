// Template pour un service Electron
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getElectronServiceTemplate(entity: IEntityJson) {
  return "// Electron Service for ${entity.namePascalCase}\n";
}
