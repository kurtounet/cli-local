// Template pour une entitéreact
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getReactEntityTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
}
