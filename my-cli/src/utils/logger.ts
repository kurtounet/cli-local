import { EMOJI } from "@constants/messages";
import chalk from "chalk";

export function logInfo(message: string) {
  console.info(chalk.blue(`${EMOJI.info}-> ${message}`));
}

export function logSuccess(message: string) {
  logInfo(chalk.green(`${EMOJI.success} -> ${message}`));
}

export function logWarning(message: string) {
  console.warn(chalk.yellow(`${EMOJI.warning} -> ${message}`));
}

export function logError(message: string) {
  console.error(chalk.red(`${EMOJI.error} -> ${message}`));
}

export function logDebug(message: string) {
  console.debug(chalk.magenta`${EMOJI.debug} -> ${message}`);
}
export function logAction(message: string) {
  console.debug(chalk.blue`${EMOJI.build} -> ${message}`);
}
