import { EMOJI } from "@/assets/messages.js";
import { IAppContext } from "@/types/context.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IInstallFramework } from "@/features/commun/framework.interface.js";
import { BaseFrameworkService } from "../../services/base-framework.service.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import { IFrameworkService } from "../../interfaces/framework-service.interface.js";

export class AngularService
  extends BaseFrameworkService
  implements IFrameworkService
{
  private config!: IInstallFramework;
  readonly frameworkName = "angular";
  readonly serviceName = "AngularService";

  constructor(protected cli: IAppContext) {
    super(cli);
  }

  /**
   * Point d'entrée principal pour la génération Angular
   */
  generate = async (
    project: IProjectConfig,
    entitiesJson: IGetEntityJson,
    fileMdj: any,
  ): Promise<void> => {
    this.config = (await this.buildInstallFramework(
      project,
      this.frameworkName,
    )) as IInstallFramework;

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

    this.cli.shell.executeSyncSpawn(`ng`, args, config.rootProjectPath);
  }

  async installDependencies(config: IInstallFramework): Promise<void> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Installation des dépendances Angular...`,
    );
    if (config.framework.mode === "install") {
      config.framework.dependencies.prod.map((dep) => {
        this.cli.shell.executeSyncSpawn(
          `npm`,
          ["install", dep],
          `${config.projectPath}`,
        );
      });
      config.framework.dependencies.dev.map((dep) => {
        this.cli.shell.executeSyncSpawn(
          `npm`,
          ["install", "--save-dev", dep],
          `${config.projectPath}`,
        );
      });
    }
  }
  // async createBranchGit(config: IInstallFramework): Promise<void> {
  //   this.cli.logger.info(`${EMOJI.rond_green} Création de la branche git...`);
  //   if (config.framework?.gitBranch) {
  //     let command = "";
  //     config.framework.gitBranch.forEach((branchName, index) => {
  //       if (index === 0) {
  //         command += `git branch ${branchName}`;
  //       } else {
  //         command += ` && git branch ${branchName}`;
  //       }
  //     });
  //     command += ` && git checkout ${config.framework.gitBranchCheckout}`;

  //     this.cli.shell.executeSyncSpawn(command, [], `${config.projectPath}`);
  //   } else {
  //     this.cli.logger.error(`${EMOJI.error} Erreur lors de la création des branches !`);
  //   }
  //   this.cli.logger.info(`${EMOJI.success} Branch git créée avec succès !`);
  // }
  async generateArchitecture(config: IInstallFramework): Promise<any> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Création de l'arborescence des dossiers...`,
    );
    return Promise.resolve();
  }

  async generateFileFramework(config: IInstallFramework): Promise<any> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Génération des fichiers de base pour ${config.projectName}`,
    );
    return Promise.resolve();
  }

  async updateFile(config: IInstallFramework): Promise<any> {
    this.cli.logger.info(`Mise à jour du fichier package.json`);
    this.cli.logger.info(`Mise à jour du fichier tsconfig.json`);
    this.cli.logger.info(`Mise à jour du fichier config.json`);
    this.cli.logger.success(`Mise à jour terminée avec succès !`);
  }
}
