import chalk from "chalk";

import { ILoggerService } from "@/types/services/logger-service.interface.js";

import { BaseService } from "./base-service.service.js";

export class LoggerService extends BaseService implements ILoggerService {
  readonly serviceName = "LoggerService";
  init(): Promise<void> {
    return Promise.resolve();
  }
  info(message: string, meta?: object): void {
    console.log(
      chalk.blue("ℹ"),
      message,
      meta ? chalk.gray(JSON.stringify(meta)) : "",
    );
  }

  success(message: string): void {
    console.log(chalk.green("✔"), chalk.bold(message));
  }

  warn(message: string, meta?: object): void {
    console.warn(chalk.yellow("⚠"), chalk.yellow(message), meta || "");
  }

  error(message: string, error?: Error): void {
    console.error(chalk.red("✖"), chalk.red.bold(message));
    if (error && this.config.logLevel === "debug") {
      console.error(chalk.gray(error.stack));
    }
  }

  debug(message: string, meta?: object): void {
    if (this.config.logLevel === "debug") {
      console.log(chalk.magenta("⚙ [DEBUG]"), message, meta || "");
    }
  }
}
