import { Command } from "commander";
import { logInfo } from "@utils/logger";

import {
  getCliLocalConfigFile,
  getCliLocalFile,
} from "@services/cli-conf/services/cli-local-directory.service";
import { ICliLocalPathFile } from "types/common";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { IFramework } from "@frameworks-models/framework-commun.model";
import inquirer from "inquirer";
import { executeCommand } from "@utils/execute-command";
import { IProjectConfig } from "@features/project/models/project.models";

export function registerSfSingleCommand(program: Command) {
  program
    .command("sf:single")
    .description(
      "Gère la génération de modules, contrôleurs, services, entités, etc., spécifiques à symfony.",
    )
    .option("-p, --path <path>", "Spécifie le répertoire de destination.")
    .action(async () => {
       

      const rootPathProjectFramework: string = process.cwd();
      const allpathFileCliLocal: ICliLocalPathFile = getCliLocalConfigFile(
        rootPathProjectFramework,
      );
      const entitiesJsonFile: IEntityJson[] = getCliLocalFile(
        allpathFileCliLocal.entities,
      );
      const ProjectConfig: IProjectConfig = getCliLocalFile(
        allpathFileCliLocal.thisProjectConfig,
      );
      const ProjectFramework: IFramework = getCliLocalFile(
        allpathFileCliLocal.thisProjectConfig,
      );

      const actions = [
        "ALL",
        "Seeder",
        "Entity",
        "Account/Anthentication",
        "Anthentication",
        "Account",
        "Bdd",
        "Environments",
        "Config",
        "Dto",
        "Controller",
        "Service",
      ];

      const cmd = await inquirer.prompt([
        {
          type: "checkbox",
          name: "options",
          message: "Choisir ce que vous voulez generer",
          choices: [...actions],
          // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        },
      ]);
      cmd.options.forEach((option: string) => {
        if (option === "Account/Anthentication") {
          // symfonysymfonyCreateAccountModule(rootPathProjectFramework);
          // symfonysymfonyCreateAuths(rootPathProjectFramework);
        }
        if (option === "Anthentication") {
          // symfonyCreateAuthsymfony(rootPathProjectFramework);
        }
        if (option === "Account") {
          // symfonysymfonyCreateAccountModule(rootPathProjectFramework);
        }
        if (option === "Anthentication") {
          // symfonyCreateAuthsymfony(rootPathProjectFramework);
        }
        if (option === "Bdd") {
          // databaseConfigsymfony(rootPathProjectFramework, thisProjectConfig);
        }
        if (option === "Environments") {
          // symfonyCreateEnvironmentssymfony(rootPathProjectFramework, thisProjectConfig);
        }
        if (option === "Config") {
          // symfonyCreateConfigProjectsymfony(rootPathProjectFramework);
        }
        if (option === "Dependencies") {
        }
        if (option === "Entity") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // symfonyCreateEntitysymfony(rootPathProjectFramework, entity);
            });
          }
        }
        if (option === "Dto") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // symfonyCreateDtosymfony(rootPathProjectFramework, entity);
            });
          }
        }
        if (option === "Controller") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // symfonyCreateControllersymfony(rootPathProjectFramework, entity);
            });
          }
        }
        if (option === "Service") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // symfonyCreateServicesymfony(rootPathProjectFramework, entity);
            });
          }
        }
        if (option === "Seeder") {
          if (Array.isArray(entitiesJsonFile)) {
            // symfonyCreateSeedersymfony(rootPathProjectFramework, entitiesJsonFile);
          }
        }
        if (option === "ALL") {
          // symfonyCreateEnvironment(rootPathProjectFramework, thisProjectConfig);
          let entitiesModule: Array<{
            entityNamePascalCase: string;
            entityNameKebabCase: string;
          }> = [];
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              let entityModule = {
                entityNamePascalCase: `${entity.namePascalCase}`,
                entityNameKebabCase: `${entity.nameKebabCase}`,
              };
              entitiesModule.push(entityModule);
              // symfonyGenerateFeature(rootPathProjectFramework, entity);
            });
          }
          // symfonyCreateFixtures(rootPathProjectFramework, entitiesJsonFile);
          // symfonyCreateAuth(rootPathProjectFramework);
          // symfonyCreateAccoun(rootPathProjectFramework);
          // symfonyCreateDto(rootPathProjectFramework, entitiesJsonFile);
          // symfonyCreateController(rootPathProjectFramework, entitiesJsonFile);
          // symfonyCreateService(rootPathProjectFramework, entitiesJsonFile);
          // symfonyCreateSeeder(rootPathProjectFramework, entitiesJsonFile);
          // symfonyCreateEntity(rootPathProjectFramework, entitiesJsonFile);
          // symfonyCreateConfigProject(rootPathProjectFramework);
          // symfonyCreateEnvironments(rootPathProjectFramework, thisProjectConfig);
        }
      });
      executeCommand(
        "npm run format",
        { cwd: `${rootPathProjectFramework}`, stdio: "inherit" },
        `🚀 Lancement du Formatage`,
        `✅ Formatage lancé avec succès !`,
        `❌ Erreur lors du Formatage !`,
      );
    });
}

// type EntityHandler = (rootPathProjectFramework: string, entity: IEntityJson) => void | Promise<void>;

// function forEachEntity(
//   entities: IEntityJson[] | undefined,
//   rootPathProjectFramework: string,
//   handler: EntityHandler
// ): void | Promise<void> {
//   if (!Array.isArray(entities)) return;
//   for (const entity of entities) {
//     handler(rootPathProjectFramework, entity);
//   }
// }
