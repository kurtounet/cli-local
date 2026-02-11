import path from "node:path";

import { IDirectory, IFile } from "@/features/commun/architecture.interface.js";
import { IMemberInfo } from "@/types/commun/member-info.interface.js";
import { IToolService } from "@/types/services/tool-service.interface.js";

import { BaseService } from "./base-service.service.js";
import { StatDirectory } from "./file-system.service.js";

export class ToolService extends BaseService implements IToolService {
  readonly serviceName = "ToolService";

  public generateAsciiTree(
    node: IDirectory,
    viewContent = false,
    prefix = "",
  ): string {
    let fileCount = 0;
    let dirCount = 0;

    const buildTree = (
      currentNode: IDirectory,
      currentPrefix: string,
    ): string => {
      let localMd = "";
      const currentChildren = currentNode.children ?? [];

      currentChildren.forEach((child, index) => {
        const isLast = index === currentChildren.length - 1;
        const connector = isLast ? "└── " : "├── ";
        const isDir = child.type === "directory";
        const icon = isDir ? "📁 " : "📄 ";

        if (isDir) dirCount++;
        else fileCount++;

        const line = `${currentPrefix}${connector}${icon}${child.name}`;
        if (viewContent) this.cli.logger.success(line);
        localMd += `${line}\n`;

        if (isDir && child.children && child.children.length > 0) {
          const newPrefix = currentPrefix + (isLast ? "    " : "│   ");
          localMd += buildTree(child, newPrefix);
        }
      });

      return localMd;
    };

    const treeStr = buildTree(node, prefix);
    const stats = `\nSummary: ${dirCount} directories, ${fileCount} files\n`;

    if (viewContent) this.cli.logger.info(stats);
    return treeStr + stats;
  }

  public generateYamlTree(node: IDirectory, viewContent = false): string {
    let fileCount = 0;
    let dirCount = 0;

    const buildYaml = (
      currentNode: IDirectory,
      currentPrefix: string,
    ): string => {
      let localYaml = "";
      const children = currentNode.children ?? [];

      children.forEach((child) => {
        const isDir = child.type === "directory";
        if (isDir) dirCount++;
        else fileCount++;

        const line = `${currentPrefix}- name: ${child.name}${isDir ? "/" : ""}`;
        if (viewContent) this.cli.logger.success(line);
        localYaml += `${line}\n`;

        if (isDir && child.children && child.children.length > 0) {
          localYaml += `${currentPrefix}  children:\n`;
          localYaml += buildYaml(child, currentPrefix + "    ");
        }
      });

      return localYaml;
    };

    let yaml = `directory_tree:\n  name: ${node.name}/\n  children:\n`;
    yaml += buildYaml(node, "    ");
    const stats = `\nmetadata:\n  directories: ${dirCount}\n  files: ${fileCount}\n`;

    return yaml + stats;
  }

  public generateAsciiTreeMetadata(
    node: IDirectory,
    prefix = "",
    viewContent = false,
  ): string {
    let md = "";
    const children = node.children ?? [];

    children.forEach((child, index) => {
      const isLast = index === children.length - 1;
      const connector = isLast ? "└── " : "├── ";
      const isDir = child.type === "directory";

      const line = `${prefix}${connector}${isDir ? "📁 " : "📄 "}${child.name}`;
      if (viewContent) this.cli.logger.success(line);
      md += `${line}\n`;

      const childPrefix = prefix + (isLast ? "    " : "│   ");

      // Affichage des métadonnées (AST)
      if (child.metadata?.length) {
        child.metadata.forEach((meta) => {
          const args =
            meta.arguments
              ?.map((arg: IMemberInfo) => `${arg.name}: ${arg.type}`)
              .join(", ") ?? "";
          const metaLine = `${childPrefix}└── ⚙️ [${meta.type}] ${meta.name}(${args})`;

          if (viewContent) this.cli.logger.info(metaLine);
          md += `${metaLine}\n`;
        });
      }

      // Récursion
      if (isDir && child.children?.length) {
        md += this.generateAsciiTreeMetadata(child, childPrefix, viewContent);
      }
    });

    return md;
  }

