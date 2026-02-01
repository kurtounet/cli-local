import { EMOJI } from "@/assets/messages.js";
import { IAppContext } from "@/types/context.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IProjectService } from "../interfaces/project-service.interface.js";
import { IProjectCommand } from "../interfaces/project-command.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import { ParserMDJService } from "@/features/parserMdj/services/parser-mdj.service.js";
import { FrameworkSelector } from "@/features/frameworks/services/framework-selector.service.js";
import { ConfigFrameworkService } from "@/features/frameworks/services/confi-framework.service.js";

export class ProjectService implements IProjectService {
  readonly serviceName = "ProjectService";
  constructor(
    protected cli: IAppContext,
    protected selector = new FrameworkSelector(cli),
    protected parserMdj = new ParserMDJService(cli),
    protected configframeworks = new ConfigFrameworkService(),
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

  async generateProject(configProject: IProjectConfig): Promise<string> {
    this.cli.logger.info(`${EMOJI.start} Génération du projet`);
    let fileMdj: any;
    let entitiesJson: IGetEntityJson = {
      entities: [],
      "dictionary-columns": {},
      "dictionary-entities-json": {},
      "dictionary-entities-pivot": [],
      "dictionary-relationships": {},
      "dictionary-entities-relationships": {},
    };
    try {
      if (configProject.starUml) {
        this.cli.logger.info(`${EMOJI.rond_green} Extraction des entités...`);
        fileMdj = await this.parserMdj.loadFile(configProject.starUml);
        entitiesJson = await this.parserMdj.parseMdjToJson(
          configProject.starUml,
        );
      }
    } catch (error) {
      this.cli.logger.error(
        `${EMOJI.error} Erreur lors de la récupération des entités : ${error}`,
      );
      process.exit(1);
    }

    for (const framework of configProject.frameworks) {
      this.cli.logger.info(`Traitement du framework : ${framework.name}`);
      // 1. On récupère le service spécifique au framework
      const specificService = this.selector.getService(framework.name);
      this.cli.logger.info(
        `${EMOJI.rond_green} Génération des fichiers de base...`,
      );
      await specificService.generate(configProject, entitiesJson, fileMdj);
    }
    return "Projet généré avec succès !";
  }
  async currentProject(configProject: IProjectConfig): Promise<string> {
    this.cli.logger.info(`${EMOJI.start} Génération du projet`);
    let fileMdj: any;
    let entitiesJson: IGetEntityJson = {
      entities: [],
      "dictionary-columns": {},
      "dictionary-entities-json": {},
      "dictionary-entities-pivot": [],
      "dictionary-relationships": {},
      "dictionary-entities-relationships": {},
    };
    try {
      if (configProject.starUml) {
        this.cli.logger.info(`${EMOJI.rond_green} Extraction des entités...`);
        fileMdj = await this.parserMdj.loadFile(configProject.starUml);
        entitiesJson = await this.parserMdj.parseMdjToJson(
          configProject.starUml,
        );
      }
    } catch (error) {
      this.cli.logger.error(
        `${EMOJI.error} Erreur lors de la récupération des entités : ${error}`,
      );
      process.exit(1);
    }

    for (const framework of configProject.frameworks) {
      this.cli.logger.info(`Traitement du framework : ${framework.name}`);
      // 1. On récupère le service spécifique au framework
      const specificService = this.selector.getService(framework.name);
      this.cli.logger.info(
        `${EMOJI.rond_green} Génération des fichiers de base...`,
      );
      await specificService.generate(configProject, entitiesJson, fileMdj);
    }
    return "Projet généré avec succès !";
  }
}
