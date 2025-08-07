import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateNuxtModule(entity: IEntityJson) {
  console.log(`Génération du module Nuxt pour: ${entity.namePascalCase}`);
}
