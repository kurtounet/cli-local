import { symfonyGetAttributeTypeORM } from "../../utils/mapping";

export function symfonyCreateAttributeORM(
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
  let typeORM = "";

  if (!exclude.includes(type)) {
    if (["varchar", "char"].includes(type) && length) {
      typeORM = `(length: ${length})`;
    } else if (["enum"].includes(type)) {
      typeORM = `(type: Types::STRING, enumType: Status::class)`;
    } else if (["json"].includes(type)) {
      typeORM = `(type: Types::JSON)`;
    } else {
      typeORM = `(type: Types::${symfonyGetAttributeTypeORM(type)})`;
    }
  }

  return `    #[ORM\\Column${typeORM}]`;
}
