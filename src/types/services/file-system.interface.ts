import { IFileNode } from "../commun/file-node.interface.js";

export interface IFileSystemService {
  /**
   * Nom du service.
   */
  serviceName: string;
  init(): Promise<void>;

  /**
   * Service de gestion du système de fichiers.
   * Fournit des méthodes pour manipuler les fichiers, répertoires et structures d'arborescence.
   */

  /** Liste des répertoires à ignorer lors des scans. */
  excludedDirs: string[];

  /**
   * Ajoute des répertoires à la liste d'exclusion existante.
   * @param excludedDirs - Liste des noms de dossiers à exclure.
   */
  setExcludedDirs(excludedDirs: string[]): void;

  /**
   * Vérifie si un chemin donné existe sur le disque.
   * @param targetPath - Le chemin à vérifier.
   */
  exists(targetPath: string): boolean;

  /**
   * Crée un répertoire de manière récursive (assure l'existence des parents).
   * @param dirPath - Le chemin du répertoire à créer.
   */
  createDirectory(dirPath: string): Promise<void>;

  /**
   * Écrit un objet dans un fichier au format JSON.
   * @param filePath - Le chemin du fichier de destination.
   * @param content - Les données à sérialiser.
   */
  writeFileJson(filePath: string, content: any): Promise<void>;

  /**
   * Lit et parse un fichier JSON.
   * @param filePath - Le chemin du fichier à lire.
   */
  readFileJson(filePath: string): Promise<any>;

  /**
   * Écrit du contenu textuel dans un fichier. Normalise le chemin au préalable.
   * @param filePath - Le chemin du fichier.
   * @param content - Le contenu textuel à écrire.
   */
  writeFile(filePath: string, content: string): Promise<void>;

  /**
   * Écrit un fichier dans une sous-structure spécifique à partir d'une base.
   * @param basePath - Le répertoire racine de destination.
   * @param subDir - Le sous-répertoire cible.
   * @param fileName - Le nom du fichier final.
   * @param content - Le contenu à écrire.
   */
  writeToOutput(basePath: string, subDir: string, fileName: string, content: string): Promise<void>;

  /**
   * Lit le contenu d'un fichier en encodage UTF-8.
   * @param filePath - Le chemin du fichier à lire.
   */
  readFile(filePath: string): Promise<string>;

  /**
   * Copie un fichier ou un répertoire d'une source vers une destination.
   * @param source - Le chemin source.
   * @param destination - Le chemin de destination.
   */
  copy(source: string, destination: string): Promise<void>;

  /**
   * Crée un fichier vide ou avec un contenu initial. Crée les dossiers parents si nécessaire.
   * @param filePath - Le chemin du fichier à créer.
   * @param content - Le contenu optionnel du fichier.
   */
  createFile(filePath: string, content?: string): Promise<void>;

  /**
   * Lit le contenu d'un répertoire de manière récursive.
   * @param dirPath - Le chemin du répertoire à scanner.
   */
  readDir(dirPath: string): Promise<string[]>;

  /**
   * Génère une représentation sous forme d'arbre (FileNode) d'un répertoire.
   * @param dirPath - Le chemin racine du scan.
   * @param level - Le niveau de profondeur actuel (usage interne).
   * @param maxLevel - La limite de profondeur du scan (0 pour illimité).
   * @param withMetadata - Si vrai, analyse les métadonnées des fichiers via l'AST.
   * @param config - Configuration des exclusions et des extensions à analyser.
   */
  getDirectoryTree(
    dirPath: string,
    level?: number,
    maxLevel?: number,
    withMetadata?: boolean,
    config?: { excludedDirs: string[]; analyzeExtensions: string[] },
  ): Promise<IFileNode | null>;

  /**
   * Recrée physiquement sur le disque une structure de dossiers et fichiers à partir d'un nœud.
   * @param node - Le nœud racine (fichier ou dossier) à construire.
   * @param currentPath - Le chemin de destination sur le disque.
   */
  buildPhysicalTree(node: IFileNode, currentPath: string): Promise<void>;

  /**
   * Met à jour un fichier JSON (ex: package.json) avec les configurations par défaut du CLI.
   * @param file - Le nom ou le chemin du fichier JSON à modifier.
   */
  updateJson(file: string): Promise<void>;
}
