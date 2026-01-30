import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";

import { symfonyGenerateEnvironmentsService } from "./symfony-generate-environments.service";
import { symfonyGenerateDtoService } from "./symfony-generate-dtos.service";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { symfonyGenerateEntityService } from "./symfony-generate-entities.service";
import { logInfo, logStep } from "@utils/logger";
import { messageInstallationFramework } from "@constants/messages";
import { symfonyGenerateCrudEntityService } from "./symfony-generate-crud-entity.service";
import { installComposerDependencies } from "@features/frameworks/commun/services/install-dependencies.service";
import { symfonyGenerateCommandService } from "./symfony-generate-command.service";
import { platform } from "node:os";

export function symfonyGenerateFilesFramework(
  configFile: IProjectConfig,
  framework: IFramework,
  rootPathProjectFramework: string,
  entitiesJsonFile: object,
) {
  logStep(messageInstallationFramework(framework.name));
  const platform = framework.plateform;
  /* Installe les dépendances de production */
  if (framework.mode === "install") {
    installComposerDependencies(framework, rootPathProjectFramework);
  }

  /* Création des fichiers d'environnement .local .test */
  symfonyGenerateEnvironmentsService(rootPathProjectFramework, configFile);

  /* Création des entités et DTO */
  if (Array.isArray(entitiesJsonFile)) {
    entitiesJsonFile.forEach((entity: IEntityJson) => {
      symfonyGenerateDtoService(rootPathProjectFramework, entity, platform);
      symfonyGenerateEntityService(rootPathProjectFramework, entity, platform);
      // symfonyGenerateCrudEntityService(rootPathProjectFramework, entity);
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
