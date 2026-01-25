/**
 * Interface définissant les capacités d'un service d'exécution de commandes shell.
 * Fournit des méthodes pour exécuter des commandes de manière synchrone et asynchrone.
 */
export interface IShellService {
  /**
   * Exécute une commande shell de manière synchrone (bloquante).
   * @param command - La commande shell à exécuter.
   * @returns La sortie standard (stdout) de la commande.
   */
  executeSync(command: string): string;

  /**
   * Exécute une commande shell de manière asynchrone (non-bloquante).
   * @param command - La commande shell à exécuter.
   * @returns Une promesse résolue avec la sortie standard (stdout) de la commande.
   */
  execute(command: string): Promise<string>;
}
