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
    // Log de debug interne (optionnel)
    // console.debug(`[PathService] Joined: ${segments.join(' + ')} => ${result}`);
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
   * Vérifie que le chemin n'est pas vide.
   * @param filePath - Chemin à vérifier
   * @param paramName - Nom du paramètre pour le message d'erreur. Par exemple, `filePath` ou `dirPath`.
   */
  public validatePath(filePath: string, paramName: string): void {
    if (!filePath || filePath.trim() === "") {
      throw new Error(`${paramName} cannot be empty`);
    }
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
  /**
   * Retourne un objet dont les propriétés représentent des éléments significatifs du chemin.
   * (root, dir, base, ext, name)
   * @param filePath - Chemin à analyser
   * @returns Objet contenant les éléments significatifs
   */
  public parse(filePath: string): path.ParsedPath {
    this.validatePath(filePath, "filePath");
    return path.parse(filePath);
  }

  /**
   * Retourne une chaîne de chemin à partir d'un objet (l'inverse de parse).
   * @param pathObject - Objet contenant les éléments significatifs
   * @returns Chemin
   */
  public format(pathObject: path.FormatInputPathObject): string {
    return path.format(pathObject);
  }

  /**
   * Retourne l'équivalent spécifique au système (utile pour Windows long paths \\?\).
   * @param filePath - Chemin
   * @returns Chemin
   */
  public toNamespacedPath(filePath: string): string {
    return path.toNamespacedPath(filePath);
  }

  /**
   * Retourne le séparateur de segment spécifique au système (\ ou /).
   * @returns Le séparateur
   */
  public getSeparator(): string {
    return path.sep;
  }

  /**
   * Retourne le délimiteur de chemin spécifique au système (; ou :).
   * @returns Le délimiteur
   */
  public getDelimiter(): string {
    return path.delimiter;
  }

  /**
   * Sécurité : Vérifie si un chemin (child) est réellement à l'intérieur d'un autre (parent).
   * Très utile pour empêcher les accès non autorisés (ex: ../../etc/passwd).
   * @param parent - Chemin parent
   * @param child - Chemin enfant
   * @returns `true` si le chemin enfant est à l'intérieur du chemin parent, `false` sinon
   */
  public isChildOf(parent: string, child: string): boolean {
    const relative = path.relative(parent, child);
    return relative.length > 0 && !relative.startsWith("..") && !path.isAbsolute(relative);
  }

  /**
   * Nettoie un chemin des caractères potentiellement dangereux.
   * @param filePath - Chemin à nettoyer
   * @returns Chemin nettoy
   */
  public sanitize(filePath: string): string {
    // Remplace les multiples slashes et normalise
    return filePath.replace(/[<>:"|?*]/g, "").trim();
  }
}
