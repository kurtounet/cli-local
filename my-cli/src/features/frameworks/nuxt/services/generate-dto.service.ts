import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateNuxtDto(entity: IEntityJson) {
  console.log(`Génération du DTO Nuxt pour: ${entity.namePascalCase}`);
}
