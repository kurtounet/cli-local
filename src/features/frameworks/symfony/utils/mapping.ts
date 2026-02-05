import { logInfo } from "@utils/logger";

import { TPropertyDetail } from "../types/api-platform-doc-json-ld.type";

/**
 *
 * @param sqlType
 */
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
    time: "time",
    datetime: "datetime",
    timestamp: "datetime",

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

/**
 *
 * @param typeProperty
 */
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

/**
 *
 * @param typeProperty
 */
export function symfonyGetPropertyType(
  typeProperty: string | undefined | null,
): string {
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
    datetime: "\\DateTimeInterface",
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

export const getPropertyName = (prop: TPropertyDetail) =>
  prop.label || prop["rdfs:label"] || "unknown";

export const TYPE_MAPPING: Record<string, string> = {
  // Types de base XMLSchema
  "xmls:string": "string",
  "xmls:integer": "number",
  "xmls:int": "number",
  "xmls:float": "number",
  "xmls:double": "number",
  "xmls:decimal": "number",
  "xmls:boolean": "boolean",
  "xmls:dateTime": "Date", // Ou string si tu préfères manipuler des ISO-strings
  "xmls:date": "Date",

  // Types spécifiques rencontrés dans les API JSON-LD/Hydra
  "owl:Thing": "any",
  "rdf:langString": "string",
  "xmls:anyURI": "string",
};
/**
 *
 * @param range
 */
export function getTypeFromRange(range: string | string[]): string {
  if (Array.isArray(range)) {
    // Si c'est un tableau, on prend le premier type comme référence
    range = range[0];
  }

  // Vérifie si le type est dans le mapping connu
  if (TYPE_MAPPING[range]) {
    return TYPE_MAPPING[range];
  }

  // Si le type commence par un préfixe connu, on peut l'extraire
  const knownPrefixes = ["xmls:", "owl:", "rdf:"];
  for (const prefix of knownPrefixes) {
    if (range.startsWith(prefix)) {
      return TYPE_MAPPING[prefix + "string"] || "any"; // Par défaut, retourne 'any' si non trouvé
    }
  }

  // Si le type n'est pas reconnu, retourne 'any' par défaut
  return "any";
}
/**
 *
 * @param range
 */
export function resolveTypeScriptType(range: string | string[]): string {
  // 1. Si range est un tableau, on traite le premier ou on fait une union
  const typeValue = Array.isArray(range) ? range[0] : range;

  if (!typeValue) return "any";

  // 2. Si c'est une référence à une autre classe locale (commence par #)
  if (typeValue.startsWith("#")) {
    return typeValue.substring(1); // Enlève le '#' pour avoir le nom de l'interface
  }

  // 3. Si c'est un type primitif connu dans notre dictionnaire
  if (TYPE_MAPPING[typeValue]) {
    return TYPE_MAPPING[typeValue];
  }

  // 4. Valeur par défaut
  return "any";
}
export const METHOD_BEHAVIOR = {
  GET: { suffix: "get", hasBody: false },
  POST: { suffix: "create", hasBody: true },
  PUT: { suffix: "update", hasBody: true },
  PATCH: { suffix: "patch", hasBody: true },
  DELETE: { suffix: "delete", hasBody: false },
};
export const HEADER_MAPPING: Record<string, string> = {
  "application/ld+json": "application/ld+json",
  "application/merge-patch+json": "application/merge-patch+json",
  "application/json": "application/json",
};
