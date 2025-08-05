import { execSync } from "child_process";
import { logInfo, logSuccess, logError } from "./logger";

export function executeCommand(
  command: string,
  options: object,
  startMessage: string,
  successMessage: string,
  errorMessage: string,
): boolean {
  // const Commande = `${command} ${process.cwd}`;

  try {
    logInfo(startMessage);
    execSync(command, options); //, { stdio: "inherit" }
    logSuccess(successMessage);
    return true;
  } catch (error) {
    logError(errorMessage);
    return false;
  }
}
