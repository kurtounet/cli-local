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

import { brunoGenerateCollectionFormEntitiesService } from "@features/bruno/services/bruno-generate-collection-form-entities.service";

export function registerBrunoCommand(program: Command) {
  program
    .command("bru:all")
    .description(
      "Gère la génération d'environnements', collections, requetes, etc., spécifiques à Bruno.",
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

      const actions = ["ALL", "environments", "Collection"].sort(
        (a: string, b: string) => a.localeCompare(b),
      );

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
        if (option === "Collection") {
          brunoGenerateCollectionFormEntitiesService(
            ProjectConfig,
            `${processPath}/bruno`,
            entitiesJsonFile,
          );
        }
      }); 
    });
}
