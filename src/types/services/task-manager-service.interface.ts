import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les capacités potentielles d'un service de gestion des tâches.
 * Actuellement vide, cette interface pourrait être étendue pour inclure des méthodes
 * de gestion de tâches centralisées pour l'application CLI, en complément ou en remplacement
 * du plugin de gestion de tâches existant.
 */
export interface ITaskManagerService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
}
