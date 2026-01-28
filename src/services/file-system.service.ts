import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import { BaseService } from "./base-service.service.js";
import { IFileSystemService } from "@/types/services/file-system.interface.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class FileSystemService extends BaseService implements IFileSystemService {
  readonly serviceName = "FileSystemService";

  public excludedDirs = ["node_modules", ".git", "dist", ".vscode"];

  public setExucludedDirs(excludedDirs: string[]) {
    this.excludedDirs = excludedDirs.concat(this.excludedDirs);
  }

  /**
   * Vérifie si un chemin existe sur le disque
   */
  public exists(targetPath: string): Promise<boolean> {
    return fs.existsSync(targetPath);
  }

  /**
   * Crée un répertoire (et ses parents si nécessaire)
   */
  public async createDirectory(dirPath: string): Promise<void> {
    try {
      await fs.ensureDir(dirPath);
      this.logger.debug(`Dossier créé ou vérifié: ${dirPath}`);
    } catch (error) {
      throw new Error(`Impossible de créer le dossier: ${dirPath}`);
    }
  }

  /**
   * Écrit un fichier avec du contenu
   */
  public async writeFile(filePath: string, content: string): Promise<void> {
    try {
      await fs.outputFile(filePath, content);
      this.logger.debug(`Fichier écrit: ${filePath}`);
    } catch (error) {
      throw new Error(` writeFile() Échec de l'écriture du fichier: ${filePath}`);
    }
  }

  public writeToOutput(basePath: string, subDir: string, fileName: string, content: string): void {
    // Le service gère la construction du chemin
    const targetDir = path.join(basePath, subDir);

    // Le service gère la sécurité (création du dossier si inexistant)
    if (!this.exists(targetDir)) {
      this.createDirectory(targetDir); // Idéalement récursif
    }

    const finalPath = path.join(targetDir, fileName);
    this.writeFile(finalPath, content);
  }

  /**
   * Lit le contenu d'un fichier (ex: un template)
   */
  public async readFile(filePath: string): Promise<string> {
    try {
      return await fs.readFile(filePath, "utf-8");
    } catch (error) {
      throw new Error(`Impossible de lire le fichier: ${filePath}`);
    }
  }

  /**
   * Copie un fichier ou un dossier complet
   */
  public async copy(source: string, destination: string): Promise<void> {
    try {
      await fs.copyFileSync(source, destination);
      this.logger.debug(`Copié de ${source} vers ${destination}`);
    } catch (error) {
      throw new Error(`Échec de la copie: ${source} -> ${destination}`);
    }
  }

  /**
   * Résout un chemin par rapport à la racine du projet ou au dossier de templates.
   * @param {...string[]} segments - Les parties du chemin à résoudre.
   * @returns {string} - Le chemin résolu.
   */
  public resolvePath(...segments: string[]): string {
    return path.resolve(...segments);
  }
  public createFile(filePath: string, content: string = ""): void {
    // On s'assure que le dossier parent existe avant de créer le fichier
    const dir = path.dirname(filePath);
    if (!this.exists(dir)) {
      this.createDirectory(dir);
    }
    this.writeFile(filePath, content);
  }

  /**
   * Parcourt un dossier de manière récursive pour lister le contenu.
   * @param {string} dirPath - Le chemin du dossier à scanner.
   * @returns {Object} - La structure du dossier en format JSON.
   */
  public getDirectoryTree(dirPath: string): any {
    const stats = fs.statSync(dirPath);
    const info: any = {
      path: path.basename(dirPath),
      name: path.basename(dirPath),
    };

    if (stats.isDirectory()) {
      info.type = "folder";
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

  private filterTree(node: any): any {
    if (!node.children) return node;

    return {
      ...node,
      children: node.children
        .filter((child: any) => !this.excludedDirs.includes(child.name))
        .map((child: any) => this.filterTree(child)), // On continue le filtrage récursivement
    };
  }

  public async createDirectoryTreeFromJson(
    sourcePath: string,
    targetBaseDir: string,
  ): Promise<void> {
    try {
      // 1. Lire le fichier une seule fois
      const jsonString = await this.readFile(sourcePath);
      const treeData = JSON.parse(jsonString);

      // 2. Lancer la récursion sur l'objet JSON
      await this.buildPhysicalTree(treeData, targetBaseDir);

      this.cli.logger.success("Arborescence recréée avec succès !");
    } catch (error: any) {
      this.cli.logger.error(`Erreur lors de la lecture du JSON: ${error.message}`);
    }
  }

  private async buildPhysicalTree(node: any, currentPath: string): Promise<void> {
    const fullPath = path.join(currentPath, node.name);

    if (node.type === "folder" || node.children) {
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
          if (await this.cli.fileSystem.exists(templatePath)) {
            // const template = this.cli.fileSystem.readFile(templatePath);
            const rawTemplate = await this.cli.fileSystem.readFile(templatePath);
            console.log(`Contenu chargé pour ${node.name}:`, rawTemplate.length);
            content = this.cli.templateService.compile(rawTemplate, {
              name: node.name.replace(".ts", ""),
              author: "MCLP System",
            });
          }
        } catch (error: any) {
          this.cli.logger.warn(
            `Template non trouvé pour ${node.name}, création d'un fichier vide.`,
          );
          content = ""; // On replie sur un fichier vide au lieu de crash
        }
      }
      console.log("--- DEBUG ECRITURE ---");
      console.log("Cible:", fullPath);
      console.log("Contenu à écrire:", `"${content}"`); // Si tu vois "", c'est que la compilation a échoué
      console.log("----------------------");

      await this.cli.fileSystem.writeFile(fullPath, content);
      await this.writeFile(fullPath, content);
      this.cli.logger.info(`📄 Fichier : ${fullPath}`);
    }
  }
}
