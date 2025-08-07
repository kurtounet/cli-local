import { IFramework, IProjectConfig } from "@frameworks-models/framework-commun.model";
import { installTSDependencies } from "@features/frameworks/services/install-dependencies.service";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

import { nitroGenerateConfigDrizzleService } from "./nitro-generate-config-drizzle.service";
import { nitroGenerateServiceEntityService } from "./nitro-generate-service-entity.service";

import { nitroGenerateConnectionDrizzleService } from "./nitro-generate-connection-drizzle.service";
import { nitroGenerateEntityRepositoryService } from "./nitro-generate-entity-repository.service";
import { nitroGenerateRoutesEntityService } from "./nitro-generate-routes-entity.service";
import { nitroGenerateEntityDrizzleService } from "./nitro-generate-entity-drizzle.service";
import { nitroGeneratBaseService } from "./nitro-generate-base-.service";

export function nitroGenerateFilesFramework(
  // projectConfig: IProjectConfig,
  framework: IFramework,
  rootProjectPath: string,
  entitiesJsonFile: object,
) {
  const rootServer = `${rootProjectPath}/server`;
  // installTSDependencies(framework, rootProjectPath);
  // Génération du fichier drizzle.config.ts 
  nitroGenerateConfigDrizzleService(rootProjectPath, framework);
  // Génération du fichier pour la connexion  ./server/utils/db.ts 
  nitroGenerateConnectionDrizzleService(rootServer, framework);
  nitroGeneratBaseService(rootServer);

  let schemas = '';
  if (Array.isArray(entitiesJsonFile)) {
    entitiesJsonFile.forEach((entity: IEntityJson) => {
      const rootServerApi = `${rootServer}/api`;
      nitroGenerateRoutesEntityService(rootServerApi, entity);
      nitroGenerateEntityRepositoryService(rootServerApi, entity);
      nitroGenerateServiceEntityService(rootServerApi, entity);
      // drizzleGenerateEntityService(entity);
    });
  }
  // Génération du fichier pour la connexion  ./server/database/Schema.ts 
  nitroGenerateEntityDrizzleService(rootServer, schemas);
}
/*
  executeCommand(
    `cl nest new ${frameworkProjectPath} --package-manager=npm`,
       { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
       `🚀 Génération des fichier`,
       `✅ Génération des fichier avec succès !`,
       `❌ Erreur lors de la Génération des fichier !`,
   );

   createDependencies(framework, frameworkProjectPath)

   executeCommand(
       `code .`,
       { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
       `🚀 Lancement de VSCode`,
       `✅ VSCode lancé avec succès !`,
       `❌ Erreur lors du lancement de VSCode !`,
   );
   executeCommand(
       `npm run start:dev`,
       { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
       `🚀 Lancement du serveur`,
       `✅ Serveur lancé avec succès !`,
       `❌ Erreur lors du lancement du serveur !`,
   );
   */
// updateFiles(frameworkProjectPath);
