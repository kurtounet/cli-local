import { BaseCommand } from "@/commands/BaseCommand.js";
import chokidar from "chokidar";
import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";

import inquirer from "inquirer";
import { IProjectCommand } from "@/features/project/interfaces/project-command.interface.js";
import { FRAMEWORKS } from "@/features/frameworks/common/config/config-frameworks.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { ProjectService } from "../services/project.service.js";
import { TaskService } from "../services/task.service.js";

export interface IProjectOptions extends AnyOptions {
  code?: boolean;
  view?: boolean;
  metadata?: boolean;
  level?: number;
  save?: boolean;
  output?: string;
  force?: boolean;
  dryRun?: boolean;
  internalWatch?: boolean;
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
  private readonly possibleAction = ["new", "n", "generate", "g", "load", "l", "watch", "w"];

  public options: ICommandOption[] = [
    // ... tes options restent identiques
    {
      flags: "-n, --new",
      description: "Générer l'arborescence en json, yaml, md",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "--internal-watch",
      description: "Flag interne pour le mode surveillance",
      type: "boolean",
      defaultValue: false,
      // hidden: true, // Pour qu'elle n'apparaisse pas dans le --help
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

  // taskService = this.cli.services.get<TaskService>("TaskService");
  // projectService = this.cli.services.get<ProjectService>("ProjectService");

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
          default: false,
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
        if (answers.generate === "y" || answers.generate === "yes") {
          response = await this.cli.project.generateProject(config);
        }
      }
    } else if (action === "generate" || action === "g") {
      const configFileName = `${rest[0]}-config.json`;
      const configFilePath = this.cli.fileSystem.resolvePath(configFileName);
      const config = await this.cli.fileSystem.readFileJson(configFilePath);
      response = await this.cli.project.generateProject(config);
    } else if (action === "load" || action === "l") {
      await this.cli.project.loadProject(process.cwd());
    } else if (action === "watch" || action === "w") {
      const targetPath = rest[0] || ".";
      // Si l'option n'est pas présente, on lance le processus node --watch
      if (!options.internalWatch) {
        await this.watchAction(targetPath);
      } else {
        await this.cli.project.loadProject(targetPath);
      }
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

  async watchAction(path: string) {
    const watcher = chokidar.watch(path, {
      ignored: /node_modules|.cli-local/,
    });

    watcher.on("change", async (filePath) => {
      console.log(`-> Fichier modifié : ${filePath}`);
      const ext = filePath.split(".").pop();

      switch (ext) {
        case "mdj":
          // Tâche de synchronisation du modèle
          console.log("Tâche de synchronisation du modèle");
          // await this.cli.task.runTask("Sync StarUML", () => projectService.parserMdj(filePath));
          break;

        case "json":
          if (filePath.includes(".mclprc.json")) {
            // Tâche de rechargement de configuration
            console.log("Tâche de rechargement de configuration");
            // await this.cli.task.runTask("Reload Config", () => projectService.loadConfig(filePath));
          }
          break;

        case "php":
        case "ts":
          // Exemple : Lancer un linter ou une analyse de code dès qu'un fichier source change
          await this.cli.task.runTask("Code Analysis", async () => {
            this.cli.logger.info("Analyse du code source en cours...");
            // Ta logique ici
          });
          break;
      }
    });
  }
}
