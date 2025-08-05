import { IColumnJson } from "@features/parsersMdj/interfaces/entity-json.model";
import {
  SPECIAL_COLUMN_NAMES,
  TYPEORM_DECORATORS,
} from "../../constant/nestjs-constants.constant";
import { nestjsBuildColumnOptionsEntity } from "./nestjs-build-column-options-entity-service";

/**
 * Détermine le décorateur de colonne approprié.
 */
export function nestjsGetColumnDecoratorEntity(column: IColumnJson): {
  decorator: string;
  imports: string[];
} {
  const imports: string[] = [];
  const columnName = column.name.toLowerCase();

  if (columnName.includes(SPECIAL_COLUMN_NAMES.CREATED_AT)) {
    imports.push(TYPEORM_DECORATORS.CREATE_DATE_COLUMN);
    return { decorator: "@CreateDateColumn()", imports };
  }

  if (columnName.includes(SPECIAL_COLUMN_NAMES.UPDATED_AT)) {
    imports.push(TYPEORM_DECORATORS.UPDATE_DATE_COLUMN);
    return { decorator: "@UpdateDateColumn()", imports };
  }

  imports.push(TYPEORM_DECORATORS.COLUMN);
  const columnOptions = nestjsBuildColumnOptionsEntity(column);
  const optionsString =
    columnOptions.length > 0 ? `{ ${columnOptions.join(", ")} }` : "";

  return { decorator: `@Column(${optionsString})`, imports };
}
