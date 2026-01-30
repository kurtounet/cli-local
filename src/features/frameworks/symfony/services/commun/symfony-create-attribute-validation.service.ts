import { symfonyGetAttributeTypeORM } from "../../utils/mapping";

export function symfonyCreateAttributeValidation(
  propName: string,
  type: string,
  length: string | null,
) {
  const exclude = [
    "int",
    "integer",
    "float",
    "boolean",
    "tinyint",
    "datetime",
    "dateinterval",
    "datetime_immutable",
    "array",
  ];
  let typeConstraint = "";

  if (!exclude.includes(typeConstraint)) {
    if (["varchar", "char"].includes(typeConstraint) && length) {
      type = `Length: ${length})`;
    } else if (["enum"].includes(typeConstraint)) {
      type = `(type: Types::STRING, enumType: Status::class)`;
    } else if (["json"].includes(typeConstraint)) {
      type = `(type: Types::JSON)`;
    } else {
      type = `(type: Types::${symfonyGetAttributeTypeORM(typeConstraint)})`;
    }
  }

  return `    #[Assets\\${type}]`;
}
