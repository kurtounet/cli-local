import { IEntityJson } from "@interfaces/entity-json.model";

export function generateVueEntity(entity: IEntityJson) {
  console.log(`Génération de l'entité Vue.js pour: ${entity.namePascalCase}`);
}
