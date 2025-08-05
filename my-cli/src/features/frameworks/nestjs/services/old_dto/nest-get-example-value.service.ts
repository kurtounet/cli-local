import { IColumnJson } from "@features/parsersMdj/interfaces/entity-json.model";

/**
 * Génère une valeur d'exemple pour la documentation Swagger.
 */
export function nestjsGetExampleValue(column: IColumnJson): string {
  const tsType = column.typeTypeScript.toLowerCase();

  switch (tsType) {
    case "string":
      if (column.name.toLowerCase().includes("email"))
        return "'user@example.com'";
      if (column.name.toLowerCase().includes("name")) return "'John Doe'";
      if (column.name.toLowerCase().includes("phone")) return "'+33123456789'";
      return "'example text'";
    case "number":
      return "123";
    case "boolean":
      return "true";
    case "date":
      return "'2023-01-01T00:00:00.000Z'";
    default:
      return "null";
  }
}
