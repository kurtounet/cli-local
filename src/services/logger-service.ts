import chalk from "chalk"; // Pour les couleurs dans le terminal
import { BaseService } from "./base-service.service.js";
import { ILoggerService } from "@/types/context.interface.js";

export class LoggerService extends BaseService implements ILoggerService {
  info(message: string): void {
    console.log(chalk.blue("ℹ"), message);
  }

  success(message: string): void {
    console.log(chalk.green("✔"), chalk.bold(message));
  }

  warn(message: string): void {
    console.warn(chalk.yellow("⚠"), chalk.yellow(message));
  }

  error(message: string, error?: Error): void {
    console.error(chalk.red("✖"), chalk.red.bold(message));
    if (error && this.config.logLevel === "debug") {
      console.error(chalk.gray(error.stack));
    }
  }

  debug(message: string): void {
    if (this.config.logLevel === "debug") {
      console.log(chalk.magenta("⚙ [DEBUG]"), message);
    }
  }

  // Permet d'afficher des étapes de progression
  step(current: number, total: number, message: string): void {
    console.log(chalk.gray(`[${current}/${total}]`), message);
  }
}
