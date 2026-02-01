import { IInstallFramework } from "@/features/commun/framework.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";

export interface IFrameworkService {
  /** Nom unique du service pour le logging ou le debugging */
  readonly serviceName: string;

  /** * La méthode principale appelée par le FrameworkService (Chef d'orchestre).
   * Elle doit être définie comme une propriété de fonction (arrow function)
   * pour préserver le contexte 'this'.
   */
  generate: (project: IProjectConfig) => Promise<any>;

  /** Installation spécifique du framework (ex: ng new, create-react-app) */
  installFramework(config: IInstallFramework): Promise<void>;

  /** Installation des dépendances via npm/yarn/pnpm */
  installDependencies(config: IInstallFramework): Promise<void>;

  /** Création de la branche git */
  createBranchGit(config: IInstallFramework): Promise<void>;

  /** Création des dossiers et de l'arborescence */
  generateArchitecture(config: IInstallFramework): Promise<any>;

  /** Création des fichiers de configuration spécifiques (ex: angular.json, vite.config.ts) */
  generateFileFramework(config: IInstallFramework): Promise<any>;
}
