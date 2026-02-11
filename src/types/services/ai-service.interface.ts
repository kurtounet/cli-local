import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les capacités du service d'Intelligence Artificielle.
 * Ce contrat permet à l'IA de manipuler le système de fichiers, de gérer des plugins
 * et d'exécuter des outils dynamiques.
 */
export interface IAiService extends IBaseService {
  serviceName: string;
  pluginsPath: string;
  init(): Promise<void>;

  /**
   * Envoie une instruction au modèle de langage.
   * @param prompt - L'instruction ou la question destinée à l'IA.
   * @returns La réponse textuelle du modèle.
   */
  chat(prompt: string): Promise<string>;

  /**
   * Lit le contenu d'un fichier texte sur le disque.
   * @param path - Le chemin vers le fichier à lire.
   * @returns Le contenu brut du fichier.
   */
  readFile(path: string): Promise<string>;

  /**
   * Écrit du contenu dans un fichier (écrase si existant).
   * @param path - Le chemin de destination.
   * @param content - Le texte à sauvegarder.
   * @returns
   */
  writeFile(path: string, content: string): Promise<void>;

  /**
   * Récupère la liste des plugins (.plugin.js) disponibles.
   * @returns Un tableau contenant les noms des outils sans extension.
   */
  listTools(): Promise<string[]>;

  /**
   * Demande à l'IA de générer le code source d'un nouveau plugin.
   * @param prompt - La description des fonctionnalités attendues pour le plugin.
   * @returns Le code source JavaScript (ESM) généré.
   */
  generatePlugin(prompt: string): Promise<string>;

  /**
   * Enregistre un nouveau plugin dans le répertoire dédié du projet.
   * @param name - Le nom de l'outil (utilisé pour le nom de fichier).
   * @param code - Le code source JavaScript à enregistrer.
   * @returns
   */
  savePlugin(name: string, code: string): Promise<void>;

  /**
   * Charge dynamiquement et exécute un plugin existant.
   * @param name - Le nom de l'outil à lancer.
   * @param [args] - Paramètres optionnels à passer à la méthode execute du plugin.
   * @returns Le résultat retourné par l'exécution du plugin.
   */
  executeTool(name: string, args?: unknown): Promise<unknown>;

  /**
   * Charge dynamiquement et exécute un plugin existant.
   * @param name - Le nom de l'outil à lancer.
   * @param [args] - Paramètres optionnels à passer à la méthode execute du plugin.
   * @returns Le résultat retourné par l'exécution du plugin.
   */
  executeToolMCP(name: string, args: unknown[]): Promise<unknown>;
}
