import { IProjectConfig } from "@/features/commun/projet.interface.js";
import { IGetEntityJson } from "@/features/parserMdj/models/entity-json.model.js";
import {
  IPackPlugin,
  IPlugin,
  IPluginManifest,
  IPluginsIndexJson,
} from "@/types/plugins/plugin.interface.js";
import {
  IColumnTemplateData,
  IEntityTemplateData,
  IProjectTemplateData,
  IRelationshipTemplateData,
  ITemplateContext,
} from "@/types/plugins/plugin-execution-context.interface.js";
import { ISDKContext } from "@/types/plugins/sdk-context.interface.js";
import { IPluginService } from "@/types/services/plugin-service.interface.js";

import { BaseService } from "./base-service.service.js";
import { IEnvironment } from "@/features/commun/framework.interface.js";

// --- Interfaces pour le contexte de template ---

export class PluginService extends BaseService implements IPluginService {
  readonly serviceName = "PluginService";

  private pluginsBaseDir = this.cli.path.join(process.cwd(), "plugins");
  private bagDataFile = this.cli.path.join(
    process.cwd(),
    ".cli-local",
    "bag-data.json",
  );
  private pluginsIndexJsonPath = this.cli.path.join(
    this.pluginsBaseDir,
    "index.json",
  );
  private pluginsIndexJson!: IPluginsIndexJson;
  private pluginsManifest!: IPluginManifest;
  private plugin!: IPlugin | null;

  // Cache pour l'index des plugins
  private pluginsIndexJsonCache?: IPluginsIndexJson;
  private cacheTimestamp?: number;
  private readonly CACHE_TTL = 5000; // 5 secondes

  async init(): Promise<void> {
    return Promise.resolve();
  }

