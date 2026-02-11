import { IDirectory } from "@/features/commun/architecture.interface.js";

import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les capacités d'un service d'outils génériques.
 * Actuellement, il inclut des fonctionnalités de renommage.
 */
export interface IToolService extends IBaseService {
  serviceName: string;
  // init(): Promise<void>;

  generateAsciiTree(
    node: IDirectory,
    viewContent?: boolean,
    prefix?: string,
  ): string;

  generateYamlTree(node: IDirectory, viewContent: boolean): string;

  generateAsciiTreeMetadata(
    node: IDirectory,
    prefix?: string,
    viewContent?: boolean,
  ): string;

  buildDoc(node: IDirectory, outputPath: string): Promise<string>;

  /**
   * Recrée physiquement sur le disque une structure de dossiers et fichiers à partir d'un nœud.
   * @param node - Le nœud racine (fichier ou dossier) à construire.
   * @param currentPath - Le chemin de destination sur le disque.
   */
  buildPhysicalTree(node: IDirectory, currentPath: string): Promise<void>;

  createDirectoryStructure(
    parentPath: string,
    nodes: IDirectory[],
  ): Promise<void>;

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
  ): Promise<IDirectory | null>;
}
