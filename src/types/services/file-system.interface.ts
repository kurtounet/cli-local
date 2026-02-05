import { IFileNode } from "../commun/file-node.interface.js";

/**
 * Interface définissant les opérations de service liées au système de fichiers.
 * Fournit des méthodes pour lire, écrire, copier, vérifier l'existence de fichiers/répertoires,
 * ainsi que pour manipuler des arborescences de répertoires.
 */
export interface IFileSystemService {
  /**
   * Nom du service.
   */
  serviceName: string;
  init(): Promise<void>;
  /**
   * Une liste de répertoires à exclure lors de certaines opérations (ex: parcours d'arborescence).
   */
  excludedDirs: string[];
  /**
   * Recursively builds a directory tree from a given path
   * @param dirPath - Path of directory to start from
   * @param level - Current level of recursion (default: 0)
   * @param maxLevel - Maximum level of recursion (default: 0 = infinite)
   * @param withMetadata - Whether to include metadata in the tree (default: true)
   * @param config - Configuration object containing excluded directories and analyze extensions
   * @returns Root node of the directory tree
   */
  getDirectoryTree(
    dirPath: string,
    level: number,
    maxLevel: number, // 0 = infini
    withMetadata: boolean,
    config?: { excludedDirs?: string[]; analyzeExtensions?: string[] | null },
  ): Promise<IFileNode | null>;

  readDir(dirPath: string): Promise<string[]> | string[];
  /**
   * Résout une séquence de segments de chemin en un chemin absolu ou relatif normalisé.
   * @param segments - Les segments de chemin à résoudre.
   * @returns Le chemin résolu.
   */
  resolvePath(...segments: string[]): string;
  /**
   * Lit le contenu d'un fichier de manière asynchrone.
   * @param filePath - Le chemin complet du fichier à lire.
   * @returns Une promesse résolue avec le contenu du fichier sous forme de chaîne.
   */
  readFile(filePath: string): Promise<string>;
  /**
   * Vérifie de manière asynchrone si un fichier ou un répertoire existe.
   * @param targetPath - Le chemin du fichier ou répertoire à vérifier.
   * @returns Une promesse résolue avec `true` si l'élément existe, `false` sinon.
   */
  exists(targetPath: string): boolean;
  /**
   * Crée un répertoire de manière asynchrone. Inclut la création récursive des répertoires parents si nécessaire.
   * @param dirPath - Le chemin du répertoire à créer.
   * @returns Une promesse qui se résout une fois le répertoire créé.
   */
  createDirectory(dirPath: string): Promise<void>;
  /**
   * Copie un fichier ou un répertoire de manière asynchrone.
   * @param source - Le chemin de la source à copier.
   * @param destination - Le chemin de destination.
   * @returns Une promesse qui se résout une fois la copie terminée.
   */
  copy(source: string, destination: string): Promise<void>;
  /**
   * Écrit  un contenu JSON dans un fichier de manière asynchrone. Écrase le fichier s'il existe.
   * @param filePath - Le chemin du fichier dans lequel écrire.
   * @param content - Le contenu à écrire dans le fichier.
   * @returns Une promesse qui se résout une fois l'écriture terminée.
   */
  writeFileJson(filePath: string, content: string): Promise<void>;
  writeFileAsync(filePath: string, content: string): Promise<void>;
  /**
   * Écrit du contenu dans un fichier de manière asynchrone. Écrase le fichier s'il existe.
   * @param filePath - Le chemin du fichier dans lequel écrire.
   * @param content - Le contenu à écrire dans le fichier.
   * @returns Une promesse qui se résout une fois l'écriture terminée.
   */
  writeFile(filePath: string, content: string): Promise<void>;
  /**
   * Crée une arborescence de répertoires et de fichiers basée sur une structure JSON.
   * @param sourcePath - Chemin source pour une éventuelle référence ou base.
   * @param targetPath - Chemin cible où la structure sera créée.
   * @returns Une promesse qui se résout une fois l'arborescence créée.
   */
  createDirectoryTreeFromJson(
    sourcePath: string,
    targetPath: string,
  ): Promise<void>;

  buildPhysicalTree(node: IFileNode, currentPath: string): Promise<void>;
  /**
   * Écrit du contenu dans un fichier dans un répertoire de sortie spécifié.
   * @param basePath - Le chemin de base du répertoire de sortie.
   * @param subDir - Le sous-répertoire relatif au basePath.
   * @param fileName - Le nom du fichier à écrire.
   * @param content - Le contenu à écrire dans le fichier.
   */
  writeToOutput(
    basePath: string,
    subDir: string,
    fileName: string,
    content: string,
  ): Promise<void>;
  readFileJson(filePath: string): Promise<any>;
  updateJson(file: string): Promise<void>;
}
