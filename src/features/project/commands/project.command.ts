import { watch } from "chokidar";
import inquirer from "inquirer";

import { BaseCommand } from "@/commands/BaseCommand.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IProjectCommand } from "@/features/project/interfaces/project-command.interface.js";
import { FRAMEWORKS } from "@/features/scaffolders/common/config/config-frameworks.js";
import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";

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
  public description =
    "Initialise un nouveau projet et crée un fichier de configuration.";
  public helpAfterText = `
Actions possibles :
  service <Name>        Génère un service
  dto <Name>            Génère un DTO
  resource <Name>       Génère une Resource API Platform

Exemples :
  mclp project|p new|n [names...]       Génère un nouveau projet.
  mclp project|p generate|g [names]     Génère un projet à partir d'un fichier de configuration.
  mclp project|p init|i                 Initialise le projet pour la cli.
`;
  public arguments = "<action> [names...]";
  public aliases = ["p"];

  private readonly possibleAction = [
    "new",
    "n",
    "generate",
    "g",
    "load",
    "l",
    "watch",
    "w",
  ] as const;

  public options: ICommandOption[] = [
    {
      flags: "-n, --new",
      description: "Créer un nouveau fichier de configuration pour un projet",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-w, --watch",
      description: "Flag interne pour le mode surveillance",
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

    if (
      !this.possibleAction.includes(
        action as (typeof this.possibleAction)[number],
      )
    ) {
      this.cli.logger.error(`Veuillez fournir une action valide.
Choix :
  new ou n      : créer un nouveau fichier de configuration pour un projet.
  generate ou g : générer le projet à partir d'une configuration existante.
  load ou l     : charger un projet existant.
  watch ou w    : surveiller les modifications du projet.
`);
      return;
    }

    let response = "";

    if (action === "new" || action === "n") {
      await this.handleNewProject();
    } else if (action === "generate" || action === "g") {
      response = await this.handleGenerateProject(rest);
    } else if (action === "load" || action === "l") {
      await this.cli.project.loadProject(process.cwd());
    } else if (action === "watch" || action === "w") {
      await this.handleWatchProject(rest, options);
    }

    if (response) {
      this.cli.logger.info(response);
    }
  }

  private async handleNewProject(): Promise<void> {
    this.cli.logger.info("Initialisation d'un nouveau projet...");

    const answers = await inquirer.prompt<IProjectCommand>([
      {
        type: "input",
        name: "existence",
        message: "✋ Projet existant y/yes | n/no:",
        validate: (input: string) =>
          input.trim() !== "" ? true : "Une réponse est requise.",
      },
      {
        type: "input",
        name: "name",
        message: "👉 Nom du projet :",
        validate: (input: string) =>
          input.trim() !== "" ? true : "Le nom du projet est requis.",
      },
      {
        type: "input",
        name: "path",
        message: "👉 Chemin du projet :",
        validate: (input: string) =>
          input.trim() !== "" ? true : "Le chemin du projet est requis.",
      },
      {
        type: "input",
        name: "starUml",
        message: "👉 Chemin du fichier StarUML :",
      },
      {
        type: "checkbox",
        name: "frontends",
        message: "👉 Choisir le Frontend",
        choices: [...FRAMEWORKS.frontend],
      },
      {
        type: "checkbox",
        name: "backends",
        message: "👉 Choisir le Backend",
        choices: [...FRAMEWORKS.backend],
      },
      {
        type: "checkbox",
        name: "databases",
        message: "👉 Choisir la base de données",
        choices: [...FRAMEWORKS.databases],
      },
      {
        type: "input",
        name: "generate",
        message: "✋ Voulez-vous générer le projet y/yes | n/no:",
        default: "n",
      },
    ]);

    const config = await this.newProject(answers);

    if (answers.generate === "y" || answers.generate === "yes") {
      const response = await this.cli.project.generateProject(config);
      this.cli.logger.info(response);
    }
  }

  private async handleGenerateProject(rest: string[]): Promise<string> {
    const configFileName = `${rest[0]}-config.json`;
    const configFilePath = this.cli.path.resolve(configFileName);
    const config = (await this.cli.fileSystem.readFileJson(
      configFilePath,
    )) as IProjectConfig;
    return await this.cli.project.generateProject(config);
  }

  private async handleWatchProject(
    rest: string[],
    options: IProjectOptions,
  ): Promise<void> {
    const targetPath = rest[0] || ".";

    if (!options.internalWatch) {
      await this.watchAction(targetPath);
    } else {
      await this.cli.project.loadProject(targetPath);
    }
  }

  async newProject(answers: IProjectCommand): Promise<IProjectConfig> {
    const configFileName = `${answers.name}-config.json`;
    const projectPath = answers.path === "." ? process.cwd() : answers.path;
    const configFilePath = this.cli.path.resolve(projectPath, configFileName);

    let config = {} as IProjectConfig;

    try {
      if (answers.existence === "y" || answers.existence === "yes") {
        // Logique pour projet existant à implémenter
        this.cli.logger.warn(
          "Configuration pour projet existant non implémentée.",
        );
      } else {
        config = this.cli.project.newProject(answers);
        await this.cli.fileSystem.writeFileJson(
          configFilePath,
          config as unknown as string,
        );
      }

      this.cli.logger.info(
        `✅ Fichier de configuration créé : ${configFilePath}`,
      );
      this.cli.logger.info(
        `🚀 Commande pour générer le projet: mclp p g ${answers.name}`,
      );
    } catch (err) {
      this.cli.errorHandler.handle(
        err as Error,
        "❌ Erreur lors de la création du fichier de configuration",
      );
    }

    return config;
  }

  async watchAction(path: string): Promise<void> {
    const watcher = watch(path, {
      ignored: [/node_modules/, /\.cli-local/, /\.git/],
      persistent: true,
      ignoreInitial: true,
    });

    await new Promise<void>((resolve, reject) => {
      watcher.on("ready", () => {
        this.cli.logger.info(`👀 Surveillance active sur : ${path}`);
        this.cli.logger.info("Pressez Ctrl+C pour arrêter.");
        resolve();
      });

      watcher.on("error", (err: unknown) => reject(err));
    });

    watcher.on("change", (filePath: string) => {
      // Pas d'async ici, on lance handleFileChange sans attendre
      // void this.handleFileChange(filePath);
      this.handleFileChange(filePath).catch((error) => {
        const errorMessage =
          error instanceof Error ? error.message : String(error);
        this.cli.logger.error(
          `Erreur non gérée dans handleFileChange: ${errorMessage}`,
        );
      });
    });

    watcher.on("error", (error: unknown) => {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.cli.logger.error(`Erreur Watcher : ${errorMessage}`);
    });
  }

  private async handleFileChange(filePath: string): Promise<void> {
    const ext = filePath.split(".").pop();

    try {
      switch (ext) {
        case "mdj":
          await this.cli.task.runTask("Sync StarUML", async () => {
            this.cli.logger.info(`Structure MDJ modifiée : ${filePath}`);
            // Pas besoin de return explicite, void est accepté
          });
          break;

        case "json":
          if (filePath.endsWith(".mclprc.json")) {
            await this.cli.task.runTask("Reload Config", async () => {
              this.cli.logger.info("Fichier de configuration mis à jour.");
            });
          }
          break;

        case "php":
        case "ts":
          await this.cli.task.runTask("Analyse", async () => {
            this.cli.logger.info(`Analyse syntaxique : ${filePath}`);
          });
          break;
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      this.cli.logger.error(
        `Erreur lors du traitement de ${filePath}: ${errorMessage}`,
      );
    }
  }
}
