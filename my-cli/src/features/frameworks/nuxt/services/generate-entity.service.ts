import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateNuxtEntity(entity: IEntityJson) {
  console.log(`Génération de l'entité Nuxt pour: ${entity.namePascalCase}`);
}
