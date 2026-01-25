/**
 * Interface générique pour la définition d'un plugin.
 * Les plugins sont des modules dynamiquement chargeables qui étendent les fonctionnalités de la CLI.
 */
export interface IPlugin {
  /**
   * Le nom unique du plugin.
   */
  name: string;
  /**
   * Une brève description de ce que fait le plugin.
   */
  description: string;
  /**
   * La méthode principale d'exécution du plugin.
   * @param args - Les arguments passés au plugin pour son exécution.
   * @returns Une promesse qui se résout une fois l'exécution du plugin terminée.
   */
  execute(args: any): Promise<void>;
}
