import { TYPEORM_COLUMN_TYPES } from "../../constant/nestjs-constants.constant";

/**
 * Retourne le mappage des types SQL vers les types TypeORM.
 */
export function nestjsGetTypeMappingEntity(): Record<string, string> {
  return {
    varchar: TYPEORM_COLUMN_TYPES.VARCHAR,
    text: TYPEORM_COLUMN_TYPES.TEXT,
    longtext: TYPEORM_COLUMN_TYPES.LONGTEXT,
    int: TYPEORM_COLUMN_TYPES.INT,
    integer: TYPEORM_COLUMN_TYPES.INTEGER,
    smallint: TYPEORM_COLUMN_TYPES.SMALLINT,
    bigint: TYPEORM_COLUMN_TYPES.BIGINT,
    decimal: TYPEORM_COLUMN_TYPES.DECIMAL,
    float: TYPEORM_COLUMN_TYPES.FLOAT,
    double: TYPEORM_COLUMN_TYPES.DOUBLE,
    boolean: TYPEORM_COLUMN_TYPES.BOOLEAN,
    datetime: TYPEORM_COLUMN_TYPES.DATETIME,
    timestamp: TYPEORM_COLUMN_TYPES.TIMESTAMP,
    "array<string>": TYPEORM_COLUMN_TYPES.ARRAY_STRING,
    json: TYPEORM_COLUMN_TYPES.JSON,
  };
}
