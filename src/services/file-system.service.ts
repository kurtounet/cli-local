import fs, { Dirent } from "fs-extra";
import { fileURLToPath } from "url";

import { IFileNode } from "@/types/commun/file-node.interface.js";
import { IFileSystemService } from "@/types/services/file-system.interface.js";

import { BaseService } from "./base-service.service.js";

// On utilise toujours fileURLToPath pour l'init, mais on pourrait aussi le mettre dans PathService
// const __filename = fileURLToPath(import.meta.url);

export type ReaddirOptions = Parameters<typeof fs.readdir>[1];

export class FileSystemService extends BaseService implements IFileSystemService {
  readonly serviceName = "FileSystemService";

  public excludedDirs = [
    ".git",
    "dist",
    ".doc",
    "old_cli",
    ".vscode",
    "node_modules",
    "project-test",
  ];

  private readonly TS_EXTENSION = ".ts";
  private readonly CLASS_TEMPLATE = "class.ts.txt";
  private readonly DEFAULT_AUTHOR = "MCLP System";

  /**
   * Note : On utilise this.cli.path pour TOUTES les manipulations de chaînes.
   */

  //DIRECTORY

  public setExcludedDirs(excludedDirs: string[]): void {
    this.excludedDirs = [...this.excludedDirs, ...excludedDirs];
  }

  public exists(targetPath: string): boolean {
    this.cli.path.validatePath(targetPath, "targetPath");
    return fs.existsSync(targetPath);
  }

  public isDirectory(targetPath: string): boolean {
    this.cli.path.validatePath(targetPath, "targetPath");
    return fs.lstatSync(targetPath).isDirectory();
  }

