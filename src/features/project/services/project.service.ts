import path from "node:path";

import { IProjectCommand } from "../interfaces/project-command.interface.js";

import { IProjectConfig } from "@/features/commun/projet.interface.js";

import { ConfigFrameworkService } from "@/features/frameworks/services/confi-framework.service.js";
import { IProjectService } from "../interfaces/project-service.interface.js";
import { IAppContext } from "@/types/context.interface.js";

export class ProjectService implements IProjectService {
  readonly serviceName = "ProjectService";
  constructor(
    protected cli: IAppContext,
    protected configframeworks = new ConfigFrameworkService(),
  ) {}
  public init(): Promise<void> {
    return Promise.resolve();
  }

  async newProject(project: IProjectCommand): Promise<any> {
    const frameworksList = [...project.frontends, ...project.backends];
    const databasesList = [...project.databases];
    const config: IProjectConfig = {
      projectName: project.name,
      path: project.path,
      starUml: project.starUml,
      version: "1.0.0",
      frameworks: this.configframeworks.configFrameworks(frameworksList),
      databases: this.configframeworks.configDatabases(databasesList),
    };
    return config;
  }
  generateProject(project: string): string {
    return "Project Généré avec succès";
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
