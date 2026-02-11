// Template pour un test Nuxt
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function getNuxtTestTemplate(entity: IEntityJson) {
  return `// Nuxt Test for ${entity.namePascalCase}\n`;
}
