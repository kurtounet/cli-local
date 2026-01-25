/**
 * Interface définissant les capacités d'un service d'interaction utilisateur via des invites (prompts).
 * Permet de poser des questions texte, des confirmations ou des sélections à partir de listes.
 */
export interface IPromptService {
  /**
   * Demande à l'utilisateur de saisir une chaîne de caractères.
   * @param message - Le message à afficher à l'utilisateur.
   * @param name - Le nom de l'entrée (pour l'identification interne, potentiellement).
   * @returns Une promesse résolue avec la chaîne de caractères saisie par l'utilisateur.
   */
  askText(message: string, name: string): Promise<string>;
  /**
   * Demande une confirmation à l'utilisateur (oui/non).
   * @param message - Le message de confirmation à afficher.
   * @returns Une promesse résolue avec `true` pour oui, `false` pour non.
   */
  confirm(message: string): Promise<boolean>;
  /**
   * Présente une liste de choix à l'utilisateur et lui permet d'en sélectionner un seul.
   * @param message - Le message à afficher avant la liste des choix.
   * @param choices - Un tableau de chaînes de caractères représentant les options.
   * @returns Une promesse résolue avec la valeur sélectionnée par l'utilisateur.
   */
  askChoiceList<T>(message: string, choices: string[]): Promise<T>;
  /**
   * Présente une liste de choix à l'utilisateur et lui permet de sélectionner plusieurs options via des cases à cocher.
   * @param message - Le message à afficher avant la liste des choix.
   * @param choices - Un tableau de chaînes de caractères représentant les options.
   * @returns Une promesse résolue avec un tableau des valeurs sélectionnées par l'utilisateur.
   */
  askChoiceCheckbox<T>(message: string, choices: string[]): Promise<T>;
}
