import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";

import { symfonyGenerateEnvironmentsService } from "./symfony-generate-environments.service";
import { symfonyGenerateDtoService } from "./symfony-generate-dtos.service";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { symfonyGenerateEntityService } from "./symfony-generate-entities.service";
import { logInfo } from "@utils/logger";

export function symfonyGenerateFilesFramework(
  configFile: IProjectConfig,
  framework: IFramework,
  rootPathProjectFramework: string,
  entitiesJsonFile: object,
  //  symfonyGenerateFilesFramework(thisProjectConfig, frameworkPath, entitiesJsonFile);
) {
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
  // Logique de génération de fichiers symfony ici
  // symfonyGenerateFixturesService(frameworkPath, entitiesJsonFile){};
  // symfonyGenerateAuthService(frameworkPath){};
  // symfonyGenerateAccounService(frameworkPath){};

  /*
    executeCommand(
        `code .`,
        { cwd: `${rootPathProjectFramework}`, stdio: 'inherit' },
        `🚀 Lancement de VSCode`,
        `✅ VSCode lancé avec succès !`,
        `❌ Erreur lors du lancement de VSCode !`,
    );
  executeCommand(
      `symfony server:start --no-tls`,
      { cwd: `${rootPathProjectFramework}`, stdio: 'inherit' },
      `🚀 Lancement du serveur`,
      `✅ Serveur lancé avec succès !`,
      `❌ Erreur lors du lancement du serveur !`,
  );*/
  logInfo("Génération de fichiers symfony");
}
