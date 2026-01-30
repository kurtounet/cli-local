import { IColumnJson } from "@parsersMdj/models/entity-json.model";

/**
 * Génère une description pour la colonne.
 */
export function nestjsGenerateColumnDescription(column: IColumnJson): string {
  const baseDescription = `Champ ${column.name}`;
  const typeInfo = ` (${column.typeSql})`;
  const nullableInfo = column.nullable ? " - Optionnel" : " - Obligatoire";

  return baseDescription + typeInfo + nullableInfo;
}
