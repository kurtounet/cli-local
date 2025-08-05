// Template pour un DTO Electron
import { IEntityJson } from "@interfaces/entity-json.model";

export function getElectronDtoTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export class Create${entity.namePascalCase}Dto {\n${properties}\n}\n`;
}
