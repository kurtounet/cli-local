// import { IFrameworkService } from "../interfaces/framework-service.interface.js";

// export class FrameworkService implements IFrameworkService {
//   readonly serviceName = "FrameworkService";

//   init(): Promise<void> {
//     return Promise.resolve();
//   }

/**
 * Mise à jour du tsconfig.json
 */
// async updateTsConfig(): Promise<void> {
//   try {
//     const filePath = this.cli.path.join(process.cwd(), "tsconfig.json");
//     const content = await this.cli.fileSystem.readFile(filePath);
//     const tsconfig = JSON.parse(content) as any;

//     // On s'assure que compilerOptions existe
//     tsconfig.compilerOptions = tsconfig.compilerOptions || {};

//     // Configuration des alias @
//     tsconfig.compilerOptions.baseUrl = ".";
//     tsconfig.compilerOptions.paths = {
//       ...tsconfig.compilerOptions.paths, // On garde les alias existants
//       "@/*": ["src/*"],
//       "@/types/*": ["src/types/*"],
//       "@/services/*": ["src/services/*"],
//     };

//     await this.cli.fileSystem.writeFile(filePath, JSON.stringify(tsconfig, null, 2));
//     this.cli.logger.success("Alias @/* configuré dans tsconfig.json !");
//   } catch (error) {
//     this.cli.logger.error("Erreur lors de la mise à jour du tsconfig.json");
//   }
// }
// }
