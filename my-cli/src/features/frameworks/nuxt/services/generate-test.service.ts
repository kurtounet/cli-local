import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateNuxtTest(entity: IEntityJson) {
  console.log(`Génération des tests Nuxt pour: ${entity.namePascalCase}`);
}
