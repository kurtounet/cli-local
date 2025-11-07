import { Command } from "commander";
import inquirer from "inquirer";
import { logInfo } from "@utils/logger";

import { executeCommand } from "@utils/execute-command";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

import {
  getCliLocalConfigFile,
  getCliLocalFile,
} from "@services/cli-conf/services/cli-local-directory.service";
import { ICliLocalPathFile } from "types/common";
import { IFramework } from "@frameworks-models/framework-commun.model";
import { nestjsCreateAccountModule } from "@nestjs/services/nestjs-account-service.service";
import { createAuthNestjs } from "@nestjs/services/nestjs-auth.service";
import {
  createControllerNestjs,
  createDtoNestjs,
  createEntityNestjs,
  createSeederNestjs,
  createServiceNestjs,
  nestjsGenerateFeature,
} from "@nestjs/services/nestjs-generate-feature.service";
import {
  appModuleNestjs,
  createConfigProjectNestjs,
  createEnvironmentsNestjs,
  databaseConfigNestjs,
  mainFileNestjs,
} from "@nestjs/services/nestjs-config-project.service";

export function registerNestAllCommand(program: Command) {
  program
    .command("nest:all")
    .description(
      "Gère la génération de modules, contrôleurs, services, entités, etc., spécifiques à NestJS.",
    )
    .option("-p, --path <path>", "Spécifie le répertoire de destination.")
    .action(async () => {
      

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
          nestjsCreateAccountModule(frameworkPath);
          createAuthNestjs(frameworkPath);
        }
        if (option === "Anthentication") {
          createAuthNestjs(frameworkPath);
        }
        if (option === "Account") {
          nestjsCreateAccountModule(frameworkPath);
        }
        if (option === "Anthentication") {
          createAuthNestjs(frameworkPath);
        }
        if (option === "Bdd") {
          databaseConfigNestjs(frameworkPath, thisProjectConfig);
        }
        if (option === "Environments") {
          createEnvironmentsNestjs(frameworkPath, thisProjectConfig);
        }
        if (option === "Config") {
          createConfigProjectNestjs(frameworkPath);
        }
        if (option === "Dependencies") {
        }
        if (option === "Entity") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              createEntityNestjs(frameworkPath, entity);
            });
          }
        }
        if (option === "Dto") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              createDtoNestjs(frameworkPath, entity);
            });
          }
        }
        if (option === "Controller") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              createControllerNestjs(frameworkPath, entity);
            });
          }
        }
        if (option === "Service") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              createServiceNestjs(frameworkPath, entity);
            });
          }
        }
        if (option === "Seeder") {
          if (Array.isArray(entitiesJsonFile)) {
            createSeederNestjs(frameworkPath, entitiesJsonFile);
          }
        }
        if (option === "ALL") {
          createEnvironmentsNestjs(frameworkPath, thisProjectConfig);
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
              nestjsGenerateFeature(frameworkPath, entity);
            });
          }
          createSeederNestjs(frameworkPath, entitiesJsonFile);
          appModuleNestjs(frameworkPath, entitiesModule);
          mainFileNestjs(frameworkPath);
          databaseConfigNestjs(frameworkPath, thisProjectConfig);
          /* 
                    createFixturesNestjs(frameworkPath);
                      loadFixturesNestjs(frameworkPath);
          */
        }
      });
      executeCommand(
        "npm run format",
        { cwd: `${frameworkPath}`, stdio: "inherit" },
        `🚀 Lancement du Formatage`,
        `✅ Formatage lancé avec succès !`,
        `❌ Erreur lors du Formatage !`,
      );

      // const targetPath = options.path || process.cwd();
      // const pascalName = pascalCase(name);

      // try {
      //   switch (type) {
      //     case 'module':
      //       await generateModule(targetPath, pascalName);
      //       break;
      //     case 'controller':
      //       await generateController(targetPath, pascalName);
      //       break;
      //     case 'service':
      //       await generateService(targetPath, pascalName);
      //       break;
      //     case 'entity':
      //       await generateEntity(targetPath, pascalName);
      //       break;
      //     case 'config':
      //       await nestConfigGenerator.generateConfig(targetPath, pascalName);
      //       break;
      //     default:
      //       error(`Type de génération NestJS inconnu: ${type}`);
      //       return;
      //   }
      //   success(`${type} NestJS ${name} généré avec succès dans ${targetPath} !`);
      // } catch (err: unknown) {
      //   console.error(`Error generating NestJS module: ${(err as Error).message}`);
      // }
    });
}
