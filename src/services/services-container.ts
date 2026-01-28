import { IServicesContainer } from "@/types/services-container.interface.js";
import { IBaseService } from "@/types/base-service.interface.js";

/**
 * Conteneur de services (Service Container)
 * Implémente le pattern Service Locator pour l'injection de dépendances
 *
 * Ce conteneur permet de :
 * - Enregistrer des services par leur nom
 * - Récupérer des services de manière typée
 * - Initialiser tous les services en une seule fois
 * - Centraliser la gestion du cycle de vie des services
 */
export class ServicesContainer implements IServicesContainer {
  /**
   * Map interne pour stocker les services
   * Clé : nom du service (ex: "LoggerService", "FileSystemService")
   * Valeur : instance du service implémentant IBaseService
   */
  private services = new Map<string, IBaseService>();

  /**
   * Enregistre un service dans le conteneur
   *
   * @param name - Nom unique du service (utilisé pour la récupération)
   * @param service - Instance du service à enregistrer
   *
   * @example
   * container.register("LoggerService", new LoggerService(context));
   */
  public register(name: string, service: IBaseService): void {
    this.services.set(name, service);
  }

  /**
   * Récupère un service par son nom avec typage fort
   *
   * @template T - Type du service attendu (doit étendre IBaseService)
   * @param name - Nom du service à récupérer
   * @returns L'instance du service typée
   * @throws Error si le service n'existe pas dans le conteneur
   *
   * @example
   * const logger = container.get<LoggerService>("LoggerService");
   * logger.info("Message de log");
   */
  public get<T extends IBaseService>(name: string): T {
    const service = this.services.get(name);

    if (!service) {
      throw new Error(`Service "${name}" non trouvé dans le conteneur`);
    }

    return service as T;
  }

  /**
   * Récupère tous les services enregistrés dans le conteneur
   * Utile pour des opérations globales comme l'initialisation ou le nettoyage
   *
   * @returns Tableau contenant toutes les instances de services
   *
   * @example
   * const allServices = container.getAll();
   * console.log(`${allServices.length} services enregistrés`);
   */
  public getAll(): IBaseService[] {
    return Array.from(this.services.values());
  }

  /**
   * Initialise tous les services enregistrés de manière asynchrone
   *
   * Cette méthode appelle la méthode init() de chaque service en parallèle
   * via Promise.all, ce qui optimise le temps de démarrage de l'application
   *
   * L'ordre d'initialisation n'est pas garanti. Si des services ont des
   * dépendances entre eux, ils doivent gérer cela via le contexte partagé.
   *
   * @throws Error si l'initialisation d'un service échoue
   *
   * @example
   * await container.initializeAll();
   * console.log("Tous les services sont prêts");
   */
  public async initializeAll(): Promise<void> {
    const allServices = this.getAll();

    // Initialisation parallèle de tous les services pour optimiser le démarrage
    await Promise.all(allServices.map((service) => service.init()));
  }
}
