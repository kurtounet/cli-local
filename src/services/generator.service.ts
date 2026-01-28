import path from "path";
import { BaseService } from "./base-service.service.js";
import { IGeneratorService } from "@/types/services/generator.interface.js";
import { IGenerateOptions } from "@/commands/GenerateCommand.js";

export class GeneratorService extends BaseService implements IGeneratorService {
  readonly serviceName = "GeneratorService";

  private content = "";
  private fileName = "";
  private folder = "";
  private targetPath = "";

  public async newComponent(type: string, name: string, options: IGenerateOptions): Promise<void> {
    this.fileName = this.getFileName(type, name);
    this.folder = this.getTargetFolder(type);
    this.targetPath = path.join(this.cli.rootPath, this.folder, this.fileName);

    switch (type) {
      case "service":
        this.content = this.getTemplateContentService(name);
        await this.save(this.targetPath, this.content, options);
        this.fileName = this.getFileName("interface", name);
        this.targetPath = `${this.getTargetFolder("interface")}/${this.fileName}`;
        this.content = this.getTemplateContentInterfaceService(name);
        await this.save(this.targetPath, this.content, options);
        break;
      case "command":
        this.content = this.getTemplateContentCommand(name);
        await this.save(this.targetPath, this.content, options);
        break;
      case "template":
        this.content = this.getTemplateContentTemplate(name);
        await this.save(this.targetPath, this.content, options);
        break;
    }

    if (options.dryRun) {
      this.cli.logger.info(`[DRY-RUN] Créerait le fichier : ${this.targetPath}`);
      return;
    }
  }

  private getFileName(type: string, name: string): string {
    switch (type) {
      case "service":
        return `${this.cli.case.toKebabCase(name)}.service.ts`;
      case "interface":
        return `${this.cli.case.toKebabCase(name)}-service.interface.ts`;
      case "command":
        return `${this.cli.case.toKebabCase(name)}.command.ts`;
      case "template":
        return `${this.cli.case.toKebabCase(name)}.template.ts`;
      default:
        return `${this.cli.case.toKebabCase(name)}.ts`;
    }
  }

  private getTargetFolder(type: string): string {
    switch (type) {
      case "service":
        return "src/services";
      case "interface":
        return "src/types";
      case "command":
        return "src/commands";
      case "template":
        return "src/templates";
      default:
        return "src";
    }
  }

  private getTemplateContentCommand(name: string): string {
    const className = this.cli.case.toPascalCase(name);
    const commandName = this.cli.case.toKebabCase(name);
    return `import { BaseCommand } from "./BaseCommand.js";
      import { ValidationError } from "@/errors/cli-errors.js";
      
      export class ${className}Command extends BaseCommand {
        public name = "${commandName}";
        public description = "Génère un nouvel élément de la CLI (Service, Command, Template)";
        public arguments = "<type> [names...]";
        public aliases = ["m"];
      
        public options = [
          { flags: "-f, --force", description: "Écraser les fichiers existants", defaultValue: false },
          { flags: "-d, --dry-run", description: "Simuler la création sans écrire", defaultValue: false },
        ];

        public async execute(args: string[], options: any): Promise<void> {
          const [type, ...names] = args; 
          this.logger.success("✅ ${name} Création de ${name} : Opération terminée.");
        }
      }
      `;
  }

  private getTemplateContentTemplate(name: string): string {
    return `import { BaseService } from "./base-service.service.js";\n\nexport class ${name}Service extends BaseService {}`;
  }

  private getTemplateContentService(name: string): string {
    const newName = this.cli.case.toKebabCase(name);
    const className = this.cli.case.toPascalCase(newName);
    const serviceName = `${this.cli.case.toKebabCase(newName)}-service`;
    return `import { BaseService } from "./base-service.service.js";      
      import { I${className}Service } from "@/types/${serviceName}.interface.js";
      
      export class ${className}Service extends BaseService implements I${className}Service {
      }
      `;
  }

  private getTemplateContentInterfaceService(name: string): string {
    const className = this.cli.case.toPascalCase(name);
    return `export interface I${className}Service {}`;
  }

  private async save(
    targetPath: string,
    content: string,
    options: IGenerateOptions,
  ): Promise<void> {
    const exists = await this.cli.fileSystem.exists(targetPath);
    if (exists && !options.force) {
      this.cli.logger.warn(`Le fichier ${targetPath} existe déjà. Saute.`);
      return;
    }
    await this.cli.fileSystem.writeFile(targetPath, content);
  }
}
