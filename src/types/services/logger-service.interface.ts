import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les capacités d'un service de journalisation (logging).
 * Fournit différentes méthodes pour enregistrer des messages avec des niveaux de sévérité variés.
 */
export interface ILoggerService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  /**
   * Enregistre un message d'information.
   * @param message - Le message à enregistrer.
   * @param meta - Des métadonnées optionnelles associées au message.
   */
  info(message: string, meta?: object): void;
  /**
   * Enregistre un message d'avertissement.
   * @param message - Le message d'avertissement à enregistrer.
   * @param meta - Des métadonnées optionnelles associées au message.
   */
  warn(message: string, meta?: object): void;
  /**
   * Enregistre un message d'erreur.
   * @param message - Le message d'erreur à enregistrer.
   * @param error - L'objet erreur optionnel associé au message.
   */
  error(message: string, error?: Error): void;
  /**
   * Enregistre un message de succès.
   * @param message - Le message de succès à enregistrer.
   */
  success(message: string): void;
  /**
   * Enregistre un message de débogage. Visible uniquement si le niveau de log est approprié.
   * @param message - Le message de débogage à enregistrer.
   * @param meta - Des métadonnées optionnelles associées au message.
   */
  debug(message: string, meta?: object): void;
}
