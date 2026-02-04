import path from "node:path";
import { BaseService } from "./base-service.service.js";
import { ISDKContext } from "@/types/commun/sdk-context.interface.js";
import { IPluginService } from "@/types/services/plugin-service.interface.js";
import { IPlugin, IPluginManifest } from "@/types/plugin.interface.js";

export class PluginService extends BaseService implements IPluginService {
  readonly serviceName = "PluginService";

  private pluginsBaseDir = path.join(process.cwd(), "plugins");
  private pluginsIndex = path.join(this.pluginsBaseDir, "index.json");
  private pluginsIndexJson!: any;
  private pluginsManifest!: IPluginManifest;

  private plugin!: IPlugin;

  public override async init(): Promise<void> {
    return Promise.resolve();
  }

  /**
   * Charge et exécute un plugin dynamiquement
   */
  async load(pluginId: string, type: string): Promise<any> {
    const indexPluginJson = await this.cli.fileSystem.readFile(this.pluginsIndex);
    this.pluginsIndexJson = JSON.parse(indexPluginJson);
    const typePlugin = this.pluginsIndexJson.plugins[type];
    this.plugin = typePlugin.find((p: any) => p.id === pluginId);
    // Vérification du plugin
    if (!this.plugin) {
      throw new Error(`Plugin ${pluginId} non trouvé dans la catégorie ${type}`);
    }
    this.plugin.pluginDir = path.join(this.pluginsBaseDir, this.plugin.pluginDir);
    const manifestPath = path.join(this.plugin.pluginDir, "manifest.json");
    // Vérification du manifest.json du plugin
    if (!this.cli.fileSystem.exists(manifestPath)) {
      throw new Error(`le fichier manifest.json du plugin ${pluginId}.json n'existe pas`);
    }

    //Lecture du Manifest
    const manifestJson = await this.cli.fileSystem.readFile(manifestPath);
    this.pluginsManifest = JSON.parse(manifestJson);
    const isComplet = await this.verifyPlugin(this.pluginsManifest);
    // Vérification du plugin
    if (!isComplet) {
      throw new Error(`Le plugin ${pluginId} n'est pas complet`);
    }

    const service = path.join(this.plugin.pluginDir, this.pluginsManifest.service);
    if (!this.cli.fileSystem.exists(service)) {
      throw new Error(`Le fichier d'entrée du plugin ${pluginId} n'existe pas`);
    }

    //Préparation du SDK (Contexte injecté)
    //injecte ici les services de la CLI
    const sdk: ISDKContext = this.getSDKContext();

    // 4. Import dynamique du fichier JS
    // Note: On utilise file:// pour Windows/Linux compatibility en ESM
    const module = await import(`file://${service}?update=${Date.now()}`);
    const PluginClass = module.default;
    if (!PluginClass) {
      throw new Error(`Le plugin ${pluginId} n'a pas d'exportation par défaut (export default).`);
    }

    // 5. Instanciation avec injection du SDK
    const instance = new PluginClass(sdk);

    return {
      instance,
      manifest: this.pluginsManifest,
      pluginDir: this.plugin.pluginDir,
    };
  }

  /**
   * Liste tous les plugins installés physiquement dans le dossier /plugins
   */
  async list(): Promise<any[]> {
    if (!this.cli.fileSystem.exists(this.pluginsBaseDir)) {
      return [];
    }

    const folders = await this.cli.fileSystem.readDir(this.pluginsBaseDir);
    const availablePlugins = [];

    for (const folder of folders) {
      const manifestPath = path.join(this.pluginsBaseDir, folder, "manifest.json");

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
    let errors: string[] = [];
    const propertiesManifest = ["id", "name", "templateDir", "service", "blueprints"];
    const serviceFile = path.join(this.plugin.pluginDir, manifest.service);
    const templateDir = path.join(this.plugin.pluginDir, manifest.templateDir);

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
    console.log(serviceFile);
    if (!this.cli.fileSystem.exists(serviceFile)) {
      throw new Error(`Le fichier d'entrée du plugin ${manifest.id}.service.js n'existe pas`);
    }
    console.log(templateDir);
    if (!this.cli.fileSystem.exists(templateDir)) {
      throw new Error(`Le dossier de templates du plugin ${manifest.id} n'existe pas`);
    }

    for (const blueprint of manifest.blueprints) {
      const blueprintPath = path.join(templateDir, blueprint.template);
      if (!this.cli.fileSystem.exists(blueprintPath)) {
        errors.push(`Le template ${blueprint.template} du plugin ${manifest.id} n'existe pas`);
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
        writeAsync: (p, c) => this.cli.fileSystem.writeFileAsync(p, c),
        exists: (p) => this.cli.fileSystem.exists(p),
        readFile: (p, e) => this.cli.fileSystem.readFile(p),
      },
      render: (pluginDir: string, tplDir: string, tpl: string, data: any) =>
        this.cli.template.render(pluginDir, tplDir, tpl, data),
      config: this.cli.config as any,
    };
  }
}
