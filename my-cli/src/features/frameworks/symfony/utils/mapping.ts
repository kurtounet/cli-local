import { logInfo } from "@utils/logger";

export function sqlToTypeScript(sqlType: string): string {
  const mapping: Record<string, string> = {
    // Types numériques
    tinyint: "number",
    smallint: "number",
    mediumint: "number",
    int: "number",
    integer: "number",
    bigint: "number",
    decimal: "number",
    numeric: "number",
    float: "number",
    double: "number",
    real: "number",
    bit: "number",

    // Types chaînes de caractères
    char: "string",
    varchar: "string",
    text: "string",
    tinytext: "string",
    mediumtext: "string",
    longtext: "string",
    enum: "string",
    set: "string",

    // Types temporels
    date: "Date",
    datetime: "Date",
    timestamp: "Date",
    time: "string",
    year: "number",

    // Types binaires
    binary: "Uint8Array",
    varbinary: "Uint8Array",
    blob: "Uint8Array",
    tinyblob: "Uint8Array",
    mediumblob: "Uint8Array",
    longblob: "Uint8Array",

    // Types JSON
    json: "Record<string, any>",

    "array<string>": "string[]",
  };

  return mapping[sqlType.toLowerCase()] || "any";
}

export function sqlToDoctrineType(sqlType: string): string {
  const sqlToDoctrineMapping: Record<string, string> = {
    // Types numériques
    int: "integer",
    integer: "integer",
    smallint: "smallint",
    bigint: "bigint",
    decimal: "float",
    numeric: "float",
    float: "float",
    real: "float",
    double: "float",

    // Types booléens
    boolean: "boolean",
    tinyint: "boolean",
    bit: "boolean",

    // Types chaînes de caractères
    char: "string",
    varchar: "string",
    text: "text",
    tinytext: "text",
    mediumtext: "text",
    longtext: "text",

    // Types dates et heures
    date: "date",
    datetime: "datetime",
    timestamp: "datetime",
    time: "time",

    // Types JSON et tableau
    json: "json",
    jsonb: "json",
    array: "array",
    simple_array: "simple_array",

    // Types binaires
    blob: "blob",
    binary: "binary",

    // Autres types
    uuid: "guid",
  };
  return sqlToDoctrineMapping[sqlType.toLowerCase()] || "any";
}

export function symfonyGetAttributeTypeORM(
  typeProperty: string | undefined | null,
): string {
  // Debug logging - remove after fixing
  /*
  logInfo(`"symfonyGetPropertyType called with:", ${
    typeProperty,
    typeOf: typeof typeProperty,
  }`, );
*/
  // Handle undefined, null, or empty string cases
  if (!typeProperty || typeProperty === null || typeProperty === undefined) {
    console.warn("Type is undefined/null, defaulting to string");
    return "string";
  }
  const Mapping: Record<string, string> = {
    array: "JSON",
    ascii_string: "ASCII_STRING",
    bigint: "BIGINT",
    binary: "BINARY",
    blob: "BLOB",
    boolean: "BOOLEAN",
    tinyint: "BOOLEAN",
    date: "DATE_MUTABLE",
    date_immutable: "DATE_IMMUTABLE",
    dateinterval: "DATEINTERVAL",
    datetime: "DATETIME_MUTABLE",
    timestamp: "DATETIME_MUTABLE",
    datetime_immutable: "DATETIME_IMMUTABLE",
    datetimetz: "DATETIMETZ_MUTABLE",
    datetimetz_immutable: "DATETIMETZ_IMMUTABLE",
    decimal: "DECIMAL, precision: 10, scale: 0",
    float: "FLOAT",
    guid: "GUID",
    integer: "INTEGER",
    json: "JSON",
    object: "JSON",
    // simple_array: 'SIMPLE_ARRAY',
    smallint: "SMALLINT",
    string: "STRING",
    varchar: "STRING",
    // varchar: "length:",
    text: "TEXT",
    time: "TIME_MUTABLE",
    time_immutable: "TIME_IMMUTABLE",
  };
  // Safely convert to string and lowercase
  const normalizedType = String(typeProperty).toLowerCase();
  /*
  logInfo(
    "Normalized type:",
    normalizedType,
    "Mapped to:",
    Mapping[normalizedType] || "string",
  );
*/
  return Mapping[normalizedType] || "STRING";
}

export function symfonyGetPropertyType(
  typeProperty: string | undefined | null,
): string {
  // Debug logging - remove after fixing
  /*
  logInfo("symfonyGetPropertyType called with:", {
    typeProperty,
    typeOf: typeof typeProperty,
  });
*/
  // Handle undefined, null, or empty string cases
  if (!typeProperty || typeProperty === null || typeProperty === undefined) {
    console.warn("Type is undefined/null, defaulting to string");
    return "string";
  }

  const Mapping: Record<string, string> = {
    smallint: "int",
    int: "int",
    tinyint: "bool",
    bigint: "string",
    enum: "string",
    decimal: "string",
    float: "float",
    integer: "int",
    json: "array",
    ascii_string: "",
    binary: "",
    blob: "",
    boolean: "bool",
    uuid: "Uuid",
    guid: "string",
    object: "object",
    simple_array: "simple_array",
    string: "string",
    text: "string",
    time_mutable: `\\Datetime`,
    time_immutable: "\\DatetimeImmutable",
    date_mutable: "\\Datetime",
    date_immutable: "\\DateTimeImmutable",
    timestamp: "\\DateTimeImmutable",
    dateinterval: "\\Dateinterval",
    datetime_mutable: "\\Datetime",
    datetime_immutable: "\\Datetime_immutable",
    datetimetz_mutable: "\\DateTime",
    datetimetz_immutable: "\\DateTimeImmutable",
    dateInterval: "?\\DateInterval",
    varchar: "string",
  };
  // Safely convert to string and lowercase
  const normalizedType = String(typeProperty).toLowerCase();
  /*
  logInfo(
    "Normalized type:",
    normalizedType,
    "Mapped to:",
    Mapping[normalizedType] || "string",
  );
*/
  return Mapping[normalizedType] || "string";
}
