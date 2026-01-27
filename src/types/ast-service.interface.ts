import { IMemberInfo } from "./commun/member-info.interface.js";

export interface IAstService {
  readonly serviceName: string;
  init(): Promise<void>;
  analyzeFileMetadata(filePath: string, sourceCode: string): IMemberInfo[];
}
