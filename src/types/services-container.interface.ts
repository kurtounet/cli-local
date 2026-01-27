import { IBaseService } from "./base-service.interface.js";

/**
 * Interface pour un conteneur de services.
 * Permet d'enregistrer, de récupérer et d'initialiser des services au sein de l'application.
 */
export interface IServicesContainer {
  /**
   * Enregistre un service dans le conteneur.
   * @param name - Le nom sous lequel le service sera enregistré.
   * @param service - L'instance du service à enregistrer.
   */
  register(name: string, service: IBaseService): void;
  /**
   * Récupère un service enregistré par son nom.
   * @template T - Le type attendu du service.
   * @param name - Le nom du service à récupérer.
   * @returns L'instance du service, castée au type spécifié.
   */
  get<T extends IBaseService>(name: string): T;
  /**
   * Récupère tous les services enregistrés.
   * @returns Un tableau contenant toutes les instances de services enregistrées.
   */
  getAll(): IBaseService[];
  /**
   * Initialise tous les services enregistrés qui ont une méthode d'initialisation.
   * @returns Une promesse qui se résout une fois tous les services initialisés.
   */
  initializeAll(): Promise<void>;
}
