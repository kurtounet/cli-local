import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les opérations liées à l'architecture du projet.
 * Cela inclut la manipulation de la structure des répertoires et le renommage.
 */
export interface IArchitectureService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
}
