import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { snakeToCamel } from "@utils/convert";

export function modelEntityTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${snakeToCamel(col.name)}: ${col.typeTypeScript},`)
      .join("\n") || "";

  return `
export interface I${entity.namePascalCase}{
    ${properties}
}
`;
}
