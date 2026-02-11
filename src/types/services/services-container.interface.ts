import { IBaseService } from "./base-service.interface.js";

/**
 * Interface pour un conteneur de services (Service Container)
 *
 * Définit le contrat pour l'implémentation d'un conteneur de services
 * qui gère le cycle de vie et l'injection de dépendances des services
 * de l'application.
 *
 * Pattern utilisé : Service Locator
 * @example
 * // Utilisation typique
 * const container: IServicesContainer = new ServicesContainer();
 * container.register("LoggerService", loggerInstance);
 * const logger = container.get<LoggerService>("LoggerService");
 * await container.initializeAll();
 */
export interface IServicesContainer {
  /**
   * Enregistre un service dans le conteneur
   *
   * Permet d'ajouter un nouveau service au conteneur avec un nom unique.
   * Ce nom sera utilisé pour récupérer le service ultérieurement.
   * @param name - Le nom unique sous lequel le service sera enregistré
   * @param service - L'instance du service à enregistrer (doit implémenter IBaseService)
   * @example
   * container.register("FileSystemService", new FileSystemService(context));
   */
  register(name: string, service: IBaseService): void;

  /**
   * Récupère un service enregistré par son nom avec typage fort
   *
   * Permet de récupérer un service précédemment enregistré.
   * Le typage générique assure la sécurité des types au moment de la compilation.
   * @template T - Le type attendu du service (doit étendre IBaseService)
   * @param name - Le nom du service à récupérer
   * @returns L'instance du service, castée au type spécifié
   * @throws Error si le service n'existe pas
   * @example
   * const logger = container.get<LoggerService>("LoggerService");
   * logger.info("Message");
   */
  get<T extends IBaseService>(name: string): T;

  /**
   * Récupère tous les services enregistrés
   *
   * Permet d'accéder à l'ensemble des services enregistrés dans le conteneur.
   * Utile pour des opérations globales comme l'initialisation, le nettoyage
   * ou l'inspection du conteneur.
   * @returns Un tableau contenant toutes les instances de services enregistrées
   * @example
   * const services = container.getAll();
   * console.log(`Nombre de services : ${services.length}`);
   */
  getAll(): IBaseService[];

  /**
   * Initialise tous les services enregistrés
   *
   * Appelle la méthode init() de chaque service enregistré.
   * Cette méthode doit être appelée après l'enregistrement de tous les services
   * et avant l'utilisation de l'application.
   *
   * L'initialisation est asynchrone et peut effectuer des opérations comme :
   * - Chargement de configurations
   * - Connexion à des bases de données
   * - Validation de l'environnement
   * - Préparation de ressources
   * @returns Une promesse qui se résout une fois tous les services initialisés
   * @throws Error si l'initialisation d'un service échoue
   * @example
   * await container.initializeAll();
   * console.log("Application prête");
   */
  initializeAll(): Promise<void>;
}
