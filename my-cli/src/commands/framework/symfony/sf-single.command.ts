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

export function registerSfSingleCommand(program: Command) {
  program
    .command("sf:single")
    .description(
      "Gère la génération de modules, contrôleurs, services, entités, etc., spécifiques à symfony.",
    )
    .option("-p, --path <path>", "Spécifie le répertoire de destination.")
    .action(async (type: string, name: string, options: { path?: string }) => {
      logInfo(`Génération d'un ${type} symfony nommé ${name}...`);

      const processPath = process.cwd();
      const frameworkPath: string = processPath;
      const allpathFileCliLocal: ICliLocalPathFile =
        getCliLocalConfigFile(processPath);
      const entitiesJsonFile: IEntityJson[] = getCliLocalFile(
        allpathFileCliLocal.entities,
      );
      const thisProjectConfig: IFramework = getCliLocalFile(
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
          // symfonysymfonyCreateAccountModule(frameworkPath);
          // symfonysymfonyCreateAuths(frameworkPath);
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
          // symfonyCreateEnvironmentssymfony(frameworkPath, thisProjectConfig);
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
          // symfonyCreateEnvironment(frameworkPath, thisProjectConfig);
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
              // symfonyGenerateFeature(frameworkPath, entity);
            });
          }
          // symfonyCreateFixtures(frameworkPath, entitiesJsonFile);
          // symfonyCreateAuth(frameworkPath);
          // symfonyCreateAccoun(frameworkPath);
          // symfonyCreateDto(frameworkPath, entitiesJsonFile);
          // symfonyCreateController(frameworkPath, entitiesJsonFile);
          // symfonyCreateService(frameworkPath, entitiesJsonFile);
          // symfonyCreateSeeder(frameworkPath, entitiesJsonFile);
          // symfonyCreateEntity(frameworkPath, entitiesJsonFile);
          // symfonyCreateConfigProject(frameworkPath);
          // symfonyCreateEnvironments(frameworkPath, thisProjectConfig);
        }
      });
      executeCommand(
        "npm run format",
        { cwd: `${frameworkPath}`, stdio: "inherit" },
        `🚀 Lancement du Formatage`,
        `✅ Formatage lancé avec succès !`,
        `❌ Erreur lors du Formatage !`,
      );
    });
}
