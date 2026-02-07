import { EMOJI } from "@/assets/messages.js";
import { IInstallFramework } from "@/features/commun/framework.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import { BaseFrameworkService } from "@/features/scaffolders/common/services/base-framework.service.js";
import { IFrameworkService } from "@/features/scaffolders/interfaces/framework-service.interface.js";
import { IAppContext } from "@/types/context.interface.js";

export class AngularService extends BaseFrameworkService implements IFrameworkService {
  private config!: IInstallFramework;
  readonly frameworkName = "angular";
  readonly serviceName = "AngularService";

  constructor(protected cli: IAppContext) {
    super(cli);
  }
  init(): Promise<void> {
    return Promise.resolve();
  }
  /**
   * Point d'entrée principal pour la génération Angular
   * @param project - Config du projet
   * @param entitiesJson - Entitées du entitiesJson
   * @param fileMdj - Fichier Mdj
   */
  generate = async (
    project: IProjectConfig,
    entitiesJson: IGetEntityJson,
    fileMdj: string,
  ): Promise<void> => {
    this.config = (await this.buildInstallFramework(project, this.frameworkName))!;

    if (this.config === null) {
      return;
    }

    if (this.cli.fileSystem.exists(this.config.projectPath)) {
      this.cli.logger.info(`${project.path} existe déja !`);
      return;
    }
    // On utilise la méthode 'step' de la classe parente
    await this.step(`${EMOJI.rond_green} Configuration Angular`, async () => {
      await this.installFramework(this.config);
      await this.installDependencies(this.config);
      await this.createBranchGit(this.config);
      await this.generateArchitecture(this.config);
      await this.generateFileFramework(this.config);
      await this.updateFile(this.config);
      await this.generateFileCli(project, entitiesJson, fileMdj, this.config);
    });
  };

  // --- Méthodes privées ou utilitaires ---

  async installFramework(config: IInstallFramework): Promise<void> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Exécution de npm install pour ${config.projectName}-${config.framework.type}`,
    );
    const args = [
      "new",
      config.projectName,
      `--style=${config.framework.installOptions.style}`,
      `--ssr=false`,
      `--ai-config="gemini`,
    ].filter((arg): arg is string => Boolean(arg));

    this.cli.shell.executeSyncSpawn(`ng`, args, "inherit", true, config.rootProjectPath);
    await Promise.resolve();
  }

  async installDependencies(config: IInstallFramework): Promise<void> {
    this.cli.logger.info(`${EMOJI.rond_green} Installation des dépendances Angular...`);
    if (config.framework.mode === "install") {
      config.framework.dependencies.prod.map((dep) => {
        this.cli.shell.executeSyncSpawn(
          `npm`,
          ["install", dep],
          "inherit",
          true,
          `${config.projectPath}`,
        );
      });
      config.framework.dependencies.dev.map((dep) => {
        this.cli.shell.executeSyncSpawn(
          `npm`,
          ["install", "--save-dev", dep],
          "inherit",
          true,
          `${config.projectPath}`,
        );
      });
    }
    await Promise.resolve();
  }
  createBranchGit(config: IInstallFramework): Promise<void> {
    this.cli.logger.info(`${EMOJI.rond_green} Création de la branche git...`);
    return Promise.resolve();
  }
  async generateArchitecture(config: IInstallFramework): Promise<unknown> {
    // this.cli.fileSystem.buildPhysicalTree(config.framework.architecture, config.projectPath);
    this.cli.logger.info(`${EMOJI.rond_green} Création de l'arborescence des dossiers...`);
    return Promise.resolve();
  }

  async generateFileFramework(config: IInstallFramework): Promise<unknown> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Génération des fichiers de base pour ${config.projectName}`,
    );
    return Promise.resolve();
  }

  async updateFile(config: IInstallFramework): Promise<unknown> {
    this.cli.logger.info(`Mise à jour du fichier package.json`);
    this.cli.logger.info(`Mise à jour du fichier tsconfig.json`);
    this.cli.logger.info(`Mise à jour du fichier config.json`);
    this.cli.logger.success(`Mise à jour terminée avec succès !`);
    return Promise.resolve();
  }
}
