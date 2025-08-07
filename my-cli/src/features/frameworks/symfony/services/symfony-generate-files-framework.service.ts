import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";
import { installComposerDependencies } from "@features/frameworks/services/install-dependencies.service";
import { symfonyGenerateEnvironmentsService } from "./symfony-generate-environments.service";
import { symfonyGenerateDtoService } from "./symfony-generate-dtos.service";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { symfonyGenerateEntityService } from "./symfony-generate-entities.service";
import { executeCommand } from "@utils/execute-command";

export function symfonyGenerateFilesFramework(
  globalConfig: IProjectConfig,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
  //  symfonyGenerateFilesFramework(thisProjectConfig, frameworkPath, entitiesJsonFile);
) {
  const framework = globalConfig.frameWorks.filter(
    (framework) => framework.name === "symfony",
  )[0];
  // installComposerDependencies(
  //   framework,
  //   frameworkProjectPath,
  // );
  symfonyGenerateEnvironmentsService(framework, frameworkProjectPath);
  if (Array.isArray(entitiesJsonFile)) {
    entitiesJsonFile.forEach((entity: IEntityJson) => {
      symfonyGenerateDtoService(frameworkProjectPath, entity);
      symfonyGenerateEntityService(frameworkProjectPath, entity);
    });
  }
  // Logique de génération de fichiers symfony ici
  // symfonyGenerateFixturesService(frameworkPath, entitiesJsonFile){};
  // symfonyGenerateAuthService(frameworkPath){};
  // symfonyGenerateAccounService(frameworkPath){};

  /*
    executeCommand(
        `code .`,
        { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
        `🚀 Lancement de VSCode`,
        `✅ VSCode lancé avec succès !`,
        `❌ Erreur lors du lancement de VSCode !`,
    );*/
  // executeCommand(
  //     `symfony server:start --no-tls`,
  //     { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
  //     `🚀 Lancement du serveur`,
  //     `✅ Serveur lancé avec succès !`,
  //     `❌ Erreur lors du lancement du serveur !`,
  // );
  console.log("Génération de fichiers symfony");
}
