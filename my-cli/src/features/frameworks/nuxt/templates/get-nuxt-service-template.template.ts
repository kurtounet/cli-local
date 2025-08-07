// Template pour un service Nuxt
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getNuxtServiceTemplate(entity: IEntityJson) {
  return "// Nuxt Service for ${entity.namePascalCase}\n";
}