  public async buildDoc(node: IDirectory, outputPath: string): Promise<string> {
    const fileName = path.resolve(outputPath, `doc.md`);
    this.cli.logger.info(`Generating documentation...`);
    if (!node.children || node.children.length === 0) return outputPath;

    const doc = this.generateAsciiTreeMetadata(node, "", true);
    await this.cli.fileSystem.writeFile(fileName, doc);
    return outputPath;
  }

  async createDirectoryStructure(
    parentPath: string,
    nodes: IDirectory[],
  ): Promise<void> {
    for (const node of nodes) {
      if (node.type === "directory") {
        const newPath = this.cli.path.join(parentPath, node.name);
        try {
          await this.cli.fileSystem.createDirectory(newPath);
          this.cli.logger.success(`✓ Dossier créé : ${newPath}`);

          if (node.children?.length) {
            await this.createDirectoryStructure(newPath, node.children);
          }
        } catch (err: any) {
          this.cli.logger.error(
            `✗ Erreur lors de la création de ${newPath}: ${err.message}`,
          );
        }
      }
    }
  }

  public async getDirectoryTree(
    dirPath: string,
    level = 0,
    maxLevel = 0,
    withMetadata = false,
    config?: { excludedDirs: string[]; analyzeExtensions: string[] },
  ): Promise<IDirectory | null> {
    // 1. Validation et récupération du nom
    this.cli.path.validatePath(dirPath, "dirPath");
    const name = this.cli.path.getFileName(dirPath, true);

    // 2. Vérification des exclusions (Dossiers ignorés)
    const isExcluded =
      config?.excludedDirs.includes(name) ??
      this.cli.fileSystem.excludedDirs.includes(name);

    if (isExcluded) return null;

    // 3. Récupération des stats réelles
    const stats: StatDirectory =
      await this.cli.fileSystem.statDirectory(dirPath);
    const isDirectory = stats.isDirectory();
    const extension = isDirectory
      ? ""
      : this.cli.path.getExtension(name).toLowerCase();

    // 4. Initialisation de l'objet (Correction : pas de '?' dans les clés de valeur)

    const item: IDirectory & { content?: string; metadata?: IMemberInfo[] } = {
      path: dirPath,
      name: name,
      level: level,
      gitIgnore: false,
      type: isDirectory ? "directory" : "file",
      size: isDirectory ? 0 : stats.size,
      extension: extension,
      metadata: [],
      children: [],
      pathInProject: "", // Logique interne à votre projet
      ...(!isDirectory && { content: " " }),
    };

    const reachLimit = maxLevel > 0 && level >= maxLevel;

    // 5. Cas Dossier : Exploration récursive
    if (isDirectory && !reachLimit) {
      const childrenNames =
        await this.cli.fileSystem.readDirWithFileTypes(dirPath);

      const childrenResults = await Promise.all(
        childrenNames.map((childName) =>
          this.getDirectoryTree(
            this.cli.path.join(dirPath, childName.name),
            level + 1,
            maxLevel,
            withMetadata,
            config,
          ),
        ),
      );

      // Filtrage des dossiers exclus qui retournent null
      item.children = childrenResults.filter(
        (child): child is IDirectory => child !== null,
      );

      // Calcul de la taille cumulée du dossier
      item.size = item.children.reduce(
        (acc, child) => acc + (child.size || 0),
        0,
      );
    }
    // 6. Cas Fichier : Analyse des métadonnées (AST)
    else if (!isDirectory && withMetadata) {
      const shouldAnalyze = config?.analyzeExtensions.includes(extension);

      if (shouldAnalyze) {
        try {
          const content = await this.cli.fileSystem.readFile(dirPath);
          item.content = content;
          // Utilise l'analyseur AST pour extraire classes/méthodes
          // item.metadata = this.cli.ast.analyzeFileMetadata(dirPath, content);
        } catch (error) {
          this.cli.errorHandler.handle(error, `Erreur metadata sur : ${name}`);
        }
      }
    }
    return item;
  }

