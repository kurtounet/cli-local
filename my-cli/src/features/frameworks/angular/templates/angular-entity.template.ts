// Template pour une entité Angular
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates an Angular entity template.
 * @param entity The entity JSON object.
 * @returns The Angular entity template string.
 */
export function angularEntityTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export class ${entity.namePascalCase} {\n${properties}\n}\n`;
}
