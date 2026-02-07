import * as fs from "fs";
import path from "path";

import { IGenerateOptions } from "@/commands/GenerateCommand.js";
import { IGeneratorService } from "@/types/services/generator.interface.js";

import { BaseService } from "./base-service.service.js";

export class GeneratorService extends BaseService implements IGeneratorService {
  readonly serviceName = "GeneratorService";

  private content = "";
  private fileName = "";
  private folder = "";
  private targetPath = "";

  public async newComponent(
    type: string,
    name: string,
    options: IGenerateOptions,
  ): Promise<void> {
    this.fileName = this.getFileName(type, name);
    this.folder = this.getTargetFolder(type);
    this.targetPath = this.cli.path.join(
      this.cli.rootPath,
      this.folder,
      this.fileName,
    );

    switch (type) {
      case "service":
        this.content = this.scaffoldService(name);
        await this.save(this.targetPath, this.content, options);
        this.fileName = this.getFileName("interface", name);
        this.targetPath = `${this.getTargetFolder("interface")}/${this.fileName}`;
        this.content = this.scaffoldInterface(name);
        await this.save(this.targetPath, this.content, options);
        break;
      case "command":
        this.content = this.scaffoldCommand(name);
        await this.save(this.targetPath, this.content, options);
        break;
      case "framework":
        this.scaffoldFramework(name);
        // await this.save(this.targetPath, this.content, options);
        break;
      case "template":
        this.content = this.scaffoldTemplate(name);
        await this.save(this.targetPath, this.content, options);
        break;
    }

    if (options.dryRun) {
      this.cli.logger.info(
        `[DRY-RUN] Créerait le fichier : ${this.targetPath}`,
      );
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
        return "src/types/services";
      case "command":
        return "src/commands";
      case "template":
        return "src/templates";
      default:
        return "src";
    }
  }

  private scaffoldCommand(name: string): string {
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

  private scaffoldTemplate(name: string): string {
    return `import { BaseService } from "./base-service.service.js";\n\nexport class ${name}Service extends BaseService {}`;
  }

  private scaffoldService(name: string): string {
    const newName = this.cli.case.toKebabCase(name);
    const className = this.cli.case.toPascalCase(newName);
    const serviceName = `${this.cli.case.toKebabCase(newName)}-service`;
    return `import { BaseService } from "./base-service.service.js";      
import { I${className}Service } from "@/types/services/${serviceName}.interface.js";

export class ${className}Service extends BaseService implements I${className}Service {
  readonly serviceName = "${className}Service";

  public async init(): Promise<void> {
    // Implémentation par défaut vide
    // return Promise.resolve();
  }
  }
      `;
  }

  private scaffoldInterface(name: string): string {
    const className = this.cli.case.toPascalCase(name);
    return `export interface I${className}Service {
serviceName: string;
init(): Promise<void>
}`;
  }

  private scaffoldFramework(frameworkName: string) {
    const name = frameworkName.toLowerCase();
    const baseDir = this.cli.path.join(
      process.cwd(),
      "src/features/frameworks",
      name,
    );

    // 1. Création de l'arborescence
    const dirs = [
      "services",
      "templates",
      "config",
      "models",
      "mocks",
      "utils",
    ];
    dirs.forEach((dir) =>
      fs.mkdirSync(this.cli.path.join(baseDir, dir), { recursive: true }),
    );

    // 2. Création d'un Template d'Exemple (Hello World)
    const templatePath = this.cli.path.join(
      baseDir,
      "templates",
      `${name}-example.template.ts`,
    );
    const templateContent = `
import { IEntityJson } from '../../../types';

export function ${name}ExampleTemplate(entity: IEntityJson): string {
  return \`// Fichier généré pour l'entité : \${entity.name}
export class \${entity.name} {
  constructor() {
    console.log("Hello from ${frameworkName}!");
  }
}\`;
}`;

    // 3. Création de l'Index (Le Portail) qui importe déjà l'exemple
    const indexPath = this.cli.path.join(baseDir, "services", "index.ts");
    const indexContent = `
import { IEntityJson, IProjectConfig } from '../../../types';
import { ${name}ExampleTemplate } from '../templates/${name}-example.template';

type EntityFn = (entity: IEntityJson) => string;
type ConfigFn = (config: IProjectConfig) => string;

export const ${frameworkName.charAt(0).toUpperCase() + name.slice(1)}Gen = {
  views: {
    example: ${name}ExampleTemplate as EntityFn,
  },
  data: {
    // Tes futurs templates de config ici
  }
};`;

    fs.writeFileSync(templatePath, templateContent);
    fs.writeFileSync(indexPath, indexContent);

    console.log(`
🚀 Framework "${frameworkName}" initialisé !
📂 Dossier : ${baseDir}
📝 Template créé : ${name}-example.template.ts
🔗 Index prêt : services/index.ts
  `);
  }

  private async save(
    targetPath: string,
    content: string,
    options: IGenerateOptions,
  ): Promise<void> {
    const exists = this.cli.fileSystem.exists(targetPath);
    if (exists && !options.force) {
      this.cli.logger.warn(`Le fichier ${targetPath} existe déjà. Saute.`);
      return;
    }
    await this.cli.fileSystem.writeFile(targetPath, content);
  }
}
