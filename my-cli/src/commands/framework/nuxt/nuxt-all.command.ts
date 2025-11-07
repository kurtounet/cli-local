import { Command } from "commander";
import inquirer from "inquirer";
import { logDebug, logInfo, logSuccess } from "@utils/logger";

import { executeCommand } from "@utils/execute-command";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

import {
  getCliLocalConfigFile,
  getCliLocalFile,
} from "@services/cli-conf/services/cli-local-directory.service";
import { ICliLocalPathFile } from "types/common";
import { IFramework } from "@frameworks-models/framework-commun.model";
import { nuxtGenerateFilesFramework } from "@nuxt/services/nuxt-generate-files-framework.service";
import { IProjectConfig } from "@features/project/models/project.models";

export function registerNuxtAllCommand(program: Command) {
  program
    .command("nuxt:all")
    .description(
      "Gère la génération de modules, contrôleurs, services, entités, etc., spécifiques à Nitro.",
    )
    // .option("-p, --path <path>", "Spécifie le répertoire de destination.")
    .action(async () => {
      const processPath = process.cwd();
      const frameworkPath: string = processPath;
      const allpathFileCliLocal: ICliLocalPathFile =
        getCliLocalConfigFile(processPath);
      console.log("allpathFileCliLocal", allpathFileCliLocal);
      const entitiesJsonFile: IEntityJson[] = getCliLocalFile(
        allpathFileCliLocal.entities,
      );
      const ProjectConfig: IProjectConfig = getCliLocalFile(
        allpathFileCliLocal.globalConfig,
      );
      const framework: IFramework = getCliLocalFile(
        allpathFileCliLocal.thisProjectConfig,
      );

      const actions = [
        "ALL",
        "Seeds",
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
        }
        if (option === "Anthentication") {
        }
        if (option === "Account") {
        }
        if (option === "Anthentication") {
        }
        if (option === "Bdd") {
          // databaseConfigNitro(frameworkPath, thisProjectConfig);
        }
        if (option === "Environments") {
          // createEnvironmentsNitro(frameworkPath, thisProjectConfig);
        }
        if (option === "Config") {
          // createConfigProjectNitro(frameworkPath);
        }
        if (option === "Dependencies") {
        }
        if (option === "Entity") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // createEntityNitro(frameworkPath, entity);
            });
          }
        }
        if (option === "Dto") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // createDtoNitro(frameworkPath, entity);
            });
          }
        }
        if (option === "Controller") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // createControllerNitro(frameworkPath, entity);
            });
          }
        }
        if (option === "Service") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // createServiceNitro(frameworkPath, entity);
            });
          }
        }
        if (option === "Seeds") {
          if (Array.isArray(entitiesJsonFile)) {
            // createSeederNitro(frameworkPath, entitiesJsonFile);
          }
        }
        if (option === "ALL") {
          nuxtGenerateFilesFramework(
            frameworkPath,
            ProjectConfig,
            framework,
            entitiesJsonFile,
            "all",
          );
          /*
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
              NitroGenerateFeature(frameworkPath, entity);
            });
          }*/
          // createSeederNitro(frameworkPath, entitiesJsonFile);
          // appModuleNitro(frameworkPath, entitiesModule);
          // mainFileNitro(frameworkPath);
          // databaseConfigNitro(frameworkPath, thisProjectConfig);
          /* 
                    createFixturesNitro(frameworkPath);
                      loadFixturesNitro(frameworkPath);
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
      //       await NitroConfigGenerator.generateConfig(targetPath, pascalName);
      //       break;
      //     default:
      //       error(`Type de génération Nitro inconnu: ${type}`);
      //       return;
      //   }
      //   success(`${type} Nitro ${name} généré avec succès dans ${targetPath} !`);
      // } catch (err: unknown) {
      //   console.error(`Error generating Nitro module: ${(err as Error).message}`);
      // }
    });
}
