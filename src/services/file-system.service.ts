import fs from "fs-extra";
import path from "path";
import { BaseService } from "./base-service.service.js";
import { IFileSystemService } from "@/types/file-system.interface.js";

export class FileSystemService
  extends BaseService
  implements IFileSystemService
{
  /**
   * Vérifie si un chemin existe sur le disque
   */
  public async exists(targetPath: string): Promise<boolean> {
    return fs.pathExists(targetPath);
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
      throw new Error(`Échec de l'écriture du fichier: ${filePath}`);
    }
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
      await fs.copy(source, destination);
      this.logger.debug(`Copié de ${source} vers ${destination}`);
    } catch (error) {
      throw new Error(`Échec de la copie: ${source} -> ${destination}`);
    }
  }

  /**
   * Résout un chemin par rapport à la racine du projet ou au dossier de templates
   */
  public resolvePath(...segments: string[]): string {
    return path.resolve(...segments);
  }
}
