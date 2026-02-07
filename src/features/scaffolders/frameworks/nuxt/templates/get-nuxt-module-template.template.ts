// Template pour un module Nuxt
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function getNuxtModuleTemplate(entity: IEntityJson) {
  return `// Nuxt Module for ${entity.namePascalCase}\n`;
}
