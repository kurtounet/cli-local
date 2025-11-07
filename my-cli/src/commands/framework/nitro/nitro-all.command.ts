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
import { nitroGenerateFilesFramework } from "@nitro/services/nitro-generate-files-framework.service";
import { IProjectConfig } from "@features/project/models/project.models";

export function registerNitroAllCommand(program: Command) {
  program
    .command("nitro:all")
    .description(
      "Gère la génération de modules, contrôleurs, services, entités, etc., spécifiques à Nitro.",
    )
    .option("-p, --path <path>", "Spécifie le répertoire de destination.")
    .action(async () => {


      const processPath = process.cwd();
      const rootPathProjectFramework: string = processPath;
      const allpathFileCliLocal: ICliLocalPathFile =
        getCliLocalConfigFile(processPath);
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
        }
        if (option === "Anthentication") {
        }
        if (option === "Account") {
        }
        if (option === "Anthentication") {
        }
        if (option === "Bdd") {
          // databaseConfigNitro(rootPathProjectFramework, thisProjectConfig);
        }
        if (option === "Environments") {
          // createEnvironmentsNitro(rootPathProjectFramework, thisProjectConfig);
        }
        if (option === "Config") {
          // createConfigProjectNitro(rootPathProjectFramework);
        }
        if (option === "Dependencies") {
        }
        if (option === "Entity") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // createEntityNitro(rootPathProjectFramework, entity);
            });
          }
        }
        if (option === "Dto") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // createDtoNitro(rootPathProjectFramework, entity);
            });
          }
        }
        if (option === "Controller") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // createControllerNitro(rootPathProjectFramework, entity);
            });
          }
        }
        if (option === "Service") {
          if (Array.isArray(entitiesJsonFile)) {
            entitiesJsonFile.forEach((entity: IEntityJson) => {
              // createServiceNitro(rootPathProjectFramework, entity);
            });
          }
        }
        if (option === "Seeder") {
          if (Array.isArray(entitiesJsonFile)) {
            // createSeederNitro(rootPathProjectFramework, entitiesJsonFile);
          }
        }
        if (option === "ALL") {
          nitroGenerateFilesFramework(
            rootPathProjectFramework,
            ProjectConfig,
            framework,
            entitiesJsonFile,
            "all"
          );
        }
      });
      executeCommand(
        "npm run format",
        { cwd: `${rootPathProjectFramework}`, stdio: "inherit" },
        `🚀 Lancement du Formatage`,
        `✅ Formatage lancé avec succès !`,
        `❌ Erreur lors du Formatage !`,
      );
      executeCommand(
        `npm run db:cp`,
        { cwd: `${rootPathProjectFramework}`, stdio: 'inherit' },
        `🚀 Génération de la base de données`,
        `✅ Génération de la base de données avec succès !`,
        `❌ Erreur lors de laGénération de la base de données !`,
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
