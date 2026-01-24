import { Command } from "commander";
import { BaseCommand } from "../commands/BaseCommand.js";

export class CliApp {
  private program: Command;

  constructor(private commands: BaseCommand[]) {
    this.program = new Command();
    this.configureGlobalMeta();
    this.registerCommands();
  }

  private configureGlobalMeta() {
    this.program.name("my-cli").description("Une CLI pro en TypeScript").version("1.0.0");
  }

  private registerCommands() {
    this.commands.forEach((cmd) => cmd.register(this.program));
  }

  public run() {
    this.program.parse(process.argv);
  }
}
