// Template pour un service Nuxt
import { IEntityJson } from "@interfaces/entity-json.model";

export function getNuxtServiceTemplate(entity: IEntityJson) {
  return "// Nuxt Service for ${entity.namePascalCase}\n";
}
