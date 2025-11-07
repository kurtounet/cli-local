import { symfonyEnvDatabaseUrlTemplate } from "./symfony-env-database-url.template";
import { symfonyEnvLexikJwtAuthenticationTemplate } from "./bundles/symfony-env-lexik-jwt-authentication.template";
import { symfonyEnvNelmioTemplate } from "./bundles/symfony-env-nelmio.template";
import { symfonyEnvMailerTemplate } from "./bundles/symfony-env-mailer.template";
import { IDatabase } from "@frameworks-models/database.model";
import { IProjectConfig } from "@features/frameworks/models/framework-commun.model";

export function SymfonyDotEnv(configFile: IProjectConfig) {
  const db = getDatabase(configFile);
  if (!db) {
    throw new Error("No database configuration found in configFile");
  }
  return `
###> symfony/framework-bundle ###
APP_ENV=prod
App_DEBUG=0
APP_SECRET=APP_SECRET
###< symfony/framework-bundle ###

${symfonyEnvDatabaseUrlTemplate(db)}
${symfonyEnvNelmioTemplate()}
${symfonyEnvLexikJwtAuthenticationTemplate()}
${symfonyEnvMailerTemplate()} 
`;
}
export function SymfonyDotEnvLocal(configFile: IProjectConfig) {
  const db = getDatabase(configFile);
  if (!db) {
    throw new Error("No database configuration found in configFile");
  }
  return `
###> symfony/framework-bundle ###
APP_ENV=dev
App_DEBUG=1
APP_SECRET=APP_SECRET
###< symfony/framework-bundle ###

${symfonyEnvDatabaseUrlTemplate(db)}
${symfonyEnvNelmioTemplate()}
${symfonyEnvLexikJwtAuthenticationTemplate()}
${symfonyEnvMailerTemplate()} 
`;
}
export function SymfonyDotEnvTest(configFile: IProjectConfig) {
  const db = getDatabase(configFile);
  if (!db) {
    throw new Error("No database configuration found in configFile");
  }
  return `
###> symfony/framework-bundle ###
APP_ENV=test
App_DEBUG=1
APP_SECRET=APP_SECRET
###< symfony/framework-bundle ###

${symfonyEnvDatabaseUrlTemplate(db)}
${symfonyEnvNelmioTemplate()}
${symfonyEnvLexikJwtAuthenticationTemplate()}
${symfonyEnvMailerTemplate()} 
`;
}
function getDatabase(configFile: IProjectConfig): IDatabase | undefined {
  if (configFile.databases && configFile.databases.length > 0) {
    return configFile.databases[0];
  }
  return undefined;
}