  public async createDirectory(dirPath: string): Promise<void> {
    this.cli.path.validatePath(dirPath, "dirPath");
    try {
      await fs.ensureDir(dirPath);
      this.cli.logger.debug(`Directory created or verified: ${dirPath}`);
    } catch (error) {
      const message = `Unable to create directory: ${dirPath}`;
      this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }
  public async readDirWithFileTypes(dirPath: string, options?: ReaddirOptions): Promise<Dirent[]> {
    this.cli.path.validatePath(dirPath, "dirPath");

    try {
      const entries = await fs.readdir(dirPath, {
        ...options,
        withFileTypes: true as const,
      } as ReaddirOptions);

      return entries as unknown as Dirent[];
    } catch (error) {
      const message = `Unable to read directory: ${dirPath}`;
      this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  public async readDir(dirPath: string, options?: fs.ReadOptions): Promise<string[]> {
    this.cli.path.validatePath(dirPath, "dirPath");

    try {
      return (await fs.readdir(dirPath, {
        ...options,
        withFileTypes: false, // verrouille le contrat
      })) as string[];
    } catch (error) {
      const message = `Unable to read directory: ${dirPath}`;
      this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  public async getDirectoryTree(
    dirPath: string,
    level = 0,
    maxLevel = 0,
    withMetadata = false,
    config?: { excludedDirs: string[]; analyzeExtensions: string[] },
  ): Promise<IFileNode | null> {
    this.cli.path.validatePath(dirPath, "dirPath");

    const name = this.cli.path.getFileName(dirPath, true);

    if (config?.excludedDirs.includes(name) || this.excludedDirs.includes(name)) {
      return null;
    }

    const stats = await fs.stat(dirPath);
    const isDirectory = stats.isDirectory();
    const extension = isDirectory ? "" : this.cli.path.getExtension(name).toLowerCase();

    const info: IFileNode = {
      path: dirPath,
      name: name,
      level: level,
      type: isDirectory ? "directory" : "file",
      size: isDirectory ? 0 : stats.size,
      content: "",
      extension: extension,
      metadata: [],
      children: [],
    };

    const reachLimit = maxLevel > 0 && level >= maxLevel;

    if (isDirectory && !reachLimit) {
      const childrenNames = await fs.readdir(dirPath);

      const childrenResults = await Promise.all(
        childrenNames.map((child) =>
          this.getDirectoryTree(
            this.cli.path.join(dirPath, child),
            level + 1,
            maxLevel,
            withMetadata,
            config,
          ),
        ),
      );

      info.children = childrenResults.filter((child): child is IFileNode => child !== null);
      info.size = info.children.reduce((acc, child) => acc + (child.size || 0), 0);
    } else if (!isDirectory && withMetadata && config?.analyzeExtensions.includes(extension)) {
      try {
        info.content = await this.readFile(dirPath);
        info.metadata = this.cli.ast.analyzeFileMetadata(dirPath, info.content);
      } catch (error) {
        this.cli.errorHandler.handle(error, `Erreur metadata: ${name}`);
      }
    }

    return info; // filterTree est déjà géré par les checks au début de la récursion
  }
  //FILE

  public async ensureFile(filePath: string): Promise<void> {
    this.cli.path.validatePath(filePath, "filePath");
    try {
      await fs.ensureFile(filePath);
      this.cli.logger.debug(`File written: ${filePath}`);
    } catch (error) {
      this.cli.errorHandler.handle(error, `Failed to write file: ${filePath}`);
      throw error;
    }
  }
  public async appendFile(filePath: string, content: string): Promise<void> {
    this.cli.path.validatePath(filePath, "filePath");
    try {
      await fs.appendFile(filePath, content);
      this.cli.logger.debug(`File written: ${filePath}`);
    } catch (error) {
      this.cli.errorHandler.handle(error, `Failed to write file: ${filePath}`);
      throw error;
    }
  }
  public async writeFileJson(filePath: string, content: string): Promise<void> {
    this.cli.path.validatePath(filePath, "filePath");
    try {
      await fs.writeJSON(filePath, content);
      this.cli.logger.debug(`File written: ${filePath}`);
    } catch (error) {
      this.cli.errorHandler.handle(error, `Failed to write file: ${filePath}`);
      throw error;
    }
  }

  public async readFileJson(filePath: string): Promise<any> {
    this.cli.path.validatePath(filePath, "filePath");
    try {
      return await fs.readJSON(filePath); // fs-extra supporte l'async ici
    } catch (error) {
      this.cli.errorHandler.handle(error, `Failed to read file: ${filePath}`);
    }
  }

  public async writeFile(filePath: string, content: string): Promise<void> {
    const cleanPath = this.cli.path.normalize(filePath);
    this.cli.path.validatePath(cleanPath, "filePath");
    try {
      await fs.outputFile(cleanPath, content);
      this.cli.logger.debug(`File written: ${cleanPath}`);
    } catch (error) {
      // this.cli.errorHandler.handle(error, `writeFile(): Failed to write file: ${cleanPath}`);
      // throw error;
    }
  }

  public async writeToOutput(
    basePath: string,
    subDir: string,
    fileName: string,
    content: string,
  ): Promise<void> {
    const targetDir = this.cli.path.join(basePath, subDir);

    if (!this.exists(targetDir)) {
      await this.createDirectory(targetDir);
    }

    const finalPath = this.cli.path.join(targetDir, fileName);
    await this.writeFile(finalPath, content);
  }

  public async readFile(filePath: string): Promise<string> {
    this.cli.path.validatePath(filePath, "filePath");
    try {
      return await fs.readFile(filePath, "utf-8");
    } catch (error) {
      const message = `Unable to read file: ${filePath}`;
      this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  public async copy(source: string, destination: string): Promise<void> {
    this.cli.path.validatePath(source, "source");
    this.cli.path.validatePath(destination, "destination");
    try {
      await fs.copy(source, destination);
      this.cli.logger.debug(`Copied from ${source} to ${destination}`);
    } catch (error) {
      const message = `Copy failed: ${source} -> ${destination}`;
      this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  public async createFile(filePath: string, content = ""): Promise<void> {
    this.cli.path.validatePath(filePath, "filePath");
    const dir = this.cli.path.getDirectory(filePath);
    if (!this.exists(dir)) {
      await this.createDirectory(dir);
    }
    await this.writeFile(filePath, content);
  }

  public async buildPhysicalTree(node: IFileNode, currentPath: string): Promise<void> {
    const fullPath = this.cli.path.join(currentPath, node.name);

    if (node.type === "directory" || (node.children && node.children.length > 0)) {
      await this.createDirectory(fullPath);
      if (node.children) {
        for (const child of node.children) {
          await this.buildPhysicalTree(child, fullPath);
        }
      }
    } else {
      const content = await this.getContentForFile(node, fullPath);
      await this.writeFile(fullPath, content);
    }
    return Promise.resolve();
  }

  // private async getContentForFile(node: IFileNode, fullPath: string): Promise<string> {
  //   if (node.content) return node.content;
  //   if (fullPath.endsWith(this.TS_EXTENSION)) {
  //     return await this.applyTemplate(node.name);
  //   }
  //   return "";
  // }

  // private async applyTemplate(fileName: string): Promise<string> {
  //   const templatePath = this.cli.path.resolve(
  //     this.cli.path.getDirectory(__filename),
  //     "..",
  //     "templates",
  //     this.CLASS_TEMPLATE,
  //   );
  //   if (!this.exists(templatePath)) return "";
  //   const rawTemplate = await this.readFile(templatePath);

  //   return this.cli.template.compile(rawTemplate, {
  //     name: fileName.replace(this.TS_EXTENSION, ""),
  //     author: this.DEFAULT_AUTHOR,
  //   });
  // }

  public async updateJson(file: string): Promise<void> {
    try {
      const pkgPath = this.cli.path.join(process.cwd(), file);
      const pkg = (await this.readFileJson(pkgPath)) as Record<string, unknown>;
      pkg.mclp = this.cli.config.defaults;
      await this.writeFileJson(pkgPath, JSON.stringify(pkg, null, 2));
      this.cli.logger.success(`Mise à jour réussie : ${file}`);
    } catch (error) {
      this.cli.errorHandler.handle(error, `Erreur updateJson: ${file}`);
    }
  }
}
