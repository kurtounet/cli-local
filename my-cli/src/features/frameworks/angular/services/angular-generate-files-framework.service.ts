import { IFramework } from "@frameworks-models/framework-commun.model";
import { installTSDependencies } from "@features/frameworks/services/install-dependencies.service";

export function angularGenerateFilesFramework(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) {
  installTSDependencies(framework, frameworkProjectPath);
  // Logique de génération de fichiers Angular ici
  // createDependencies(framework, frameworkProjectPath)
  console.log("Génération de fichiers Angular");
}
