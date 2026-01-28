import { IFileNode } from "@/types/commun/file-node.interface.js";
import { BaseService } from "./base-service.service.js";
import { IToolService } from "@/types/services/tool-service.interface.js";

export class ToolService extends BaseService implements IToolService {
  readonly serviceName = "ToolService";

  /**
   * Generate an ASCII tree from a file node.
   * @param node The file node to generate the tree from.
   * @param prefix The prefix to use for the tree.
   * @returns The ASCII tree as a string.
   */
  public generateAsciiTree(node: IFileNode, viewContent = false, prefix = ""): string {
    let md = "";
    const children = node.children ?? [];

    // 1. Parcourir les enfants
    children.forEach((child: IFileNode, index: number) => {
      const isLast = index === children.length - 1;
      const connector = isLast ? "└── " : "├── ";

      // Déterminer l'icône (Dossier vs Fichier)
      const isDir = child.type === "directory" || Array.isArray(child.children);
      const icon = isDir ? "📁 " : "📄 ";
      if (viewContent) {
        this.cli.logger.success(`${prefix}${connector}${icon}${child.name}`);
      }
      // Ajouter la ligne courante
      md += `${prefix}${connector}${icon}${child.name}\n`;

      // 2. Si c'est un dossier, on descend récursivement
      if (isDir && child.children) {
        // Si c'est le dernier enfant, on ne dessine plus de ligne verticale pour ses propres enfants
        const newPrefix = prefix + (isLast ? "    " : "│   ");
        md += this.generateAsciiTree(child, newPrefix);
      }
    });

    return md;
  }
}
