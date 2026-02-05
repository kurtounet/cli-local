import fs from "node:fs";
import path from "node:path";

import ejs from "ejs";

import { BaseService } from "./base-service.service.js";

export class TemplateFactory extends BaseService {
  serviceName = "TemplateFactory";
  private static cache = new Map<string, ejs.TemplateFunction>();

  static render(pluginPath: string, templateName: string, data: any): string {
    const cacheKey = `${pluginPath}:${templateName}`;
    let compiled = this.cache.get(cacheKey);

    if (!compiled) {
      const fullPath = path.join(
        pluginPath,
        "templates",
        `${templateName}.ejs`,
      );
      if (!fs.existsSync(fullPath))
        throw new Error(`Template manquante: ${fullPath}`);

      const content = this.cli.fileSystem.readFileSync(fullPath, "utf-8");
      compiled = ejs.compile(content);
      this.cache.set(cacheKey, compiled);
    }

    return compiled(data);
  }
}
