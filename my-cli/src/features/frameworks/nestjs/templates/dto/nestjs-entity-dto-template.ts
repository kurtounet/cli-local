import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";

export function nestjsEntityDtoTemplate(entity: IEntityJson): string {
  console.log("Dto", entity.namePascalCase);
  return `export class Create${entity.namePascalCase}Dto {}`;
}
