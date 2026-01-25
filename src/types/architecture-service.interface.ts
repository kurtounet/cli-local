export interface IArchitectureService {
  getDirectoryTree(
    pathsIn: string,
    pathsOutn: string,
    type: string,
    action: string,
  ): void;
  createDirectoryTree(sourcePath: string, targetPath: string): void;
  rename(paths: string[]): string;
}
