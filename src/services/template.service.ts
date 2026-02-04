import path from "path";
import ejs from "ejs";

import { BaseService } from "./base-service.service.js";
import { ITemplateService } from "@/types/services/template.interface.js";

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
    data: any,
  ): Promise<any> {
    const cacheKey = `${pluginDir}:${templateName}`;
    let compiled = this.cache.get(cacheKey);

    if (!compiled) {
      const fullPath = path.join(pluginDir, templateDir, templateName);
      if (!this.cli.fileSystem.exists(fullPath)) throw new Error(`Template manquante: ${fullPath}`);

      const content = await this.cli.fileSystem.readFile(fullPath);
      compiled = ejs.compile(content);
      this.cache.set(cacheKey, compiled);
    }

    return compiled(data);
  }
}