  private async applyTemplate(fileName: string): Promise<string> {
    const templatePath = this.cli.path.resolve(
      this.cli.path.getDirectory(__filename),
      "..",
      "templates",
      this.CLASS_TEMPLATE,
    );
    if (!this.exists(templatePath)) return "";
    const rawTemplate = await this.cli.fileSystem.readFile(templatePath);

    return this.cli.template.compile(rawTemplate, {
      name: fileName.replace(this.TS_EXTENSION, ""),
      author: this.DEFAULT_AUTHOR,
    });
  }

  private async getContentForFile(
    node: IDirectory,
    fullPath: string,
  ): Promise<string> {
    if (node.content) return node.content;
    if (fullPath.endsWith(this.TS_EXTENSION)) {
      return await this.applyTemplate(node.name);
    }
    return "";
  }

  /**
   * Crée l'arborescence complète (Dossiers + Fichiers avec contenu)
   * @param node
   * @param currentPath
   */
  public async buildPhysicalTree(
    node: IDirectory,
    currentPath: string,
  ): Promise<void> {
    const fullPath = this.cli.path.join(currentPath, node.name);

    if (node.type === "directory") {
      await this.cli.fileSystem.createDirectory(fullPath);
      if (node.children) {
        for (const child of node.children) {
          await this.buildPhysicalTree(child, fullPath);
        }
      }
    } else {
      const content = await this.getContentForFile(node, fullPath);
      await this.cli.fileSystem.writeFile(fullPath, content);
    }
  }
}

// import path from "node:path";

// import { IDirectory } from "@/features/commun/architecture.interface.js";
// import { IMemberInfo } from "@/types/commun/member-info.interface.js";
// import { IToolService } from "@/types/services/tool-service.interface.js";

// import { BaseService } from "./base-service.service.js";
// import { StatDirectory } from "./file-system.service.js";

// export class ToolService extends BaseService implements IToolService {
//   readonly serviceName = "ToolService";

//   public generateAsciiTree(node: IDirectory, viewContent = false, prefix = ""): string {
//     let md = "";
//     let fileCount = 0;
//     let dirCount = 0;

//     const children = node.children ?? [];

//     // Fonction interne pour le comptage et la construction
//     const buildTree = (
//       currentNode: IDirectory,
//       currentViewContent: boolean,
//       currentPrefix: string,
//     ): string => {
//       let localMd = "";
//       const currentChildren = currentNode.children ?? [];

//       currentChildren.forEach((child, index) => {
//         const isLast = index === currentChildren.length - 1;
//         const connector = isLast ? "└── " : "├── ";
//         const isDir = child.type === "directory";
//         const icon = isDir ? "📁 " : "📄 ";

//         // Incrémentation des compteurs
//         if (isDir) dirCount++;
//         else fileCount++;

//         const line = `${currentPrefix}${connector}${icon}${child.name}`;

//         if (currentViewContent) {
//           this.cli.logger.success(line);
//         }

//         localMd += `${line}\n`;

//         if (isDir && child.children && child.children.length > 0) {
//           const newPrefix = currentPrefix + (isLast ? "    " : "│   ");
//           localMd += buildTree(child, currentViewContent, newPrefix);
//         }
//       });

//       return localMd;
//     };

//     // Génération de l'arbre
//     md = buildTree(node, viewContent, prefix);

//     // Ajout des statistiques à la fin du Markdown
//     const stats = `\nSummary: ${dirCount} directories, ${fileCount} files\n`;

//     if (viewContent) {
//       this.cli.logger.info(stats);
//     }

//     return md + stats;
//   }
//   public generateYamlTree(node: IDirectory, viewContent = false): string {
//     let yaml = "";
//     let fileCount = 0;
//     let dirCount = 0;

//     const buildYaml = (currentNode: IDirectory, currentPrefix: string): string => {
//       let localYaml = "";
//       const children = currentNode.children ?? [];

//       children.forEach((child) => {
//         const isDir = child.type === "directory";

//         // Incrémentation des compteurs
//         if (isDir) dirCount++;
//         else fileCount++;

