// Template pour une entité Nuxt
import { IEntityJson } from "@interfaces/entity-json.model";

export function getNuxtEntityTemplate(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map((col: any) => `  ${col.name}: ${col.typeTypeScript};`)
      .join("\n") || "";
  return `export class ${entity.namePascalCase} {\n${properties}\n}\n`;
}
