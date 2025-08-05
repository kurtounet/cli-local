import { IEntityJson } from "@interfaces/entity-json.model";

export function generateVueComponent(entity: IEntityJson) {
  console.log(`Génération du composant Vue.js pour: ${entity.namePascalCase}`);
}
