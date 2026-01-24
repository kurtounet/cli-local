import { Command } from "commander";

import ora from "ora";
import { LoggerService } from "../services/LoggerService.js";
import { BaseCommand } from "./BaseCommand.js";

export class InitCommand extends BaseCommand {
  name = "init";
  description = "Initialise un nouveau projet";

  constructor(private logger: LoggerService) {
    super();
  }

  register(program: Command) {
    program
      .command(this.name)
      .description(this.description)
      .option("-f, --force", "Écrase les fichiers existants")
      .action(async (options) => await this.execute(options));
  }

  protected async execute(options: { force: boolean }) {
    const spinner = ora("Initialisation en cours...").start();

    try {
      // Simulation d'une tâche asynchrone
      await new Promise((resolve) => setTimeout(resolve, 1500));

      spinner.succeed("Projet initialisé avec succès !");
      if (options.force) this.logger.warn("Mode force activé");
    } catch (err) {
      spinner.fail("Échec de l’initialisation");
      this.logger.error(err instanceof Error ? err.message : String(err));
    }
  }
}
