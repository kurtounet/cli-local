import { IEntityJson } from "@interfaces/entity-json.model";

export function generateNuxtTest(entity: IEntityJson) {
  console.log(`Génération des tests Nuxt pour: ${entity.namePascalCase}`);
}
