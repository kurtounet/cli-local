import { IEntityJson } from "@interfaces/entity-json.model";

/**
 * Generates an Electron entity.
 * @param entity The entity JSON object.
 */
export function generateElectronEntity(entity: IEntityJson) {
  console.log(`Génération de l'entité Electron pour: ${entity.namePascalCase}`);
}
