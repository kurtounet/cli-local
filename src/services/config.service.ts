import yaml from "js-yaml";
import { cosmiconfig } from "cosmiconfig";
import { BaseService } from "./base-service.service.js";
import { IAppConfig } from "@/types/config.interface.js";
import { IConfigService } from "@/types/services/config-service.interface.js";
import path from "node:path";

export class ConfigService extends BaseService implements IConfigService {
  readonly serviceName = "ConfigService";
  readonly logLevel = "debug";

  private configData!: IAppConfig;
  private readonly moduleName = "mclp";

  // Valeurs de secours si l'utilisateur n'a pas de fichier
  readonly defaults: IAppConfig = {
    cliFolder: {
      name: ".cli-local",
      path: path.join(process.cwd(), "/.cli-local"),
      type: "directory",
      size: 0,
      level: 0,
      content: "",
      extension: "",
      children: [
        {
          name: "mclp",
          path: path.join(process.cwd(), "/.cli-local/mclp"),
          type: "file",
          size: 0,
          level: 1,
          content: "",
          extension: "",
        },
      ],
    },
    database: [
      {
        type: "mysql",
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "task_backup",
      },
      {
        type: "sqlite",
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "task_backup",
      },
    ],
    tree: {
      exclude: ["node_modules", ".git", "dist", ".vscode", ".doc"],
      pathIn: process.cwd(),
      analysis: {
        enabled: false,
        extensions: [".ts", ".js"],
        save: true,
        maxLevel: 0,
      },
      output: [
        {
          type: "json",
          pathOut: "./tree",
          saveOnExecute: true,
        },
        {
          type: "md",
          pathOut: "./tree",
          saveOnExecute: true,
        },
        {
          type: "yaml",
          pathOut: "./tree",
          saveOnExecute: true,
        },
      ],
    },
  };

  // constructor(private readonly cli: any) {}

  public async load(projectPath: string = process.cwd()): Promise<IAppConfig> {
    const explorer = cosmiconfig(this.moduleName, {
      searchPlaces: [
        "package.json",
        `.${this.moduleName}rc`,
        `.${this.moduleName}rc.json`,
        `.${this.moduleName}rc.yaml`,
        `.${this.moduleName}rc.yml`,
        `.${this.moduleName}rc.js`,
        `${this.moduleName}.config.js`,
      ],
      loaders: {
        // Permet de lire le YAML même dans un fichier sans extension (ex: .mclprc)
        noExt: (path, content) => yaml.load(content),
      },
    });

    try {
      const result = await explorer.search(projectPath);
      this.cli.logger.success(`DEBUG: Fichier trouvé -> ${result?.filepath}`);

      // On fusionne les défauts avec ce qu'on a trouvé (ou un objet vide)
      this.configData = this.deepMerge(this.defaults, result?.config || {});
      this.cli.logger.success(
        `DEBUG: Fichier trouvé -> ${JSON.stringify(this.configData, null, 2)}`,
      );

      return this.configData;
    } catch (error) {
      this.cli.logger.warn("Fichier de configuration corrompu. Utilisation des défauts.");
      this.configData = this.defaults;
      return this.configData;
    }
  }

  // Getter pour accéder à la config facilement
  public get current(): IAppConfig {
    return this.configData;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): unknown {
    const output = { ...target };
    if (source && typeof source === "object") {
      Object.keys(source).forEach((key) => {
        if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
          output[key] = this.deepMerge(target[key] || {}, source[key]);
        } else {
          output[key] = source[key];
        }
      });
    }
    return output;
  }
  // Mise à jour du package.json ou tsconfig.json
  private async updateJson(file: string): Promise<void> {
    try {
      const pkgPath = path.join(process.cwd(), file);
      const pk = await this.cli.fileSystem.readFile(pkgPath);
      const pkg = JSON.parse(pk) as Record<string, any>;
      pkg.mclp = this.cli.configService.defaults;
      await this.cli.fileSystem.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
      this.cli.logger.success(`Configuration injectée avec succès dans ${file} !`);
    } catch (error) {
      this.cli.logger.error(
        `Impossible de mettre à jour ${file} : ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
  private async updateTsConfig(): Promise<void> {
    try {
      const filePath = path.join(process.cwd(), "tsconfig.json");
      const content = await this.cli.fileSystem.readFile(filePath);
      const tsconfig = JSON.parse(content) as any;

      // On s'assure que compilerOptions existe
      tsconfig.compilerOptions = tsconfig.compilerOptions || {};

      // Configuration des alias @
      tsconfig.compilerOptions.baseUrl = ".";
      tsconfig.compilerOptions.paths = {
        ...tsconfig.compilerOptions.paths, // On garde les alias existants
        "@/*": ["src/*"],
        "@/types/*": ["src/types/*"],
        "@/services/*": ["src/services/*"],
      };

      await this.cli.fileSystem.writeFile(filePath, JSON.stringify(tsconfig, null, 2));
      this.cli.logger.success("Alias @/* configuré dans tsconfig.json !");
    } catch (error) {
      this.cli.logger.error("Erreur lors de la mise à jour du tsconfig.json");
    }
  }
}
