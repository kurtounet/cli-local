import chalk from "chalk";

export class LoggerService {
  success(msg: string) {
    console.log(chalk.green("✔ ") + msg);
  }
  error(msg: string) {
    console.log(chalk.red("✖ ") + msg);
  }
  info(msg: string) {
    console.log(chalk.blue("ℹ ") + msg);
  }
  warn(msg: string) {
    console.log(chalk.yellow("⚠ ") + msg);
  }
}
