import { IFramework } from "@frameworks-models/framework-commun.model";
import { logInfo } from "@utils/logger";

/**
 *
 * @param framework
 * @param frameworkProjectPath
 * @param entitiesJsonFile
 */
export function reactGenerateFilesFramework(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) {
  // Logique de génération de fichiersreact ici
  // createDependencies(framework, frameworkProjectPath)
  logInfo("Génération de fichiersreact");
}
