import { IFramework } from "@features/frameworks/_global/interface/framework-commun.model";
import { installTSDependencies } from "@features/frameworks/_global/service/install-dependencies.service";
import {
  updatePackageJson,
  updateTsConfig,
} from "@features/frameworks/_global/utils";

export function vueGenerateFilesFramework(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) {
  // Logique de génération de fichiers vue ici
  // createDependencies(framework, frameworkProjectPath)
  console.log("Génération de fichiers vue");
}
/**
 * Updates configuration files (tsconfig.json and package.json) for a given framework project.
 * @param frameworkProjectPath The absolute path to the framework project.
 */
export function updateFiles(frameworkProjectPath: string) {
  updateTsConfig(frameworkProjectPath);
  updatePackageJson(frameworkProjectPath);
}
export function createDependencies(
  framework: IFramework,
  frameworkProjectPath: string,
) {
  installTSDependencies(framework, frameworkProjectPath);
  updateFiles(frameworkProjectPath);
}
