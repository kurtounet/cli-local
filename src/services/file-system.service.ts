import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import { BaseService } from "./base-service.service.js";
import { IFileSystemService } from "@/types/services/file-system.interface.js";
import { IFileNode } from "@/types/commun/file-node.interface.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class FileSystemService extends BaseService implements IFileSystemService {
  readonly serviceName = "FileSystemService";

  public excludedDirs = ["node_modules", ".git", "dist", ".vscode"];

  public setExucludedDirs(excludedDirs: string[]) {
    this.excludedDirs = excludedDirs.concat(this.excludedDirs);
  }

  public exists(targetPath: string): boolean {
    return fs.existsSync(targetPath);
  }

  public async createDirectory(dirPath: string): Promise<void> {
    try {
      await fs.ensureDir(dirPath);
      this.cli.logger.debug(`Dossier créé ou vérifié: ${dirPath}`);
    } catch (error) {
      this.cli.errorHandler.handle(error, `Impossible de créer le dossier: ${dirPath}`);
    }
  }

  public async writeFile(filePath: string, content: string): Promise<void> {
    try {
      await fs.outputFile(filePath, content);
      this.cli.logger.debug(`Fichier écrit: ${filePath}`);
    } catch (error) {
      this.cli.errorHandler.handle(
        error,
        `writeFile() :Échec de l'écriture du fichier: ${filePath}`,
      );
    }
  }

  public async writeToOutput(
    basePath: string,
    subDir: string,
    fileName: string,
    content: string,
  ): Promise<void> {
    const targetDir = path.join(basePath, subDir);

    if (!this.exists(targetDir)) {
      await this.createDirectory(targetDir);
    }

    const finalPath = path.join(targetDir, fileName);
    await this.writeFile(finalPath, content);
  }

  public async readFile(filePath: string): Promise<string> {
    try {
      return await fs.readFile(filePath, "utf-8");
    } catch (error) {
      this.cli.errorHandler.handle(error, `Impossible de lire le fichier: ${filePath}`);
      throw error;
    }
  }

  public copy(source: string, destination: string): void {
    try {
      fs.copyFileSync(source, destination);
      this.cli.logger.debug(`Copié de ${source} vers ${destination}`);
    } catch (error) {
      this.cli.errorHandler.handle(error, `Échec de la copie: ${source} -> ${destination}`);
      throw new Error();
    }
  }

  public resolvePath(...segments: string[]): string {
    return path.resolve(...segments);
  }
  public async createFile(filePath: string, content = ""): Promise<void> {
    const dir = path.dirname(filePath);
    if (!this.exists(dir)) {
      await this.createDirectory(dir);
    }
    await this.writeFile(filePath, content);
  }

  public getDirectoryTree(dirPath: string): IFileNode {
    const stats = fs.statSync(dirPath);
    const info: IFileNode = {
      path: path.basename(dirPath),
      name: path.basename(dirPath),
      level: 0,
      type: "directory",
      size: 0,
      content: "",
      extension: path.extname(dirPath),
      metadata: [],
      children: [],
    };

    if (stats.isDirectory()) {
      info.type = "directory";
      // On lit le contenu du dossier et on relance la fonction pour chaque élément
      info.children = fs.readdirSync(dirPath).map((child) => {
        return this.getDirectoryTree(path.join(dirPath, child));
      });
    } else {
      info.type = "file";
      info.size = stats.size; // Optionnel : ajoute la taille en octets
    }

    return this.filterTree(info);
  }

  private filterTree(node: IFileNode): IFileNode {
    if (!node.children) return node;

    return {
      ...node,
      children: node.children
        .filter((child: IFileNode) => !this.excludedDirs.includes(child.name))
        .map((child: IFileNode) => this.filterTree(child)), // On continue le filtrage récursivement
    };
  }

  public async createDirectoryTreeFromJson(
    sourcePath: string,
    targetBaseDir: string,
  ): Promise<void> {
    try {
      // const jsonString = await this.readFile(sourcePath);
      // const raw: unknown = JSON.parse(jsonString);
      // if (!raw || typeof raw !== "object" || !("name" in raw)) {
      //   throw new Error("Structure JSON invalide : IFileNode attendu");
      // }
      const treeData = await this.readJsonFile(sourcePath);
      await this.buildPhysicalTree(treeData, targetBaseDir);
      this.cli.logger.success("Arborescence recréée avec succès !");
    } catch (error) {
      this.cli.errorHandler.handle(error, `Erreur lors de la lecture/parse du JSON: ${sourcePath}`);
      throw error;
    }
  }
  private async readJsonFile(filePath: string): Promise<IFileNode> {
    try {
      const raw: unknown = await fs.readJson(filePath); // fs-extra async

      if (!this.isFileNode(raw)) {
        throw new Error("Structure JSON invalide : IFileNode attendu");
      }

      return raw;
    } catch (error) {
      this.cli.errorHandler.handle(error, `Erreur lors de la lecture/parse du JSON: ${filePath}`);
      throw error;
    }
  }
  private isFileNode(value: unknown): value is IFileNode {
    return (
      !!value &&
      typeof value === "object" &&
      "name" in value &&
      typeof (value as any).name === "string"
    );
  }
  private async buildPhysicalTree(node: IFileNode, currentPath: string): Promise<void> {
    const fullPath = path.join(currentPath, node.name);

    if (node.type === "directory" || node.children) {
      // On crée le dossier (fs.ensureDir ne fera rien s'il existe déjà)
      await this.createDirectory(fullPath);
      this.cli.logger.info(`📁 Dossier : ${fullPath}`);

      if (node.children && Array.isArray(node.children)) {
        for (const child of node.children) {
          await this.buildPhysicalTree(child, fullPath);
        }
      }
    } else {
      // On écrit le fichier (fs.outputFile écrase ou crée proprement)
      let content = node.content || "";
      // LOGIQUE DE TEMPLATE :
      // Si le fichier est un .ts et qu'il est vide, on peut lui appliquer un template par défaut
      if (fullPath.endsWith(".ts") && content === "") {
        // On construit un chemin ABSOLU vers le template
        try {
          // const templatePath = path.resolve(__dirname, "../templates/class.ts.txt");
          const templatePath = path.resolve(__dirname, "..", "templates", "class.ts.txt");
          console.log(templatePath);
          if (this.cli.fileSystem.exists(templatePath)) {
            // const template = this.cli.fileSystem.readFile(templatePath);
            const rawTemplate = await this.cli.fileSystem.readFile(templatePath);
            console.log(`Contenu chargé pour ${node.name}:`, rawTemplate.length);
            content = this.cli.templateService.compile(rawTemplate, {
              name: node.name.replace(".ts", ""),
              author: "MCLP System",
            });
          }
        } catch (error) {
          this.cli.errorHandler.handle(
            error,
            `Template non trouvé pour ${node.name}, création d'un fichier vide.`,
          );
          content = ""; // On replie sur un fichier vide au lieu de crash
        }
      }
      console.log("--- DEBUG ECRITURE ---");
      console.log("Cible:", fullPath);
      console.log("Contenu à écrire:", `"${content}"`); // Si tu vois "", c'est que la compilation a échoué
      console.log("----------------------");
      await this.writeFile(fullPath, content);
      this.cli.logger.info(`📄 Fichier : ${fullPath}`);
    }
  }
}
