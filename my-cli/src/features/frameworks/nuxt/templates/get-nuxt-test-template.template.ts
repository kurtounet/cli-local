// Template pour un test Nuxt
import { IEntityJson } from "@interfaces/entity-json.model";

export function getNuxtTestTemplate(entity: IEntityJson) {
  return `// Nuxt Test for ${entity.namePascalCase}\n`;
}
