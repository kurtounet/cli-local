import { BaseCommand } from "./BaseCommand.js";
export class InitCommand extends BaseCommand {
  public name = "init";
  public description = "Initialise le dossier de templates de ScroFolder";

  public options = [
    {
      flags: "-f, --force",
      description: "Force la réinitialisation même si le dossier existe",
      defaultValue: false,
    },
  ];

  async execute(args: string[], options: Record<string, unknown>): Promise<void> {
    console.log("Options reçues:", options);
    const targetDir = this.cli.config.templatesPath;

    this.logger.info("Vérification de l'environnement...");

    const exists = await this.cli.fileSystem.exists(targetDir);

    if (exists && !options.force) {
      this.logger.warn(`Le dossier '${targetDir}' existe déjà. Utilisez --force pour écraser.`);
      return;
    }

    // Action : Création du dossier
    await this.cli.fileSystem.createDirectory(targetDir);

    // Exemple de création d'un fichier de config par défaut
    await this.cli.fileSystem.writeFile(
      `${targetDir}/example.json`,
      JSON.stringify({ name: "template-exemple", version: "1.0.0" }, null, 2),
    );

    this.logger.success(`ScroFolder initialisé avec succès dans : ${targetDir}`);
  }
}
