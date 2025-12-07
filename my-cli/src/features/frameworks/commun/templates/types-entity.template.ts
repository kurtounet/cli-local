import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function typesTemplate(entity: IEntityJson) {
  return `
// Types pour l'entité ${entity.namePascalCase}

export type ${entity.namePascalCase} = InferSelectModel<typeof ${entity.nameCamelCase}>;
export type ${entity.namePascalCase}Insert = InferInsertModel<typeof ${entity.nameCamelCase}>;
/*
export type ${entity.namePascalCase} = typeof schemas.${entity.nameCamelCase}.$inferSelect;
export type ${entity.namePascalCase}Insert = typeof schemas.${entity.nameCamelCase}.$inferInsert;
export type ${entity.namePascalCase}Update = Partial<${entity.namePascalCase}Insert>;
*/

`;
}
