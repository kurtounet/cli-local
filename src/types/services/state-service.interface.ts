import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les capacités d'un service de gestion d'état simple.
 * Permet de stocker et de récupérer des valeurs par clé au sein de l'application.
 */
export interface IStateService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  /**
   * Récupère une valeur associée à une clé spécifique.
   * @template T - Le type attendu de la valeur.
   * @param key - La clé de la valeur à récupérer.
   * @returns La valeur associée à la clé, ou `undefined` si la clé n'existe pas.
   */
  get<T>(key: string): T | undefined;
  /**
   * Définit une valeur pour une clé spécifique.
   * @template T - Le type de la valeur à définir.
   * @param key - La clé sous laquelle la valeur sera stockée.
   * @param value - La valeur à stocker.
   */
  set<T>(key: string, value: T): void;
  /**
   * Vérifie si une clé existe dans l'état.
   * @param key - La clé à vérifier.
   * @returns `true` si la clé existe, `false` sinon.
   */
  has(key: string): boolean;
  /**
   * Efface toutes les valeurs stockées dans l'état.
   */
  clear(): void;
}
