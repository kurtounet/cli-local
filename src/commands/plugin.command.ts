import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";
import { IBagData } from "@/types/commun/data-bag.interface.js";
import { IPackPlugin, IPluginManifest, IPluginModule } from "@/types/plugin.interface.js";

import { BaseCommand } from "./BaseCommand.js";

export interface IPluginOptions extends AnyOptions {
  force?: boolean;
  dryRun?: boolean;
}

type PluginAction = "new" | "init" | "generate" | "list" | "delete";
type PluginType = "service" | "command" | "scaffolder" | "template" | "plugin";

export class PluginCommand extends BaseCommand<IPluginOptions> {
  public name = "plugin";
  public description = "Gère les plugins de la CLI (Scaffolders, Tools, etc.)";
  public arguments = "<action> [pluginId] [type]";

  public options: ICommandOption[] = [
    {
      flags: "-f, --force",
      description: "Écraser les fichiers existants",
      type: "boolean",
      defaultValue: false,
    },
    {
      flags: "-d, --dry-run",
      description: "Simuler la création sans écrire sur le disque",
      type: "boolean",
      defaultValue: false,
    },
  ];

  private readonly validTypes: PluginType[] = [
    "plugin",
    "service",
    "command",
    "template",
    "scaffolder",
  ];
  private readonly validActions: PluginAction[] = ["new", "init", "generate", "list", "delete"];

  async execute(args: string[], options: IPluginOptions): Promise<void> {
    this.validateArgs(args, 1, "Usage: mclp plugin <action> [pluginId] [type] [options]");

    const [action, pluginId, typePlugin] = args;

    if (!this.isValidAction(action)) {
      this.cli.logger.error(
        `Action invalide "${action}". Actions acceptées : ${this.validActions.join(", ")}`,
      );
      return;
    }

    // Validation spécifique pour les actions nécessitant un ID et un Type
    if (["generate", "new", "delete", "init"].includes(action) && (!pluginId || !typePlugin)) {
      this.cli.logger.error(`L'action "${action}" requiert un [pluginId] et un [type]`);
      return;
    }

    try {
      switch (action) {
        case "list":
          await this.handleList();
          break;
        case "new":
          await this.cli.plugin.newPlugin(pluginId, typePlugin); //
          this.cli.logger.success(`Structure du plugin ${pluginId} créée.`);
          break;
        case "delete":
          await this.cli.plugin.delete(pluginId, typePlugin); //
          this.cli.logger.success(`Plugin ${pluginId} supprimé.`);
          break;
        case "generate":
        case "init":
          await this.handleGenerate(pluginId, typePlugin as PluginType, options);
          break;
      }
    } catch (error) {
      this.cli.logger.error(`Erreur : ${error.message}`);
      if (this.cli.config.logLevel === "debug") this.cli.logger.debug(error.stack);
    }
  }

  private async handleGenerate(
    pluginId: string,
    type: PluginType,
    options: IPluginOptions,
  ): Promise<void> {
    if (type !== "scaffolder") {
      this.cli.logger.warn(
        `L'exécution automatique pour le type "${type}" n'est pas encore implémentée.`,
      );
      return;
    }

    const result = await this.preparePluginData(pluginId, type);
    await this.executePlugin(result, options);
  }

  private async preparePluginData(pluginId: string, type: string) {
    this.cli.logger.info(`Chargement du ${type} : ${pluginId}...`);

    // 1. Récupération des données projet (Entités, config, etc.)
    const { project, entitiesJson } = (await this.cli.project.loadFileCliLocal(process.cwd())) as {
      project: IProjectConfig;
      entitiesJson: IGetEntityJson;
    };
    const bagData = this.cli.plugin.buildBagData(project, entitiesJson);

    // 2. Chargement du plugin via PluginService
    const pack = (await this.cli.plugin.load(pluginId, type)) as IPackPlugin;
    console.warn(bagData);
    return {
      instance: pack.instance,
      manifest: pack.manifest,
      pluginDir: pack.pluginDir,
      data: (await bagData).bag.scope,
      // data: {
      //   project,
      //   entitiesJson,
      //   entities: entitiesJson?.entities ?? [],
      //   blueprints: pack.manifest.blueprints ?? [],
      // },
    };
  }

