import { IEntityJson } from "@interfaces/entity-json.model";

export function generateReactController(entity: IEntityJson) {
  console.log(`Génération du contrôleur React pour: ${entity.namePascalCase}`);
}
