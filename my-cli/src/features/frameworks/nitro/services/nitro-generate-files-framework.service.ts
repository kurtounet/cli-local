import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { nitroGenerateServiceEntityService } from "./nitro-generate-service-entity.service";
import { nitroGenerateConnectionDrizzleService } from "./nitro-generate-connection-drizzle.service";
import { nitroGenerateRoutesEntityService } from "./nitro-generate-routes-entity.service";
import { nitroGenerateSingleFileService } from "./nitro-generate-single-file-.service";

import { nitroGenerateRepositoryEntityService } from "./nitro-generate-repository-entity.service";
 
import { drizzleSchemaTemplate } from "@features/frameworks/drizzle/templates/drizzle-schemas.template";
import { drizzleGenerateTypesDbService } from "@features/frameworks/drizzle/services/drizzle-generate-types-db.service";
import { drizzleGenerateIndexSeedService } from "@features/frameworks/drizzle/services/drizzle-generate-index-seed.service";
import { drizzleGenerateSeedEntityService } from "@features/frameworks/drizzle/services/drizzle-generate-seed-entity.service";
import { drizzleGenerateConfigService } from "@features/frameworks/drizzle/services/drizzle-generate-config.service";
import { dotEnvGenerateService } from "./dot-env-generate.service";
import { drizzleGenerateSchemaService } from "@features/frameworks/drizzle/services/drizzle-generate-schema.service";
import { drizzleGenerateScriptCreateDatabase } from "@features/frameworks/drizzle/services/drizzle-generate-script-create-database.service";
 
import { drizzleGenerateSchemaEntityService } from "@features/frameworks/drizzle/services/drizzle-generate-schema-entity.service";
import { nuxtGenerateModelSchemaEntityService } from "@features/frameworks/nuxt/services/nuxt-generate-model-schema-entity.service";
import { typesTemplate } from "@features/frameworks/templates/types-entity.template";
import { drizzleGenerateIndexSchemasService } from "@features/frameworks/drizzle/services/drizzle-generate-index-schemas.service";



export function nitroGenerateFilesFramework(
  rootPathProjectFramework: string,
  configFile: IProjectConfig,
  framework: IFramework,
  entitiesJsonFile: object,
  mode: string
) {
  const rootServer = `${rootPathProjectFramework}/server`;
  let schemas = "";
  let types = "";
  const entities: string[] = [];
  // Installation des dependencies
  // installTSDependencies(framework, rootPathProjectFramework);

  /* Génération des fichiers */
  // drizzle.config.ts
  dotEnvGenerateService(rootPathProjectFramework, configFile);
  drizzleGenerateScriptCreateDatabase(rootPathProjectFramework, configFile);
  drizzleGenerateConfigService(rootPathProjectFramework, configFile);
  // Génération du fichier pour la connexion  ./server/database/db.ts
  nitroGenerateConnectionDrizzleService(rootServer, configFile);
  // Génération des autre fichiers
  nitroGenerateSingleFileService(rootServer);

  // server/api
  if (Array.isArray(entitiesJsonFile)) {
    entitiesJsonFile.forEach((entity: IEntityJson) => {
      entities.push(entity.nameCamelCase);
      const rootServerApi = `${rootServer}/api`;
      nitroGenerateRoutesEntityService(rootServerApi, entity);
      nitroGenerateRepositoryEntityService(rootServerApi, entity);
      nitroGenerateServiceEntityService(rootServerApi, entity);
      drizzleGenerateSeedEntityService(rootServer, entity);
      nuxtGenerateModelSchemaEntityService(rootPathProjectFramework, entity);
      types += typesTemplate(entity);
      schemas += drizzleSchemaTemplate(entity);
      drizzleGenerateSchemaEntityService(rootServer, entity);
    });
  }
  drizzleGenerateIndexSchemasService(rootServer, entities);
  drizzleGenerateTypesDbService(rootPathProjectFramework, entities, types);
  // drizzleGenerateSchemaService(rootServer, schemas);
  drizzleGenerateIndexSeedService(rootServer, entities);  
  
}


/*  createDependencies(framework, rootPathProjectFramework)

   executeCommand(
       `code .`,
       { cwd: `${rootPathProjectFramework}`, stdio: 'inherit' },
       `🚀 Lancement de VSCode`,
       `✅ VSCode lancé avec succès !`,
       `${EMOJI.error} Erreur lors du lancement de VSCode !`,
   );
   executeCommand(
       `npm run start:dev`,
       { cwd: `${rootPathProjectFramework}`, stdio: 'inherit' },
       `🚀 Lancement du serveur`,
       `✅ Serveur lancé avec succès !`,
       `${EMOJI.error} Erreur lors du lancement du serveur !`,
   );
   */
// updateFiles(rootPathProjectFramework);
