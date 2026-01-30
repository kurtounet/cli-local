import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";
import { logInfo } from "@utils/logger";

export function electronGenerateFilesFramework(
  configFile: IProjectConfig,
  framework: IFramework,
  rootPathProjectFramework: string,
  entitiesJsonFile: object,
) {
  // Logique de génération de fichiers Electron ici
  // createDependencies(framework, rootPathProjectFramework)
  logInfo("Génération de fichiers Electron");
}
