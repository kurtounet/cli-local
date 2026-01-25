export interface IFileSystemService {
  excludedDirs: string[];
  getDirectoryTree(dirPath: string): string;
  resolvePath(...segments: string[]): string;
  readFile(filePath: string): Promise<string>;
  exists(targetPath: string): Promise<boolean>;
  createDirectory(dirPath: string): Promise<void>;
  copy(source: string, destination: string): Promise<void>;
  writeFile(filePath: string, content: string): Promise<void>;
  createDirectoryTreeFromJson(
    sourcePath: string,
    targetPath: string,
  ): Promise<void>;
  writeToOutput(
    basePath: string,
    subDir: string,
    fileName: string,
    content: string,
  ): void;
}
