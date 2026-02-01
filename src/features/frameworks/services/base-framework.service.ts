import { EMOJI } from "@/assets/messages.js";
import { IInstallFramework } from "@/features/commun/framework.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IAppContext } from "@/types/context.interface.js";
import path from "node:path";

export abstract class BaseFrameworkService {
  constructor(protected cli: IAppContext) {}

  /**
   * Méthode utilitaire pour exécuter une étape avec logging automatique
   */
  protected async step(label: string, action: () => Promise<any>): Promise<any> {
    try {
      this.cli.logger.info(`${label}...`);
      await action();
      this.cli.logger.success(`${label} terminé !`);
    } catch (error) {
      this.cli.logger.error(`Échec : ${label}`);
      throw error;
    }
  }
  async buildInstallFramework(
    config: IProjectConfig,
    name: string,
  ): Promise<IInstallFramework | undefined> {
    const framework = config.frameworks.find((f) => f.name.toLowerCase() === name.toLowerCase());
    const databases = config.databases;
    if (framework === undefined || databases === undefined) return;
    return {
      projectName: `${config.projectName}-${framework?.type}`,
      rootProjectPath: config.path,
      projectPath: path.join(config.path, `${config.projectName}-${framework?.type}`),
      framework: framework,
      databases: databases,
    };
  }
  // Ces méthodes peuvent être surchargées (override) si besoin
  async installDependencies(config: IInstallFramework): Promise<void> {
    await this.step("Installation des dépendances", async () => {
      // Logique commune de npm install ici
    });
  }

  async generateArchitecture(config: IInstallFramework): Promise<void> {
    await this.step("Génération de l'architecture", async () => {
      // Logique commune de création de dossiers
    });
  }

  async createBranchGit(config: IInstallFramework): Promise<void> {
    this.cli.logger.info(`${EMOJI.rond_green} Création de la branche git...`);
    if (config.framework?.gitBranch) {
      let command = "";
      config.framework.gitBranch.forEach((branchName, index) => {
        if (index === 0) {
          command += `git branch ${branchName}`;
        } else {
          command += ` && git branch ${branchName}`;
        }
      });
      command += ` && git checkout ${config.framework.gitBranchCheckout}`;

      this.cli.shell.executeSyncSpawn(command, [], `${config.projectPath}`);
    } else {
      this.cli.logger.error(`${EMOJI.error} Erreur lors de la création des branches !`);
    }
    this.cli.logger.info(`${EMOJI.success} Branch git créée avec succès !`);
  }
  async endProcess(config: IInstallFramework): Promise<any> {
    return config;
  }
}
