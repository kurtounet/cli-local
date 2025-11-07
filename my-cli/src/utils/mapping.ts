import { boolean } from "zod";

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

export function sqlToZodType(sqlType: string): string {
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

    boolean: "boolean",

    // Types JSON
    json: "Record<string, any>",

    "array<string>": "string[]",
  };

  return mapping[sqlType.toLowerCase()] || "any";
}
