import path from "node:path";
import { BaseService } from "./base-service.service.js";

import { IProjectService } from "@/types/services/project-service.interface.js";
import { IProjectCommand } from "@/types/commun/project-command.interface.js";
import { IProjectConfig } from "@/types/commun/framework-commun.interface.js";

export class ProjectService extends BaseService implements IProjectService {
  readonly serviceName = "ProjectService";
  async initProject(project: IProjectCommand): Promise<any> {
    const frameworksList = [...project.frontends, ...project.backends];
    const config: IProjectConfig = {
      projectName: project.name,
      path: project.path,
      starUml: project.starUml,
      version: "1.0.0",
      frameWorks: getConfigFrameworks(frameworksList),
      databases: getConfigDatabases(project.databases),
    };
    return config;
  }
  async updateTsConfig(): Promise<void> {
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
