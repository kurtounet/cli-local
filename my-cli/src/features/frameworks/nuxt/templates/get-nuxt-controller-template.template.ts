// Template pour un contrôleur Nuxt
import { IEntityJson } from "@interfaces/entity-json.model";

export function getNuxtControllerTemplate(entity: IEntityJson) {
  return `// Nuxt Controller for ${entity.namePascalCase}\n`;
}
