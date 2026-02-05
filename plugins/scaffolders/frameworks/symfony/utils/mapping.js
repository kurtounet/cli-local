const typeMapping = {
  // String types
  varchar: { doctrine: "string", php: "string" },
  text: { doctrine: "text", php: "string" },
  string: { doctrine: "string", php: "string" },
  guid: { doctrine: "guid", php: "string" },
  // Numeric types
  int: { doctrine: "integer", php: "int" },
  integer: { doctrine: "integer", php: "int" },
  smallint: { doctrine: "smallint", php: "int" },
  bigint: { doctrine: "bigint", php: "string" }, // Bigint is handled as a string in PHP to avoid overflow
  decimal: { doctrine: "decimal", php: "string" },
  float: { doctrine: "float", php: "float" },
  // Date and time types
  datetime: { doctrine: "datetime", php: "\DateTimeInterface" },
  date: { doctrine: "date", php: "\DateTimeInterface" },
  time: { doctrine: "time", php: "\DateTimeInterface" },
  datetimetz: { doctrine: "datetimetz", php: "\DateTimeInterface" },
  datetime_immutable: {
    doctrine: "datetime_immutable",
    php: "\DateTimeImmutable",
  },
  date_immutable: { doctrine: "date_immutable", php: "\DateTimeImmutable" },
  time_immutable: { doctrine: "time_immutable", php: "\DateTimeImmutable" },
  datetimetz_immutable: {
    doctrine: "datetimetz_immutable",
    php: "\DateTimeImmutable",
  },
  // Boolean type
  bool: { doctrine: "boolean", php: "bool" },
  boolean: { doctrine: "boolean", php: "bool" },
  // JSON type
  json: { doctrine: "json", php: "array" },
  // Binary types
  binary: { doctrine: "binary", php: "resource" },
  blob: { doctrine: "blob", php: "resource" },
};

export function symfonyGetAttributeTypeORM(sqlType) {
  const key = sqlType.toLowerCase().split("(")[0];
  return typeMapping[key]?.doctrine || "string";
}

export function symfonyGetPropertyType(sqlType) {
  const key = sqlType.toLowerCase().split("(")[0];
  return typeMapping[key]?.php || "string";
}
