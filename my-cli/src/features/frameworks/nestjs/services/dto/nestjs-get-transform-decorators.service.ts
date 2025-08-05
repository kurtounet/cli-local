import { IColumnJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { TRANSFORM_DECORATORS } from "../../constant/nestjs-constants.constant";

/**
 * Génère les décorateurs de transformation pour les DTOs de réponse.
 */
export function nestjsGetTransformDecorators(
  column: IColumnJson,
  transformImports: Set<string>,
): string[] {
  const decorators: string[] = [];

  // Exclure les champs sensibles
  if (column.name.toLowerCase().includes("password")) {
    transformImports.add(TRANSFORM_DECORATORS.EXCLUDE);
    decorators.push("@Exclude()");
    return decorators;
  }

  // Transformation pour les dates
  if (column.typeTypeScript.toLowerCase() === "date") {
    transformImports.add(TRANSFORM_DECORATORS.TRANSFORM);
    decorators.push("@Transform(transformToISOString)");
  }

  return decorators;
}
