// Template pour un contrôleur Electron
import { IEntityJson } from "@interfaces/entity-json.model";

/**
 * Generates an Electron controller template string.
 * @param entity The entity JSON object.
 * @returns The Electron controller template string.
 */
export function getElectronControllerTemplate(entity: IEntityJson) {
  return `// Electron Controller for ${entity.namePascalCase}\n`;
}
