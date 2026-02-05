import yaml from "js-yaml";

import { cosmiconfig } from "cosmiconfig";
import { defaultconfig } from "@/config/config.js";
import { BaseService } from "./base-service.service.js";
import { IAppConfig } from "@/types/config.interface.js";
import { IConfigService } from "@/types/services/config-service.interface.js";

export class ConfigService extends BaseService implements IConfigService {
  readonly logLevel = "debug";
  private configData!: IAppConfig;
  private readonly moduleName = "mclp";
  readonly serviceName = "ConfigService";
  readonly defaults: IAppConfig = defaultconfig;

  public async load(projectPath: string = process.cwd()): Promise<IAppConfig> {
    const explorer = cosmiconfig(this.moduleName, {
      searchPlaces: [
        `.${this.moduleName}rc`,
        `.${this.moduleName}rc.json`,
        `.${this.moduleName}rc.yaml`,
        `.${this.moduleName}rc.yml`,
        `.${this.moduleName}rc.js`,
        `${this.moduleName}.config.js`,
      ],
      loaders: {
        noExt: (path, content) => yaml.load(content),
      },
    });

    try {
      const result = await explorer.search(projectPath);

      // 1. Si aucun fichier n'est trouvé, on l'initialise
      if (!result) {
        this.cli.logger.warn(
          "Aucun fichier de configuration trouvé. Création du fichier par défaut.",
        );
        return await this.initConfigFile(projectPath);
      }

      // 2. On utilise 'result.config' qui contient déjà les données parsées
      // Optionnel : fusionner avec les défauts ici
      this.configData = result.config;
      return this.configData;
    } catch (error) {
      this.cli.logger.warn(
        "Fichier de configuration corrompu. Utilisation des valeurs par défaut.",
      );
      this.configData = this.defaults;
      return this.configData;
    }
  }

  public async initConfigFile(
    projectPath: string,
    dataFrom?: IAppConfig,
  ): Promise<IAppConfig> {
    // On utilise le moduleName pour rester dynamique
    const fileName = `.${this.moduleName}rc.json`;

    try {
      this.cli.logger.info(
        `Génération du fichier de configuration : ${fileName}`,
      );

      let data = this.defaults;
      if (dataFrom) {
        data = dataFrom;
      }
      // On écrit le fichier proprement
      await this.cli.fileSystem.writeFile(
        fileName,
        JSON.stringify(data, null, 2),
      );

      this.configData = data;
      return this.configData;
    } catch (error) {
      this.cli.logger.error(
        `Impossible de créer le fichier dans ${projectPath} : ${error instanceof Error ? error.message : String(error)}`,
      );
      return this.defaults;
    }
  }

  public get current(): IAppConfig {
    this.load();
    return this.configData;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private deepMerge(
    target: Record<string, unknown>,
    source: Record<string, unknown>,
  ): unknown {
    const output = { ...target };
    if (source && typeof source === "object") {
      Object.keys(source).forEach((key) => {
        if (
          source[key] &&
          typeof source[key] === "object" &&
          !Array.isArray(source[key])
        ) {
          output[key] = this.deepMerge(target[key] || {}, source[key]);
        } else {
          output[key] = source[key];
        }
      });
    }
    return output;
  }
}
