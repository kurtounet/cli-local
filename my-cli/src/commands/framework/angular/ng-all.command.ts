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
import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";
import { nuxtGenerateFilesFramework } from "@nuxt/services/nuxt-generate-files-framework.service";

import { EMOJI } from "@constants/messages";
import { angularGenerateFilesFramework } from "@features/frameworks/angular/services/angular-generate-files-framework.service";
import { angularGenerateFormEntityService } from "@features/frameworks/angular/services/angular-generate-form-entity.service";
import { angularGenerateMockEntityService } from "@features/frameworks/angular/services/angular-generate-mock-entity.service";
import { angularGenerateCrudEntityService } from "@features/frameworks/angular/services/angular-generate-crud-entity.service";
import { angularGenerateInterfaceEntityService } from "@features/frameworks/angular/services/angular-generate-interface-entity.service";
import { angularGenerateZodSchemaEntityService } from "@features/frameworks/angular/services/angular-generate-zod-schema-entity.service";
import { angularGeneratePagesService } from "@features/frameworks/angular/services/angular-generate-pages.service";

export function registerNgAllCommand(program: Command) {
  program
    .command("ng:all")
    .description(
      "Gère la génération de modules, contrôleurs, services, entités, etc., spécifiques à Angular.",
    )
    // .option("-p, --path <path>", "Spécifie le répertoire de destination.")
    .action(async () => {
      const processPath = process.cwd();
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
        "Mocks",
        "Forms",
        "Interfaces",
        "Services",
        "pages",
        "zod schema",
      ].sort((a: string, b: string) => a.localeCompare(b));

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
        if (option === "Forms") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              angularGenerateFormEntityService(
                `${processPath}/src/app/forms`,
                entity,
                "",
                ".component",
              );
            });
          }
        }
        if (option === "Interfaces") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              angularGenerateInterfaceEntityService(
                `${processPath}/src/app/models`,
                entity,
              );
            });
          }
        }
        if (option === "zod schema") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              angularGenerateZodSchemaEntityService(
                `${processPath}/src/app/schemas`,
                entity,
              );
            });
          }
        }
        if (option === "Services") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              angularGenerateCrudEntityService(
                `${processPath}/src/app/services`,
                entity,
              );
            });
          }
        }
        if (option === "Mocks") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              angularGenerateMockEntityService(
                `${processPath}/src/app/mocks`,
                entity,
              );
            });
          }
        }
        if (option === "pages") {
          angularGeneratePagesService(`${processPath}/src/app/pages`, [
            "home",
            "resetPassword",
            "resetPasswordConfirm",
            "dashboard",
          ]);
        }
        if (option === "ALL") {
          angularGenerateFilesFramework(
            ProjectConfig,
            framework,
            processPath,
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
        { cwd: `${processPath}`, stdio: "inherit" },
        `🚀 Lancement du Formatage`,
        `✅ Formatage lancé avec succès !`,
        `${EMOJI.error} Erreur lors du Formatage !`,
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
      //   logError(`Error generating Nitro module: ${(err as Error).message}`);
      // }
    });
}
