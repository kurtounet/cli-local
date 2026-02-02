import { BaseCommand } from "@/commands/BaseCommand.js";

import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";

import inquirer from "inquirer";
import { IProjectCommand } from "@/features/project/interfaces/project-command.interface.js";
import { FRAMEWORKS } from "@/features/frameworks/common/config/config-frameworks.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";

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
  mclp project|p new|n [names...]       Génère un nouveau projet.
  mclp project|p generate|g [names]     Génère un projet a partir d'un fichier de configuration.
  mclp project|p init|i                 Initialise le projet pour la cli.
`;
  public arguments = "<action> [names...]";
  public aliases = ["p"];

  // Ajout de "yaml" dans les extensions autorisées
  private readonly possibleAction = ["new", "n", "generate", "g", "init", "i"];

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

    if (!this.possibleAction.includes(action)) {
      this.cli.logger.error(`Veuillez fournir une action. 
Choix :
new ou n :pour créer un nouveau fichier de configuration pour un projet.
generate ou g: pour génerer le projet a partir d'une configuration existante.
`);
      return;
    }
    let response = "";
    if (action === "new" || action === "n") {
      this.cli.logger.info("Initialisation d'un nouveau projet...");
      const answers = await inquirer.prompt<IProjectCommand>([
        {
          type: "input",
          name: "existence",
          message: "✋ Projet existant y/yes | n/no:",
          validate: (input: string) =>
            input.trim() !== "" ? true : "Le nom du projet est requis.",
        },
        {
          type: "input",
          name: "name",
          message: "👉  Nom du projet :",
          validate: (input: string) =>
            input.trim() !== "" ? true : "Le nom du projet est requis.",
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
          choices: [...FRAMEWORKS.frontend],
          // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        },
        {
          type: "checkbox",
          name: "backends",
          message: "👉  Choisir le Backend",
          choices: [...FRAMEWORKS.backend],
          // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        },
        {
          type: "checkbox",
          name: "databases",
          message: "👉  Choisir la base de données",
          choices: [...FRAMEWORKS.databases],
          // validate: (input: string) => input.trim() !== '' ? true : 'Le chemin du projet est requis.',
        },
        {
          type: "input",
          name: "generate",
          message: "✋ Voulez-vous générer le Projet y/yes | n/no:",
          default: true,
        },
        /*
      {
        type: "confirm",
        name: "includeLinter",
        message: "👉  Voulez-vous inclure un linter ?",
        default: true,
      },*/
      ]);
      const config = await this.newProject(answers);
      if (answers.generate) {
        response = await this.generateProject(config);
      }
    } else if (action === "generate" || action === "g") {
      const configFileName = `${rest[0]}-config.json`;
      const configFilePath = this.cli.fileSystem.resolvePath(configFileName);
      const config = await this.cli.fileSystem.readFileJson(configFilePath);
      response = await this.generateProject(config);
    } else if (action === "init" || action === "i") {
      // const configFileName = `${rest[0]}-config.json`;
      // const configFilePath = this.cli.fileSystem.resolvePath(configFileName);
      // const config = await this.cli.fileSystem.readFileJson(configFilePath);
      await this.loadConfigProject();
    }
    this.cli.logger.info(response);
    return;
  }
  async newProject(answers: any): Promise<IProjectConfig> {
    const configFileName = `${answers.name}-config.json`;
    if (answers.path == ".") {
      answers.path = process.cwd();
    }
    const configFilePath = this.cli.fileSystem.resolvePath(answers.path, configFileName);
    let config = {} as IProjectConfig;
    try {
      if (answers.existence === "y" || answers.existence === "yes") {
        // await this.cli.fileSystem.writeFileJson(
        //   configFilePath,
        //   createConfigProjectExisting(answers),
        // );
      } else {
        config = await this.cli.project.newProject(answers);
        this.cli.logger.info(`${config}`);
        await this.cli.fileSystem.writeFileJson(configFilePath, config as unknown as string);
      }
      this.cli.logger.info(`✅ 🤞Fichier de configuration créé : ${configFilePath}`);
      this.cli.logger.info(`🚀 commande pour généré le projet: mclp p g ${answers.name}`);
    } catch (err: unknown) {
      this.cli.errorHandler.handle(
        err as Error,
        "❌ Erreur lors de la création du fichier de configuration :",
      );
    }
    return config;
  }
  async generateProject(config: IProjectConfig): Promise<string> {
    return this.cli.project.generateProject(config);
  }
  async loadConfigProject(): Promise<void> {
    this.cli.logger.info("Récupération du fichier de configuration (.mclprc.json)...");
    this.cli.fileSystem.exists(".cli-local");
    this.cli.config.load(".mclprc.json");
    this.cli.logger.info("Vérification du fichier de configuration...");
  }
}
