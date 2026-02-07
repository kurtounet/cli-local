// Template pour une entité Vue.js
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function getVueEntityTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
}
