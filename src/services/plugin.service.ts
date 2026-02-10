import { IConfigFramework } from "@/features/commun/framework.interface.js";
import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import {
  IBagData,
  IEntityColumn,
  IEntityDefinition,
  IProjectBag,
} from "@/types/commun/data-bag.interface.js";
import { ISDKContext } from "@/types/commun/sdk-context.interface.js";
import {
  IPackPlugin,
  IPlugin,
  IPluginManifest,
  IPluginModule,
  IPluginsIndexJson,
} from "@/types/plugin.interface.js";
import { IPluginService } from "@/types/services/plugin-service.interface.js";

import { BaseService } from "./base-service.service.js";

export class PluginService extends BaseService implements IPluginService {
  readonly serviceName = "PluginService";

  private pluginsBaseDir = this.cli.path.join(process.cwd(), "plugins");
  private pluginsIndexJsonPath = this.cli.path.join(this.pluginsBaseDir, "index.json");
  private pluginsIndexJson!: IPluginsIndexJson;
  private pluginsManifest!: IPluginManifest;
  private plugin!: IPlugin | null;

  async init(): Promise<void> {
    return Promise.resolve();
  }

  async load(pluginId: string, type: string): Promise<IPackPlugin> {
    await this.loadIndexJson();
    this.plugin = this.getPluginToIndexJson(pluginId, type);

    if (!this.plugin) {
      throw new Error(`Plugin ${pluginId} non trouvé dans la catégorie ${type}`);
    }

    this.plugin.pluginDir = this.cli.path.join(this.pluginsBaseDir, this.plugin.pluginDir);
    const manifestPath = this.cli.path.join(this.plugin.pluginDir, "manifest.json");

    if (!this.cli.fileSystem.exists(manifestPath)) {
      throw new Error(`le fichier manifest.json du plugin ${pluginId}.json n'existe pas`);
    }

    const manifestJson: string = await this.cli.fileSystem.readFile(manifestPath);
    this.pluginsManifest = JSON.parse(manifestJson) as IPluginManifest;

    const isComplet = this.verifyPlugin();

    if (!isComplet) {
      throw new Error(`Le plugin ${pluginId} n'est pas complet`);
    }

    const sdk: ISDKContext = this.getSDKContext();
    const service = this.cli.path.join(this.plugin.pluginDir, this.pluginsManifest.service);

    const module = (await import(`file://${service}`)) as IPluginModule;

    const pluginClass = module.default;

    if (!pluginClass) {
      throw new Error(`Le plugin ${pluginId} n'a pas d'exportation par défaut (export default).`);
    }

    const instance = new pluginClass(sdk);
    return {
      instance,
      manifest: this.pluginsManifest,
      pluginDir: this.plugin.pluginDir,
    };
  }

  async list(): Promise<IPlugin[]> {
    if (!this.cli.fileSystem.exists(this.pluginsBaseDir)) {
      return [];
    }
    // const indexPluginJson = await this.cli.fileSystem.readFile(this.pluginsIndex);
    // this.pluginsIndexJson = JSON.parse(indexPluginJson) as IPluginsIndexJson;
    // const folders = await this.cli.tool.getDirectoryTree(this.pluginsBaseDir, 0, 0);
    const folders = await this.cli.fileSystem.readDir(this.pluginsBaseDir);
    const availablePlugins = [];

    for (const folder of folders.filter((f: string) => f.includes("manifest.json"))) {
      console.log(folder);
      // if (folder) {
      //   const manifestPath = this.cli.path.join(this.pluginsBaseDir, folder., "manifest.json");
      //   if (this.cli.fileSystem.exists(manifestPath)) {
      //     const content = await this.cli.fileSystem.readFile(manifestPath);
      //     availablePlugins.push(JSON.parse(content));
      //   }
      // }
      // if (folder.type === "directory") {
      //   console.log(JSON.stringify(folder, null, 2));
      //   // const folders = await this.cli.tool.getDirectoryTree(this.pluginsBaseDir, 0, 0);
      // }
      // const manifestPath = this.cli.path.join(this.pluginsBaseDir, folder, "manifest.json");

      // if (this.cli.fileSystem.exists(manifestPath)) {
      //   const content = await this.cli.fileSystem.readFile(manifestPath);
      //   availablePlugins.push(JSON.parse(content));
      // }
    }

    return availablePlugins;
  }

  async listByType(type: string): Promise<IPlugin[]> {
    const plugins = await this.list();
    return plugins.filter((p: IPlugin) => p.type === type);
  }

