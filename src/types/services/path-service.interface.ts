import path from "node:path";

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
  validatePath(filePath: string, paramName: string): void;
  parse(filePath: string): path.ParsedPath;
  format(pathObject: path.FormatInputPathObject): string;
  toNamespacedPath(filePath: string): string;
  getSeparator(): string;
  getDelimiter(): string;
  isChildOf(parent: string, child: string): boolean;
  sanitize(filePath: string): string;
}
