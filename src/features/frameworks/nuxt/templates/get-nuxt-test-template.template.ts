// Template pour un test Nuxt
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getNuxtTestTemplate(entity: IEntityJson) {
  return `// Nuxt Test for ${entity.namePascalCase}\n`;
}
