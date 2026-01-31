import { IBaseService } from "@/types/services/base-service.interface.js";
import { IProjectCommand } from "./project-command.interface.js";

/**
 * Interface définissant les capacités du service de gestion de la configuration spécifique au projet.
 * Cette interface est actuellement vide mais pourrait être étendue pour inclure des méthodes
 * de lecture, écriture ou validation de la configuration d'un projet spécifique.
 */
export interface IProjectService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  newProject(project: IProjectCommand): Promise<any>;
  generateProject(project: string): string;
  updateTsConfig(): Promise<void>;
}
