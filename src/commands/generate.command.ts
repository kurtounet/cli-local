import { BaseCommand } from "@/commands/BaseCommand.js";
import type { AnyOptions } from "@/types/cli-options.type.js";
import type { ICommandOption } from "@/types/command.interface.js";

export interface IGenerateOptions extends AnyOptions {
  force?: boolean;
  output?: string;
}

type Target = "service" | "command" | "template" | "framework";

export class GenerateCommand extends BaseCommand<IGenerateOptions> {
  name = "generate";
  description = "Génère des Composants de la CLI (service, command, template, framework)";
  arguments = "<type> <name...>";
  aliases = ["g"];

  options = [
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
      flags: "-o, --output <dir>",
      description: "Répertoire de sortie",
      type: "string",
    },
  ] satisfies ICommandOption[];

  async execute(args: string[], options: IGenerateOptions): Promise<void> {
    this.validateArgs(args, 2, "Usage: mclp generate <type> <name...> [options]");

    const type = String(args[0]).toLowerCase() as Target;
    const names = args.slice(1).map(String).filter(Boolean);

    const force = this.hasOption(options, "force");
    const output = this.getOption(options, "output", "./src/tests");

    if (!["service", "command", "template", "framework"].includes(type)) {
      throw new Error(`Type invalide "${type}". Valides: service|command|template|framework`);
    }

    for (const name of names) {
      switch (type) {
        case "service":
          await this.generator.newComponent(type, name, { output, force });
          break;
        case "command":
          await this.generator.newComponent(type, name, { output, force });
          break;
        case "template":
          await this.generator.newComponent(type, name, { output, force });
          break;
        case "framework":
          await this.generator.newComponent(type, name, { output, force });
          break;
      }

      this.success(`${type} "${name}" généré dans ${output}`);
    }
  }
}
/*
 async execute(args: string[], options: IMakeOptions): Promise<void> {
    // const output = this.getOption(options, "output", "./dist");
    // const force = this.hasOption(options, "force");

    const [type, ...names] = args;
    console.log("Arguments reçus:", args);
    console.log("Options reçues:", options);

    // 1. Mode interactif si aucun type
    if (!type) {
      this.cli.logger.info(
        "Modes interactifs disponibles : " + this.actions.join(", "),
      );
      // Ici tu pourrais appeler Inquirer pour demander le type
      return;
    }

    const normalizedType = type.toLowerCase();

    // 2. Validation
    if (!this.actions.includes(normalizedType)) {
      throw new ValidationError(
        `Type invalide. Choix : ${this.actions.join(", ")}`,
      );
    }

    // 3. Gestion multiple (noms séparés par espaces ou virgules)
    const namesArray = names
      .flatMap((n) => n.split(","))
      .map((n) => n.trim())
      .filter((n) => n.length > 0);

    if (namesArray.length === 0) {
      this.cli.logger.warn("Veuillez fournir au moins un nom.");
      return;
    }

    // 4. Exécution
    for (const name of namesArray) {
      await this.cli.generator.newComponent(normalizedType, name, options);
    }

    this.cli.logger.success("✅ Opération terminée.");
  }
*/
