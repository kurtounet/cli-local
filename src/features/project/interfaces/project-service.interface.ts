import { IProjectCommand } from "./project-command.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IBaseService } from "@/types/services/base-service.interface.js";

/**
 * Interface définissant les capacités du service de gestion de la configuration spécifique au projet.
 * Cette interface est actuellement vide mais pourrait être étendue pour inclure des méthodes
 * de lecture, écriture ou validation de la configuration d'un projet spécifique.
 */
export interface IProjectService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  newProject(project: IProjectCommand): Promise<IProjectConfig>;
  generateProject(project: IProjectConfig): Promise<string>;
  loadProject(path: string): Promise<void>;
}
