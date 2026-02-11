// Template pour un service Vue.js
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function getVueServiceTemplate(entity: IEntityJson) {
  return `// Service Vue.js pour ${entity.namePascalCase}\n`;
}