  async initPlugins(pluginId: string, type: string): Promise<void> {
    const plugins = await this.list();
    return plugins.filter((p: IPlugin) => p.type === type);
  }

  async newPlugin(pluginId: string, type: string): Promise<string[]> {
    const pluginDir = this.cli.path.join(this.pluginsBaseDir, type, pluginId);
    const templateDir = this.cli.path.join(this.pluginsBaseDir, "scaffolders", "cli", "plugin");

    if (this.cli.fileSystem.exists(pluginDir)) {
      throw new Error(`Le plugin ${pluginId} existe deja`);
    }

    if (!this.cli.fileSystem.exists(templateDir)) {
      throw new Error(`Les templates ${templateDir} n'existe pas`);
    }

    await this.cli.fileSystem.createDirectory(pluginDir);

    const data = { id: pluginId, name: pluginId };

    const manifestPath = this.cli.path.join(pluginDir, "manifest.json");
    const servicePath = this.cli.path.join(pluginDir, "service.js");
    const templatePath = this.cli.path.join(pluginDir, "template.ejs");

    const files: Record<string, string> = {
      [manifestPath]: await this.cli.template.render(
        manifestPath,
        templateDir,
        "manifest.json",
        data,
      ),
      [servicePath]: await this.cli.template.render(servicePath, templateDir, "service.js", data),
      [templatePath]: await this.cli.template.render(
        templatePath,
        templateDir,
        "initial.template",
        data,
      ),
    };

    for (const [path, content] of Object.entries(files)) {
      await this.cli.fileSystem.writeFile(path, content);
    }
    const plugin: IPlugin = {
      type,
      description: "",
      id: pluginId,
      name: pluginId,
      pluginDir: pluginDir,
      templateDir,
    };
    await this.addPluginToIndex(plugin);

    return [manifestPath, servicePath, templatePath];
  }

  async delete(pluginId: string, type: string): Promise<void> {
    await this.loadIndexJson();
    const pluginsIndex = this.pluginsIndexJson;

    if (!pluginsIndex.plugins[type]) {
      throw new Error(`Plugin type ${type} not found in index`);
    }

    const plugin = this.getPluginToIndexJson(pluginId, type);

    if (plugin === null) {
      throw new Error(`Plugin ${pluginId} non trouvé dans la catégorie ${type}`);
    }

    const initialLength = pluginsIndex.plugins[type].length;
    pluginsIndex.plugins[type] = pluginsIndex.plugins[type].filter(
      (p: IPlugin) => p.id !== pluginId,
    );

    if (pluginsIndex.plugins[type].length < initialLength) {
      await this.cli.fileSystem.writeFile(
        this.pluginsIndexJsonPath,
        JSON.stringify(pluginsIndex, null, 2),
      );
      await this.cli.fileSystem.removeDirectory(plugin.pluginDir);
    } else {
      throw new Error(`Plugin ${pluginId} was not found in the array`);
    }
  }
  // Private
  private async addPluginToIndex(plugin: IPlugin): Promise<void> {
    await this.loadIndexJson();
    const pluginsIndex = this.pluginsIndexJson;

    if (!pluginsIndex.plugins[plugin.type]) {
      pluginsIndex.plugins[plugin.type] = [];
    }

    if (!pluginsIndex.plugins[plugin.type].includes(plugin)) {
      pluginsIndex.plugins[plugin.type].push(plugin);
      await this.cli.fileSystem.writeFile(
        this.pluginsIndexJsonPath,
        JSON.stringify(pluginsIndex, null, 2),
      );
    }
  }

  private getPluginToIndexJson(pluginId: string, type: string): IPlugin | null {
    const typePlugin = this.pluginsIndexJson.plugins[type];
    return typePlugin.find((p: IPlugin) => p.id === pluginId) ?? null;
  }

  private async loadIndexJson() {
    if (!this.cli.fileSystem.exists(this.pluginsIndexJsonPath)) {
      throw new Error(`Index file not found: ${this.pluginsIndexJsonPath}`);
    }
    const file = await this.cli.fileSystem.readFile(this.pluginsIndexJsonPath);
    this.pluginsIndexJson = JSON.parse(file) as IPluginsIndexJson;
  }

