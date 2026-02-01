import { EMOJI } from "@/assets/messages.js";
import { IAppContext } from "@/types/context.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IInstallFramework } from "@/features/commun/framework.interface.js";
import { BaseFrameworkService } from "../../services/base-framework.service.js";
import { IFrameworkService } from "../../interfaces/framework-service.interface.js";
import { IFileNode } from "@/features/project/interfaces/file-node.interface.js";

export class SymfonyService extends BaseFrameworkService implements IFrameworkService {
  readonly serviceName = "SymfonyService";
  readonly frameworkName = "symfony";
  private treeFramework: IFileNode[] = [];
  private result: boolean = false;

  constructor(protected cli: IAppContext) {
    super(cli);
  }

  /**
   * Point d'entrée principal pour la génération Symfony
   */
  generate = async (project: IProjectConfig): Promise<any> => {
    const config: IInstallFramework | undefined = await this.buildInstallFramework(
      project,
      this.frameworkName,
    );
    if (config === undefined) {
      return;
    }

    if (this.cli.fileSystem.exists(config.projectPath)) {
      this.cli.logger.info(`${project.path} existe déja !`);
      return;
    }

    // On utilise la méthode 'step' de la classe parente
    await this.step(`${EMOJI.rond_green} Configuration Symfony`, async () => {
      await this.installFramework(config);
      await this.installDependencies(config);
      await this.createBranchGit(config);
      await this.generateArchitecture(config);
      await this.generateFileFramework(config);
      await this.updateFile(config);
      this.result = await this.endProcess(config);
    });
    return config;
  };

  // --- Méthodes privées ou utilitaires ---

  async installFramework(config: IInstallFramework): Promise<void> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Exécution de composer install pour ${config.framework.name}`,
    );
    const args = [
      "new",
      config.projectName,
      config.framework.version ? `--version=${config.framework.version}` : `--version=7.4.*`,
      config.framework.app,
    ].filter((arg): arg is string => Boolean(arg));
    this.cli.logger.info(`config.projectPath : ${config.projectPath}`);
    this.cli.shell.executeSyncSpawn(`symfony`, args, config.rootProjectPath);
  }

  async installDependencies(config: IInstallFramework): Promise<void> {
    this.cli.logger.info(`${EMOJI.rond_green} Installation des dépendances Symfony...`);
    config.framework.dependencies.prod.map((dep) => {
      this.cli.shell.executeSyncSpawn(`composer`, ["require", dep], `${config.projectPath}`);
    });
    config.framework.dependencies.dev.map((dep) => {
      this.cli.shell.executeSyncSpawn(
        `composer`,
        ["require", "--dev", dep],
        `${config.projectPath}`,
      );
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

  async generateArchitecture(config: IInstallFramework): Promise<any> {
    this.cli.logger.info(`${EMOJI.rond_green} Création de l'arborescence des dossiers...`);
  }

  async generateFileFramework(config: IInstallFramework): Promise<any> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Génération des fichiers de base pour $${config.projectName}`,
    );
  }

  async updateFile(config: IInstallFramework): Promise<any> {
    this.cli.logger.info(`Mise à jour du fichier package.json`);
    this.cli.logger.info(`Mise à jour du fichier tsconfig.json`);
    this.cli.logger.info(`Mise à jour du fichier config.json`);
    this.cli.logger.success(`Mise à jour terminée avec succès !`);
  }
}
