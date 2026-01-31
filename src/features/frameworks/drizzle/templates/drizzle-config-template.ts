import { IDatabase } from "@features/frameworks/models/database.model";
import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";

export function drizzleConfigTemplate(configFile: IProjectConfig): string {
  if (!configFile.databases) {
    return "";
  }
  const database: IDatabase = configFile.databases[0];
  return ` import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "mysql", // "mysql" | "sqlite" | "postgresql" | "turso" | "singlestore"
  schema: "./server/database/schemas/*",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DB_HOST || '${database.host}',
    port: parseInt(process.env.DB_PORT || '${database.port}'),
    user: process.env.DB_USER || '${database.user}',
    // password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '${database.database}',  
  }
});`;
}
