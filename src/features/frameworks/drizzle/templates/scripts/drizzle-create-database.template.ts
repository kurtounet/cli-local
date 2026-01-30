import { IProjectConfig } from "@features/frameworks/models/framework-commun.model";

export function drizzleScriptCreateDatabaseTemplate(
  configFile: IProjectConfig,
) {
  return `import mysql from "mysql2/promise";
import "dotenv/config";

export async function logError(e: any) {
  console.error(e);
  process.exit(1);
}
async function main() {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
  });
  await conn.execute(\`CREATE DATABASE IF NOT EXISTS \\\`\${process.env.DB_NAME}\\\`\`);
  await conn.end();
  console.log("Base creee (ou deja existante).");
}
main().catch(logError);
`;
}
