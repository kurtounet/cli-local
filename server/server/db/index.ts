import 'dotenv/config';
import { createPool } from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import * as schema from './schema';

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) throw new Error('DATABASE_URL manquant');

export const pool = createPool({
  uri: DATABASE_URL,
  connectionLimit: 50,
  waitForConnections: true,
  queueLimit: 0,                // pas de limite (ou mets une valeur)
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

export const db = drizzle(pool, { schema, mode: 'default' });
export type DB = typeof db;