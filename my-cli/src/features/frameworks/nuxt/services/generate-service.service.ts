import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateNuxtService(entity: IEntityJson) {
  logInfo(`Génération du service Nuxt pour: ${entity.namePascalCase}`);
}