//         // Format YAML : indentation + tiret + nom
//         // On ajoute un slash pour les dossiers pour plus de clarté
//         const line = `${currentPrefix}- name: ${child.name}${isDir ? "/" : ""}`;

//         if (viewContent) {
//           this.cli.logger.success(line);
//         }

//         localYaml += `${line}\n`;

//         // Si c'est un dossier, on ajoute une clé "children"
//         if (isDir && child.children && child.children.length > 0) {
//           localYaml += `${currentPrefix}  children:\n`;
//           // On augmente l'indentation de 4 espaces pour les enfants
//           localYaml += buildYaml(child, currentPrefix + "    ");
//         }
//       });

//       return localYaml;
//     };

//     // On initialise le YAML avec le nom du dossier racine
//     yaml = `directory_tree:\n  name: ${node.name}/\n  children:\n`;
//     yaml += buildYaml(node, "    ");

//     // Ajout des statistiques en fin de fichier YAML
//     const stats = `\nmetadata:\n  directories: ${dirCount}\n  files: ${fileCount}\n`;

//     if (viewContent) {
//       this.cli.logger.info(`Summary: ${dirCount} dirs, ${fileCount} files`);
//     }

//     return yaml + stats;
//   }

//   // Génération de l'arbre ASCII avec les métadonnées
//   public generateAsciiTreeMetadata(node: IDirectory, prefix = "", viewContent = false): string {
//     let md = "";
//     const children = node.children ?? [];

//     children.forEach((child, index) => {
//       const isLast = index === children.length - 1;
//       const connector = isLast ? "└── " : "├── ";
//       const isDir = child.type === "directory";

//       const line = `${prefix}${connector}${isDir ? "📁 " : "📄 "}${child.name}`;
//       if (viewContent) this.cli.logger.success(line);
//       md += `${line}\n`;

//       // 1. Traitement des Métadonnées (Méthodes, Classes, etc.)
//       if (child.metadata?.length) {
//         const metaPrefix = prefix + (isLast ? "    " : "│   ");
//         child.metadata.forEach((meta) => {
//           // Utilisation d'un connecteur spécifique pour le contenu interne
//           const metaArguments = meta.arguments?.map((arg: IMemberInfo) => {
//             return `${arg.name}: ${arg.type}`;
//           }); // return `${arg.type} arg.name).join(", ") ?? "";
//           const metaArgumentsJson = JSON.stringify(meta.arguments) ?? "";
//           const metaPrefixInClass = meta.type != "class" ? `    └──⚙️` : ``;
//           // metaPrefix = meta.type != "class" ? `    ` : metaPrefix;
//           const metaLine = `${metaPrefix}   └──⚙️ [${meta.type}] ${meta.name}(${metaArguments.join(", ")})`;
//           if (viewContent) this.cli.logger.info(metaLine);
//           md += `${metaLine}\n`;
//         });
//       }

//       // 2. Récursion (Correction : on appelle la version Metadata pour les sous-dossiers)
//       if (isDir && child.children?.length) {
//         const nextPrefix = prefix + (isLast ? "    " : "│   ");
//         md += this.generateAsciiTreeMetadata(child, nextPrefix, viewContent);
//       }
//     });

//     return md;
//   }
//   public async buildDoc(node: IDirectory, outputPath: string): Promise<string> {
//     const fileName = path.resolve(outputPath, `doc.md`);
//     this.cli.logger.info(`Generating documentation...`);
//     node.children = node.children ?? [];
//     if (node.children.length === 0) return outputPath;
//     const doc = this.generateAsciiTreeMetadata(node, "", true);
//     await this.cli.fileSystem.writeFile(fileName, doc);
//     return outputPath;
//   }

//   private async applyTemplate(fileName: string): Promise<string> {
//     const templatePath = this.cli.path.resolve(
//       this.cli.path.getDirectory(__filename),
//       "..",
//       "templates",
//       this.CLASS_TEMPLATE,
//     );
//     if (!this.exists(templatePath)) return "";
//     const rawTemplate = await this.readFile(templatePath);

