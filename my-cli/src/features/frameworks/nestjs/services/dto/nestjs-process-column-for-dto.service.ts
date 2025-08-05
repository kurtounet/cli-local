import { IColumnJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { DtoType } from "../../constant/nestjs-constants.constant";
import { DtoProperty } from "../../interfaces/nestjs-dto-property.model";
import { nestjsShouldExcludeColumn } from "./nestjs-should-exclude-column.service";
import { nestjsGetColumnDecorators } from "./nestjs-get-column-decorators.service";
import { nestjsGetColumnOptionalStatus } from "./nestjs-get-column-optional-status.service";
import { nestjsGenerateColumnDescription } from "./nestjs-generate-column-description.service";

/**
 * Traite une colonne pour un DTO spécifique.
 */
export function nestjsProcessColumnForDto(
  column: IColumnJson,
  dtoType: DtoType,
  validationImports: Set<string>,
  transformImports: Set<string>,
): DtoProperty | null {
  // Exclure les colonnes auto-générées des DTOs de création/mise à jour
  if (
    (dtoType === DtoType.CREATE || dtoType === DtoType.UPDATE) &&
    nestjsShouldExcludeColumn(column)
  ) {
    return null;
  }

  const decorators = nestjsGetColumnDecorators(
    column,
    dtoType,
    validationImports,
    transformImports,
  );
  const isOptional = nestjsGetColumnOptionalStatus(column, dtoType);

  return {
    name: column.name,
    isOptional,
    tsType: column.typeTypeScript,
    decorators,
    description: nestjsGenerateColumnDescription(column),
  };
}
