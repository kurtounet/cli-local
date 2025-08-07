import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateNuxtInterface(entity: IEntityJson) {
  console.log(`Génération de l'interface Nuxt pour: ${entity.namePascalCase}`);
}
