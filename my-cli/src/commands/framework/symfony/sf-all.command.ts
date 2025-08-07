import { Command } from "commander";

import { pascalCase } from "@utils/string-utils";
import {
  getCliLocalConfigFile,
  getCliLocalFile,
} from "@services/cli-conf/services/cli-local-directory.service";
import { ICliLocalPathFile } from "types/common";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";
import inquirer from "inquirer";
import { executeCommand } from "@utils/execute-command";
import { symfonyGenerateFilesFramework } from "@symfony/services/symfony-generate-files-framework.service";
import { logInfo } from "@utils/logger";

export function registerSfAllCommand(program: Command) {
  program
    .command("sf:all")
    .description(
      "Gère la génération de modules, contrôleurs, services, entités, etc., spécifiques à symfony.",
    )
    .option("-p, --path <path>", "Spécifie le répertoire de destination.")
    .action(async (type: string, name: string, options: { path?: string }) => {
      logInfo(`Génération d'un ${type} symfony nommé ${name}...`);

      const frameworkPath: string = process.cwd();
      const allpathFileCliLocal: ICliLocalPathFile =
        getCliLocalConfigFile(frameworkPath);
      const entitiesJsonFile: IEntityJson[] = getCliLocalFile(
        allpathFileCliLocal.entities,
      );
      const globalConfig: IProjectConfig = getCliLocalFile(
        allpathFileCliLocal.globalConfig,
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
          // symfonysymfonyCreateAccountModule(frameworkPath);
          //  symfonysymfonyCreateAuths(frameworkPath);
        }
        if (option === "Anthentication") {
          // symfonyCreateAuthsymfony(frameworkPath);
        }
        if (option === "Account") {
          // symfonysymfonyCreateAccountModule(frameworkPath);
        }
        if (option === "Anthentication") {
          // symfonyCreateAuthsymfony(frameworkPath);
        }
        if (option === "Bdd") {
          // databaseConfigsymfony(frameworkPath, thisProjectConfig);
        }
        if (option === "Environments") {
          // symfonyGenerateEnvironmentssymfony(frameworkPath, thisProjectConfig);
        }
        if (option === "Config") {
          // symfonyCreateConfigProjectsymfony(frameworkPath);
        }
        if (option === "Dependencies") {
        }
        if (option === "Entity") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // symfonyCreateEntitysymfony(frameworkPath, entity);
            });
          }
        }
        if (option === "Dto") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // symfonyCreateDtosymfony(frameworkPath, entity);
            });
          }
        }
        if (option === "Controller") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // symfonyCreateControllersymfony(frameworkPath, entity);
            });
          }
        }
        if (option === "Service") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // symfonyCreateServicesymfony(frameworkPath, entity);
            });
          }
        }
        if (option === "Seeder") {
          if (Array.isArray(entitiesJsonFile)) {
            // symfonyCreateSeedersymfony(frameworkPath, entitiesJsonFile);
          }
        }
        if (option === "ALL") {
          symfonyGenerateFilesFramework(
            globalConfig,
            frameworkPath,
            entitiesJsonFile,
          );
        }
      });
    });
}
