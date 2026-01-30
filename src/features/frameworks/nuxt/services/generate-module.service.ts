import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

export function generateNuxtModule(entity: IEntityJson) {
  logInfo(`Génération du module Nuxt pour: ${entity.namePascalCase}`);
}
