import { IEntityJson } from "@interfaces/entity-json.model";

/**
 * Generates an Angular controller.
 * @param entity The entity JSON object.
 */
export function angularGenerateController(entity: IEntityJson) {
  console.log(
    `Génération du contrôleur Angular pour: ${entity.namePascalCase}`,
  );
}
