import * as fs from "fs-extra";
import * as path from "path";
import { Command } from "commander";
import { installFramework } from "@project/services/generate-framework";
import { generateGitBranch } from "@project/services/generate-git-branch.service";
import {
  createCliLocalDirectoryNewProject,
  getTreeArchitectureCliLocalFile,
} from "@services/cli-conf/services/cli-local-directory.service";
import { createArchitecture } from "@frameworks-services/create-architecture.service";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { verifiedFileConfig } from "@features/project/services/verify-file-config";
import { IDatabase } from "@frameworks-models/database.model";
import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";
import { switchGenerateFileFrameworkService } from "@features/frameworks/services/switch-generate-file-framework.service";
import { logInfo } from "@utils/logger";
import { EMOJI } from "@constants/messages";

export function registerCreateProjectCommand(program: Command) {
  program
    .command("create-project")
    .argument("<name>", "Nom du projet")    
    .description(
      "🚀 Création du projets Frontend et Backend a partir du fichier de configuration . ",
    )
    .action((name: string, opts) => {
      logInfo("🗄️ Vérification du fichier config.json...");

      // Vérifier si le fichier config.json existe
      const configPath = path.join(process.cwd(), `${name}-config.json`);
      if (!fs.existsSync(configPath)) {
        console.error(`${EMOJI.error} Le fichier ${name}-config.json est introuvable !`);
        process.exit(1);
      }

      const configFile: IProjectConfig = fs.readJsonSync(configPath);
      if (!configFile) {
        console.error(
          `${EMOJI.error} Erreur lors de la lecture du fichier ${name}-config.json!`,
        );
        process.exit(1);
      }

      const verifiedFile = verifiedFileConfig(configFile);
      if (typeof verifiedFile === "string") {
        console.error(`${EMOJI.error} ${verifiedFile} !`);
        process.exit(1);
      }
      // ok
      if (!configFile.starUml || configFile.starUml.length === 0) {
        console.error(
          `${EMOJI.error} Le fichier starUml n'est pas renseigné dans le fichier de configuration.`,
        );
        process.exit(1);
      }
      const mdjFile = fs.readFileSync(configFile.starUml, "utf-8");
      if (!mdjFile) {
        console.error(`${EMOJI.error} Le fichier MDJ "${mdjFile}" non trouvé.`);
        process.exit(1);
      }
      logInfo("🗄️ Vérification du fichier MDJ...");
      const dirGlobalProjectPath = configFile.path;
      const frameworksList: IFramework[] = configFile.frameWorks;
      let databases: IDatabase[] = [];
      let entitiesJsonFile: IEntityJson[] | {} = {};

      if (configFile.databases && configFile.databases.length > 0) {
        databases = configFile.databases;
      }

      //*******************   Installation des frameworks **********************
      logInfo("🚀🚀🚀🚀🚀 START GENERATION DES FRAMEWORKS 🚀🚀🚀🚀");
      frameworksList.forEach((framework) => {
        // const frameworkProjectName = framework?.installOptions?.name
        //   ? framework?.installOptions?.name
        //   : `${configFile.projectName}-${framework.type}`;
        const frameworkProjectName = `${configFile.projectName}-${framework.name}`;
        const frameworkProjectPath = path.join(
          dirGlobalProjectPath,
          frameworkProjectName,
        );
         
        let cliLocalDictionaries: any = {};
        if (framework.name) {
          if (!fs.existsSync(`${frameworkProjectPath}`)) {
            //📌 Création du framework
            installFramework(
              framework,
              frameworkProjectPath,
              frameworkProjectName,
            );
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
            logInfo(`✅ le ${framework.type} existe déjas !`);
          }
          entitiesJsonFile = cliLocalDictionaries.entities;
          createArchitecture(framework, frameworkProjectPath);
          switchGenerateFileFrameworkService(
            configFile,
            framework,
            frameworkProjectPath,
            entitiesJsonFile,
          );

          getTreeArchitectureCliLocalFile(frameworkProjectPath);
        }
      });
    });
}
