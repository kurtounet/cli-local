/**
 * Interface définissant les opérations liées à l'architecture du projet.
 * Cela inclut la manipulation de la structure des répertoires et le renommage.
 */
export interface IArchitectureService {
  /**
   * Récupère ou génère une arborescence de répertoires basée sur les chemins d'entrée et de sortie.
   * Cette méthode est potentiellement utilisée pour visualiser ou créer des structures.
   * @param pathsIn - Chemins d'entrée à traiter.
   * @param pathsOutn - Chemins de sortie ou de destination.
   * @param type - Type de l'opération (ex: 'generate', 'visualize').
   * @param action - Action spécifique à effectuer.
   */
  getDirectoryTree(
    pathsIn: string,
    pathsOutn: string,
    type: string,
    action: string,
  ): void;
  /**
   * Crée une arborescence de répertoires en copiant une structure depuis un chemin source vers un chemin cible.
   * @param sourcePath - Le chemin du répertoire source à partir duquel copier la structure.
   * @param targetPath - Le chemin du répertoire cible où créer la structure.
   */
  createDirectoryTree(sourcePath: string, targetPath: string): void;
  /**
   * Renomme des éléments (fichiers ou répertoires) spécifiés par un tableau de chemins.
   * La logique de renommage est implémentée en interne.
   * @param paths - Un tableau de chemins d'éléments à renommer.
   * @returns Une chaîne de caractères indiquant le résultat de l'opération de renommage.
   */
  rename(paths: string[]): string;
}
