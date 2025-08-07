import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates an Electron interface.
 * @param entity The entity JSON object.
 */
export function generateElectronInterface(entity: IEntityJson) {
  console.log(
    `Génération de l'interface Electron pour: ${entity.namePascalCase}`,
  );
}
