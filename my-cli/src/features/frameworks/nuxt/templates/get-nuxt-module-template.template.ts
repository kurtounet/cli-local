// Template pour un module Nuxt
import { IEntityJson } from "@interfaces/entity-json.model";

export function getNuxtModuleTemplate(entity: IEntityJson) {
  return `// Nuxt Module for ${entity.namePascalCase}\n`;
}
