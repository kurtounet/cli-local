import { IProjectCommand } from "../interfaces/project-command.interface.js";

import { IProjectConfig } from "@/features/commun/projet.interface.js";

import { ConfigFrameworkService } from "@/features/frameworks/services/confi-framework.service.js";
import { IProjectService } from "../interfaces/project-service.interface.js";
import { IAppContext } from "@/types/context.interface.js";
import { FrameworkService } from "@/features/frameworks/services/framework.service.js";

import { EMOJI } from "@/assets/messages.js";
import { FrameworkSelector } from "@/features/frameworks/services/framework-selector.service.js";
import { BaseFrameworkService } from "@/features/frameworks/services/base-framework.service.js";
import { IInstallFramework } from "@/features/commun/framework.interface.js";

export class ProjectService implements IProjectService {
  readonly serviceName = "ProjectService";
  constructor(
    protected cli: IAppContext,
    protected configframeworks = new ConfigFrameworkService(),
    protected selector = new FrameworkSelector(cli),
  ) {}
  public init(): Promise<void> {
    return Promise.resolve();
  }

  async newProject(project: IProjectCommand): Promise<IProjectConfig> {
    const frameworksList = [...project.frontends, ...project.backends];
    const databasesList = [...project.databases];
    const config: IProjectConfig = {
      projectName: project.name,
      path: project.path,
      starUml: project.starUml,
      version: "1.0.0",
      frameworks: this.configframeworks.configFrameworks(frameworksList),
      databases: this.configframeworks.configDatabases(databasesList),
    };
    return config;
  }

  async generateProject(config: IProjectConfig): Promise<string> {
    this.cli.logger.info("Generation du projet...");
    this.cli.logger.info(`${EMOJI.start} Génération du projet`);

    for (const framework of config.frameworks) {
      this.cli.logger.info(`Traitement du framework : ${framework.name}`);
      // On récupère le service spécifique au framework
      const specificService = this.selector.getService(framework.name);
      // On exécute la génération spécifique
      const configFramework = await specificService.generate(config);
      // 1. Génération des fichiers de base de la CLI
      await this.generateFilesCli(configFramework);
    }

    // 3. (Optionnel) Appel au service global si tu as encore une logique commune
    // await this.frameworkService.generate(config);

    return "Projet généré avec succès !";
  }

  async generateFilesCli(config: IInstallFramework): Promise<string> {
    this.cli.logger.info(`${EMOJI.start} 1 - Génération des fichiers de CLI`);
    // this.cli.config.init(config);
    try {
      this.cli.logger.success(`${EMOJI.processing}Process de génération des fichiers!`);
      this.cli.logger.success(`${EMOJI.success} Fichier de CLI générées avec succès !`);
    } catch (error) {
      this.cli.logger.error(`${EMOJI.error} Échec lors de la génération des fichiers`);
      throw error;
    }
    return "Project Généré avec succès";
  }
}
