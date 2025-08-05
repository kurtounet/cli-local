// Template pour un test Electron
import { IEntityJson } from "@interfaces/entity-json.model";

export function getElectronTestTemplate(entity: IEntityJson) {
  return `// Electron Test for ${entity.namePascalCase}\n`;
}
