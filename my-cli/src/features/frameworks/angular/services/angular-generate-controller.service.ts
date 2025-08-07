import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates an Angular controller.
 * @param entity The entity JSON object.
 */
export function angularGenerateController(entity: IEntityJson) {
  console.log(
    `Génération du contrôleur Angular pour: ${entity.namePascalCase}`,
  );
}
