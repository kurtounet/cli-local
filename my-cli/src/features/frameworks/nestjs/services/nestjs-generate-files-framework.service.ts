import { IFramework } from "@features/frameworks/_global/interface/framework-commun.model";
import { installTSDependencies } from "@features/frameworks/_global/service/install-dependencies.service";
import { IEntityJson } from "@features/parsersMdj/interfaces/entity-json.model";
import { executeCommand } from "@utils/execute-command";

export function nestjsGenerateFilesFramework(
  framework: IFramework,
  frameworkProjectPath: string,
  entitiesJsonFile: object,
) {
  installTSDependencies(framework, frameworkProjectPath);
  /*
   executeCommand(
           `cl nest new ${frameworkProjectPath} --package-manager=npm`,
           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
           `🚀 Génération des fichier`,
           `✅ Génération des fichier avec succès !`,
           `❌ Erreur lors de la Génération des fichier !`,
       );

       createDependencies(framework, frameworkProjectPath)
   
       executeCommand(
           `code .`,
           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
           `🚀 Lancement de VSCode`,
           `✅ VSCode lancé avec succès !`,
           `❌ Erreur lors du lancement de VSCode !`,
       );
       executeCommand(
           `npm run start:dev`,
           { cwd: `${frameworkProjectPath}`, stdio: 'inherit' },
           `🚀 Lancement du serveur`,
           `✅ Serveur lancé avec succès !`,
           `❌ Erreur lors du lancement du serveur !`,
       );
       */
  // updateFiles(frameworkProjectPath);
  /*
    //  nestjsGenerateEnvironments(databases, framework, frameworkProjectPath);*/
  if (Array.isArray(entitiesJsonFile)) {
    entitiesJsonFile.forEach((entity: IEntityJson) => {
      /* // nestjsGenerateModuleNestjs(frameworkProjectPath,entity);*/
    });
  }
  /*
    //  nestjsGenerateTests(framework,  frameworkProjectPath);
    //  nestjsGenerateDatabases(framework, frameworkProjectPath);
    //  nestjsGenerateFixtures(framework,  frameworkProjectPath);
    // loadFixturesNestjs(framework,  frameworkProjectPath);*/
}
