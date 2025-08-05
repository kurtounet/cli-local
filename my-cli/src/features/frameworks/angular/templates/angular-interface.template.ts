// Template pour une interface Angular
import { IEntityJson } from "@interfaces/entity-json.model";

/**
 * Generates an Angular interface template.
 * @param entity The entity JSON object.
 * @returns The Angular interface template string.
 */
export function angularInterfaceTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
}
