import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les capacités d'un service d'exécution de commandes shell.
 * Fournit des méthodes pour exécuter des commandes de manière synchrone et asynchrone.
 */
export interface IShellService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  /**
   * Exécute une commande shell de manière synchrone (bloquante).
   * @param command - La commande shell à exécuter.
   * @returns La sortie standard (stdout) de la commande.
   */
  executeSync(command: string, cwd: string): string;

  /**
   * Exécute une commande shell de manière asynchrone (non-bloquante).
   * @param command - La commande shell à exécuter.
   * @returns Une promesse résolue avec la sortie standard (stdout) de la commande.
   */
  execute(command: string): Promise<string>;

  executeSpawn(
    command: string,
    args: string[],
    shell: boolean,
    cwd?: string,
  ): Promise<string>;

  executeSyncSpawn(
    command: string,
    args: string[],
    stdio: "pipe" | "inherit", // On met inherit par défaut pour le suivi
    shell: boolean, // true est souvent nécessaire pour Angular/npm sur Windows
    cwd?: string,
  ): string;
}
