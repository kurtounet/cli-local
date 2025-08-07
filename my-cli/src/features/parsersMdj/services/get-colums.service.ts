import { sqlToTypeScript } from "@utils/mapping";
import type { IColumnJson } from "../models/entity-json.model";
import type { IERDColumn, IERDEntity } from "../models/mdj.model";

export function getColumns(entity: IERDEntity) {
  if (!Array.isArray(entity.columns)) {
    console.log(`⏩ ${entity.name} n'a pas de colonnes. Ignoré.`);
    return [];
  }

  let columnsJson: Array<IColumnJson> = [];

  entity.columns.forEach((column: IERDColumn) => {
    columnsJson.push({
      id: column._id,
      name: column.name,
      typeSql: column.type.toLowerCase(),
      typeTypeScript: sqlToTypeScript(column.type),
      typeDoctrine: sqlToTypeScript(column.type),
      parent: column._parent.$ref,
      primaryKey: Boolean(column.primaryKey),
      foreignKey: Boolean(column.foreignKey),
      length: column.length ? column.length : null,
      unique: Boolean(column.unique),
      nullable: Boolean(column.nullable),
      documentation: column.documentation,
      referenceTo: column.referenceTo ? column.referenceTo.$ref : "",
    });
  });

  return columnsJson;
}
