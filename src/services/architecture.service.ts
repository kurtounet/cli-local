import { BaseService } from "./base-service.service.js";
import { IArchitectureService } from "@/types/architecture-service.interface.js";

export class ArchitectureService
  extends BaseService
  implements IArchitectureService
{
  getDirectoryTree(
    pathsIn: string,
    pathsOut: string,
    type: string,
    action = "save",
  ): void {
    this.cli.logger.info(`Traitement de : ${pathsIn}`);

    const tree = this.cli.fileSystem.getDirectoryTree(pathsIn);

    if (action === "save") {
      const fileName = `tree.${type}`;
      const content =
        type === "json"
          ? JSON.stringify(tree, null, 2)
          : this.generateAsciiTree(tree);

      this.cli.fileSystem.writeToOutput(pathsOut, "tree", fileName, content);
      this.cli.logger.success(`Fichier ${fileName} généré avec succès.`);
    }
  }
  createDirectoryTree(sourcePath: string, targetPath: string): void {
    this.cli.fileSystem.createDirectoryTreeFromJson(sourcePath, targetPath);
  }
  rename(paths: string[]): string {
    return `tree de ${paths}`;
  }
  private generateAsciiTree(node: any, prefix: string = ""): string {
    let md = "";
    const children = node.children || [];

    // 1. Parcourir les enfants
    children.forEach((child: any, index: number) => {
      const isLast = index === children.length - 1;
      const connector = isLast ? "└── " : "├── ";

      // Déterminer l'icône (Dossier vs Fichier)
      const isDir = child.type === "directory" || Array.isArray(child.children);
      const icon = isDir ? "📁 " : "📄 ";

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
