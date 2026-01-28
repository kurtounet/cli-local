import { IAppContext } from "@/types/context.interface.js";

export abstract class BaseService {
  constructor(protected cli: IAppContext) {}

  async init(): Promise<void> {
    // Implémentation par défaut vide
    // return Promise.resolve();
  }

  // protected get logger(): ILoggerService {
  //   return this.cli.logger;
  // }

  // protected get config(): ICliConfig {
  //   return this.cli.config;
  // }
}
