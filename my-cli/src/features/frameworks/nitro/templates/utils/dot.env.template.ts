import { IProjectConfig } from "@features/project/models/project.models";

export function dotEnvTemplate(
  projectPath: string,
  configFile: IProjectConfig,
) {
  if (!configFile.databases) {
    return "";
  }
  const databaseUrl = `${configFile.databases[0].type}://${configFile.databases[0].user}:@${configFile.databases[0].host}:${configFile.databases[0].port}/${configFile.databases[0].database}`;
  return `DATABASE_URL=${databaseUrl}
  DB_HOST=${configFile.databases[0].host}
  DB_PORT=${configFile.databases[0].port}
  DB_USER=${configFile.databases[0].user}
  DB_PASSWORD=${configFile.databases[0].password}
  DB_NAME=${configFile.databases[0].database}
  `;
}
