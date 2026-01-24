import { ValidationError } from "@/errors/cli-errors.js";
import { BaseCommand } from "./BaseCommand.js";

export class GenerateCommand extends BaseCommand {
  public name = "generate";
  public description =
    "Génère des composants (service, command, template) pour la CLI";
  public aliases = ["g"];

  public async execute(args: string[]): Promise<void> {
    const [type, ...name] = args;
    /*
    if (!type || !name) {
      throw new ValidationError(
        "Usage: mclp generate|g <type> <name1> <name2>... (ex: mclp g service Auth User Post)",
      );
    }

    this.cli.logger.info(`Génération d'un ${type} nommé : ${name}...`);

    switch (type.toLowerCase()) {
      case "service":
        await this.generateService(name);
        break;
      case "command":
        await this.generateCommand(name);
        break;
      case "template":
        await this.generateTemplate(name);
        break;
      default:
        throw new ValidationError("Types valides : service, command, template");
    }
  }

  private async generateService(name: string[]) {
    const fileName = `${name.toLowerCase()}.service.ts`;
    const targetPath = `./src/services/${fileName}`;

    const content = `import { BaseService } from "./base-service.service.js";

export class ${name}Service extends BaseService {
  // Ajoutez votre logique ici
}
`;
    await this.cli.fileSystem.writeFile(targetPath, content);
    this.cli.logger.success(`Service créé : ${targetPath}`);
    this.cli.logger.warn(`N'oubliez pas de l'enregistrer dans AppContextBuilder.ts !`);
  }

  private async generateCommand(name: string[]) {
    const fileName = `${name}Command.ts`;
    const targetPath = `./src/commands/${fileName}`;

    const content = `import { BaseCommand } from "./BaseCommand.js";

export class ${name}Command extends BaseCommand {
  public name = "${name.toLowerCase()}";
  public description = "Description pour ${name}";

  public async execute(args: string[], options: any): Promise<void> {
    this.cli.logger.info("Exécution de ${name}...");
  }
}
`;
    await this.cli.fileSystem.writeFile(targetPath, content);
    this.cli.logger.success(`Commande créée : ${targetPath}`);
  }

  private async generateTemplate(name: string[]) {
    const targetPath = `${this.cli.config.templatesPath}/${name}/index.json`;
    const defaultContent = JSON.stringify({ name, version: "1.0.0", files: [] }, null, 2);

    await this.cli.fileSystem.createDirectory(`${this.cli.config.templatesPath}/${name}`);
    await this.cli.fileSystem.writeFile(targetPath, defaultContent);
    this.cli.logger.success(`Dossier template créé : ${this.cli.config.templatesPath}/${name}`);
  }

  */
  }
}
