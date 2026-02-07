import { EMOJI } from "@/assets/messages.js";
import { IInstallFramework } from "@/features/commun/framework.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import { IAppContext } from "@/types/context.interface.js";

export abstract class BaseFrameworkService {
  constructor(protected cli: IAppContext) {}

  protected async step(
    label: string,
    action: () => Promise<any>,
  ): Promise<any> {
    try {
      this.cli.logger.info(`${label}...`);
      await action();
      this.cli.logger.success(`${label} terminé !`);
    } catch (error) {
      this.cli.logger.error(`Échec : ${label}`);
      throw error;
    }
  }

  // Ces métodes peuventêtre surchargées (override) si besoin
  async buildInstallFramework(
    config: IProjectConfig,
    name: string,
  ): Promise<IInstallFramework | null> {
    const framework = config.frameworks.find(
      (f) => f.name.toLowerCase() === name.toLowerCase(),
    );
    const databases = config.databases;
    if (framework === undefined || databases === undefined) return null;
    const projectPath = this.cli.path.join(
      config.path,
      `${config.projectName}-${framework?.type}`,
    );
    // await this.configCli(projectPath);
    await Promise.resolve();
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

  async generateArchitecture(config: IInstallFramework): Promise<unknown> {
    const architecture = config.framework.architecture;
    await this.cli.tool.createDirectoryStructure(
      config.projectPath,
      architecture,
    );
    await this.step("Génération de l'architecture", async () => {
      // Logique commune de création de dossiers
    });
    return Promise.resolve();
  }

  async createBranchGit(config: IInstallFramework): Promise<void> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Configuration des branches git...`,
    );
    // 1. Forcer la création d'un nouveau dépôt Git local au projet
    this.cli.shell.executeSyncSpawn(
      `git init`,
      [],
      "inherit",
      true,
      config.projectPath,
    );
    // 2. IMPORTANT : Créer un commit initial
    // On ne peut pas créer de branches (dev, release) sur un dépôt vide
    try {
      this.cli.shell.executeSyncSpawn(
        `git add .`,
        [],
        "inherit",
        true,
        config.projectPath,
      );
      this.cli.shell.executeSyncSpawn(
        `git commit -m "initial commit"`,
        [],
        "inherit",
        true,
        config.projectPath,
      );
    } catch (e) {
      // Si c'est déjà commité (comme avec Symfony), on ignore l'erreur
    }

    if (config.framework?.gitBranch && config.framework.gitBranch.length > 0) {
      try {
        // On crée/réinitialise chaque branche individuellement
        for (const branchName of config.framework.gitBranch) {
          // "git checkout -B" évite l'erreur "already exists"
          this.cli.shell.executeSyncSpawn(
            `git checkout -B ${branchName}`,
            [],
            "inherit",
            true,
            config.projectPath,
          );
        }

        // On se place sur la branche finale souhaitée
        if (config.framework.gitBranchCheckout) {
          this.cli.shell.executeSyncSpawn(
            `git checkout ${config.framework.gitBranchCheckout}`,
            [],
            "inherit",
            true,
            config.projectPath,
          );
        }

        this.cli.logger.info(
          `${EMOJI.success} Branches git configurées avec succès !`,
        );
      } catch (error) {
        this.cli.errorHandler.handle(
          error,
          `${EMOJI.error} Échec de la configuration Git.`,
        );
      }
    } else {
      this.cli.logger.error(`${EMOJI.error} Aucune branche configurée !`);
    }
    await Promise.resolve();
  }

  async configCli(projectPath: string): Promise<void> {
    await this.cli.config.initConfigFile(projectPath);
    this.cli.logger.info(`${EMOJI.success} Fichier config chargé !`);
  }
  // endProcess(config: IInstallFramework): Promise<any> {
  //   return config;
  // }
  async generateFileCli(
    project: IProjectConfig,
    entitiesJson: IGetEntityJson,
    fileMdj: string,
    config: IInstallFramework,
  ): Promise<void> {
    const projectPath = config.projectPath;
    const cliFolder = `${projectPath}/.cli-local`;

    this.cli.logger.info(
      `${EMOJI.start} 1 - Génération du fichier de configuration de CLI`,
    );

    // const newConfig: IAppConfig = this.cli.config.defaults;
    // newConfig.tree.exclude = config.framework.excludes ?? [];

    try {
      await Promise.all([
        this.cli.fileSystem.writeFile(
          `${cliFolder}/config-project.json`,
          JSON.stringify(project, null, 2),
        ),
        this.cli.fileSystem.writeFile(
          `${cliFolder}/entities.json`,
          JSON.stringify(entitiesJson, null, 2),
        ),
        // this.cli.fileSystem.writeFile(
        //   `${projectPath}/.mclprc.json`,
        //   JSON.stringify(newConfig, null, 2),
        // ),
        this.cli.fileSystem.writeFile(`${cliFolder}/mcd.json`, fileMdj),

        this.cli.fileSystem.writeFile(`${cliFolder}/mcd.mdj`, fileMdj),
      ]);

      this.cli.logger.success(
        `${EMOJI.success} Fichier de CLI générées avec succès !`,
      );
    } catch (error) {
      this.cli.errorHandler.handle(
        error,
        `${EMOJI.error} Échec lors de la génération `,
      );
      throw error;
    }
  }
  async updateFile(config: IInstallFramework): Promise<unknown> {
    this.cli.logger.info(`Mise à jour du fichier package.json`);
    this.cli.logger.info(`Mise à jour du fichier tsconfig.json`);
    this.cli.logger.info(`Mise à jour du fichier config.json`);
    this.cli.logger.success(`Mise à jour terminée avec succès !`);
    return Promise.resolve();
  }
}