  async load(pluginId: string, type: string): Promise<IPackPlugin> {
    await this.loadIndexJson();
    this.plugin = this.getPluginToIndexJson(pluginId, type);

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

    const manifestJson: string =
      await this.cli.fileSystem.readFile(manifestPath);
    this.pluginsManifest = JSON.parse(manifestJson) as IPluginManifest;

    const isComplet = this.verifyPlugin();

    if (!isComplet) {
      throw new Error(`Le plugin ${pluginId} n'est pas complet`);
    }

    const sdk: ISDKContext = this.getSDKContext();
    const service = this.cli.path.join(
      this.plugin.pluginDir,
      this.pluginsManifest.service,
    );

    const module: any = await import(`file://${service}`);

    // Résoudre le constructeur en gérant le double wrapping
    const pluginClass = module.default?.default || module.default || module;

    if (!pluginClass) {
      throw new Error(
        `Le plugin ${pluginId} n'a pas d'exportation par défaut (export default).`,
      );
    }
    this.cli.logger.debug(`[DEBUG] Module keys: ${Object.keys(module)}`);
    this.cli.logger.debug(`[DEBUG] module.default: ${module.default}`);
    this.cli.logger.debug(`[DEBUG] Type of pluginClass: ${typeof pluginClass}`);
    this.cli.logger.debug(`[DEBUG] pluginClass.name: ${pluginClass?.name}`);

    if (typeof pluginClass !== "function") {
      throw new Error(
        `Le plugin ${pluginId} n'exporte pas un constructeur valide. ` +
          `Type reçu: ${typeof pluginClass}`,
      );
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

    await this.loadIndexJson();
    const allPlugins: IPlugin[] = [];

    if (this.pluginsIndexJson && this.pluginsIndexJson.plugins) {
      for (const plugins of Object.values(this.pluginsIndexJson.plugins)) {
        if (Array.isArray(plugins)) {
          allPlugins.push(...plugins);
        }
      }
    }

    return allPlugins;
  }

  async listByType(type: string): Promise<IPlugin[]> {
    const plugins = await this.list();
    return plugins.filter((p: IPlugin) => p.type === type);
  }

  async initPlugins(pluginId: string, type: string): Promise<void> {
    this.cli.logger.info(
      `Initialisation du plugin ${pluginId} de type ${type}...`,
    );
    // Logique d'initialisation spécifique si nécessaire
  }

  async newPlugin(pluginId: string, type: string): Promise<string[]> {
    const pluginDir = this.cli.path.join(this.pluginsBaseDir, type, pluginId);
    const templateDir = this.cli.path.join(
      this.pluginsBaseDir,
      "scaffolders",
      "cli",
      "plugin",
    );

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
      [servicePath]: await this.cli.template.render(
        servicePath,
        templateDir,
        "service.js",
        data,
      ),
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
      throw new Error(
        `Plugin ${pluginId} non trouvé dans la catégorie ${type}`,
      );
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

  private async loadIndexJson(forceReload = false) {
    const now = Date.now();

    if (
      !forceReload &&
      this.pluginsIndexJsonCache &&
      this.cacheTimestamp &&
      now - this.cacheTimestamp < this.CACHE_TTL
    ) {
      this.pluginsIndexJson = this.pluginsIndexJsonCache;
      return;
    }

    if (!this.cli.fileSystem.exists(this.pluginsIndexJsonPath)) {
      throw new Error(`Index file not found: ${this.pluginsIndexJsonPath}`);
    }

    const file = await this.cli.fileSystem.readFile(this.pluginsIndexJsonPath);
    this.pluginsIndexJson = JSON.parse(file) as IPluginsIndexJson;

    // Mise à jour du cache
    this.pluginsIndexJsonCache = this.pluginsIndexJson;
    this.cacheTimestamp = now;
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
      propertiesManifest = [
        "id",
        "name",
        "type",
        "service",
        "templateDir",
        "blueprints",
      ];
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

    pathPlugin.service = this.cli.path.join(
      this.plugin.pluginDir,
      this.pluginsManifest.service,
    );

    if (errors.length > 0) {
      throw new Error(errors.join("\n"));
    }

    if (!this.cli.fileSystem.exists(pathPlugin.service) && pathPlugin.service) {
      throw new Error(
        `Le fichier d'entrée du plugin ${this.pluginsManifest.id}.service.js n'existe pas`,
      );
    }
    this.cli.logger.debug(
      `Checking template directory: ${pathPlugin.templateDir}`,
    );
    if (pathPlugin.templateDir && this.plugin.type === "scaffolder") {
      if (!this.cli.fileSystem.exists(pathPlugin.templateDir)) {
        throw new Error(
          `Le dossier de templates du plugin ${this.pluginsManifest.id} n'existe pas`,
        );
      }
    }

    if (this.pluginsManifest.blueprints) {
      for (const blueprint of this.pluginsManifest.blueprints) {
        const blueprintPath = this.cli.path.join(
          pathPlugin.templateDir,
          blueprint.template,
        );
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

  public getSDKContext(): ISDKContext {
    return {
      log: {
        info: (msg: string) => this.cli.logger.info(msg),
        success: (msg: string) => this.cli.logger.success(msg),
        error: (msg: string) => this.cli.logger.error(msg),
        warning: (msg: string) => this.cli.logger.warn(msg),
        debug: (msg: string) => this.cli.logger.debug(msg),
      },
      fs: {
        writeAsync: (p: string, c: string) =>
          this.cli.fileSystem.writeFile(p, c),
        exists: (p: string) => this.cli.fileSystem.exists(p),
        readFile: (p: string) => this.cli.fileSystem.readFile(p),
      },
      render: (pluginDir: string, tplDir: string, tpl: string, data: any) =>
        this.cli.template.render(pluginDir, tplDir, tpl, data),
      config: this.cli.config as any,
    };
  }

  public async buildTemplateContext(
    configProjectData: IProjectConfig,
    entitiesData: IGetEntityJson,
  ): Promise<ITemplateContext> {
    // Construction du contexte de template
    const templateContext: ITemplateContext = {
      id: "plugin-context",
      name: configProjectData.projectName || "Project",
      templateDir: "./templates",
      version: configProjectData.version || "1.0.0",
      service: "index.js",
      templateData: {
        scope: {
          project: this.buildProjectData(configProjectData),
          entities: this.buildEntitiesData(entitiesData),
        },
      },
    };

    // Sauvegarder le contexte dans bag-data.json si nécessaire
    try {
      await this.cli.fileSystem.writeFile(
        this.bagDataFile,
        JSON.stringify(templateContext, null, 2),
      );
      this.cli.logger.debug("Template context saved to bag-data.json");
    } catch (error: any) {
      this.cli.logger.warn(`Failed to save template context: ${error.message}`);
    }

    return templateContext;
  }

  private buildProjectData(
    configProjectData: IProjectConfig,
  ): IProjectTemplateData {
    const projectData: IProjectTemplateData = {
      name: configProjectData.projectName || "Project",
      version: configProjectData.version || "1.0.0",
      databases: configProjectData.databases ?? [],
    };

    // Ajouter les frameworks si disponibles
    if (
      configProjectData.frameworks &&
      configProjectData.frameworks.length > 0
    ) {
      const framework = configProjectData.frameworks[0];

      // Ajouter les environnements
      if (framework.environments) {
        const defaultEnv = framework.environments.find(
          (e: IEnvironment) => e.mode === ".env",
        );
        if (defaultEnv) {
          projectData.env = (defaultEnv.variables as any) ?? {};
        }
      }
    }

    // Ajouter la base de données principale
    if (configProjectData.databases && configProjectData.databases.length > 0) {
      projectData.db = configProjectData.databases[0];
    }

    return projectData;
  }

  private buildEntitiesData(
    entitiesData: IGetEntityJson,
  ): IEntityTemplateData[] {
    if (!entitiesData?.entities || entitiesData.entities.length === 0) {
      this.cli.logger.warn("No entities found in entities data");
      return [];
    }

    return entitiesData.entities.map((entity) =>
      this.mapEntityForTemplate(entity),
    );
  }

  private mapEntityForTemplate(entity: any): IEntityTemplateData {
    return {
      namePascalCase: entity.namePascalCase,
      nameKebabCase: entity.nameKebabCase,
      nameSnakeCase: entity.nameKebabCase?.replace(/-/g, "_") || "",
      namePluralCamelCase: entity.nameCamelCase
        ? `${entity.nameCamelCase}s`
        : "",
      nameCamelCase: entity.nameCamelCase,
      tableName: entity.tableName,
      columns: (entity.columns || []).map(
        (col: any): IColumnTemplateData => ({
          phpType: this.mapTypeScriptToPhp(col.typeTypeScript),
          name: col.name,
          nameCamelCase: this.cli.case.toCamelCase(col.name),
          namePascalCase: this.cli.case.toPascalCase(col.name),
          foreignKey: col.foreignKey || false,
          ormType: col.typeDoctrine || col.typeORM || "string",
          nullable: col.nullable || false,
          typeSql: col.typeSql,
          typeTypeScript: col.typeTypeScript,
          primaryKey: col.primaryKey || false,
          unique: col.unique || false,
        }),
      ),
      relationships: (entity.relationships || []).map(
        (rel: any): IRelationshipTemplateData => ({
          nameCamelCase: this.cli.case.toCamelCase(rel.relationName),
          namePascalCase: this.cli.case.toPascalCase(rel.relationName),
          targetPascalCase: this.cli.case.toPascalCase(rel.target),
          relationType: rel.relationType,
          targetPascalCaseSingular: this.cli.case.toPascalCase(rel.target),
          mappedBy: rel.mappedBy || "",
          ownerPascalCase: rel.owner ? entity.namePascalCase : "",
          nullable: true,
          inversedBy: rel.inversedBy || "",
        }),
      ),
    };
  }

  private mapTypeScriptToPhp(tsType: string): string {
    const typeMap: Record<string, string> = {
      number: "int",
      string: "string",
      boolean: "bool",
      Date: "DateTime",
    };
    return typeMap[tsType] || "string";
  }
}
