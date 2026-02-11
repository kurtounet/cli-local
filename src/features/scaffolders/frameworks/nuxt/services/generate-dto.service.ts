import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { logInfo } from "@utils/logger";

/**
 *
 * @param entity
 */
export function generateNuxtDto(entity: IEntityJson) {
  logInfo(`Génération du DTO Nuxt pour: ${entity.namePascalCase}`);
}
