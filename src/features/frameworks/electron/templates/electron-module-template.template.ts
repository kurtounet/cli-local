// Template pour un module Electron
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getElectronModuleTemplate(entity: IEntityJson) {
  return `// Electron Module for ${entity.namePascalCase}\n`;
}
