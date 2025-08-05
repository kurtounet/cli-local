import { IEntityJson } from "@interfaces/entity-json.model";

/**
 * Generates an Angular interface.
 * @param entity The entity JSON object.
 */
export function angularGenerateInterface(entity: IEntityJson) {
  console.log(
    `Génération de l'interface Angular pour: ${entity.namePascalCase}`,
  );
}
