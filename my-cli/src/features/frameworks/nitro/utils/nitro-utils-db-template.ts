export function nitroUtilsDbTemplate(): string {
  return `// server/utils/db.ts
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise'; // Utilisez la version "promise" de mysql2
import * as schema from '~~/server/database/schemas/schema'; // Assurez-vous d'avoir défini votre schéma Drizzle

const pool = mysql.createPool({
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'root',
    database: process.env.DB_NAME || 'gestion_projet_nuxt',
    // Options du pool
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export const db = drizzle(pool, { schema, mode: 'default' });`;
}
/*
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';

const sqlite = new Database('sqlite.db');
export const db = drizzle(sqlite, { schema });


*/
