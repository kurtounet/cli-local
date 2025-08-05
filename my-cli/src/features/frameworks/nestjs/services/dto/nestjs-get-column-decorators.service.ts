import { IColumnJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { DtoType } from "../../constant/nestjs-constants.constant";
import { nestjsBuildApiPropertyDecorator } from "./nestjs-build-api-property-decorator.service";
import { nestjsGetValidationDecorators } from "./nestjs-get-validation-decorators.service";
import { nestjsGetTransformDecorators } from "./nestjs-get-transform-decorators.service";

/**
 * Génère les décorateurs pour une colonne de DTO.
 */
export function nestjsGetColumnDecorators(
  column: IColumnJson,
  dtoType: DtoType,
  validationImports: Set<string>,
  transformImports: Set<string>,
): string[] {
  const decorators: string[] = [];

  // ApiProperty pour Swagger
  decorators.push(nestjsBuildApiPropertyDecorator(column, dtoType));

  // Décorateurs de validation (pour Create et Update)
  if (dtoType === DtoType.CREATE || dtoType === DtoType.UPDATE) {
    decorators.push(
      ...nestjsGetValidationDecorators(column, dtoType, validationImports),
    );
  }

  // Décorateurs de transformation (pour Response)
  if (dtoType === DtoType.RESPONSE) {
    decorators.push(...nestjsGetTransformDecorators(column, transformImports));
  }

  return decorators;
}
