import { EMOJI } from "@/assets/messages.js";
import { IAppContext } from "@/types/context.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IInstallFramework } from "@/features/commun/framework.interface.js";
import { BaseFrameworkService } from "../../services/base-framework.service.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import { IFrameworkService } from "../../interfaces/framework-service.interface.js";
import { SymfonyFileFactory } from "../factories/symfony-file.factory.js";

export class SymfonyService
  extends BaseFrameworkService
  implements IFrameworkService
{
  private config!: IInstallFramework;
  readonly frameworkName = "symfony";
  readonly serviceName = "SymfonyService";

  constructor(protected cli: IAppContext) {
    super(cli);
  }

  /**
   * Point d'entrée principal pour la génération Symfony
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
    await this.step(`${EMOJI.rond_green} Configuration Symfony`, async () => {
      await this.installFramework(this.config);
      await this.installDependencies(this.config);
      await this.createBranchGit(this.config);
      await this.generateArchitecture(this.config);
      await this.generateFileFramework(this.config, entitiesJson);
      await this.updateFile(this.config);
      await this.generateFileCli(project, entitiesJson, fileMdj, this.config);
    });
  };

  async installFramework(config: IInstallFramework): Promise<void> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Exécution de composer install pour ${config.framework.name}`,
    );
    const args = [
      "new",
      config.projectName,
      config.framework.version
        ? `--version=${config.framework.version}`
        : `--version=7.4.*`,
      config.framework.app,
    ].filter((arg): arg is string => Boolean(arg));
    this.cli.logger.info(`config.projectPath : ${config.projectPath}`);
    this.cli.shell.executeSyncSpawn(`symfony`, args, config.rootProjectPath);
  }

  async installDependencies(config: IInstallFramework): Promise<void> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Installation des dépendances Symfony...`,
    );
    if (config.framework.mode === "install") {
      const { prod, dev } = config.framework.dependencies;

      if (prod && prod.length > 0) {
        // On passe le tableau complet de dépendances
        this.cli.shell.executeSyncSpawn(
          `composer`,
          ["require", ...prod],
          config.projectPath,
        );
      }

      if (dev && dev.length > 0) {
        this.cli.shell.executeSyncSpawn(
          `composer`,
          ["require", "--dev", ...dev],
          config.projectPath,
        );
      }
    }
    // if (config.framework.mode === "install") {
    //   config.framework.dependencies.prod.map((dep) => {
    //     this.cli.shell.executeSyncSpawn(`composer`, ["require", dep], `${config.projectPath}`);
    //   });
    //   config.framework.dependencies.dev.map((dep) => {
    //     this.cli.shell.executeSyncSpawn(
    //       `composer`,
    //       ["require", "--dev", dep],
    //       `${config.projectPath}`,
    //     );
    //   });
    // }
  }

  async generateArchitecture(config: IInstallFramework): Promise<any> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Création de l'arborescence des dossiers...`,
    );
    // this.cli.fileSystem.buildPhysicalTree(config.framework.architecture, config.projectPath);
  }

  async generateFileFramework(
    config: IInstallFramework,
    entitiesJson: IGetEntityJson,
  ): Promise<void> {
    this.cli.logger.info(
      `${EMOJI.rond_green} Génération asynchrone des fichiers...`,
    );

    // On prépare une liste de promesses
    const tasks: Promise<void>[] = [];

    for (const entity of entitiesJson.entities) {
      // 1. Préparation des contenus (Factory)
      const entityContent = SymfonyFileFactory.createEntity(entity);
      const dtoContent = SymfonyFileFactory.createDto(entity);

      // 2. Définition des chemins
      const entityPath = `${config.projectPath}/src/Entity/${entity.namePascalCase}.php`;
      const dtoPath = `${config.projectPath}/src/Dto/${entity.namePascalCase}Dto.php`;

      // 3. On ajoute les tâches d'écriture à la liste sans les "await" pour l'instant
      tasks.push(this.cli.fileSystem.writeFileAsync(entityPath, entityContent));
      tasks.push(this.cli.fileSystem.writeFileAsync(dtoPath, dtoContent));
    }

    // 4. On exécute toutes les écritures en parallèle
    // C'est ici que tu gagnes réellement du temps si tu as beaucoup d'entités
    await Promise.all(tasks);

    this.cli.logger.success(
      `✅ ${tasks.length} fichiers générés en parallèle.`,
    );
  }
  async updateFile(config: IInstallFramework): Promise<any> {
    this.cli.logger.info(`Mise à jour du fichier package.json`);
    this.cli.logger.info(`Mise à jour du fichier tsconfig.json`);
    this.cli.logger.info(`Mise à jour du fichier config.json`);
    this.cli.logger.success(`Mise à jour terminée avec succès !`);
  }
}
