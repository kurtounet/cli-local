// Template pour un contrôleur Nuxt
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function getNuxtControllerTemplate(entity: IEntityJson) {
  return `// Nuxt Controller for ${entity.namePascalCase}\n`;
}
