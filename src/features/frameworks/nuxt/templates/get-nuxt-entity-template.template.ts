// Template pour une entité Nuxt
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 *
 * @param entity
 */
export function getNuxtEntityTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export class ${entity.namePascalCase} {\n${properties}\n}\n`;
}
