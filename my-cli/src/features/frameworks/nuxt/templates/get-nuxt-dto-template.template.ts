// Template pour un DTO Nuxt
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function getNuxtDtoTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}?: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export class Create${entity.namePascalCase}Dto {\n${properties}\n}\n`;
}
