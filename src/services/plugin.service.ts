import path from "node:path";
import { BaseService } from "./base-service.service.js";
import { ISDKContext } from "@/types/commun/sdk-context.interface.js";
import { IPluginService } from "@/types/services/plugin-service.interface.js";

export class PluginService extends BaseService implements IPluginService {
  readonly serviceName = "PluginService";
  private pluginsBaseDir = path.join(process.cwd(), "plugins");

  public override async init(): Promise<void> {
    return Promise.resolve();
  }

  /**
   * Charge et exécute un plugin dynamiquement
   */
  async load(pluginId: string): Promise<any> {
    const pluginDir = path.join(this.pluginsBaseDir, pluginId);
    const manifestPath = path.join(pluginDir, "manifest.json");
    console.log(manifestPath);

    // 1. Vérification du plugin
    if (!this.cli.fileSystem.exists(manifestPath)) {
      throw new Error(`Plugin ${pluginId} non trouvé à l'adresse : ${manifestPath}`);
    }

    // 2. Lecture du Manifest
    const manifestJson = await this.cli.fileSystem.readFile(manifestPath);
    const manifest = JSON.parse(manifestJson);
    const entryPoint = path.join(pluginDir, manifest.entryPoint);
    console.log(entryPoint);

    // 3. Préparation du SDK (Contexte injecté)
    // On injecte ici les services de ta CLI
    const sdk: ISDKContext = {
      log: (msg: string) => this.cli.logger.info(`[${pluginId}] ${msg}`),
      fs: {
        writeAsync: (p, c) => this.cli.fileSystem.writeFileAsync(p, c),
        exists: (p) => this.cli.fileSystem.exists(p),
        readFile: (p, e) => this.cli.fileSystem.readFile(p),
      },
      render: (tpl: string, data: any) => this.cli.template.render(pluginDir, tpl, data),
      config: this.cli.config as any,
    };

    // 4. Import dynamique du fichier JS
    // Note: On utilise file:// pour Windows/Linux compatibility en ESM
    const module = await import(`file://${entryPoint}`);
    const PluginClass = module.default;
    if (!PluginClass) {
      throw new Error(`Le plugin ${pluginId} n'a pas d'exportation par défaut (export default).`);
    }

    // 5. Instanciation avec injection du SDK
    const instance = new PluginClass(sdk);

    return {
      instance,
      manifest,
      pluginDir,
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
}

// import path from "node:path";
// import { BaseService } from "./base-service.service.js";
// import { IPluginService } from "@/types/services/plugin-service.interface.js";

// // import { DataManagerService } from "./data-manager.service.js";

// export class PluginService extends BaseService implements IPluginService {
//   readonly serviceName = "PluginService";

//   public override async init(): Promise<void> {
//     // Si tu n'as rien à initialiser pour l'instant :
//     return Promise.resolve();
//   }

//   plugins = new Map<string, any>();

//   // Charge dynamiquement tous les plugins d'un dossier
//   async registerPlugin(PluginClass: any) {
//     const definition = PluginClass.definition;
//     this.plugins.set(definition.name, new PluginClass());
//     console.log(`[PluginService] Plugin chargé : ${definition.name}`);
//   }

//   // Point d'entrée unique pour exécuter n'importe quel plugin
//   async run(pluginName: string, args: string[]): Promise<any> {
//     const plugin = this.plugins.get(pluginName);
//     if (!plugin) throw new Error(`Plugin ${pluginName} introuvable.`);

//     // Voici l'injection : on prépare le contexte ici
//     const context = {
//       db: this.cli.db,
//       log: (msg: string) => console.log(`[${pluginName}] ${msg}`),
//       timestamp: new Date().toISOString(),
//     };

//     try {
//       // On exécute le plugin avec les arguments et le contexte injecté
//       return await plugin.execute(args, context);
//     } catch (error: any) {
//       console.error(`Erreur d'exécution dans ${pluginName}:`, error);
//       return { success: false, error: error.message };
//     }
//   }
//   private pluginsBaseDir = path.join(process.cwd(), "plugins");

//   async load(pluginId: string): Promise<any> {
//     const pluginDir = path.join(this.pluginsBaseDir, pluginId);
//     const manifestPath = path.join(pluginDir, "manifest.json");

//     if (!this.cli.fileSystem.exists(manifestPath)) throw new Error(`Plugin ${pluginId} non trouvé`);

//     const manifestjson = await this.cli.fileSystem.readFile(manifestPath);
//     const manifest = JSON.parse(manifestjson);
//     const entryPath = path.join(pluginDir, manifest.entry);

//     // --- LE SDK INJECTÉ ---
//     const sdk = {
//       log: (msg: string) => this.cli.logger.info(`[${pluginId}] ${msg}`),
//       fs: this.cli.fileSystem,
//       // On lie la factory de template au plugin spécifique
//       render: (templateName: string, data: any) => {
//         // Appelle la méthode statique de ton TemplateService
//         return this.cli.template.render(pluginDir, templateName, data);
//       },
//     };

//     // Chargement dynamique
//     const module = await import(`file://${entryPath}`);
//     const PluginClass = module.default;

//     return {
//       instance: new PluginClass(sdk), // On injecte le SDK ici
//       manifest,
//       pluginDir,
//     };
//   }

//   log(msg: string): void {
//     console.log(msg);
//   }
// }
