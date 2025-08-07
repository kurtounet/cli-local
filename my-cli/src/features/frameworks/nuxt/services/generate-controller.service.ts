import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateNuxtController(entity: IEntityJson) {
  console.log(`Génération du contrôleur Nuxt pour: ${entity.namePascalCase}`);
}
