import { Stats } from "node:fs";

import fs, { Dirent } from "fs-extra";

import { IAppContext } from "@/types/context.interface.js";
import { IFileSystemService } from "@/types/services/file-system.interface.js";

import { BaseService } from "./base-service.service.js";

// On utilise toujours fileURLToPath pour l'init, mais on pourrait aussi le mettre dans PathService
// const __filename = fileURLToPath(import.meta.url);

export type ReaddirOptions = Parameters<typeof fs.readdir>[1];
export type StatDirectory = Stats;

export class FileSystemService
  extends BaseService
  implements IFileSystemService
{
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

  constructor(protected cli: IAppContext) {
    super(cli);
  }

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
    } catch (error) {
      const message = `Unable to create directory: ${dirPath}`;
      // this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  public async readDirWithFileTypes(
    dirPath: string,
    options?: ReaddirOptions,
  ): Promise<Dirent[]> {
    this.cli.path.validatePath(dirPath, "dirPath");
    try {
      const entries = await fs.readdir(dirPath, {
        ...options,
        withFileTypes: true as const,
      } as ReaddirOptions);

      return entries as unknown as Dirent[];
    } catch (error) {
      const message = `Unable to read directory: ${dirPath}`;
      // this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  public async readDir(dirPath: string): Promise<string[]> {
    this.cli.path.validatePath(dirPath, "dirPath");

    try {
      return await fs.readdir(dirPath, {
        encoding: "utf-8",
        recursive: true,
        withFileTypes: false, // verrouille le contrat
      });
    } catch (error) {
      const message = `Unable to read directory: ${dirPath}`;
      // this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  public statDirectory(dirPath: string): Promise<Stats> {
    this.cli.path.validatePath(dirPath, "dirPath");
    try {
      return fs.stat(dirPath);
    } catch (error) {
      if (error instanceof Error)
        throw new Error(`Failed to write file: ${dirPath}: ${error.message}`);
    }
  }

  public async removeDirectory(dirPath: string): Promise<void> {
    this.cli.path.validatePath(dirPath, "dirPath");
    try {
      await fs.remove(dirPath);
    } catch (error) {
      // this.cli.errorHandler.handle(error, `Failed to remove directory: ${dirPath}`);
      throw new Error(`Failed to remove directory: ${dirPath}`);
    }
  }
  //FILE

  public async ensureFile(filePath: string): Promise<void> {
    this.cli.path.validatePath(filePath, "filePath");
    try {
      await fs.ensureFile(filePath);
    } catch (error) {
      // this.cli.errorHandler.handle(error, `Failed to write file: ${filePath}`);
      if (error instanceof Error)
        throw new Error(`Failed to write file: ${filePath}`);
    }
  }
  public async appendFile(filePath: string, content: string): Promise<void> {
    this.cli.path.validatePath(filePath, "filePath");
    try {
      await fs.appendFile(filePath, content);
    } catch (error) {
      // this.cli.errorHandler.handle(error, `Failed to write file: ${filePath}`);
      throw new Error(`Failed to write file: ${filePath}`);
    }
  }
  public async writeFileJson(filePath: string, content: string): Promise<void> {
    this.cli.path.validatePath(filePath, "filePath");
    try {
      await fs.writeJSON(filePath, content);
    } catch (error) {
      //   this.cli.errorHandler.handle(error, `Failed to write file: ${filePath}`);
      throw new Error(`Failed to write file: ${filePath}`);
    }
  }

  public async readFileJson(filePath: string): Promise<any> {
    this.cli.path.validatePath(filePath, "filePath");
    try {
      return await fs.readJSON(filePath); // fs-extra supporte l'async ici
    } catch (error) {
      // this.cli.errorHandler.handle(error, `Failed to read file: ${filePath}`);
      throw new Error(`Failed to read file: ${filePath}`);
    }
  }

  public async writeFile(filePath: string, content: string): Promise<void> {
    const cleanPath = this.cli.path.normalize(filePath);
    this.cli.path.validatePath(cleanPath, "filePath");
    try {
      await fs.outputFile(cleanPath, content);
    } catch (error) {
      throw new Error(`Failed to write file: ${filePath}: ${error.message}`);
      // this.cli.errorHandler.handle(error, `Failed to write file: ${cleanPath}`);
      //    throw new Error(`Failed to write file: ${filePath}`);
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
      // this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }

  public async copy(source: string, destination: string): Promise<void> {
    this.cli.path.validatePath(source, "source");
    this.cli.path.validatePath(destination, "destination");
    try {
      await fs.copy(source, destination);
    } catch (error) {
      const message = `Copy failed: ${source} -> ${destination}`;
      // this.cli.errorHandler.handle(error, message);
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

  public async updateJson(filePath: string): Promise<void> {
    try {
      const pkgPath = this.cli.path.join(process.cwd(), filePath);
      const pkg = (await this.readFileJson(pkgPath)) as Record<string, unknown>;
      pkg.mclp = this.cli.config.defaults;
      await this.writeFileJson(pkgPath, JSON.stringify(pkg, null, 2));
    } catch (error) {
      // this.cli.errorHandler.handle(error, `Erreur updateJson: ${file}`);
      const message = `Unable to read file: ${filePath}`;
      // this.cli.errorHandler.handle(error, message);
      throw error instanceof Error ? error : new Error(message);
    }
  }
}
