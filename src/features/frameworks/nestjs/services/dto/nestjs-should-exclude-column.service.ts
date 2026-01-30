import { IColumnJson } from "@parsersMdj/models/entity-json.model";

/**
 * Détermine si une colonne doit être exclue du DTO.
 */
export function nestjsShouldExcludeColumn(column: IColumnJson): boolean {
  const excludedColumns = ["id", "created_at", "updated_at"];
  return (
    column.primaryKey || excludedColumns.includes(column.name.toLowerCase())
  );
}
