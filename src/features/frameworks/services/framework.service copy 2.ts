import path from "node:path";

import { BaseService } from "@/services/base-service.service.js";
import { IFrameworkService } from "../interfaces/framework-service.interface.js";
import { IConfigFramework } from "@/features/commun/framework.interface.js";
import { IConfigDatabase } from "@/features/commun/database.interface.js";

export class FrameworkService extends BaseService implements IFrameworkService {
  readonly serviceName = "FrameworkService";
  readonly configFrameworkMock = "1.0.0";
  /**
   * Initialisation du framework
   * @param project
   */
  async initFramework(project: string): Promise<any> {}
  /**
   * Récupérer la configuration du framework
   * @param name Révup
   */
  configFrameworks(frameWorks: Array<string>): Array<IConfigFramework> {
    let configFramework: Array<IConfigFramework> = [];
    frameWorks.forEach((element) => {
      if (element != "no") {
        let config = configFrameworkMock(element);
        if (config != null) {
          configFramework.push(config);
        }
      }
    });

    return configFramework;
  }
  configDatabases(database: Array<string>): Array<IConfigDatabase> {
    let configDatabase: Array<IConfigDatabase> = [];
    database.forEach((element) => {
      let config = configDatabaseMock(element);
      if (config != null) {
        configDatabase.push(config);
      }
    });
    return configDatabase;
  }
  /**
   * Installation du framework
   * @param project
   */
  intallFramework(project: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  /**
   * Installation des dépendances
   * @param project
   */
  intallDependencies(project: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  /**
   * Génération des fichiers
   * @param project
   */
  generateFileFramework(project: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  /**
   * Mise à jour du tsconfig.json
   */
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
