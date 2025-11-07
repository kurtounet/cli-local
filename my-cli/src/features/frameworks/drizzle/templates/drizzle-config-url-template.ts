import { IDatabase } from "@features/frameworks/models/database.model";
import { IProjectConfig } from "@features/frameworks/models/framework-commun.model";

const configDefault = `import 'dotenv/config'
import type { Config } from 'drizzle-kit'
export default {
  schema: './server/database/schemas.ts',
  out: './drizzle',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config`;

export function drizzleConfigUrlTemplate(
  configFile: IProjectConfig,
): string {
  if (!configFile.databases) {
    return configDefault;
  }
  const database: IDatabase = configFile.databases[0];
  const url = `mysql://${database.user}:${database.password}@${database.host}:${database.port}/${database.database}`;
  
  return `import 'dotenv/config'
import type { Config } from 'drizzle-kit'
export default {
  schema: './server/database/schemas.ts',
  out: './drizzle',
  dialect: '${database.type || 'mysql'}',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config`;
}
