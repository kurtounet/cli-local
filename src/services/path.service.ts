import path from "path";

import { IPathService } from "@/types/services/path-service.interface.js";

import { BaseService } from "./base-service.service.js";

export class PathService extends BaseService implements IPathService {
  readonly serviceName = "PathService";

  public init(): Promise<void> {
    return Promise.resolve();
  }

  /**
   * Joint plusieurs segments en un seul chemin propre.
   * @param segments - Les segments de chemin à joint
   * @returns Le chemin joint
   */
  public join(...segments: string[]): string {
    this.validateSegments(segments);
    return path.join(...segments);
  }

  /**
   * Résout une séquence de chemins en un chemin absolu.
   * @param segments - Les segments de chemin à resilier
   * @returns Le chemin absolu
   */
  public resolve(...segments: string[]): string {
    return path.resolve(...segments);
  }

  /**
   * Retourne le chemin relatif d'un point A vers un point B.
   * @param from - Point A
   * @param to - Point B
   * @returns Chemin relatif
   */
  public getRelativePath(from: string, to: string): string {
    return path.relative(from, to);
  }

  /**
   * Retourne l'extension du fichier (ex: .jpg, .json).
   * @param filePath - Chemin du fichier
   * @returns L'extension
   */
  public getExtension(filePath: string): string {
    return path.extname(filePath);
  }

  /**
   * Retourne le nom du fichier.
   * @param filePath - Chemin du fichier
   * @param withExtension - Si faux, retourne juste le nom sans l'extension.
   * @returns Le nom du fichier
   */
  public getFileName(filePath: string, withExtension = true): string {
    return withExtension
      ? path.basename(filePath)
      : path.basename(filePath, path.extname(filePath));
  }

  /**
   * Retourne le nom du répertoire parent.
   * @param filePath - Chemin du fichier
   * @returns Le nom du répertoire
   */
  public getDirectory(filePath: string): string {
    return path.dirname(filePath);
  }

  /**
   * Nettoie les erreurs de format (doubles slashs, etc.).
   * @param filePath - Chemin à nettoyer
   * @returns Chemin normalisé
   */
  public normalize(filePath: string): string {
    return path.normalize(filePath);
  }

  /**
   * Vérifie si un chemin est absolu.
   * @param filePath - Chemin à vérifier
   * @returns `true` si le chemin est absolu, `false` sinon
   */
  public isAbsolute(filePath: string): boolean {
    return path.isAbsolute(filePath);
  }

  /**
   * Méthode privée pour valider les entrées et éviter les crashs.
   * @param segments - Les segments de chemin à resilier
   */
  private validateSegments(segments: string[]): void {
    if (segments.some((s) => typeof s !== "string")) {
      throw new Error(
        "[PathService] Tous les segments du chemin doivent être des chaînes de caractères.",
      );
    }
  }
}
