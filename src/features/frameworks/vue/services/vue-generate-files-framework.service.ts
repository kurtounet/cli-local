import { installTSDependencies } from "@features/frameworks/commun/services/install-dependencies.service";
import { updatePackageJson, updateTsConfig } from "@features/frameworks/utils";
import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";
import { logInfo } from "@utils/logger";

/**
 *
 * @param configFile
 * @param framework
 * @param rootPathProjectFramework
 * @param entitiesJsonFile
 */
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
 * @param rootPathProjectFramework - The absolute path to the framework project.
 */
export function updateFiles(rootPathProjectFramework: string) {
  updateTsConfig(rootPathProjectFramework);
  // updatePackageJson(rootPathProjectFramework);
}
/**
 *
 * @param framework
 * @param rootPathProjectFramework
 */
export function createDependencies(
  framework: IFramework,
  rootPathProjectFramework: string,
) {
  installTSDependencies(framework, rootPathProjectFramework);
  updateFiles(rootPathProjectFramework);
}
