import { IEntityJson } from "@interfaces/entity-json.model";

/**
 * Generates an Electron module.
 * @param entity The entity JSON object.
 */
export function generateElectronModule(entity: IEntityJson) {
  console.log(`Génération du module Electron pour: ${entity.namePascalCase}`);
}
