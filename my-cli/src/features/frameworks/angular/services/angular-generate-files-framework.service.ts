import { IFramework } from "@frameworks-models/framework-commun.model";
import { installTSDependencies } from "@features/frameworks/services/install-dependencies.service";
import { IProjectConfig } from "@features/project/models/project.models";
import { logInfo } from "@utils/logger";

export function angularGenerateFilesFramework(
  configFile: IProjectConfig,
  framework: IFramework,
  rootPathProjectFramework: string,
  entitiesJsonFile: object,
) {
  installTSDependencies(framework, rootPathProjectFramework);
  // Logique de génération de fichiers Angular ici
  // createDependencies(framework, rootPathProjectFramework)
  logInfo("Génération de fichiers Angular");
}
