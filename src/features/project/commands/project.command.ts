import path from "node:path";
import { BaseCommand } from "@/commands/BaseCommand.js";

import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";

import inquirer from "inquirer";
import { IProjectCommand } from "@/features/project/interfaces/project-command.interface.js";
import {
  DATABASES,
  FRAMEWORKS_BACKEND,
  FRAMEWORKS_FRONTEND,
} from "@/features/frameworks/common/config/config-frameworks.js";

export interface IProjectOptions extends AnyOptions {
  code?: boolean;
  view?: boolean;
  metadata?: boolean;
  level?: number;
  save?: boolean;
  output?: string;
  force?: boolean;
  dryRun?: boolean;
}

export class ProjectCommand extends BaseCommand<IProjectOptions> {
  public name = "project";
  public description = `Initialise un nouveau projet et crée un fichier de configuration.`;
  helpAfterText = `
Actions possibles :
  service <Name>        Génère un service
  dto <Name>            Génère un DTO
  resource <Name>       Génère une Resource API Platform

Exemples :
  mclp generate service User --force
  mclp generate dto Project
  mclp generate resource Task
`;
  public arguments = "<action> [pathIn] [pathOut]";
  public aliases = ["p"];

  // Ajout de "yaml" dans les extensions autorisées
  private readonly extensions = ["json", "md", "yaml"];

  public options: ICommandOption[] = [
    // ... tes options restent identiques
    {
      flags: "-n, --new",
      description: "Générer l'arborescence en json, yaml, md",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-f, --force",
      description: "Écraser les fichiers existants",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-d, --dry-run",
      description: "Simuler la création sans écrire",
      type: "boolean",
      defaultValue: false,
    },
  ];

  async execute(args: string[], options: IProjectOptions): Promise<void> {
    const [action, ...rest] = args;
    this.cli.logger.info("Initialisation d'un nouveau projet...");
    const frontend = FRAMEWORKS_FRONTEND;
    const backend = FRAMEWORKS_BACKEND;
    const database = DATABASES;

    const [command, subType] = action.split(":");
    console.log(`command: ${command} subType: ${subType}`);
    if (command === "new") {
      this.cli.logger.info("Initialisation d'un nouveau projet...");
      const frontend = FRAMEWORKS_FRONTEND;
      const backend = FRAMEWORKS_BACKEND;
      const database = DATABASES;
      const [command, subType] = action.split(":");
      console.log(`command: ${command} subType: ${subType}`);
    }
    const answers = await inquirer.prompt<IProjectCommand>([
      {
        type: "input",
        name: "existence",
        message: "✋ Projet existant y/yes | n/no:",
        validate: (input: string) => (input.trim() !== "" ? true : "Le nom du projet est requis."),
      },
      {
        type: "input",
        name: "name",
        message: "👉  Nom du projet :",
        validate: (input: string) => (input.trim() !== "" ? true : "Le nom du projet est requis."),
      },
      {
        type: "input",
        name: "path",
        message: "👉  Chemin du projet :",
        validate: (input: string) =>
          input.trim() !== "" ? true : "Le chemin du projet est requis.",
      },
      {
        type: "input",
        name: "starUml",
        message: "👉  Chemin du fichier starUml :",
        // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
      },
      {
        type: "checkbox",
        name: "frontends",
        message: "👉  Choisir le Frontend",
        choices: [...frontend],
        // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
      },
      {
        type: "checkbox",
        name: "backends",
        message: "👉  Choisir le Backend",
        choices: [...backend],
        // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
      },
      {
        type: "checkbox",
        name: "databases",
        message: "👉  Choisir la base de données",
        choices: [...database],
        // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
      },
      /*
      {
        type: "confirm",
        name: "includeLinter",
        message: "👉  Voulez-vous inclure un linter ?",
        default: true,
      },*/
    ]);

    const configFileName = `${answers.name}-config.json`;
    const configFilePath = path.join(process.cwd(), configFileName);
    if (answers.path == ".") {
      answers.path = process.cwd();
    }
    try {
      if (answers.existence === "y" || answers.existence === "yes") {
        // await this.cli.fileSystem.writeFileJson(
        //   configFilePath,
        //   createConfigProjectExisting(answers),
        // );
      } else {
        const config = await this.cli.project.newProject(answers);
        await this.cli.fileSystem.writeFileJson(configFilePath, config);
      }
      this.cli.logger.info(`✅ 🤞Fichier de configuration créé : ${configFilePath}`);
      this.cli.logger.info(`🚀 commande pour généré le projet: cl create-project ${answers.name}`);
    } catch (err: unknown) {
      this.cli.errorHandler.handle(
        err as Error,
        "❌ Erreur lors de la création du fichier de configuration :",
      );
    }
  }
}
