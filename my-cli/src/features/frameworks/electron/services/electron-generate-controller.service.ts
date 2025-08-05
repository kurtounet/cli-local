import { IEntityJson } from "@interfaces/entity-json.model";

/**
 * Generates an Electron controller.
 * @param entity The entity JSON object.
 */
export function generateElectronController(entity: IEntityJson) {
  console.log(
    `Génération du contrôleur Electron pour: ${entity.namePascalCase}`,
  );
}
