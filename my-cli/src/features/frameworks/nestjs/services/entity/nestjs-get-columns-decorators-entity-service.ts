import { IColumnJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { ColumnDecoratorsResult } from "../../interfaces/nestjs-column-decorators-result.model";
import { nestjsGetColumnDecoratorEntity } from "./nestjs-get-column-decorator-entity-service";

/**
 * Génère les décorateurs pour une colonne de base de données donnée.
 * @param column - La représentation JSON de la colonne.
 * @returns Un objet avec les chaînes de décorateurs et les imports TypeORM requis.
 */
export function nestjsGetColumnsDecoratorsEntity(
  column: IColumnJson,
): ColumnDecoratorsResult {
  const decorators: string[] = [];
  const typeormImports = new Set<string>();

  // Décorateur API Property
  decorators.push("@ApiProperty()");

  if (column.primaryKey) {
    decorators.push("@PrimaryGeneratedColumn()");
    return { decorators, typeormImports };
  }

  const { decorator, imports } = nestjsGetColumnDecoratorEntity(column);
  decorators.push(decorator);
  imports.forEach((imp) => typeormImports.add(imp));

  return { decorators, typeormImports };
}

function nestjGetColumnDecoratorEntity(column: IColumnJson): {
  decorator: any;
  imports: any;
} {
  throw new Error("Function not implemented.");
}
