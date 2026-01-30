import { writeFile } from "@utils/file-utils";
import { logSuccess } from "@utils/logger";

export function drizzleGenerateSchemaService(
  rootServerApi: string,
  schemas: string,
) {
  writeFile(
    `${rootServerApi}/database/schemas.ts`,
    `import {
  mysqlTable,
  tinyint,
  primaryKey,
  int,
  varchar,
  mysqlEnum,
  decimal,
  datetime,
  json,
  text,
  foreignKey,
  timestamp,
} from 'drizzle-orm/mysql-core'
import { sql } from 'drizzle-orm'

${schemas}`,
  );
  logSuccess(`Génération des schemas pour drizzle`);
}
