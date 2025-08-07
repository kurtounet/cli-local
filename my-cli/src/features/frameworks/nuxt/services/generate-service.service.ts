import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateNuxtService(entity: IEntityJson) {
  console.log(`Génération du service Nuxt pour: ${entity.namePascalCase}`);
}
