import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateNuxtController(entity: IEntityJson) {
  logInfo(`Génération du contrôleur Nuxt pour: ${entity.namePascalCase}`);
}