//     return this.cli.template.compile(rawTemplate, {
//       name: fileName.replace(this.TS_EXTENSION, ""),
//       author: this.DEFAULT_AUTHOR,
//     });
//   }
//   private async getContentForFile(node: IDirectory, fullPath: string): Promise<string> {
//     if (node.content) return node.content;
//     if (fullPath.endsWith(this.TS_EXTENSION)) {
//       return await this.applyTemplate(node.name);
//     }
//     return "";
//   }
//   async createDirectoryStructure(parentPath: string, nodes: IDirectory[]): Promise<void> {
//     for (const node of nodes) {
//       if (node._type === "directory") {
//         const newPath = this.cli.path.join(parentPath, node.name);

//         try {
//           await this.cli.fileSystem.createDirectory(newPath);
//           this.cli.logger.success(`✓ Dossier créé : ${newPath}`);
//         } catch (err: any) {
//           this.cli.logger.error(`✗ Erreur lors de la création de ${newPath}:${err}`);
//           continue; // Continue with the next node even if one fails
//         }

//         if (node.children && node.children.length > 0) {
//           await this.createDirectoryStructure(newPath, node.children);
//         }
//       }
//     }
//   }
//   public async buildPhysicalTree(node: IDirectory, currentPath: string): Promise<void> {
//     const fullPath = this.cli.path.join(currentPath, node.name);

//     if (node.type === "directory" || (node.children && node.children.length > 0)) {
//       await this.cli.fileSystem.createDirectory(fullPath);
//       if (node.children) {
//         for (const child of node.children) {
//           await this.buildPhysicalTree(child, fullPath);
//         }
//       }
//     } else {
//       const content = await this.getContentForFile(node, fullPath);
//       await this.writeFile(fullPath, content);
//     }
//     return Promise.resolve();
//   }
//   public async getDirectoryTree(
//     dirPath: string,
//     level = 0,
//     maxLevel = 0,
//     withMetadata = false,
//     config?: { excludedDirs: string[]; analyzeExtensions: string[] },
//   ): Promise<IDirectory | null> {
//     this.cli.path.validatePath(dirPath, "dirPath");

//     const name = this.cli.path.getFileName(dirPath, true);

//     if (config?.excludedDirs.includes(name) || this.cli.fileSystem.excludedDirs.includes(name)) {
//       return null;
//     }

//     const stats: StatDirectory = await this.cli.fileSystem.statDirectory(dirPath);
//     const isDirectory = stats.isDirectory();
//     const extension = isDirectory ? "" : this.cli.path.getExtension(name).toLowerCase();

//     const info: IDirectory = {
//       path: dirPath,
//       name: name,
//       level: level,
//       type: isDirectory ? "directory" : "file",
//       size: isDirectory ? 0 : stats.size,
//       content: "",
//       extension: extension,
//       metadata: [],
//       children: [],
//     };

//     const reachLimit = maxLevel > 0 && level >= maxLevel;

//     if (isDirectory && !reachLimit) {
//       const childrenNames = await this.cli.fileSystem.readDir(dirPath);

//       const childrenResults = await Promise.all(
//         childrenNames.map((child) =>
//           this.getDirectoryTree(
//             this.cli.path.join(dirPath, child),
//             level + 1,
//             maxLevel,
//             withMetadata,
//             config,
//           ),
//         ),
//       );

//       info.children = childrenResults.filter((child): child is IDirectory => child !== null);
//       info.size = info.children.reduce((acc, child) => acc + (child.size || 0), 0);
//     } else if (!isDirectory && withMetadata && config?.analyzeExtensions.includes(extension)) {
//       try {
//         info.content = await this.cli.fileSystem.readFile(dirPath);
//         info.metadata = this.cli.ast.analyzeFileMetadata(dirPath, info.content);
//       } catch (error) {
//         this.cli.errorHandler.handle(error, `Erreur metadata: ${name}`);
//       }
//     }

//     return info; // filterTree est déjà géré par les checks au début de la récursion
//   }
// }
