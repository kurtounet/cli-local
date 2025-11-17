import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";

import { symfonyGenerateEnvironmentsService } from "./symfony-generate-environments.service";
import { symfonyGenerateDtoService } from "./symfony-generate-dtos.service";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { symfonyGenerateEntityService } from "./symfony-generate-entities.service";
import { logInfo } from "@utils/logger";
import { messageInstallationFramework } from "@constants/messages";

export function symfonyGenerateFilesFramework(
  configFile: IProjectConfig,
  framework: IFramework,
  rootPathProjectFramework: string,
  entitiesJsonFile: object,
  //  symfonyGenerateFilesFramework(thisProjectConfig, frameworkPath, entitiesJsonFile);
) {
  logInfo(messageInstallationFramework(framework.name));
  // const framework = globalConfig.frameWorks.filter(
  //   (framework) => framework.name === "symfony",
  // )[0];
  // installComposerDependencies(
  //   framework,
  //   rootPathProjectFramework,
  // );
  symfonyGenerateEnvironmentsService(rootPathProjectFramework, configFile);
  if (Array.isArray(entitiesJsonFile)) {
    entitiesJsonFile.forEach((entity: IEntityJson) => {
      symfonyGenerateDtoService(rootPathProjectFramework, entity);
      symfonyGenerateEntityService(rootPathProjectFramework, entity);
    });
  }
  /* Logique de génération de fichiers symfony ici */
  // symfonyGenerateFixturesService(frameworkPath, entitiesJsonFile){};
  // symfonyGenerateLoginService(frameworkPath){};
  // symfonyGenerateRegisterService(frameworkPath){};
  // symfonyGeneratePasswordResetService(frameworkPath){};
  // symfonyGenerateLoginService(frameworkPath){};
  // symfonyGenerateAuthService(frameworkPath){};
  // symfonyGenerateAccounService(frameworkPath){};

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
