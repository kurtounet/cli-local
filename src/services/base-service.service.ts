import { IAppContext, ICliConfig } from "@/types/context.interface.js";
import { ILoggerService } from "@/types/logger-service.interface.js";

export abstract class BaseService {
  constructor(protected cli: IAppContext) {}

  protected get logger(): ILoggerService {
    return this.cli.logger;
  }

  protected get config(): ICliConfig {
    return this.cli.config;
  }

  public async initialize?(): Promise<void>;
}
