import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les opérations liées à l'architecture du projet.
 * Cela inclut la manipulation de la structure des répertoires et le renommage.
 */
export interface IGitService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  pull(): Promise<void>;
  push(): Promise<void>;
  commit(message: string): Promise<void>;
  addToGitignore(path: string, message: string[]): Promise<void>;
  removeInGitignore(path: string, message: string[]): Promise<void>;
}
