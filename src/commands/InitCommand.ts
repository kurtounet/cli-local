import { dump } from "js-yaml";
import path from "node:path";
import { BaseCommand } from "./BaseCommand.js";

export class InitCommand extends BaseCommand {
  public name = "init";
  public description =
    "Initialise le fichier de configuration (json, yaml, js)";
  public arguments = "[format]";

  async execute(args: string[]): Promise<void> {
    const format = (args[0] || "json").toLowerCase() as "yaml" | "json" | "js";
    const projectPath = process.cwd();

    // On récupère les défauts depuis le service pour générer le fichier
    const defaults = this.cli.configService.defaults;
    let fileName = "";
    let content = "";

    switch (format) {
      case "json":
        fileName = ".mclprc.json";
        content = JSON.stringify(defaults, null, 2);
        break;
      case "js":
        fileName = ".mclprc.js";
        content = `export default ${JSON.stringify(defaults, null, 2)};`;
        break;
      default: // yaml
        fileName = ".mclprc.yaml";
        // content = "# MCLP Configuration\n" + dump(defaults);
        content = "# MCLP Configuration\n";

        break;
    }

    const fullPath = path.join(projectPath, fileName);
    await this.cli.fileSystem.writeFile(fullPath, content);
    this.cli.logger.success(`Fichier ${fileName} créé !`);
  }
}
