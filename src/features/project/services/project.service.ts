import { EMOJI } from "@/assets/messages.js";
import { IAppContext } from "@/types/context.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IProjectService } from "../interfaces/project-service.interface.js";
import { IProjectCommand } from "../interfaces/project-command.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import { ParserMDJService } from "@/features/parserMdj/services/parser-mdj.service.js";
import { FrameworkSelector } from "@/features/frameworks/services/framework-selector.service.js";
import { ConfigFrameworkService } from "@/features/frameworks/services/confi-framework.service.js";
import { IArchitecture, IFileNode } from "@/features/commun/architecture.interface.js";

export class ProjectService implements IProjectService {
  readonly serviceName = "ProjectService";

  public projectExist!: IProjectConfig;
  public project!: IProjectConfig;
  public architecture!: IArchitecture;
  public entities!: IFileNode;
  public task!: IFileNode;
  public tests!: IFileNode;
  public database!: IFileNode;
  public frontends!: IFileNode[];
  public backends!: IFileNode[];
  public databases!: IFileNode[];
  public starUml!: string;
  public framework!: string;

  constructor(
    protected cli: IAppContext,
    protected selector = new FrameworkSelector(cli),
    protected parserMdj = new ParserMDJService(cli),
    protected configframeworks = new ConfigFrameworkService(),
  ) {}
  public init(): Promise<void> {
    return Promise.resolve();
  }

  public async newProject(project: IProjectCommand): Promise<IProjectConfig> {
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

  public async generateProject(configProject: IProjectConfig): Promise<string> {
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
        entitiesJson = await this.parserMdj.parseMdjToJson(configProject.starUml);
      }
    } catch (error) {
      this.cli.logger.error(`${EMOJI.error} Erreur lors de la récupération des entités : ${error}`);
      process.exit(1);
    }

    for (const framework of configProject.frameworks) {
      this.cli.logger.info(`Traitement du framework : ${framework.name}`);
      // 1. On récupère le service spécifique au framework
      const specificService = this.selector.getService(framework.name);
      this.cli.logger.info(`${EMOJI.rond_green} Génération des fichiers de base...`);
      await specificService.generate(configProject, entitiesJson, fileMdj);
    }
    return "Projet généré avec succès !";
  }

  public async loadProject(path: string): Promise<string> {
    this.initProject(path);
    return "Projet chargé avec succès !";
  }

  private async initProject(path: string): Promise<void> {
    let allDirAndFiles: string[] = await this.cli.fileSystem.readDir(path);

    this.cli.logger.info(`${EMOJI.help} Vérification de l'existance du dossier: .cli-local`);
    if (!allDirAndFiles.includes(".cli-local")) {
      this.cli.logger.warn(`${EMOJI.warning} Le dossier .cli-local n'existe pas`);
      //TODO créer le dossier .cli-local
    } else {
      this.cli.logger.success(`${EMOJI.success} Le dossier .cli-local existe déjas`);
      //TODO Récupérer les fichiers du dossier .cli-local
      //
    }

    this.cli.logger.info(`${EMOJI.help} Vérification de l'existance du fichier: .mclprc.json`);
    if (!allDirAndFiles.includes(".mclprc.json")) {
      this.cli.logger.warn(`${EMOJI.warning} Le fichier .mclprc.json existe pas`);
      //TODO créer le fichier .mclprc.json
    } else {
      this.cli.logger.success(`${EMOJI.success} Le fichier .mclprc.json existe déjas`);
      //TODO Mettre le fichier .mclprc.json à jour,
      // avec les des data des fichiers de .cli-local
    }
  }

  private filterTree(tree: IFileNode[], props: string): IFileNode | null {
    // if (!tree.children) return null;
    const node = tree.find((node: IFileNode) => node.name === props);
    return node || null;
  }

  private flattenFiles = (nodes: any[]): any[] => {
    return nodes.flatMap((node) => {
      // 1. Si c'est un fichier, on le retourne dans un tableau
      if (node.type === "file") {
        return [node];
      }

      // 2. Si c'est un dossier, on descend récursivement dans ses enfants
      if (node.type === "directory" && node.children) {
        return this.flattenFiles(node.children);
      }

      // 3. Sinon (cas vide), on retourne un tableau vide
      return [];
    });
  };

  private isFileNode(node: any): node is IFileNode {
    return node && typeof node === "object" && "someUniqueProperty" in node;
  }
}
/*
async initProject(path: string): Promise<string> {
    let allDirAndFiles: string[] = await this.cli.fileSystem.readDir(path);
    // let allFilesAtSameLevel: IFileNode[] = [];
    // let treeJson: IFileNode | null = await this.cli.fileSystem.getDirectoryTree(path, 0, 0, false);
    // console.log(JSON.stringify(tree2, null, 2));
    // console.log(tree2.length);
    this.cli.logger.info("Vérification de l'existance du dossier .cli-local");
    if (allDirAndFiles.includes(".cli-local")) {
      // allFilesAtSameLevel = this.flattenFiles(tree.children);
      // this.cli.fileSystem.writeFile(
      //   path + "/flatee.json",
      //   JSON.stringify(allFilesAtSameLevel, null, 2),
      // );
      // const filesCliLocal = this.filterTree(allFilesAtSameLevel, "src/ApiResource");
      // console.log(JSON.stringify(filesCliLocal, null, 2));
    } else {
      this.cli.logger.info("Le dossier .cli-local n'existe pas");
    }
    // let tree: IFileNode | null = await this.cli.fileSystem.getDirectoryTree(path, 0, 0, false);
    // if (!tree) {
    //   this.cli.logger.error("Le dossier .cli-local n'existe pas");
    //   process.exit(1);
    // }
    // let filesCliLocal: IFileNode | null = this.isFileNode(tree)
    //   ? this.filterTree(tree, ".cli-local")
    //   : null;
    this.cli.logger.info("Vérification de l'existance du dossier .cli-local");
    if (!filesCliLocal) {
      this.cli.shell.executeSyncSpawn(`mclp p new`, [], this.cli.fileSystem.resolvePath(path));
    } else {
      this.cli.logger.info("Le dossier .cli-local existe:");
      this.cli.logger.info("Il contient les fichiers suivants:");
      this.cli.logger.info(`${JSON.stringify(filesCliLocal, null, 2)}`);
    }
    this.cli.logger.info("Vérification de l'existance du fichier (.mclprc.json)");
    if (!this.filterTree(tree, ` .mclprc.json`)) {
      //TODO Récuperer les fichiers du dossier .cli-local
      // this.cli.shell.executeSyncSpawn(`mclp p new`, [], this.cli.fileSystem.resolvePath(path));
    } else {
      this.cli.logger.info("Le fichier .mclprc.json existe");
      //TODO Mettre le fichier .mclprc.json à jour, avec les des data des fichiers de .cli-local
    }
    this.cli.config.load(".mclprc.json");

    return "Initialisation du Projet Terminée avec succès !";
  }









*/
