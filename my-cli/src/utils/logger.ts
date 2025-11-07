import chalk from "chalk";

export function logInfo(message: string) {
  console.info(chalk.blue(`INFO -> ${message}`));
}

export function logSuccess(message: string) {
  logInfo(chalk.green(`SUCCESS -> ${message}`));
}

export function logWarning(message: string) {
  console.warn(chalk.yellow(`WARNING -> ${message}`));
}

export function logError(message: string) {
  console.error(chalk.red(`ERROR -> ${message}`));
}

export function logDebug(message: string) {
  console.debug(chalk.magenta`DEBUG -> ${message}`);
}
