import {
  TRANSFORM_DECORATORS,
  VALIDATION_DECORATORS,
} from "../../constant/nestjs-constants.constant";

/**
 * Génère les décorateurs pour une relation de DTO.
 */
export function nestjsGetRelationDecorators(
  targetPascal: string,
  isArray: boolean,
  validationImports: Set<string>,
  transformImports: Set<string>,
): string[] {
  const decorators: string[] = [];

  // ApiProperty pour Swagger
  const apiPropertyOptions = [`type: () => Response${targetPascal}Dto`];
  if (isArray) {
    apiPropertyOptions.push("isArray: true");
  }
  decorators.push(
    `@ApiProperty({ ${apiPropertyOptions.join(", ")}, required: false })`,
  );

  // Décorateurs de validation et transformation
  validationImports.add(VALIDATION_DECORATORS.IS_OPTIONAL);
  transformImports.add(TRANSFORM_DECORATORS.TYPE);

  decorators.push("@IsOptional()");
  decorators.push(`@Type(() => Response${targetPascal}Dto)`);

  if (isArray) {
    validationImports.add(VALIDATION_DECORATORS.IS_ARRAY);
    validationImports.add(VALIDATION_DECORATORS.VALIDATE_NESTED);
    decorators.push("@IsArray()");
    decorators.push("@ValidateNested({ each: true })");
  } else {
    validationImports.add(VALIDATION_DECORATORS.VALIDATE_NESTED);
    decorators.push("@ValidateNested()");
  }

  return decorators;
}
