import { IBaseService } from "./base-service.interface.js";

export interface IPathService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  join(...segments: string[]): string;
  resolve(...segments: string[]): string;
  getRelativePath(from: string, to: string): string;
  getExtension(filePath: string): string;
  getFileName(filePath: string, withExtension: boolean): string;
  getDirectory(filePath: string): string;
  normalize(path: string): string;
  isAbsolute(path: string): boolean;
}
