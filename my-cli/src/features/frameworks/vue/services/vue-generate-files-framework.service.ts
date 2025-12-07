import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";

import { updatePackageJson, updateTsConfig } from "@features/frameworks/utils";
import { logInfo } from "@utils/logger";
import { installTSDependencies } from "@features/frameworks/commun/services/install-dependencies.service";

export function vueGenerateFilesFramework(
  configFile: IProjectConfig,
  framework: IFramework,
  rootPathProjectFramework: string,
  entitiesJsonFile: object,
) {
  // Logique de génération de fichiers vue ici
  // createDependencies(framework, rootPathProjectFramework)
  logInfo("Génération de fichiers vue");
}
/**
 * Updates configuration files (tsconfig.json and package.json) for a given framework project.
 * @param rootPathProjectFramework The absolute path to the framework project.
 */
export function updateFiles(rootPathProjectFramework: string) {
  updateTsConfig(rootPathProjectFramework);
  // updatePackageJson(rootPathProjectFramework);
}
export function createDependencies(
  framework: IFramework,
  rootPathProjectFramework: string,
) {
  installTSDependencies(framework, rootPathProjectFramework);
  updateFiles(rootPathProjectFramework);
}
