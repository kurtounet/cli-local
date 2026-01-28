import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import { BaseService } from "./base-service.service.js";
import { IFileSystemService } from "@/types/services/file-system.interface.js";
import { IFileNode } from "@/types/commun/file-node.interface.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class FileSystemService extends BaseService implements IFileSystemService {
  readonly serviceName = "FileSystemService";

  private readonly TS_EXTENSION = ".ts";
  private readonly CLASS_TEMPLATE = "class.ts.txt";
  private readonly DEFAULT_AUTHOR = "MCLP System";

  public excludedDirs = ["node_modules", ".git", "dist", ".vscode"];

  // public init(): Promise<void> {
  //   // Si tu n'as rien à initialiser pour l'instant :
  //   return Promise.resolve();
  // }

  /**
   * Adds additional directories to the exclusion list
   * @param excludedDirs - Array of directory names to exclude
   */
  public setExcludedDirs(excludedDirs: string[]): void {
    this.excludedDirs = [...this.excludedDirs, ...excludedDirs];
  }

  /**
   * Checks if a file or directory exists
   * @param targetPath - Path to check
   * @returns true if exists, false otherwise
   */
  public exists(targetPath: string): boolean {
    this.validatePath(targetPath, "targetPath");
    return fs.existsSync(targetPath);
  }

  /**
   * Creates a directory, including parent directories if needed
   * @param dirPath - Path of directory to create
   */
  public async createDirectory(dirPath: string): Promise<void> {
    this.validatePath(dirPath, "dirPath");
    try {
      await fs.ensureDir(dirPath);
      this.cli.logger.debug(`Directory created or verified: ${dirPath}`);
    } catch (error) {
      const message = `Unable to create directory: ${dirPath}`;
      this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  /**
   * Writes content to a file
   * @param filePath - Path of file to write
   * @param content - Content to write
   */
  public async writeFile(filePath: string, content: string): Promise<void> {
    this.validatePath(filePath, "filePath");
    try {
      await fs.outputFile(filePath, content);
      this.cli.logger.debug(`File written: ${filePath}`);
    } catch (error) {
      const message = `writeFile(): Failed to write file: ${filePath}`;
      this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  /**
   * Writes content to a file in a specific output directory
   * @param basePath - Base directory path
   * @param subDir - Subdirectory within base path
   * @param fileName - Name of the file
   * @param content - Content to write
   */
  public async writeToOutput(
    basePath: string,
    subDir: string,
    fileName: string,
    content: string,
  ): Promise<void> {
    const targetDir = path.join(basePath, subDir);

    if (!this.exists(targetDir)) {
      await this.createDirectory(targetDir);
    }

    const finalPath = path.join(targetDir, fileName);
    await this.writeFile(finalPath, content);
  }

  /**
   * Reads content from a file
   * @param filePath - Path of file to read
   * @returns File content as string
   */
  public async readFile(filePath: string): Promise<string> {
    this.validatePath(filePath, "filePath");
    try {
      return await fs.readFile(filePath, "utf-8");
    } catch (error) {
      const message = `Unable to read file: ${filePath}`;
      this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  /**
   * Copies a file from source to destination
   * @param source - Source file path
   * @param destination - Destination file path
   */
  public async copy(source: string, destination: string): Promise<void> {
    this.validatePath(source, "source");
    this.validatePath(destination, "destination");
    try {
      await fs.copy(source, destination);
      this.cli.logger.debug(`Copied from ${source} to ${destination}`);
    } catch (error) {
      const message = `Copy failed: ${source} -> ${destination}`;
      this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  /**
   * Resolves path segments into an absolute path
   * @param segments - Path segments to resolve
   * @returns Resolved absolute path
   */
  public resolvePath(...segments: string[]): string {
    return path.resolve(...segments);
  }

  /**
   * Creates a file with optional content
   * @param filePath - Path of file to create
   * @param content - Optional content to write
   */
  public async createFile(filePath: string, content = ""): Promise<void> {
    this.validatePath(filePath, "filePath");
    const dir = path.dirname(filePath);
    if (!this.exists(dir)) {
      await this.createDirectory(dir);
    }
    await this.writeFile(filePath, content);
  }

  /**
   * Generates a directory tree structure
   * @param dirPath - Root directory path
   * @returns File node representing the directory tree
   */
  public async getDirectoryTree(dirPath: string): Promise<IFileNode> {
    this.validatePath(dirPath, "dirPath");
    const stats = await fs.stat(dirPath);
    const info: IFileNode = {
      path: path.basename(dirPath),
      name: path.basename(dirPath),
      level: 0,
      type: stats.isDirectory() ? "directory" : "file",
      size: stats.isDirectory() ? 0 : stats.size,
      content: "",
      extension: path.extname(dirPath),
      metadata: [],
      children: [],
    };

    if (stats.isDirectory()) {
      const children = await fs.readdir(dirPath);
      info.children = await Promise.all(
        children.map((child) => this.getDirectoryTree(path.join(dirPath, child))),
      );
    }

    return this.filterTree(info);
  }

  /**
   * Filters out excluded directories from the tree
   * @param node - File node to filter
   * @returns Filtered file node
   */
  private filterTree(node: IFileNode): IFileNode {
    if (!node.children) return node;

    return {
      ...node,
      children: node.children
        .filter((child: IFileNode) => !this.excludedDirs.includes(child.name))
        .map((child: IFileNode) => this.filterTree(child)),
    };
  }

  /**
   * Creates a directory tree from a JSON file
   * @param sourcePath - Path to JSON file containing tree structure
   * @param targetBaseDir - Base directory where tree will be created
   */
  public async createDirectoryTreeFromJson(
    sourcePath: string,
    targetBaseDir: string,
  ): Promise<void> {
    try {
      const treeData = await this.readJsonFile(sourcePath);
      await this.buildPhysicalTree(treeData, targetBaseDir);
      this.cli.logger.success("Directory tree recreated successfully!");
    } catch (error) {
      const message = `Error reading/parsing JSON: ${sourcePath}`;
      this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  /**
   * Reads and parses a JSON file into a FileNode
   * @param filePath - Path to JSON file
   * @returns Parsed file node
   */
  private async readJsonFile(filePath: string): Promise<IFileNode> {
    try {
      const raw: unknown = await fs.readJson(filePath);

      if (!this.isFileNode(raw)) {
        throw new Error("Invalid JSON structure: IFileNode expected");
      }

      return raw;
    } catch (error) {
      const message = `Error reading/parsing JSON: ${filePath}`;
      this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  /**
   * Type guard to check if value is a valid IFileNode
   * @param value - Value to check
   * @returns true if value is IFileNode
   */
  private isFileNode(value: unknown): value is IFileNode {
    if (!value || typeof value !== "object") return false;

    const node = value as IFileNode;
    return (
      typeof node.name === "string" &&
      typeof node.path === "string" &&
      typeof node.type === "string" &&
      (node.type === "file" || node.type === "directory") &&
      typeof node.level === "number" &&
      typeof node.size === "number" &&
      typeof node.content === "string" &&
      typeof node.extension === "string" &&
      Array.isArray(node.metadata) &&
      Array.isArray(node.children)
    );
  }

  /**
   * Builds the physical directory tree from a FileNode structure
   * @param node - File node to create
   * @param currentPath - Current directory path
   */
  private async buildPhysicalTree(node: IFileNode, currentPath: string): Promise<void> {
    const fullPath = path.join(currentPath, node.name);

    if (node.type === "directory" || node.children) {
      await this.createDirectory(fullPath);
      this.cli.logger.info(`[DIR] ${fullPath}`);

      if (node.children && Array.isArray(node.children)) {
        for (const child of node.children) {
          await this.buildPhysicalTree(child, fullPath);
        }
      }
    } else {
      const content = await this.getContentForFile(node, fullPath);
      await this.writeFile(fullPath, content);
      this.cli.logger.info(`[FILE] ${fullPath}`);
    }
  }

  /**
   * Gets content for a file, applying templates if necessary
   * @param node - File node
   * @param fullPath - Full path to the file
   * @returns File content
   */
  private async getContentForFile(node: IFileNode, fullPath: string): Promise<string> {
    if (node.content) {
      return node.content;
    }

    if (fullPath.endsWith(this.TS_EXTENSION)) {
      return await this.applyTemplate(node.name);
    }

    return "";
  }

  /**
   * Applies a template to generate file content
   * @param fileName - Name of the file
   * @returns Generated content from template
   */
  private async applyTemplate(fileName: string): Promise<string> {
    try {
      const templatePath = path.resolve(__dirname, "..", "templates", this.CLASS_TEMPLATE);

      this.cli.logger.debug(`Attempting to load template: ${templatePath}`);

      if (!this.exists(templatePath)) {
        this.cli.logger.warn(`Template not found: ${templatePath}`);
        return "";
      }

      const rawTemplate = await this.readFile(templatePath);
      this.cli.logger.debug(`Template loaded for ${fileName}, length: ${rawTemplate.length}`);

      const content = this.cli.templateService.compile(rawTemplate, {
        name: fileName.replace(this.TS_EXTENSION, ""),
        author: this.DEFAULT_AUTHOR,
      });

      this.cli.logger.debug(`Content generated for ${fileName}, length: ${content.length}`);
      return content;
    } catch (error) {
      this.cli.logger.warn(`Template not found for ${fileName}, creating empty file.`);
      return "";
    }
  }

  /**
   * Validates that a path is not empty
   * @param filePath - Path to validate
   * @param paramName - Name of parameter for error message
   */
  private validatePath(filePath: string, paramName: string): void {
    if (!filePath || filePath.trim() === "") {
      throw new Error(`${paramName} cannot be empty`);
    }
  }
}
