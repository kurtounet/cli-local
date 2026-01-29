import path from "node:path";
import { BaseService } from "./base-service.service.js";
import { IConfigProjectService } from "@/types/services/config-project-service.interface.js";

export class ConfigProjectService extends BaseService implements IConfigProjectService {
  readonly serviceName = "ConfigProjectService";

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
