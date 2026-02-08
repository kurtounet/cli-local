import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";
import { IPackPlugin, IPluginManifest } from "@/types/plugin.interface.js";
import { IPluginService } from "@/types/services/plugin-service.interface.js";

import { BaseCommand } from "./BaseCommand.js";

export interface IPluginOptions extends AnyOptions {
  force?: boolean;
  output?: string;
  count?: number;
}

type PluginAction = "new" | "init" | "generate" | "list" | "delete";
type PluginType = "service" | "command" | "scaffolder" | "template" | "plugin";

export class PluginCommand extends BaseCommand<IPluginOptions> {
  public name = "plugin";
  public description =
    "Génère un nouveaux Plugin pour la CLI (Service, Command, Template)";
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
      description: "Simuler la création sans écrire",
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
  private readonly validActions: PluginAction[] = [
    "new",
    "init",
    "generate",
    "list",
    "delete",
  ];

  async execute(args: string[], options: IPluginOptions): Promise<void> {
    // Validation des arguments
    this.validateArgs(
      args,
      1,
      "Usage: mclp plugin <action> <pluginId> <type> [options]",
    );

    const [action, pluginId, typePluging] = args;

    // Validation de l'action
    if (!this.isValidAction(action)) {
      this.cli.logger.error(
        `Action invalide "${action}". Actions acceptés : ${this.validActions.join(", ")}`,
      );
      return;
    }

    // Validation du type de plugin (requis pour generate)
    if (action === "generate" && !this.isValidType(typePluging)) {
      this.cli.logger.error(
        `Type invalide "${typePluging}". Types acceptés : ${this.validTypes.join(", ")}`,
      );
      return;
    }

    try {
      switch (action) {
        case "list":
          await this.handleList();
          break;

        case "init":
          await this.handleInit(pluginId, typePluging);
          break;

        case "generate":
          await this.handleGenerate(pluginId, typePluging as PluginType);
          break;

        case "new":
          await this.handleNew(pluginId, typePluging);
          break;
        case "delete":
          await this.handleDelete(pluginId, typePluging);
          break;

        default: {
          const exhaustiveCheck: never = action;
          throw new Error(`Action non gérée: ${exhaustiveCheck}`);
        }
      }
    } catch (error: any) {
      this.cli.logger.error(
        `Erreur lors de l'exécution du plugin : ${error.message}`,
      );
      if (error.stack) {
        this.cli.logger.debug(error.stack);
      }
    }
  }

  private async handleList(): Promise<void> {
    const plugins = await this.cli.plugin.list();
    if (plugins.length > 0) {
      this.cli.logger.info("Liste des plugins disponibles :");
      for (const plugin of plugins) {
        this.cli.logger.info(
          `- ${plugin.name} (v${plugin.version ?? "1.0.0"})`,
        );
      }
    } else {
      this.cli.logger.info("Aucun plugin disponible");
    }
  }

  private async handleDelete(
    pluginId: string,
    typePluging: string,
  ): Promise<void> {
    await this.cli.plugin.delete(pluginId, typePluging);
  }

  private async handleInit(
    pluginId: string,
    typePluging: string,
  ): Promise<void> {
    const result = await this.handleScaffolder(pluginId, typePluging);
    await this.executePlugin(result);
  }

  private async handleGenerate(
    pluginId: string,
    typePluging: PluginType,
  ): Promise<void> {
    switch (typePluging) {
      case "scaffolder":
        const result = await this.handleScaffolder(pluginId, typePluging);
        await this.executePlugin(result);
        break;

      case "service":
      case "command":
      case "template":
      case "plugin":
        this.cli.logger.warn(
          `Le type "${typePluging}" n'est pas encore implémenté`,
        );
        break;

      default:
        const exhaustiveCheck: never = typePluging;
        throw new Error(`Type non géré: ${exhaustiveCheck}`);
    }
  }

  private async handleNew(
    pluginId: string,
    typePluging: string,
  ): Promise<void> {
    await this.cli.plugin.newPlugin(pluginId, typePluging);
  }

  private async executePlugin(result: {
    instance: IPluginService;
    manifest: IPluginManifest;
    pluginDir: string;
    data: any;
  }): Promise<void> {
    const { instance, manifest, pluginDir, data } = result;

    this.cli.logger.info(
      `Exécution de ${manifest.name} (v${manifest.version ?? "1.0.0"})...`,
    );
    this.cli.logger.info(`Chargement du plugin : ${pluginDir}...`);

    await instance.execute({}, data);

    this.cli.logger.success("Plugin exécuté avec succès !");
  }

  private isValidType(type: string): type is PluginType {
    return this.validTypes.includes(type as PluginType);
  }

  private isValidAction(type: string): type is PluginAction {
    return this.validActions.includes(type as PluginAction);
  }

  private async handleScaffolder(
    pluginId: string,
    typePluging: string,
  ): Promise<{
    instance: IPluginService;
    manifest: IPluginManifest;
    pluginDir: string;
    data: any;
  }> {
    this.cli.logger.info(`Chargement du ${typePluging} : ${pluginId}...`);

    // Charger le fichier de configuration du projet
    const { project, entitiesJson } = await this.cli.project.loadFileCliLocal(
      process.cwd(),
    );

    // Charger le plugin
    const { instance, manifest, pluginDir } = (await this.cli.plugin.load(
      pluginId,
      typePluging,
    )) as IPackPlugin;

    // Préparer les données pour l'exécution
    const data = {
      project,
      entitiesJson,
      pluginDir,
      manifest,
      blueprints: [...manifest.blueprints],
      entities: entitiesJson.entities,
    };

    return { instance, manifest, pluginDir, data };
  }
}
