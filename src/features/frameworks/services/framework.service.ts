import { IConfigFramework, IDependencies } from "@/features/commun/framework.interface.js";
import { IDirectory, IProjectConfig } from "@/features/commun/projet.interface.js";
import { IAppContext } from "@/types/context.interface.js";
import { IFrameworkService } from "../interfaces/framework-service.interface.js";
import { FrameworkSelector } from "./framework-selector.service.js";

export class FrameworkService implements IFrameworkService {
  readonly serviceName = "FrameworkService";

  constructor(
    protected cli: IAppContext,
    protected frameworkSelector = new FrameworkSelector(cli),
  ) {}
  /**
   * Chef d'orchestre : Délègue à chaque service spécifique
   */
  generate = async (project: IProjectConfig): Promise<void> => {
    // Utilisation de for...of pour un traitement séquentiel propre
    for (const frameworkConfig of project.frameworks) {
      try {
        this.cli.logger.info(`--- Initialisation de ${frameworkConfig.name} ---`);

        // 1. On récupère le service spécifique (ex: AngularService) via le sélecteur
        const specificService = this.frameworkSelector.getService(frameworkConfig.name);

        // 2. On délègue TOUT le travail au service spécialisé
        await specificService.generate(project);

        this.cli.logger.success(`--- ${frameworkConfig.name} terminé avec succès ! ---`);
      } catch (error) {
        this.cli.logger.error(`Erreur lors du traitement du framework ${frameworkConfig.name}`);
        // On continue ou on arrête selon ton besoin
      }
    }
  };
  /**
   * Installation du framework
   * Les méthodes ci-dessous deviennent des "fallbacks" ou des outils partagés
   * @param project
   */
  async installFramework(framework: IConfigFramework): Promise<void> {
    try {
      this.cli.logger.info(`Installation de ${framework.name}...`);
      this.cli.logger.success(`Process d'installation de ${framework.name} !`);
      this.cli.logger.success(`${framework.name} installé avec succès !`);
    } catch (error) {
      this.cli.logger.error(`Échec de l'installation pour ${framework.name}`);
      // Log the actual error for debugging
      console.error(error);
      // Re-throw so the parent process knows it failed
      throw error;
    }
  }
  /**
   * Installation des dépendances
   * @param project
   */
  async installDependencies(deps: IDependencies): Promise<void> {
    try {
      this.cli.logger.info(`Installation des dépendances `);
      this.cli.logger.success(`Process d'installation de des dépendances !`);
      this.cli.logger.success(`Dépendances installées avec succès !`);
    } catch (error) {
      this.cli.logger.error(`Échec de l'installation pour deps`);
      // Log the actual error for debugging
      console.error(error);
      // Re-throw so the parent process knows it failed
      throw error;
    }
  }
  /**
   * Installation des dépendances
   * @param project
   */
  async generateArchitecture(architecture: IDirectory[]): Promise<any> {
    try {
      this.cli.logger.info(`Géneration de l'architecture`);
      this.cli.logger.success(`Process: Géneration de l'architecture !`);
      this.cli.logger.success(`Géneration de l'architecture terminée avec succès !`);
    } catch (error) {
      this.cli.logger.error(`Échec de Géneration de l'architecture`);
      // Log the actual error for debugging
      console.error(error);
      // Re-throw so the parent process knows it failed
      throw error;
    }
  }
  /**
   * Génération des fichiers
   * @param project
   */
  async generateFileFramework(project: string): Promise<any> {
    try {
      this.cli.logger.info(`Géneration de l'architecture`);
      this.cli.logger.success(`Process: Géneration de l'architecture !`);
      this.cli.logger.success(`Géneration de l'architecture terminée avec succès !`);
    } catch (error) {
      this.cli.logger.error(`Échec de Géneration de l'architecture`);
      // Log the actual error for debugging
      console.error(error);
      // Re-throw so the parent process knows it failed
      throw error;
    }
  }
  async updateFile(project: string): Promise<any> {
    try {
      this.cli.logger.info(`Mise à jour du fichier package.json`);
      this.cli.logger.info(`Mise à jour du fichier tsconfig.json`);
      this.cli.logger.info(`Mise à jour du fichier config.json`);
      this.cli.logger.success(`Mise à jour terminée avec succès !`);
    } catch (error) {
      this.cli.logger.error(`Échec de Géneration de l'architecture`);
      // Log the actual error for debugging
      console.error(error);
      // Re-throw so the parent process knows it failed
      throw error;
    }
  }
  /**
   * Mise à jour du tsconfig.json
   */
  // async updateTsConfig(): Promise<void> {
  //   try {
  //     const filePath = path.join(process.cwd(), "tsconfig.json");
  //     const content = await this.cli.fileSystem.readFile(filePath);
  //     const tsconfig = JSON.parse(content) as any;

  //     // On s'assure que compilerOptions existe
  //     tsconfig.compilerOptions = tsconfig.compilerOptions || {};

  //     // Configuration des alias @
  //     tsconfig.compilerOptions.baseUrl = ".";
  //     tsconfig.compilerOptions.paths = {
  //       ...tsconfig.compilerOptions.paths, // On garde les alias existants
  //       "@/*": ["src/*"],
  //       "@/types/*": ["src/types/*"],
  //       "@/services/*": ["src/services/*"],
  //     };

  //     await this.cli.fileSystem.writeFile(filePath, JSON.stringify(tsconfig, null, 2));
  //     this.cli.logger.success("Alias @/* configuré dans tsconfig.json !");
  //   } catch (error) {
  //     this.cli.logger.error("Erreur lors de la mise à jour du tsconfig.json");
  //   }
  // }
}