  private verifyPlugin(): boolean {
    const errors: string[] = [];
    let propertiesManifest: string[] = [];
    const pathPlugin = {
      templateDir: "",
      service: "",
    };

    if (!this.plugin || !this.pluginsManifest) {
      return false;
    }

    if (this.plugin.type === "scaffolder") {
      propertiesManifest = ["id", "name", "type", "service", "templateDir", "blueprints"];
    } else if (this.plugin.type === "tool") {
      propertiesManifest = ["id", "name", "service"];
    }
    // Vérifier que toutes les propriétés requises sont présentes
    propertiesManifest.forEach((requiredKey) => {
      if (!Object.keys(this.pluginsManifest).includes(requiredKey)) {
        errors.push(
          `Le manifest.json du plugin ${this.pluginsManifest.id} n'a pas la propriété requise "${requiredKey}"`,
        );
      }
    });
    if (this.pluginsManifest.templateDir) {
      pathPlugin.templateDir = this.cli.path.join(
        this.plugin.pluginDir,
        this.pluginsManifest.templateDir,
      );
    }

    pathPlugin.service = this.cli.path.join(this.plugin.pluginDir, this.pluginsManifest.service);

    if (errors.length > 0) {
      throw new Error(errors.join("\n"));
    }

    if (!this.cli.fileSystem.exists(pathPlugin.service) && pathPlugin.service) {
      throw new Error(
        `Le fichier d'entrée du plugin ${this.pluginsManifest.id}.service.js n'existe pas`,
      );
    }
    console.log(pathPlugin.templateDir);
    if (pathPlugin.templateDir && this.plugin.type === "scaffolder") {
      if (!this.cli.fileSystem.exists(pathPlugin.templateDir)) {
        throw new Error(
          `Le dossier de templates du plugin ${this.pluginsManifest.id} n'existe pas`,
        );
      }
    }

    if (this.pluginsManifest.blueprints) {
      for (const blueprint of this.pluginsManifest.blueprints) {
        const blueprintPath = this.cli.path.join(pathPlugin.templateDir, blueprint.template);
        if (!this.cli.fileSystem.exists(blueprintPath)) {
          errors.push(
            `Le template ${blueprint.template} du plugin ${this.pluginsManifest.id} n'existe pas`,
          );
        }
      }
    }

    if (errors.length > 0) {
      throw new Error(errors.join("\n"));
    }
    return true;
  }

