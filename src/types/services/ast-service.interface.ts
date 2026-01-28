import { IMemberInfo } from "../commun/member-info.interface.js";
import { IBaseService } from "./base-service.interface.js";

export interface IAstService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  analyzeFileMetadata(filePath: string, sourceCode: string): IMemberInfo[];
}
