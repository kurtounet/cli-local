import { IColumnJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { nestjsGetTypeMappingEntity } from "./nestjs-get-type-mapping-entity-service";

/**
 * Construit les options de colonne pour le décorateur @Column.
 */
export function nestjsBuildColumnOptionsEntity(column: IColumnJson): string[] {
  const options: string[] = [];
  const typeSqlLower = column.typeSql.toLowerCase();

  // Mappage des types SQL vers les options TypeORM
  const typeMapping = nestjsGetTypeMappingEntity();

  if (typeMapping[typeSqlLower]) {
    options.push(`type: ${typeMapping[typeSqlLower]}`);
  }

  if (typeSqlLower === "varchar" && column.length) {
    options.push(`length: ${column.length}`);
  }

  if (column.nullable) {
    options.push("nullable: true");
  }

  if (column.unique) {
    options.push("unique: true");
  }

  return options;
}
