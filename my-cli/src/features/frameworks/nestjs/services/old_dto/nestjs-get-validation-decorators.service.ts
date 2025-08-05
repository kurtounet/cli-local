import { IColumnJson } from "@features/parsersMdj/interfaces/entity-json.model";
import {
  DtoType,
  VALIDATION_DECORATORS,
} from "../../constant/nestjs-constants.constant";
import { nestjsGetTypeValidationDecorators } from "./nestjs-get-type-validation-decorators.service";

/**
 * Génère les décorateurs de validation.
 */
export function nestjsGetValidationDecorators(
  column: IColumnJson,
  dtoType: DtoType,
  validationImports: Set<string>,
): string[] {
  const decorators: string[] = [];

  // Si optionnel, ajouter @IsOptional
  if (column.nullable || dtoType === DtoType.UPDATE) {
    validationImports.add(VALIDATION_DECORATORS.IS_OPTIONAL);
    decorators.push("@IsOptional()");
  }

  // Si requis, ajouter @IsNotEmpty
  if (!column.nullable && dtoType === DtoType.CREATE) {
    validationImports.add(VALIDATION_DECORATORS.IS_NOT_EMPTY);
    decorators.push("@IsNotEmpty()");
  }

  // Décorateurs basés sur le type
  decorators.push(
    ...nestjsGetTypeValidationDecorators(column, validationImports),
  );

  return decorators;
}
