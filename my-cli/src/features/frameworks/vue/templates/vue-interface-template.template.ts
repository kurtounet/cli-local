// Template pour une interface Vue.js
import { IEntityJson } from "@interfaces/entity-json.model";

export function getVueInterfaceTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
}
