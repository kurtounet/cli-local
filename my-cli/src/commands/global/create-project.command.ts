import * as fs from "fs-extra";
import * as path from "path";
import { Command } from "commander";
import { generateFramework } from "@project/services/generate-framework";
import { generateGitBranch } from "@project/services/generate-git-branch.service";
import {
  createCliLocalDirectoryNewProject,
  getTreeArchitectureCliLocalFile,
} from "@services/cli-conf/services/cli-local-directory.service";
import { createArchitecture } from "@frameworks-services/create-architecture.service";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";

import { verifiedFileConfig } from "@features/project/services/verify-file-config";
import { nestjsGenerateFilesFramework } from "@nestjs/services/nestjs-generate-files-framework.service";

import { vueGenerateFilesFramework } from "@vue/services/vue-generate-files-framework.service";



import { symfonyGenerateFilesFramework } from "@symfony/services/symfony-generate-files-framework.service";
import { nitroGenerateFilesFramework } from "@nitro/services/nitro-generate-files-framework.service";
import { IDatabase } from "@frameworks-models/database.model";
import { angularGenerateFilesFramework } from "@angular/services/angular-generate-files-framework.service";
import { nuxtGenerateFilesFramework } from "@nuxt/services/nuxt-generate-files-framework.service";
import { electronGenerateFilesFramework } from "@electron/services/electron-generate-files-framework.service";
import { IFramework, IProjectConfig } from "@frameworks-models/framework-commun.model";

export function registerCreateProjectCommand(program: Command) {
  program
    .command("create-project")
    .argument("<name>", "Nom du projet")
    .description(
      "🚀 Création du projets Frontend et Backend a partir du fichier de configuration . ",
    )
    .action((name: string) => {
      console.log("🗄️ Vérification du fichier config.json...");

      // Vérifier si le fichier config.json existe
      const configPath = path.join(process.cwd(), `${name}-config.json`);
      if (!fs.existsSync(configPath)) {
        console.error(`❌ Le fichier ${name}-config.json est introuvable !`);
        process.exit(1);
      }

      const configFile: IProjectConfig = fs.readJsonSync(configPath);
      if (!configFile) {
        console.error(
          `❌ Erreur lors de la lecture du fichier ${name}-config.json!`,
        );
        process.exit(1);
      }

      const verifiedFile = verifiedFileConfig(configFile);
      if (typeof verifiedFile === "string") {
        console.error(`❌ ${verifiedFile} !`);
        process.exit(1);
      }

      if (!configFile.starUml || configFile.starUml.length === 0) {
        console.error(
          `❌ Le fichier starUml n'est pas renseigné dans le fichier de configuration.`,
        );
        process.exit(1);
      }
      const mdjFile = fs.readFileSync(configFile.starUml, "utf-8");
      if (!mdjFile) {
        console.error(`❌ Le fichier MDJ "${mdjFile}" non trouvé.`);
        process.exit(1);
      }

      const dirGlobalProjectPath = configFile.path;
      const frameworksList: IFramework[] = configFile.frameWorks;
      let databases: IDatabase[] = [];
      let entitiesJsonFile: IEntityJson[] | {} = {};

      if (configFile.databases && configFile.databases.length > 0) {
        databases = configFile.databases;
      }

      //*******************   Installation des frameworks **********************
      frameworksList.forEach((framework) => {
        const frameworkProjectName = framework?.installOptions?.name
          ? framework?.installOptions?.name
          : `${configFile.projectName}-${framework.type}`;

        const frameworkProjectPath = path.join(
          dirGlobalProjectPath,
          frameworkProjectName,
        );

        let cliLocalDictionaries: any = {};
        if (framework.name) {
          if (!fs.existsSync(`${frameworkProjectPath}`)) {
            //📌 Création du framework
            generateFramework(framework, frameworkProjectPath, frameworkProjectName,);
            //📌 Création des branch Git
            generateGitBranch(framework, frameworkProjectPath);
            //📌 Création du dossier pour la cli locale
            cliLocalDictionaries = createCliLocalDirectoryNewProject(
              configFile,
              mdjFile,
              framework,
              frameworkProjectPath,
            );
          } else {
            console.log(`✅ le ${framework.type} existe déjas !`);
          }
          entitiesJsonFile = cliLocalDictionaries.entities;
          createArchitecture(framework, frameworkProjectPath);
          switch (framework.name.toLowerCase()) {
            case "angular":
              angularGenerateFilesFramework(
                framework,
                frameworkProjectPath,
                entitiesJsonFile,
              );
              break;
            case "vuejs":
              vueGenerateFilesFramework(
                framework,
                frameworkProjectPath,
                entitiesJsonFile,
              );
              break;
            case "nuxt":
              nuxtGenerateFilesFramework(
                framework,
                frameworkProjectPath,
                entitiesJsonFile,
              );
              break;
            case "react":
              //  reactGenerateFilesFramework(
              //     framework,
              //     frameworkProjectPath,
              //     entitiesJsonFile,
              //   );
              break;
            case "nestjs":
              nestjsGenerateFilesFramework(
                framework,
                frameworkProjectPath,
                entitiesJsonFile,
              );
              break;
            case "electron":
              electronGenerateFilesFramework(
                framework,
                frameworkProjectPath,
                entitiesJsonFile,
              );
              break;
            case "symfony":
              symfonyGenerateFilesFramework(
                configFile,
                frameworkProjectPath,
                entitiesJsonFile,
              );
              break;
            case "nitro":
              nitroGenerateFilesFramework(
                framework,//configFile,
                frameworkProjectPath,
                entitiesJsonFile,
              );
              break;
            case "fastapi":
              /* fastapiGenerateFilesFramework(framework, frameworkProjectPath, entitiesJsonFile); */
              console.log("fastapiGenerateFilesFramework");
              break;
            default:
              break;
          }
          getTreeArchitectureCliLocalFile(frameworkProjectPath);
        }
      });
    });
}
