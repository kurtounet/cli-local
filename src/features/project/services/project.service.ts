import path from "node:path";

import { IProjectCommand } from "../interfaces/project-command.interface.js";

import { IProjectConfig } from "@/features/commun/projet.interface.js";

import { ConfigFrameworkService } from "@/features/frameworks/services/confi-framework.service.js";
import { IProjectService } from "../interfaces/project-service.interface.js";
import { IAppContext } from "@/types/context.interface.js";
import { FrameworkService } from "@/features/frameworks/services/framework.service.js";
import { StateService } from "@/services/state.service.js";
import { EMOJI } from "@/assets/messages.js";

export class ProjectService implements IProjectService {
  readonly serviceName = "ProjectService";
  constructor(
    protected cli: IAppContext,
    protected configframeworks = new ConfigFrameworkService(),
    protected frameworkService = new FrameworkService(this.cli),
    protected state = new StateService(this.cli),
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
    this.cli.logger.info(`${EMOJI.start} Génération du projet ${config.projectName}`);
    this.generateFilesCli(config);
    this.frameworkService.generateFramework(config);

    return "Project Généré avec succès";
  }
  async generateFilesCli(config: IProjectConfig): Promise<string> {
    this.cli.logger.info(`${EMOJI.start} 1 - Génération des fichiers de CLI`);
    try {
      this.cli.logger.success(`Process de génération des fichiers!`);
      this.cli.logger.success(`${EMOJI.success} Fichier générées avec succès !`);
    } catch (error) {
      this.cli.logger.error(`${EMOJI.error} Échec lors de la génération des fichiers`);
      throw error;
    }
    return "Project Généré avec succès";
  }
}
