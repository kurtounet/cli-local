// Template pour une interface Electron
import { IEntityJson } from "@interfaces/entity-json.model";

export function getElectronInterfaceTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export interface I${entity.namePascalCase} {\n${properties}\n}\n`;
}
