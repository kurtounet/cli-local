// Template pour un DTOreact

import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getReactDtoTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export interface ICreate${entity.namePascalCase}Dto {\n${properties}\n}\n`;
}
