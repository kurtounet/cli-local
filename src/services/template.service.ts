import ejs from "ejs";

import { ITemplateService } from "@/types/services/template.interface.js";

import { BaseService } from "./base-service.service.js";

export class TemplateService extends BaseService implements ITemplateService {
  readonly serviceName = "TemplateService";

  private cache = new Map<string, ejs.TemplateFunction>();

  public async init(): Promise<void> {
    // Si tu n'as rien à initialiser pour l'instant :
    return Promise.resolve();
  }
  async render(
    pluginDir: string,
    templateDir: string,
    templateName: string,
    data: Record<string, unknown>,
    options = {},
  ): Promise<string> {
    // this.cli.logger.success(`[Template] Plugin chargé.${pluginDir}/${templateDir}/${templateName}`);

    const templateNameWithExtension = templateName.endsWith(".ejs")
      ? templateName
      : templateName + ".ejs";
    const cacheKey = `${pluginDir}:${templateNameWithExtension}`;
    let compiled = this.cache.get(cacheKey);

    if (!compiled) {
      const fullPath = this.cli.path.join(
        pluginDir,
        templateDir,
        templateNameWithExtension,
      );
      if (!this.cli.fileSystem.exists(fullPath))
        throw new Error(`Template manquante: ${fullPath}`);

      const compileOptions = {
        filename: fullPath, // ← CRITIQUE pour que les includes fonctionnent
        async: true, // ← Pour supporter await dans les templates
        ...options,
      };
      const content = await this.cli.fileSystem.readFile(fullPath);

      compiled = ejs.compile(content, compileOptions);
      this.cache.set(cacheKey, compiled);
    }

    return await compiled(data);
  }
}
