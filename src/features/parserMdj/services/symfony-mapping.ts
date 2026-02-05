/**
 *
 * @param typeTypeScript
 */
export function getPhpType(typeTypeScript: string): string {
  const typeMapping: Record<string, string> = {
    string: "string",
    number: "int",
    Date: "\\DateTimeImmutable",
    boolean: "bool",
  };
  return typeMapping[typeTypeScript] || "mixed";
}

/**
 *
 * @param sqlType
 */
export function getDoctrineColumnType(sqlType: string): string {
  const lowerCaseSqlType = sqlType.toLowerCase();
  const typeMapping: Record<string, string> = {
    bigint: "bigint",
    varchar: "string",
    text: "text",
    timestamp: "datetime_immutable",
    datetime: "datetime_immutable",
    tinyint: "boolean",
    decimal: "decimal",
    int: "integer",
    float: "float",
    double: "float",
    date: "date_immutable",
    time: "time_immutable",
    boolean: "boolean",
    json: "json",
  };

  for (const key in typeMapping) {
    if (lowerCaseSqlType.includes(key)) {
      return typeMapping[key];
    }
  }
  return "string";
}
