 
import { symfonyEnvDatabaseUrlTemplate } from "./symfony-env-database-url.template";
import { symfonyEnvLexikJwtAuthenticationTemplate } from "./bundles/symfony-env-lexik-jwt-authentication.template";
import { symfonyEnvNelmioTemplate } from "./bundles/symfony-env-nelmio.template";
import { symfonyEnvMailerTemplate } from "./bundles/symfony-env-mailer.template";
import { IDatabase } from "@frameworks-models/database.model";

export function env(db: IDatabase) {
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
export function envLocal(db: IDatabase) {
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
export function envTest(db: IDatabase) {
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
