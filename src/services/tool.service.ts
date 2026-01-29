import { IFileNode } from "@/types/commun/file-node.interface.js";
import { BaseService } from "./base-service.service.js";
import { IToolService } from "@/types/services/tool-service.interface.js";

export class ToolService extends BaseService implements IToolService {
  readonly serviceName = "ToolService";

  public generateAsciiTree(
    node: IFileNode,
    viewContent = false,
    prefix = "",
  ): string {
    let md = "";
    let fileCount = 0;
    let dirCount = 0;

    const children = node.children ?? [];

    // Fonction interne pour le comptage et la construction
    const buildTree = (
      currentNode: IFileNode,
      currentViewContent: boolean,
      currentPrefix: string,
    ): string => {
      let localMd = "";
      const currentChildren = currentNode.children ?? [];

      currentChildren.forEach((child, index) => {
        const isLast = index === currentChildren.length - 1;
        const connector = isLast ? "└── " : "├── ";
        const isDir = child.type === "directory";
        const icon = isDir ? "📁 " : "📄 ";

        // Incrémentation des compteurs
        if (isDir) dirCount++;
        else fileCount++;

        const line = `${currentPrefix}${connector}${icon}${child.name}`;

        if (currentViewContent) {
          this.cli.logger.success(line);
        }

        localMd += `${line}\n`;

        if (isDir && child.children && child.children.length > 0) {
          const newPrefix = currentPrefix + (isLast ? "    " : "│   ");
          localMd += buildTree(child, currentViewContent, newPrefix);
        }
      });

      return localMd;
    };

    // Génération de l'arbre
    md = buildTree(node, viewContent, prefix);

    // Ajout des statistiques à la fin du Markdown
    const stats = `\nSummary: ${dirCount} directories, ${fileCount} files\n`;

    if (viewContent) {
      this.cli.logger.info(stats);
    }

    return md + stats;
  }
  public generateYamlTree(node: IFileNode, viewContent = false): string {
    let yaml = "";
    let fileCount = 0;
    let dirCount = 0;

    const buildYaml = (
      currentNode: IFileNode,
      currentPrefix: string,
    ): string => {
      let localYaml = "";
      const children = currentNode.children ?? [];

      children.forEach((child) => {
        const isDir = child.type === "directory";

        // Incrémentation des compteurs
        if (isDir) dirCount++;
        else fileCount++;

        // Format YAML : indentation + tiret + nom
        // On ajoute un slash pour les dossiers pour plus de clarté
        const line = `${currentPrefix}- name: ${child.name}${isDir ? "/" : ""}`;

        if (viewContent) {
          this.cli.logger.success(line);
        }

        localYaml += `${line}\n`;

        // Si c'est un dossier, on ajoute une clé "children"
        if (isDir && child.children && child.children.length > 0) {
          localYaml += `${currentPrefix}  children:\n`;
          // On augmente l'indentation de 4 espaces pour les enfants
          localYaml += buildYaml(child, currentPrefix + "    ");
        }
      });

      return localYaml;
    };

    // On initialise le YAML avec le nom du dossier racine
    yaml = `directory_tree:\n  name: ${node.name}/\n  children:\n`;
    yaml += buildYaml(node, "    ");

    // Ajout des statistiques en fin de fichier YAML
    const stats = `\nmetadata:\n  directories: ${dirCount}\n  files: ${fileCount}\n`;

    if (viewContent) {
      this.cli.logger.info(`Summary: ${dirCount} dirs, ${fileCount} files`);
    }

    return yaml + stats;
  }
  public generateAsciiTreeMetadata(
    node: IFileNode,
    prefix = "",
    viewContent = false,
  ): string {
    let md = "";
    const children = node.children ?? [];

    children.forEach((child: IFileNode, index: number) => {
      const isLast = index === children.length - 1;
      const connector = isLast ? "└── " : "├── ";
      const isDir = child.type === "directory";
      const icon = isDir ? "📁 " : "📄 ";

      // Construction de la ligne principale
      const line = `${prefix}${connector}${icon}${child.name}`;

      // Affichage console propre (sans le bug du 'true')
      if (viewContent) {
        this.cli.logger.success(line);
      }
      md += `${line}\n`;

      // AJOUT DES METADATA (Fonctions, Classes, etc.)
      if (child.metadata && child.metadata.length > 0) {
        const metaPrefix = prefix + (isLast ? "    " : "│   ") + "   ";
        child.metadata.forEach((meta, mIndex) => {
          const isLastMeta = mIndex === child.metadata.length - 1;
          const metaConnector = "└─ "; // Un connecteur plus discret pour le code interne
          const metaLine = `${metaPrefix}${metaConnector}[${meta.type}] ${meta.name}(${meta.arguments.join(", ")})`;

          if (viewContent) {
            this.cli.logger.info(metaLine); // En bleu ou gris selon ton logger
          }
          md += `${metaLine}\n`;
        });
      }

      // Récursion pour les dossiers
      if (isDir && child.children && child.children.length > 0) {
        const newPrefix = prefix + (isLast ? "    " : "│   ");
        md += this.generateAsciiTree(child, newPrefix, viewContent);
      }
    });

    return md;
  }
}
