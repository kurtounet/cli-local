// src/types/file-system.interface.ts
export interface IFileSystemService {
  exists(targetPath: string): Promise<boolean>;
  createDirectory(dirPath: string): Promise<void>;
  writeFile(filePath: string, content: string): Promise<void>;
  readFile(filePath: string): Promise<string>;
  copy(source: string, destination: string): Promise<void>;
  resolvePath(...segments: string[]): string;
}
