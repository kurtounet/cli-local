import { IAppContext, ICliConfig, ILoggerService } from "../types/context.interface.js";

export abstract class BaseService {
  constructor(protected context: IAppContext) {}

  protected get logger(): ILoggerService {
    return this.context.logger;
  }

  protected get config(): ICliConfig {
    return this.context.config;
  }

  public async initialize?(): Promise<void>;
}
