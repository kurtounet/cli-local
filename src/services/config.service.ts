import { cosmiconfig } from "cosmiconfig";
import { BaseService } from "./base-service.service.js";
import { IConfigService } from "@/types/services/config-service.interface.js";

export class ConfigService extends BaseService implements IConfigService {
  readonly serviceName = "ConfigService";

  private explorer = cosmiconfig("scrofolder");

  async initialize(): Promise<void> {
    try {
      const result = await this.explorer.search();
      if (result && !result.isEmpty) {
        // On fusionne la config du fichier avec la config par défaut du contexte
        Object.assign(this.cli.config, result.config);
        this.cli.logger.debug("Configuration chargée", { file: result.filepath });
      }
    } catch (e) {
      this.cli.logger.warn("Impossible de charger la config, utilisation des défauts.");
    }
  }
}
