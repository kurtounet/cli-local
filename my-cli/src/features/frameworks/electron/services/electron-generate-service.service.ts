import { IEntityJson } from "@interfaces/entity-json.model";

/**
 * Generates an Electron service.
 * @param entity The entity JSON object.
 */
export function generateElectronService(entity: IEntityJson) {
  console.log(`Génération du service Electron pour: ${entity.namePascalCase}`);
}