  private getSDKContext(): ISDKContext {
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

  /**
   * Maps an entity from entities.json format to bag-data.json entity scope format.
   * @param entityData - The raw entity object from entities.json.
   * @returns The mapped entity object.
   */
  public mapEntityForBagScope(entityData: IEntityDefinition) {
    if (!entityData) {
      return {};
    }

    return {
      namePascalCase: entityData.namePascalCase,
      nameKebabCase: entityData.nameKebabCase,
      nameSnakeCase: entityData.nameKebabCase.replace(/-/g, "_"), // Assuming kebab-case to snake_case
      namePluralCamelCase: entityData.namePluralCamelCase || `${entityData.nameCamelCase}s`, // Simple pluralization if not provided
      nameCamelCase: entityData.nameCamelCase,
      tableName: entityData.tableName,
      columns: (entityData.columns || []).map((col) => ({
        phpType:
          col.typeTypeScript === "number" && col.typeDoctrine === "float"
            ? "float"
            : col.typeTypeScript, // Adjust based on common PHP types
        name: col.name,
        nameCamelCase: col.name.replace(/_([a-z])/g, (g) => g[1].toUpperCase()), // snake_case to camelCase
        namePascalCase: col.name
          .split("_")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(""), // snake_case to PascalCase
        foreignKey: col.foreignKey,
        ormType: col.typeDoctrine,
        nullable: col.nullable,
      })),
      relationships: (entityData.relationships || []).map((rel) => ({
        nameCamelCase: rel.relationName, // Or derive from target
        namePascalCase: rel.relationName.charAt(0).toUpperCase() + rel.relationName.slice(1),
        targetPascalCase: rel.target.charAt(0).toUpperCase() + rel.target.slice(1),
        relationType: rel.relationType,
        targetPascalCaseSingular: rel.target.charAt(0).toUpperCase() + rel.target.slice(1), // Assuming target is singular
        mappedBy: rel.mappedBy || "", // Needs to be derived or provided
        ownerPascalCase: rel.ownerPascalCase || "", // Needs to be derived or provided
        nullable: true, // Default to true or derive
        inversedBy: rel.inversedBy || "", // Needs to be derived or provided
      })),
    };
  }

  public async buildBagData(configProjectData: IProjectConfig, entitiesData: IGetEntityJson) {
    const existingBagData: IBagData = {
      id: "symfony",
      name: "Symfony Generator",
      templateDir: "./templates",
      version: "1.0.0",
      template: "symfony",
      service: "symfony.service.js",
      bag: {
        scope: {
          project: {},
          entities: {},
        },
      },
    };

    if (configProjectData?.projectName) {
      existingBagData.bag.scope.project = {
        ...existingBagData.bag.scope.project,
        name: configProjectData.projectName,
        version: configProjectData.version ?? "1.0.0",
        // env:
        //   configProjectData.frameworks
        //     ?.find((f: IConfigFramework) => f.name === "symfony")
        //     ?.environments?.find((e) => e.mode === ".env")?.data ?? {},
        // db: configProjectData.databases?.[0] ?? {},
      };

      const symfonyFramework = configProjectData.frameworks?.find((f) => f.name === "symfony");
      if (symfonyFramework) {
        const defaultEnv = symfonyFramework.environments?.find((e) => e.mode === ".env");
        if (defaultEnv) {
          existingBagData.bag.scope.project.env = {
            ...existingBagData.bag.scope.project.env,
            // APP_DEBUG: defaultEnv.debug,
            // APP_URL: defaultEnv.dataUrl,
          };
        }
        existingBagData.bag.scope.project.mailer = existingBagData.bag.scope.project.mailer || {
          dsn: "null",
        };
        existingBagData.bag.scope.project.cors = existingBagData.bag.scope.project.cors || {
          allow_origin: "null",
        };
        existingBagData.bag.scope.project.jwt = existingBagData.bag.scope.project.jwt || {
          passphrase: "some_jwt_passphrase",
        };
      }
    }

    if (entitiesData?.entities && entitiesData.entities.length > 0) {
      existingBagData.bag.scope.entities = entitiesData.entities.map((entity) =>
        this.mapEntityForBagScope(entity),
      );

      existingBagData.bag.scope.entity = this.mapEntityForBagScope(entitiesData.entities[0]);
    } else {
      console.warn(
        "Aucune entité trouvée dans .cli-local/entities.json. bag.scope.entities et bag.scope.entity ne seront pas mis à jour.",
      );
      existingBagData.bag.scope.entities = [];
      existingBagData.bag.scope.entity = {};
    }

    delete existingBagData.templateDefinitions; // Remove if exists from previous runs

    // Write the updated bag-data.json back to the file
    try {
      fs.writeFileSync(BAG_DATA_PATH, JSON.stringify(existingBagData, null, 2), "utf8");
      console.log("bag-data.json a été mis à jour avec succès.");
    } catch (error) {
      console.error("Erreur lors de l'écriture de bag-data.json :", error.message);
    }
  }

  buildProjectData(configProjectData: IProjectConfig) {
    const symfonyFramework = configProjectData.frameworks?.find((f) => f.name === "symfony");
    const project: IProjectBag = {
      // env: symfonyFramework?.environments,
      db: symfonyFramework?.databases?.[0] ?? null,
      mailer: { dsn: "null" },
      cors: { allow_origin: "null" },
      jwt: configProjectData.jwt = configProjectData.jwt || {
          passphrase: "some_jwt_passphrase",
        };,
    };
    if (configProjectData?.projectName) {
      project = {
        ...existingBagData.bag.scope.project,
        name: configProjectData.projectName,
        version: configProjectData.version ?? "1.0.0",
        // env:
        //   configProjectData.frameworks
        //     ?.find((f: IConfigFramework) => f.name === "symfony")
        //     ?.environments?.find((e) => e.mode === ".env")?.data ?? {},
        // db: configProjectData.databases?.[0] ?? {},
      };

      const symfonyFramework = configProjectData.frameworks?.find((f) => f.name === "symfony");
      if (symfonyFramework) {
        const defaultEnv = symfonyFramework.environments?.find((e) => e.mode === ".env");
        if (defaultEnv) {
          project.env = {
            ...project.env,
            // APP_DEBUG: defaultEnv.debug,
            // APP_URL: defaultEnv.dataUrl,
          };
        }
        project.mailer = project.mailer || {
          dsn: "null",
        };
        project.cors = project.cors || {
          allow_origin: "null",
        };
        project.jwt = project.jwt || {
          passphrase: "some_jwt_passphrase",
        };
      }
    }
  }
  buildEntityData() {}
}
