import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";
import { installTSDependencies } from "@features/frameworks/services/install-dependencies.service";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function nestjsGenerateFilesFramework(
  configFile: IProjectConfig,
  framework: IFramework,
  rootPathProjectFramework: string,
  entitiesJsonFile: object,
) {
  installTSDependencies(framework, rootPathProjectFramework);
  /*
   executeCommand(
           `cl nest new ${rootPathProjectFramework} --package-manager=npm`,
           { cwd: `${rootPathProjectFramework}`, stdio: 'inherit' },
           `🚀 Génération des fichier`,
           `✅ Génération des fichier avec succès !`,
           `❌ Erreur lors de la Génération des fichier !`,
       );

       createDependencies(framework, rootPathProjectFramework)
   
       executeCommand(
           `code .`,
           { cwd: `${rootPathProjectFramework}`, stdio: 'inherit' },
           `🚀 Lancement de VSCode`,
           `✅ VSCode lancé avec succès !`,
           `❌ Erreur lors du lancement de VSCode !`,
       );
       executeCommand(
           `npm run start:dev`,
           { cwd: `${rootPathProjectFramework}`, stdio: 'inherit' },
           `🚀 Lancement du serveur`,
           `✅ Serveur lancé avec succès !`,
           `❌ Erreur lors du lancement du serveur !`,
       );
       */
  // updateFiles(rootPathProjectFramework);
  /*
    //  nestjsGenerateEnvironments(databases, framework, rootPathProjectFramework);*/
  if (Array.isArray(entitiesJsonFile)) {
    entitiesJsonFile.forEach((entity: IEntityJson) => {
      /* // nestjsGenerateModuleNestjs(rootPathProjectFramework,entity);*/
    });
  }
  /*
    //  nestjsGenerateTests(framework,  rootPathProjectFramework);
    //  nestjsGenerateDatabases(framework, rootPathProjectFramework);
    //  nestjsGenerateFixtures(framework,  rootPathProjectFramework);
    // loadFixturesNestjs(framework,  rootPathProjectFramework);*/
}
