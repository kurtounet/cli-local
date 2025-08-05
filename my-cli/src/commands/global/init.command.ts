import { Command } from "commander";
import inquirer from "inquirer";
import * as fs from "fs-extra";
import * as path from "path";
import { logError, logInfo, logSuccess } from "../../utils/logger";
import {
  IProjectCommand,
  IProjectConfig,
} from "@features/project/interfaces/project.models";
import { createConfigProject } from "@features/frameworks/_global/service/get-config-frameworks.service";

/**
 * Registers the 'init' command with the Commander program.
 * This command initializes a new project and creates a configuration file based on user input.
 * @param program The Commander program instance.
 */
export function registerInitCommand(program: Command) {
  program
    .command("init")
    .description(
      "Initialise un nouveau projet et crée un fichier de configuration.",
    )
    .action(async () => {
      logInfo("Initialisation d'un nouveau projet...");
      const frontend = ["Angular", "React", "Vuejs", " no"];
      const backend = ["Nestjs", "Symfony", "Electron", "FastAPI", " no"];
      const database = ["Mysql", "Postgres", "Mongodb", "Sqlite", "no"];
      const answers = await inquirer.prompt<IProjectCommand>([
        {
          type: "input",
          name: "name",
          message: "Nom du projet :",
          validate: (input: string) =>
            input.trim() !== "" ? true : "Le nom du projet est requis.",
        },
        {
          type: "input",
          name: "path",
          message: "chemin du projet :",
          validate: (input: string) =>
            input.trim() !== "" ? true : "Le chemin du projet est requis.",
        },
        {
          type: "input",
          name: "starUml",
          message: "chemin du fichier starUml :",
          // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        },
        {
          type: "checkbox",
          name: "frontends",
          message: "Choisir le front-end",
          choices: [...frontend],
          // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        },
        {
          type: "checkbox",
          name: "backends",
          message: "Choisir le front-end",
          choices: [...backend],
          // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        },
        {
          type: "checkbox",
          name: "databases",
          message: "Choisir la base de données",
          choices: [...database],
          // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        },
        {
          type: "confirm",
          name: "includeLinter",
          message: "Voulez-vous inclure un linter ?",
          default: true,
        },
      ]);

      const configFileName = `${answers.name}-config.json`;
      const configFilePath = path.join(process.cwd(), configFileName);
      if (answers.path == ".") {
        answers.path = process.cwd();
      }

      try {
        await fs.writeJson(configFilePath, createConfigProject(answers), {
          spaces: 2,
        });
        logSuccess(`✅ Fichier de configuration créé : ${configFilePath}`);
        logSuccess(`🚀 Le fichier de configuration a été généré avec succès !`);
      } catch (err: unknown) {
        logError(
          `Erreur lors de la création du fichier de configuration : ${(err as Error).message}`,
        );
      }
    });
}
