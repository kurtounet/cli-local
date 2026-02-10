import { cosmiconfig } from "cosmiconfig";
import yaml from "js-yaml";

import { defaultconfig } from "@/config/config.js";
import { IAppConfig } from "@/types/config.interface.js";
import { IConfigService } from "@/types/services/config-service.interface.js";

import { BaseService } from "./base-service.service.js";

export class ConfigService extends BaseService implements IConfigService {
  readonly logLevel = "debug";
  private readonly moduleName = "mclp";
  readonly serviceName = "ConfigService";
  readonly defaults: Record<string, unknown> = defaultconfig;
  private configData: Record<string, unknown> = this.defaults;

  public async init(): Promise<void> {
    await this.load(process.cwd());
  }

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
        noExt: (path, content) => yaml.load(content) as Record<string, unknown>,
      },
    });

    try {
      const result = await explorer.search(projectPath);

      if (!result) {
        console.warn(
          "Aucun fichier de configuration trouvé. Création du fichier par défaut.",
        );
        return await this.initConfigFile(projectPath);
      }

      this.configData = this.deepMerge(this.defaults, result.config);
      return this.configData as unknown as IAppConfig;
    } catch (error) {
      console.error("Erreur lors du chargement de la configuration:", error);
      this.configData = this.defaults;
      return this.configData as unknown as IAppConfig;
    }
  }

  public async initConfigFile(
    projectPath: string,
    dataFrom?: IAppConfig,
  ): Promise<IAppConfig> {
    const fileName = `.${this.moduleName}rc.json`;
    const data = dataFrom ?? this.defaults;

    try {
      this.configData = data;
      console.log(`Génération du fichier de configuration : ${fileName}`);

      await this.cli.fileSystem.writeFile(
        fileName,
        JSON.stringify(data, null, 2),
      );

      return this.configData as IAppConfig;
    } catch (error) {
      console.error(
        `Impossible de créer le fichier dans ${projectPath} : ${error instanceof Error ? error.message : String(error)}`,
      );
      return this.defaults as unknown as IAppConfig;
    }
  }

  public get current(): IAppConfig {
    return this.configData as unknown as IAppConfig;
  }

  public async refresh(): Promise<IAppConfig> {
    return this.load(process.cwd());
  }

  private isPlainObject(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  private deepMerge(
    target: Record<string, unknown>,
    source: Record<string, unknown>,
  ): Record<string, unknown> {
    const output = { ...target };

    for (const key of Object.keys(source)) {
      const sourceValue = source[key];
      const targetValue = target[key];

      if (this.isPlainObject(sourceValue) && this.isPlainObject(targetValue)) {
        output[key] = this.deepMerge(targetValue, sourceValue);
      } else {
        output[key] = sourceValue;
      }
    }

    return output;
  }
}
