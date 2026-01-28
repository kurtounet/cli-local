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
  description = "Génère des artefacts (service, command, template, framework)";
  arguments = "<target> <name...>";
  aliases = ["g"];

  options = [
    { flags: "-f, --force", description: "Écrase si existe", type: "boolean", defaultValue: false },
    { flags: "-o, --output <dir>", description: "Répertoire de sortie", type: "string" },
  ] satisfies ICommandOption[];

  async execute(args: string[], options: IGenerateOptions): Promise<void> {
    // target + au moins 1 name
    this.validateArgs(args, 2, "Usage: mclp generate <target> <name...> [options]");

    const target = String(args[0]).toLowerCase() as Target;
    const names = args.slice(1).map(String).filter(Boolean);

    const force = this.hasOption(options, "force");
    const output = this.getOption(options, "output", "./");

    if (!["service", "command", "template", "framework"].includes(target)) {
      throw new Error(`Target invalide "${target}". Valides: service|command|template|framework`);
    }

    for (const name of names) {
      switch (target) {
        case "service":
          await this.generateService(name, { output, force });
          break;
        case "command":
          await this.generateCommand(name, { output, force });
          break;
        case "template":
          await this.generateTemplate(name, { output, force });
          break;
        case "framework":
          await this.generateFramework(name, { output, force });
          break;
      }

      this.success(`${target} "${name}" généré dans ${output}`);
    }
  }

  // ---- Stubs : à brancher sur tes services réels
  private async generateService(name: string, ctx: { output: string; force: boolean }) {
    this.info(`(stub) service: ${name} -> ${ctx.output} force=${ctx.force}`);
    // await this.generator.generateService(...)
  }

  private async generateCommand(name: string, ctx: { output: string; force: boolean }) {
    this.info(`(stub) command: ${name} -> ${ctx.output} force=${ctx.force}`);
    // await this.generator.generateCommand(...)
  }

  private async generateTemplate(name: string, ctx: { output: string; force: boolean }) {
    this.info(`(stub) template: ${name} -> ${ctx.output} force=${ctx.force}`);
    // await this.templateService.createTemplate(...)
  }

  private async generateFramework(name: string, ctx: { output: string; force: boolean }) {
    this.info(`(stub) framework: ${name} -> ${ctx.output} force=${ctx.force}`);
    // await this.generator.generateFramework(...)
  }
}
