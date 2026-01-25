/**
 * Interface définissant les opérations de service liées au système de fichiers.
 * Fournit des méthodes pour lire, écrire, copier, vérifier l'existence de fichiers/répertoires,
 * ainsi que pour manipuler des arborescences de répertoires.
 */
export interface IFileSystemService {
  /**
   * Une liste de répertoires à exclure lors de certaines opérations (ex: parcours d'arborescence).
   */
  excludedDirs: string[];
  /**
   * Récupère une représentation textuelle de l'arborescence d'un répertoire.
   * @param dirPath - Le chemin du répertoire dont on veut l'arborescence.
   * @returns Une chaîne de caractères représentant l'arborescence.
   */
  getDirectoryTree(dirPath: string): string;
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
  exists(targetPath: string): Promise<boolean>;
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
  ): void;
}
