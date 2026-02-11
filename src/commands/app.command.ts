import { dump } from "js-yaml";

import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";
import { IAppConfig } from "@/types/config.interface.js";

import { BaseCommand } from "./BaseCommand.js";
export interface IAppOptions extends AnyOptions {
  init?: boolean;
  see?: boolean;
  force?: boolean;
  dryRun?: boolean;
  verbose?: boolean;
  help?: boolean;
}
export class AppCommand extends BaseCommand {
  public name = "app";
  public description = `Traite le fichier de configuration de la CLI (json, yaml, js)`;
  public arguments = "<action> [format]";
  public aliases = ["a"];

  public options: ICommandOption[] = [
    {
      flags: "-i, --init",
      description: "Créer le fichier de configuration (default: json)",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-s, --see",
      description: "Visualiser le fichier de configuration",
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
    {
      flags: "-v, --verbose",
      description: "Afficher les détails",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-h, --help",
      description: "Afficher l'aide",
      type: "boolean",
      defaultValue: false,
    },
  ];

  async execute(args: string[], options: IAppOptions): Promise<void> {
    //TODO : add options
    this.validateArgs(args, 1, "Usage: mclp app <action> [format]");
    const [action, rest] = args;
    const format = (rest ?? "json").toLowerCase() as "yaml" | "json" | "js";
    const projectPath = process.cwd();

    const config: IAppConfig = this.cli.config.current;

    switch (action) {
      case "init":
        await this.handlerInit(format, projectPath, config);
        break;
      case "see":
        this.handlerView(config);
        break;
    }
  }

  public async handlerInit(
    format: string,
    projectPath: string,
    config: IAppConfig,
  ): Promise<void> {
    let fileName = "";
    let content = "";
    switch (format) {
      case "yaml":
        fileName = ".mclprc.yaml";
        content = "# MCLP Configuration\n" + dump(config);
        break;
      case "js":
        fileName = ".mclprc.js";
        content = `export default ${JSON.stringify(config, null, 2)};`;
        break;
      default:
        fileName = ".mclprc.json";
        content = JSON.stringify(config, null, 2);
        break;
    }

    const configPath = this.cli.path.join(projectPath, fileName);
    await this.cli.fileSystem.writeFile(configPath, content);
    this.cli.logger.success(`Fichier ${fileName} créé !`);
  }
  public handlerView(config: IAppConfig): void {
    this.cli.logger.info(JSON.stringify(config, null, 2));
  }
}
