import chokidar from "chokidar";
import inquirer from "inquirer";
import { BaseCommand } from "@/commands/BaseCommand.js";
import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IProjectCommand } from "@/features/project/interfaces/project-command.interface.js";
import { FRAMEWORKS } from "@/features/frameworks/common/config/config-frameworks.js";

export interface ISymfonyOptions extends AnyOptions {
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

export class SymfonyCommand extends BaseCommand<ISymfonyOptions> {
  public name = "sf";
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
  public arguments = "<action> <type> [names...]";
  public aliases = ["p"];

  // Ajout de "yaml" dans les extensions autorisées
  private readonly possibleAction = ["generate", "g"];
  private readonly choices = [
    "All",
    "Environments",
    "Dto",
    "Resource",
    "Form",
    "Listener",
    "Repository",
    "Fixtures",
    "Migration",
    "Mapper",
    "Command",
    "Provider",
    "Processor",
    "Subscriber",
    "State",
    "Entity",
    "FormType",
    "Account",
    "Bdd",
    "Service",
    "Config",
    "Controller",
    "Anthentication",
    "Account/Anthentication",
  ];

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

  async execute(args: string[], options: ISymfonyOptions): Promise<void> {
    const [action, ...rest] = args;
    const [type] = rest;

    if (!this.possibleAction.includes(action)) {
      this.cli.logger.error(`Veuillez fournir une action. 
Choix :
new ou n :pour créer un nouveau fichier de configuration pour un projet.
generate ou g: pour génerer le projet a partir d'une configuration existante.
`);
      return;
    }
    let response = "";
    if (action === "generate" || action === "g") {
      if (type === "all" || type === "a") {
        this.cli.logger.info("Initialisation d'un nouveau projet...");
        const answers = await inquirer.prompt<IProjectCommand>([
          {
            type: "checkbox",
            name: "options",
            message: "Choisir ce que vous voulez generer",
            choices: [...this.choices],
          },
        ]);
        // response = await this.cli.project.generateProject(config);
      }
      if (type === "single" || type === "s") {
        // const configFileName = `${rest[0]}-config.json`;
        // const configFilePath = this.cli.fileSystem.resolvePath(configFileName);
        // const config = await this.cli.fileSystem.readFileJson(configFilePath);
        // response = await this.cli.project.generateProject(config);
      }
    }

    this.cli.logger.info(response);
    return;
  }
}
