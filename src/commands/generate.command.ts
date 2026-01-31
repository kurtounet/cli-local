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
  description =
    "Génère des Composants de la CLI (service, command, template, framework)";
  arguments = "<target> <name...>";
  aliases = ["g"];

  options = [
    {
      flags: "-f, --force",
      description: "Écrase si existe",
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
    this.validateArgs(
      args,
      2,
      "Usage: mclp generate <target> <name...> [options]",
    );

    const target = String(args[0]).toLowerCase() as Target;
    const names = args.slice(1).map(String).filter(Boolean);

    const force = this.hasOption(options, "force");
    const output = this.getOption(options, "output", "./src/tests");

    if (!["service", "command", "template", "framework"].includes(target)) {
      throw new Error(
        `Target invalide "${target}". Valides: service|command|template|framework`,
      );
    }

    for (const name of names) {
      switch (target) {
        case "service":
          await this.generator.newComponent(target, name, { output, force });
          break;
        case "command":
          await this.generator.newComponent(target, name, { output, force });
          break;
        case "template":
          await this.generator.newComponent(target, name, { output, force });
          break;
        case "framework":
          await this.generator.newComponent(target, name, { output, force });
          break;
      }

      this.success(`${target} "${name}" généré dans ${output}`);
    }
  }
}
