import { IFramework } from "@frameworks-models/framework-commun.model";

export function nitroConnectionDrizzleTemplate(framework: IFramework) {
  
  return `// server/utils/db.ts
import { drizzle } from 'drizzle-orm/mysql2';
// Utilisez la version "promise" de mysql2
import mysql from 'mysql2/promise'; 
// Assurez-vous d'avoir défini votre schéma Drizzle
import * as schema from '~~/server/database/schemas/schema'; 

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
