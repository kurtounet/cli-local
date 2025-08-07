import { IColumnJson } from "@parsersMdj/models/entity-json.model";
import { VALIDATION_DECORATORS } from "../../constant/nestjs-constants.constant";

/**
 * Génère les décorateurs de validation basés sur le type.
 */
export function nestjsGetTypeValidationDecorators(
  column: IColumnJson,
  validationImports: Set<string>,
): string[] {
  const decorators: string[] = [];
  const tsType = column.typeTypeScript.toLowerCase();

  switch (tsType) {
    case "string":
      validationImports.add(VALIDATION_DECORATORS.IS_STRING);
      decorators.push("@IsString()");

      if (column.length) {
        validationImports.add(VALIDATION_DECORATORS.MAX_LENGTH);
        decorators.push(`@MaxLength(${column.length})`);
      }

      // Validation spéciale pour les emails
      if (column.name.toLowerCase().includes("email")) {
        validationImports.add(VALIDATION_DECORATORS.IS_EMAIL);
        decorators.push("@IsEmail()");
      }

      // Validation spéciale pour les UUIDs
      if (
        column.name.toLowerCase().includes("id") &&
        column.typeSql.toLowerCase().includes("uuid")
      ) {
        validationImports.add(VALIDATION_DECORATORS.IS_UUID);
        decorators.push("@IsUUID()");
      }
      break;

    case "number":
      validationImports.add(VALIDATION_DECORATORS.IS_NUMBER);
      decorators.push("@IsNumber()");
      break;

    case "boolean":
      validationImports.add(VALIDATION_DECORATORS.IS_BOOLEAN);
      decorators.push("@IsBoolean()");
      break;

    case "date":
      validationImports.add(VALIDATION_DECORATORS.IS_DATE);
      decorators.push("@IsDate()");
      break;

    default:
      if (tsType.includes("[]")) {
        validationImports.add(VALIDATION_DECORATORS.IS_ARRAY);
        decorators.push("@IsArray()");
      }
  }

  return decorators;
}
