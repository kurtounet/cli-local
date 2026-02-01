import { EMOJI } from "@/assets/messages.js";
import { IAppContext } from "@/types/context.interface.js";
import { ConfigFrameworkService } from "@/features/frameworks/services/confi-framework.service.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IProjectService } from "../interfaces/project-service.interface.js";
import { IProjectCommand } from "../interfaces/project-command.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import { ParserMDJService } from "@/features/parserMdj/services/parser-mdj.service.js";
import { FrameworkSelector } from "@/features/frameworks/services/framework-selector.service.js";
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

  async generateProject(config: IProjectConfig): Promise<string> {
    this.cli.logger.info("Generation du projet...");
    this.cli.logger.info(`${EMOJI.start} Génération du projet`);
    let entitiesJson: IGetEntityJson = {
      entities: [],
      "dictionary-columns": {},
      "dictionary-entities-json": {},
      "dictionary-entities-pivot": [],
      "dictionary-relationships": {},
      "dictionary-entities-relationships": {},
    };
    if (config.starUml) {
      this.cli.logger.info(`${EMOJI.rond_green} Extraction des entités...`);
      entitiesJson = await this.parserMdj.parseMdjToJson(config.starUml);
    }

    for (const framework of config.frameworks) {
      this.cli.logger.info(`Traitement du framework : ${framework.name}`);
      // On récupère le service spécifique au framework
      const specificService = this.selector.getService(framework.name);
      // On exécute la génération spécifique
      const configFramework = await specificService.generate(config);
      // 1. Génération des fichiers de base de la CLI
      await this.generateFilesCli(config, entitiesJson);
    }

    // 3. (Optionnel) Appel au service global si tu as encore une logique commune
    // await this.frameworkService.generate(config);

    return "Projet généré avec succès !";
  }

  async generateFilesCli(config: IProjectConfig, entitiesJson: IGetEntityJson): Promise<string> {
    this.cli.logger.info(`${EMOJI.start} 1 - Génération des fichiers de CLI`);
    this.cli.fileSystem.writeFile("./entity.json", JSON.stringify(entitiesJson, null, 2));
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
