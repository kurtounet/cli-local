import { IBaseService } from "./base-service.interface.js";

export interface IDataManagerService extends IBaseService {
  readonly serviceName: string;
  init(): Promise<void>;
  query(sql: string, params: unknown): Promise<unknown>;
  isWriteQuery(sql: string): boolean;
}
