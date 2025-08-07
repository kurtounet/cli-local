import { IFramework } from "@frameworks-models/framework-commun.model";

export function nitroDrizzleConfigTemplate(framework: IFramework): string {
  return ` import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql", // "mysql" | "sqlite" | "postgresql" | "turso" | "singlestore"
  schema: "./server/database/schemas/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(process.env.DB_PORT || '3306'),
    user: process.env.DB_USER || 'root',
    // password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'gestion_projet_nuxt'  
  }
});`;
}
