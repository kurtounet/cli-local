import { BaseService } from "./base-service.service.js";
import { ITemplate, ITemplateService } from "../types/template.interface.js";
import path from "path";
import fs from "fs-extra"; // On peut l'utiliser directement ici pour le scan rapide

export class TemplateService extends BaseService implements ITemplateService {
  /**
   * Liste tous les templates disponibles dans le dossier configuré
   */
  public async getTemplates(): Promise<ITemplate[]> {
    const templatesDir = this.cli.config.templatesPath;
    const fullPath = path.resolve(this.cli.rootPath, templatesDir);

    // Vérifier si le dossier existe
    if (!(await fs.pathExists(fullPath))) {
      this.logger.warn(`Dossier de templates introuvable : ${fullPath}`);
      return [];
    }

    // Lire les sous-dossiers (chaque dossier est un template)
    const directories = await fs.readdir(fullPath);
    const templates: ITemplate[] = [];

    for (const name of directories) {
      const templatePath = path.join(fullPath, name);
      const stat = await fs.stat(templatePath);

      if (stat.isDirectory()) {
        templates.push({
          name,
          path: templatePath,
          files: await this.listRecursiveFiles(templatePath),
          variables: [],
          structure: [],
          hooks: {
            preCreate: [],
            postCreate: [],
          },
        });
      }
    }

    return templates;
  }

  public async getTemplateByName(name: string): Promise<ITemplate | undefined> {
    const templates = await this.getTemplates();
    return templates.find((t) => t.name === name);
  }

  /**
   * Utilitaire interne pour lister tous les fichiers d'un template
   */
  private async listRecursiveFiles(
    dir: string,
    allFiles: string[] = [],
  ): Promise<string[]> {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const name = path.join(dir, file);
      if ((await fs.stat(name)).isDirectory()) {
        await this.listRecursiveFiles(name, allFiles);
      } else {
        allFiles.push(name);
      }
    }
    return allFiles;
  }
}
