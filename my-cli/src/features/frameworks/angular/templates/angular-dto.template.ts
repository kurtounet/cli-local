// Template pour un DTO Angular
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates an Angular DTO template.
 * @param entity The entity JSON object.
 * @returns The Angular DTO template string.
 */
export function angularDtoTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export class Create${entity.namePascalCase}Dto {\n${properties}\n}\n`;
}
