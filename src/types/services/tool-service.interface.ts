import { IFileNode } from "../commun/file-node.interface.js";
import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les capacités d'un service d'outils génériques.
 * Actuellement, il inclut des fonctionnalités de renommage.
 */
export interface IToolService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  /**
   * Renomme des éléments (fichiers ou répertoires) avec un type spécifié.
   * La logique de renommage dépend du type fourni.
   * @param paths - Un tableau de chemins d'éléments à renommer.
   * @param type - Le type de l'opération de renommage ou le contexte.
   * @returns Une chaîne de caractères indiquant le résultat de l'opération.
   */
  rename(paths: string[], type: string): string;

  generateAsciiTree(node: IFileNode, viewContent?: boolean, prefix?: string): string;
}
