import { IFramework, IProjectConfig } from "@frameworks-models/framework-commun.model";

import { logInfo, logStep } from "@utils/logger";
import { messageInstallationFramework } from "@constants/messages";

import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { apiPlatformEntityService } from "./api-platform-entity.service";
import { apiPlatformEntityMapperService } from "./api-platform-entity-mapper.service";
import { apiPlatformEntityDtoService } from "./api-platform-entity-dto.service";
import { apiPlatformEntityProviderService } from "./api-platform-entity-provider.service";
import { apiPlatformEntityProcessorService } from "./api-platform-entity-processor.service";
import { apiPlatformServicesService } from "./api-platform-services.service";

export function apiPlatformGenerateFilesFrameworkService(
  configFile: IProjectConfig,
  framework: IFramework,
  rootPathProjectFramework: string,
  entitiesJsonFile: object,
  docJsonld: object,
) {
  logStep(messageInstallationFramework(framework.name));
  const platform = framework.plateform;
  /* Installe les dépendances de production */
  // if (framework.mode === "install") {
  //   installComposerDependencies(framework, rootPathProjectFramework);
  // }

  /* Création des fichiers d'environnement .local .test */
  // symfonyGenerateEnvironmentsService(rootPathProjectFramework, configFile);

  /* Création des entités et DTO */
  if (Array.isArray(entitiesJsonFile)) {
    entitiesJsonFile.forEach((entity: IEntityJson) => {
      apiPlatformEntityService(`${rootPathProjectFramework}/src/`, entity);
      apiPlatformEntityMapperService(`${rootPathProjectFramework}/src/ApiResource/Mappers`, entity);
      apiPlatformEntityDtoService(`${rootPathProjectFramework}/src/ApiResource`, entity);
      apiPlatformEntityProviderService(
        `${rootPathProjectFramework}/src/ApiResource/States`,
        entity,
      );
      apiPlatformEntityProcessorService(
        `${rootPathProjectFramework}/src/ApiResource/States`,
        entity,
      );
      apiPlatformServicesService(`${rootPathProjectFramework}/src/ApiResource/Services`);
    });
  }
  // symfonyGenerateCommandService(rootPathProjectFramework );
  /* 
    Logique de génération de fichiers symfony 
    symfonyGenerateFixturesService(frameworkPath, entitiesJsonFile);
    symfonyGenerateControllerService(frameworkPath, routesJsonFile);
    
    symfonyGenerateLoginService(frameworkPath);
    symfonyGenerateRegisterService(frameworkPath);
    symfonyGeneratePasswordResetService(frameworkPath); 
    symfonyGenerateTemplateService(frameworkPath, entitiesJsonFile);
    symfonyGenerateAdminService(frameworkPath, entitiesJsonFile);
    symfonyGenerateAssetsService(frameworkPath, entitiesJsonFile);
    symfonyGenerateFormService(frameworkPath, entitiesJsonFile);
  */

  /*
    executeCommand(
        `code .`,
        { cwd: `${rootPathProjectFramework}`, stdio: 'inherit' },
        `🚀 Lancement de VSCode`,
        `✅ VSCode lancé avec succès !`,
        `${EMOJI.error} Erreur lors du lancement de VSCode !`,
    );
  executeCommand(
      `symfony server:start --no-tls`,
      { cwd: `${rootPathProjectFramework}`, stdio: 'inherit' },
      `🚀 Lancement du serveur`,
      `✅ Serveur lancé avec succès !`,
      `${EMOJI.error} Erreur lors du lancement du serveur !`,
  );*/
  logInfo("Génération de fichiers symfony");
}
