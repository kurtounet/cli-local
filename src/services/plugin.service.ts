import { BaseService } from "./base-service.service.js";
import { IPluginService } from "@/types/plugin-service.interface.js";
// import { DataManagerService } from "./data-manager.service.js";

export class PluginService extends BaseService implements IPluginService {
  readonly serviceName = "PluginService";

  public override async init(): Promise<void> {
    // Si tu n'as rien à initialiser pour l'instant :
    return Promise.resolve();
  }
  plugins = new Map<string, any>();

  // Charge dynamiquement tous les plugins d'un dossier
  async registerPlugin(PluginClass: any) {
    const definition = PluginClass.definition;
    this.plugins.set(definition.name, new PluginClass());
    console.log(`[PluginService] Plugin chargé : ${definition.name}`);
  }

  // Point d'entrée unique pour exécuter n'importe quel plugin
  async run(pluginName: string, args: string[]): Promise<any> {
    const plugin = this.plugins.get(pluginName);
    if (!plugin) throw new Error(`Plugin ${pluginName} introuvable.`);

    // Voici l'injection : on prépare le contexte ici
    const context = {
      db: this.cli.db,
      log: (msg: string) => console.log(`[${pluginName}] ${msg}`),
      timestamp: new Date().toISOString(),
    };

    try {
      // On exécute le plugin avec les arguments et le contexte injecté
      return await plugin.execute(args, context);
    } catch (error: any) {
      console.error(`Erreur d'exécution dans ${pluginName}:`, error);
      return { success: false, error: error.message };
    }
  }

  log(msg: string): void {
    console.log(msg);
  }
}
