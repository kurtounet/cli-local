import { ISDKContext } from "@/types/commun/sdk-context.interface.js";
import { IPlugin, IPluginManifest } from "@/types/plugin.interface.js";
import { IPluginService } from "@/types/services/plugin-service.interface.js";

import { BaseService } from "./base-service.service.js";

export class PluginService extends BaseService implements IPluginService {
  readonly serviceName = "PluginService";

  private pluginsBaseDir = this.cli.path.join(process.cwd(), "plugins");
  private pluginsIndex = this.cli.path.join(this.pluginsBaseDir, "index.json");
  private pluginsIndexJson!: any;
  private pluginsManifest!: IPluginManifest;
  private plugin!: IPlugin;

  public override async init(): Promise<void> {
    return Promise.resolve();
  }

  /**
   * Charge et exécute un plugin dynamiquement
   * @param pluginId
   * @param type
   */
  async load(pluginId: string, type: string): Promise<any> {
    const indexPluginJson = await this.cli.fileSystem.readFile(
      this.pluginsIndex,
    );
    this.pluginsIndexJson = JSON.parse(indexPluginJson);
    const typePlugin = this.pluginsIndexJson.plugins[type];
    this.plugin = typePlugin.find((p: any) => p.id === pluginId);

    if (!this.plugin) {
      throw new Error(
        `Plugin ${pluginId} non trouvé dans la catégorie ${type}`,
      );
    }
    this.plugin.pluginDir = this.cli.path.join(
      this.pluginsBaseDir,
      this.plugin.pluginDir,
    );
    const manifestPath = this.cli.path.join(
      this.plugin.pluginDir,
      "manifest.json",
    );

    if (!this.cli.fileSystem.exists(manifestPath)) {
      throw new Error(
        `le fichier manifest.json du plugin ${pluginId}.json n'existe pas`,
      );
    }

    const manifestJson = await this.cli.fileSystem.readFile(manifestPath);
    this.pluginsManifest = JSON.parse(manifestJson);

    const isComplet = await this.verifyPlugin(this.pluginsManifest);

    if (!isComplet) {
      throw new Error(`Le plugin ${pluginId} n'est pas complet`);
    }

    const sdk: ISDKContext = this.getSDKContext();
    const service = this.cli.path.join(
      this.plugin.pluginDir,
      this.pluginsManifest.service,
    );
    const module = await import(`file://${service}`);
    const PluginClass = module.default;
    if (!PluginClass) {
      throw new Error(
        `Le plugin ${pluginId} n'a pas d'exportation par défaut (export default).`,
      );
    }

    const instance = new PluginClass(sdk);
    return {
      instance,
      manifest: this.pluginsManifest,
      pluginDir: this.plugin.pluginDir,
    };
  }

  /**
   * Liste tous les plugins installés physiquement dans le dossier /plugins
   * @returns Liste des plugins
   */
  async list(): Promise<any[]> {
    if (!this.cli.fileSystem.exists(this.pluginsBaseDir)) {
      return [];
    }

    const folders = await this.cli.fileSystem.readDir(this.pluginsBaseDir);
    const availablePlugins = [];

    for (const folder of folders) {
      const manifestPath = this.cli.path.join(
        this.pluginsBaseDir,
        folder,
        "manifest.json",
      );

      if (this.cli.fileSystem.exists(manifestPath)) {
        const content = await this.cli.fileSystem.readFile(manifestPath);
        availablePlugins.push(JSON.parse(content));
      }
    }

    return availablePlugins;
  }

  async listByType(type: string): Promise<any[]> {
    const plugins = await this.list();
    return plugins.filter((p: any) => p.type === type);
  }

  async verifyPlugin(manifest: any): Promise<boolean> {
    const errors: string[] = [];
    let propertiesManifest: string[] = [];
    const pathPlugin = {
      templateDir: "",
      service: "",
    };
    console.log(manifest);
    if (this.plugin.type === "scaffolder") {
      propertiesManifest = [
        "id",
        "name",
        "templateDir",
        "service",
        "blueprints",
      ];
      pathPlugin.templateDir = this.cli.path.join(
        this.plugin.pluginDir,
        manifest.templateDir,
      );
    } else if (this.plugin.type === "tool") {
      propertiesManifest = ["id", "name", "service"];
    }
    pathPlugin.service = this.cli.path.join(
      this.plugin.pluginDir,
      manifest.service,
    );

    for (const property of propertiesManifest) {
      if (!manifest[property]) {
        errors.push(
          `Le plugin manifest.json du plugin ${manifest.id} n'a pas de propriété ${property}`,
        );
      }
    }
    if (errors.length > 0) {
      throw new Error(errors.join("\n"));
    }

    if (!this.cli.fileSystem.exists(pathPlugin.service) && pathPlugin.service) {
      throw new Error(
        `Le fichier d'entrée du plugin ${manifest.id}.service.js n'existe pas`,
      );
    }

    if (pathPlugin.templateDir && this.plugin.type === "scaffolder") {
      if (!this.cli.fileSystem.exists(pathPlugin.templateDir)) {
        throw new Error(
          `Le dossier de templates du plugin ${manifest.id} n'existe pas`,
        );
      }
    }

    if (manifest.blueprints) {
      for (const blueprint of manifest.blueprints) {
        const blueprintPath = this.cli.path.join(
          pathPlugin.templateDir,
          blueprint.template,
        );
        if (!this.cli.fileSystem.exists(blueprintPath)) {
          errors.push(
            `Le template ${blueprint.template} du plugin ${manifest.id} n'existe pas`,
          );
        }
      }
    }

    if (errors.length > 0) {
      throw new Error(errors.join("\n"));
    }
    return true;
  }

  getSDKContext(): ISDKContext {
    return {
      log: {
        info: (msg: string) => this.cli.logger.info(msg),
        success: (msg: string) => this.cli.logger.success(msg),
        error: (msg: string) => this.cli.logger.error(msg),
        warning: (msg: string) => this.cli.logger.warn(msg),
        debug: (msg: string) => this.cli.logger.debug(msg),
      },
      fs: {
        writeAsync: (p, c) => this.cli.fileSystem.writeFile(p, c),
        exists: (p) => this.cli.fileSystem.exists(p),
        readFile: (p, e) => this.cli.fileSystem.readFile(p),
      },
      render: (pluginDir: string, tplDir: string, tpl: string, data: any) =>
        this.cli.template.render(pluginDir, tplDir, tpl, data),
      config: this.cli.config as any,
    };
  }
}
