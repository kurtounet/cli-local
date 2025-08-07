// Template pour un DTO Vue.js
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getVueDtoTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export interface ICreate${entity.namePascalCase}Dto {\n${properties}\n}\n`;
}
