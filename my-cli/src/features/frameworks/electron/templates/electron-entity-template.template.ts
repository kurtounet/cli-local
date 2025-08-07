// Template pour une entité Electron
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getElectronEntityTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export class ${entity.namePascalCase} {\n${properties}\n}\n`;
}
