import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function drizzleSchemaTemplate(entity: IEntityJson) {
  return `
export const ${entity.nameCamelCase} = mysqlTable('${entity.tableName}', {
  id: int().autoincrement().primaryKey().notNull(),
});`;
}
