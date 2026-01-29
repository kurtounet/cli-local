import { IFileNode } from "../commun/file-node.interface.js";
import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les capacités d'un service d'outils génériques.
 * Actuellement, il inclut des fonctionnalités de renommage.
 */
export interface IToolService extends IBaseService {
  serviceName: string;
  // init(): Promise<void>;

  generateAsciiTree(
    node: IFileNode,
    viewContent?: boolean,
    prefix?: string,
  ): string;

  generateYamlTree(node: IFileNode, viewContent: boolean): string;

  generateAsciiTreeMetadata(
    node: IFileNode,
    prefix?: string,
    viewContent?: boolean,
  ): string;
}
