import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateNuxtEntity(entity: IEntityJson) {
  logInfo(`Génération de l'entité Nuxt pour: ${entity.namePascalCase}`);
}
