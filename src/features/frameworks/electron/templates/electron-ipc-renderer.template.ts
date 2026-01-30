// Template pour un IpcRendere Electron
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates an Electron IpcRendere template string.
 * @param entity The entity JSON object.
 * @returns The Electron IpcRendere template string.
 */
export function electronIpcRendererTemplate(entity: IEntityJson) {
  return `
// Electron IpcRenderer for ${entity.namePascalCase}
import { ipcRenderer } from 'electron';

export async function fetch${entity.namePascalCase}Data() {
  return await ipcRenderer.invoke('get-${entity.nameKebabCase}-data');
}
`;
}
