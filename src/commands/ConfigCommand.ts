import { BaseCommand } from "./BaseCommand.js";
export class ConfigCommand extends BaseCommand {
  public name = "config";
  public description = "Initialise la configuration de la CLI";
  public arguments = "<type> [names...]";
  public aliases = ["cfg"];

  public options = [
    {
      flags: "-i, --input <path>",
      description: "Chemin vers le fichier de configuration",
      defaultValue: "./config.json",
    },
    {
      flags: "-o, --output <path>",
      description: "Chemin vers le dossier de sortie",
      defaultValue: "./dist",
    },
    {
      flags: "-f, --force",
      description: "Force la réinitialisation même si le dossier existe",
      defaultValue: false,
    },
  ];

  public async execute(args: string[], options: any): Promise<void> {
    if (args.length === 0) {
      this.logger.info("Modes interactifs disponibles : ");
      // Ici tu pourrais appeler Inquirer pour demander le type
      return;
    }
    if (options["-i"] === "") {
      this.logger.info("Modes interactifs disponibles : ");
      // Ici tu pourrais appeler Inquirer pour demander le type
      return;
    }
    console.log(`Args`, args);
    console.log("Options:", options);
    // const targetDir = this.cli.config.templatesPath;
    // this.logger.info("Vérification de l'environnement...");
    // const exists = await this.cli.fileSystem.exists(targetDir);

    // if (exists && !options.force) {
    //   this.logger.warn(`Le dossier '${targetDir}' existe déjà. Utilisez --force pour écraser.`);
    //   return;
    // }

    // // Action : Création du dossier
    // await this.cli.fileSystem.createDirectory(targetDir);

    // // Exemple de création d'un fichier de config par défaut
    // await this.cli.fileSystem.writeFile(
    //   `${targetDir}/example.json`,
    //   JSON.stringify({ name: "template-exemple", version: "1.0.0" }, null, 2),
    // );

    // this.logger.success(`ScroFolder initialisé avec succès dans : ${targetDir}`);
  }
}
