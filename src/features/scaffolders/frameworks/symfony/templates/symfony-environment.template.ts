import { IProjectConfig } from "@features/frameworks/models/framework-commun.model";
import { IDatabase } from "@frameworks-models/database.model";

import { symfonyEnvLexikJwtAuthenticationTemplate } from "./bundles/symfony-env-lexik-jwt-authentication.template";
import { symfonyEnvMailerTemplate } from "./bundles/symfony-env-mailer.template";
import { symfonyEnvNelmioTemplate } from "./bundles/symfony-env-nelmio.template";
import { symfonyEnvDatabaseUrlTemplate } from "./symfony-env-database-url.template";

/**
 *
 * @param configFile
 */
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
/**
 *
 * @param configFile
 */
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
/**
 *
 * @param configFile
 */
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
/**
 *
 * @param configFile
 */
function getDatabase(configFile: IProjectConfig): IDatabase | undefined {
  if (configFile.databases && configFile.databases.length > 0) {
    return configFile.databases[0];
  }
  return undefined;
}
