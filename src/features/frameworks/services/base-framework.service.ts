import { EMOJI } from "@/assets/messages.js";
import { IInstallFramework } from "@/features/commun/framework.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import { IAppConfig } from "@/types/config.interface.js";
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
  ): Promise<IInstallFramework | null> {
    const framework = config.frameworks.find((f) => f.name.toLowerCase() === name.toLowerCase());
    const databases = config.databases;
    if (framework === undefined || databases === undefined) return null;
    const projectPath = path.join(config.path, `${config.projectName}-${framework?.type}`);
    this.configCli(projectPath);
    return {
      projectName: `${config.projectName}-${framework?.type}`,
      rootProjectPath: config.path,
      projectPath: projectPath,
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
    this.cli.logger.info(`${EMOJI.rond_green} Configuration des branches git...`);
    // 1. Forcer la création d'un nouveau dépôt Git local au projet
    this.cli.shell.executeSyncSpawn(`git init`, [], config.projectPath);
    // 2. IMPORTANT : Créer un commit initial
    // On ne peut pas créer de branches (dev, release) sur un dépôt vide
    try {
      this.cli.shell.executeSyncSpawn(`git add .`, [], config.projectPath);
      this.cli.shell.executeSyncSpawn(`git commit -m "initial commit"`, [], config.projectPath);
    } catch (e) {
      // Si c'est déjà commité (comme avec Symfony), on ignore l'erreur
    }

    if (config.framework?.gitBranch && config.framework.gitBranch.length > 0) {
      try {
        // On crée/réinitialise chaque branche individuellement
        for (const branchName of config.framework.gitBranch) {
          // "git checkout -B" évite l'erreur "already exists"
          this.cli.shell.executeSyncSpawn(`git checkout -B ${branchName}`, [], config.projectPath);
        }

        // On se place sur la branche finale souhaitée
        if (config.framework.gitBranchCheckout) {
          this.cli.shell.executeSyncSpawn(
            `git checkout ${config.framework.gitBranchCheckout}`,
            [],
            config.projectPath,
          );
        }

        this.cli.logger.info(`${EMOJI.success} Branches git configurées avec succès !`);
      } catch (error) {
        this.cli.logger.error(`${EMOJI.error} Échec de la configuration Git : ${error}`);
      }
    } else {
      this.cli.logger.error(`${EMOJI.error} Aucune branche configurée !`);
    }
  }

  async configCli(projectPath: string): Promise<void> {
    this.cli.config.initConfigFile(projectPath);
    this.cli.logger.info(`${EMOJI.success} Fichier config chargé !`);
  }
  async endProcess(config: IInstallFramework): Promise<any> {
    return config;
  }
  async generateFileCli(
    project: IProjectConfig,
    entitiesJson: IGetEntityJson,
    fileMdj: any,
    config: IInstallFramework,
  ): Promise<any> {
    const projectPath = config.projectPath;
    const cliFolder = `${projectPath}/.cli-local`;

    this.cli.logger.info(`${EMOJI.start} 1 - Génération du fichier de configuration de CLI`);

    let newConfig: IAppConfig = this.cli.config.defaults;
    newConfig.tree.exclude = config.framework.excludes || [];

    try {
      await Promise.all([
        await this.cli.fileSystem.writeFile(
          `${cliFolder}/config-project.json`,
          JSON.stringify(project, null, 2),
        ),
        await this.cli.fileSystem.writeFile(
          `${cliFolder}/entities.json`,
          JSON.stringify(entitiesJson, null, 2),
        ),
        await this.cli.fileSystem.writeFile(
          `${projectPath}/.mclprc.json`,
          JSON.stringify(newConfig, null, 2),
        ),
        await this.cli.fileSystem.writeFile(`${cliFolder}/mcd.json`, fileMdj),

        await this.cli.fileSystem.writeFile(`${cliFolder}/mcd.mdj`, fileMdj),
      ]);

      this.cli.logger.success(`${EMOJI.success} Fichier de CLI générées avec succès !`);
    } catch (error) {
      this.cli.errorHandler.handle(`${EMOJI.error} Échec lors de la génération : ${error}`);
      throw error;
    }
  }
}