  private async executePlugin(result: any, options: IPluginOptions): Promise<void> {
    const { instance, manifest, pluginDir, data } = result as {
      instance: IPluginModule;
      manifest: IPluginManifest;
      pluginDir: string;
      data: IBagData;
    };

    this.cli.logger.info(`🚀 Exécution de : ${manifest.name} (v${manifest.version ?? "1.0.0"})`);

    // On passe les options CLI (force, dry-run) et les données projet au plugin
    await instance.execute(options, {
      manifest,
      pluginDir,
      data,
    });

    this.cli.logger.success(`✨ Plugin ${manifest.id} terminé avec succès !`);
  }

  private async handleList(): Promise<void> {
    const plugins = await this.cli.plugin.list(); //
    if (plugins.length === 0) {
      this.cli.logger.info("Aucun plugin trouvé dans le dossier /plugins.");
      return;
    }
    this.cli.logger.info("Plugins installés :");
    plugins.forEach((p) => this.cli.logger.info(`- [${p.type}] ${p.id} : ${p.name}`));
  }

  private isValidAction(a: string): a is PluginAction {
    return this.validActions.includes(a as PluginAction);
  }
  private isValidType(t: string): t is PluginType {
    return this.validTypes.includes(t as PluginType);
  }
}

// import { AnyOptions } from "@/types/cli-options.type.js";
// import { ICommandOption } from "@/types/command.interface.js";
// import { IPackPlugin, IPluginManifest } from "@/types/plugin.interface.js";
// import { IPluginService } from "@/types/services/plugin-service.interface.js";

// import { BaseCommand } from "./BaseCommand.js";

// export interface IPluginOptions extends AnyOptions {
//   force?: boolean;
//   output?: string;
//   count?: number;
// }

// type PluginAction = "new" | "init" | "generate" | "list" | "delete";
// type PluginType = "service" | "command" | "scaffolder" | "template" | "plugin";

// export class PluginCommand extends BaseCommand<IPluginOptions> {
//   public name = "plugin";
//   public description = "Génère un nouveaux Plugin pour la CLI (Service, Command, Template)";
//   public arguments = "<action> [pluginId] [type]";

//   public options: ICommandOption[] = [
//     {
//       flags: "-f, --force",
//       description: "Écraser les fichiers existants",
//       type: "boolean",
//       defaultValue: false,
//     },
//     {
//       flags: "-d, --dry-run",
//       description: "Simuler la création sans écrire",
//       type: "boolean",
//       defaultValue: false,
//     },
//   ];

//   private readonly validTypes: PluginType[] = [
//     "plugin",
//     "service",
//     "command",
//     "template",
//     "scaffolder",
//   ];
//   private readonly validActions: PluginAction[] = ["new", "init", "generate", "list", "delete"];

//   async execute(args: string[], options: IPluginOptions): Promise<void> {
//     // Validation des arguments
//     this.validateArgs(args, 1, "Usage: mclp plugin <action> <pluginId> <type> [options]");

//     const [action, pluginId, typePluging] = args;

//     // Validation de l'action
//     if (!this.isValidAction(action)) {
//       this.cli.logger.error(
//         `Action invalide "${action}". Actions acceptés : ${this.validActions.join(", ")}`,
//       );
//       return;
//     }

//     // Validation du type de plugin (requis pour generate)
//     if (action === "generate" && !this.isValidType(typePluging)) {
//       this.cli.logger.error(
//         `Type invalide "${typePluging}". Types acceptés : ${this.validTypes.join(", ")}`,
//       );
//       return;
//     }

//     try {
//       switch (action) {
//         case "list":
//           await this.handleList();
//           break;

//         case "init":
//           await this.handleInit(pluginId, typePluging);
//           break;

