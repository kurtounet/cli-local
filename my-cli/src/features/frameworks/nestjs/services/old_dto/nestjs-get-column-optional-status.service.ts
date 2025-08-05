import { IColumnJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { DtoType } from "../../constant/nestjs-constants.constant";

/**
 * Détermine si une colonne est optionnelle selon le type de DTO.
 */
export function nestjsGetColumnOptionalStatus(
  column: IColumnJson,
  dtoType: DtoType,
): boolean {
  if (dtoType === DtoType.UPDATE) {
    return true; // Tous les champs sont optionnels dans les DTOs de mise à jour
  }

  if (dtoType === DtoType.RESPONSE) {
    return column.nullable;
  }

  return column.nullable || column.primaryKey;
}
