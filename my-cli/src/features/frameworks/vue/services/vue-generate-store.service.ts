import { IEntityJson } from "@interfaces/entity-json.model";

export function generateVueStore(entity: IEntityJson) {
  console.log(`Génération du store Vue.js pour: ${entity.namePascalCase}`);
}