//         case "generate":
//           await this.handleGenerate(pluginId, typePluging as PluginType);
//           break;

//         case "new":
//           await this.handleNew(pluginId, typePluging);
//           break;
//         case "delete":
//           await this.handleDelete(pluginId, typePluging);
//           break;

//         default: {
//           const exhaustiveCheck: never = action;
//           throw new Error(`Action non gérée: ${exhaustiveCheck}`);
//         }
//       }
//     } catch (error: any) {
//       this.cli.logger.error(`Erreur lors de l'exécution du plugin : ${error.message}`);
//       if (error.stack) {
//         this.cli.logger.debug(error.stack);
//       }
//     }
//   }

//   private async handleList(): Promise<void> {
//     const plugins = await this.cli.plugin.list();
//     if (plugins.length > 0) {
//       this.cli.logger.info("Liste des plugins disponibles :");
//       for (const plugin of plugins) {
//         this.cli.logger.info(`- ${plugin.name} (v${plugin.version ?? "1.0.0"})`);
//       }
//     } else {
//       this.cli.logger.info("Aucun plugin disponible");
//     }
//   }

//   private async handleDelete(pluginId: string, typePluging: string): Promise<void> {
//     await this.cli.plugin.delete(pluginId, typePluging);
//   }

//   private async handleInit(pluginId: string, typePluging: string): Promise<void> {
//     const result = await this.handleScaffolder(pluginId, typePluging);
//     await this.executePlugin(result);
//   }

//   private async handleGenerate(pluginId: string, typePluging: PluginType): Promise<void> {
//     switch (typePluging) {
//       case "scaffolder":
//         const result = await this.handleScaffolder(pluginId, typePluging);
//         await this.executePlugin(result);
//         break;

//       case "service":
//       case "command":
//       case "template":
//       case "plugin":
//         this.cli.logger.warn(`Le type "${typePluging}" n'est pas encore implémenté`);
//         break;

//       default:
//         const exhaustiveCheck: never = typePluging;
//         throw new Error(`Type non géré: ${exhaustiveCheck}`);
//     }
//   }

//   private async handleNew(pluginId: string, typePluging: string): Promise<void> {
//     await this.cli.plugin.newPlugin(pluginId, typePluging);
//   }

//   private async executePlugin(result: {
//     instance: IPluginService;
//     manifest: IPluginManifest;
//     pluginDir: string;
//     data: any;
//   }): Promise<void> {
//     const { instance, manifest, pluginDir, data } = result;

//     this.cli.logger.info(`Exécution de ${manifest.name} (v${manifest.version ?? "1.0.0"})...`);
//     this.cli.logger.info(`Chargement du plugin : ${pluginDir}...`);

//     await instance.execute({}, data);

//     this.cli.logger.success("Plugin exécuté avec succès !");
//   }

//   private isValidType(type: string): type is PluginType {
//     return this.validTypes.includes(type as PluginType);
//   }

//   private isValidAction(type: string): type is PluginAction {
//     return this.validActions.includes(type as PluginAction);
//   }

//   private async handleScaffolder(
//     pluginId: string,
//     typePluging: string,
//   ): Promise<{
//     instance: IPluginService;
//     manifest: IPluginManifest;
//     pluginDir: string;
//     data: any;
//   }> {
//     this.cli.logger.info(`Chargement du ${typePluging} : ${pluginId}...`);

//     // Charger le fichier de configuration du projet
//     const { project, entitiesJson } = await this.cli.project.loadFileCliLocal(process.cwd());

//     // Charger le plugin
//     const { instance, manifest, pluginDir } = (await this.cli.plugin.load(
//       pluginId,
//       typePluging,
//     )) as IPackPlugin;

//     // Préparer les données pour l'exécution
//     const data = {
//       project,
//       entitiesJson,
//       pluginDir,
//       manifest,
//       blueprints: [...manifest.blueprints],
//       entities: entitiesJson.entities,
//     };

//     return { instance, manifest, pluginDir, data };
//   }
// }
