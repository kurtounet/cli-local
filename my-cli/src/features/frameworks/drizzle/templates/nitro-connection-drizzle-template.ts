import { IFramework, IProjectConfig } from "@frameworks-models/framework-commun.model";

export function nitroConnectionDrizzleTemplate(  
  configFile: IProjectConfig
): string {
  if(!configFile.databases) return '';
  return `// server/utils/db.ts
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';  
import * as schema from '../database/schemas';

const pool = mysql.createPool({
    host: process.env.DB_HOST || '${configFile.databases[0].host}',
    port: parseInt(process.env.DB_PORT || '${configFile.databases[0].port}'),
    user: process.env.DB_USER || '${configFile.databases[0].user}',
    database: process.env.DB_NAME || '${configFile.databases[0].database}',
    // Options du pool
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const db = drizzle(pool, { schema, mode: 'default' });`;
}
