import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import { AnyOptions } from "@/types/cli-options.type.js";
import { ICommandOption } from "@/types/command.interface.js";
import {
  IPackPlugin,
  IPluginExecutionContext,
  IPluginManifest,
  IPluginService,
} from "@/types/plugins/plugin.interface.js";
import { ITemplateContext } from "@/types/plugins/plugin-execution-context.interface.js";

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
  private readonly validActions: PluginAction[] = [
    "new",
    "init",
    "generate",
    "list",
    "delete",
  ];

  async execute(args: string[], options: IPluginOptions): Promise<void> {
    this.validateArgs(
      args,
      1,
      "Usage: mclp plugin <action> [pluginId] [type] [options]",
    );

    const [action, pluginId, typePlugin] = args;

    if (!this.isValidAction(action)) {
      this.cli.logger.error(
        `Action invalide "${action}". Actions acceptées : ${this.validActions.join(", ")}`,
      );
      return;
    }

    // Validation spécifique pour les actions nécessitant un ID et un Type
    if (
      ["generate", "new", "delete", "init"].includes(action) &&
      (!pluginId || !typePlugin)
    ) {
      this.cli.logger.error(
        `L'action "${action}" requiert un [pluginId] et un [type]`,
      );
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
          await this.handleGenerate(
            pluginId,
            typePlugin as PluginType,
            options,
          );
          break;
      }
    } catch (error) {
      this.cli.logger.error(`Erreur : ${error.message}`);
      if (this.cli.config.logLevel === "debug")
        this.cli.logger.debug(error.stack);
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
    const { project, entitiesJson } = (await this.cli.project.loadFileCliLocal(
      process.cwd(),
    )) as {
      project: IProjectConfig;
      entitiesJson: IGetEntityJson;
    };
    const templateContext = await this.cli.plugin.buildTemplateContext(
      project,
      entitiesJson,
    );

    // 2. Chargement du plugin via PluginService
    const pack = (await this.cli.plugin.load(pluginId, type)) as IPackPlugin;

    return {
      instance: pack.instance,
      manifest: pack.manifest,
      pluginDir: pack.pluginDir,
      templateContext: templateContext,
    };
  }

  private async executePlugin(
    result: any,
    args: IPluginOptions,
  ): Promise<void> {
    const { instance, manifest, pluginDir, templateContext } = result as {
      instance: IPluginService;
      manifest: IPluginManifest;
      pluginDir: string;
      templateContext: ITemplateContext;
    };

    this.cli.logger.info(
      `🚀 Exécution de : ${manifest.name} (v${manifest.version ?? "1.0.0"})`,
    );
    // this.cli.logger.info(`🚀 IBagData : ${JSON.stringify(data)}`);

    // On passe les options CLI (force, dry-run) et les données projet au plugin

    await instance.execute(args, {
      manifest,
      pluginDir,
      templateContext,
    } as IPluginExecutionContext);

    this.cli.logger.success(`✨ Plugin ${manifest.id} terminé avec succès !`);
  }

  private async handleList(): Promise<void> {
    const plugins = await this.cli.plugin.list(); //
    if (plugins.length === 0) {
      this.cli.logger.info("Aucun plugin trouvé dans le dossier /plugins.");
      return;
    }
    this.cli.logger.info("Plugins installés :");
    plugins.forEach((p) =>
      this.cli.logger.info(`- [${p.type}] ${p.id} : ${p.description}`),
    );
  }

  private isValidAction(a: string): a is PluginAction {
    return this.validActions.includes(a as PluginAction);
  }
  private isValidType(t: string): t is PluginType {
    return this.validTypes.includes(t as PluginType);
  }
}
