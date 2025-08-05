import { IEntityJson } from "@interfaces/entity-json.model";

export function generateReactComponent(entity: IEntityJson) {
  console.log(`Génération du composant React pour: ${entity.namePascalCase}`);
}
