import { cosmiconfig, CosmiconfigResult } from "cosmiconfig";
import { BaseService } from "./base-service.service.js";
import { ICliConfig } from "@/types/context.interface.js";
import path from "node:path";

export class ConfigService extends BaseService {
  private readonly MODULE_NAME = "scrofolder";
  private explorer = cosmiconfig(this.MODULE_NAME);

  /**
   * Initialisation du service : chargement de la configuration utilisateur.
   */
  public async initialize(): Promise<void> {
    try {
      const result = await this.explorer.search();

      if (result && !result.isEmpty) {
        this.logger.debug(`Configuration chargée depuis : ${result.filepath}`);
        this.mergeConfig(result.config);
      } else {
        this.logger.debug("Aucune configuration utilisateur trouvée, utilisation des défauts.");
      }
    } catch (error) {
      this.logger.warn(
        "Erreur lors du chargement du fichier de configuration, utilisation des défauts.",
      );
    }
  }

  /**
   * Fusionne la configuration trouvée avec la configuration actuelle du contexte.
   */
  private mergeConfig(userConfig: Partial<ICliConfig>): void {
    // On met à jour l'objet config dans le contexte global
    Object.assign(this.context.config, userConfig);

    // Si les chemins sont relatifs dans la config, on les rend absolus par rapport au fichier de config
    if (this.context.config.templatesPath.startsWith(".")) {
      this.context.config.templatesPath = path.resolve(
        process.cwd(),
        this.context.config.templatesPath,
      );
    }
  }

  /**
   * Permet de récupérer une valeur de config spécifique
   */
  public get<K extends keyof ICliConfig>(key: K): ICliConfig[K] {
    return this.context.config[key];
  }
}
