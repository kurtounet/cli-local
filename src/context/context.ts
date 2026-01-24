import { ServicesContainer } from "../services/services-container.js";
import { LoggerService } from "../services/logger-service.js";
import { IAppContext, ICliConfig } from "../types/context.interface.js";
import { HandlerErrorService } from "@/services/handler-error.service.js";

export class AppContextBuilder {
  private services = new ServicesContainer();

  public buildContext(): IAppContext {
    const context: IAppContext = {
      services: this.services,
      config: this.getDefaultConfig(),
      state: null as any,
      logger: null as any,
      version: "1.0.0",
      rootPath: process.cwd(),
    };

    context.logger = new LoggerService(context);
    // context.state = new StateService(context);

    this.services.register("LoggerService", context.logger as any);
    this.services.register("StateService", context.state as any);
    this.services.register("HandlerErrorService", new HandlerErrorService(context) as any);
    // this.services.register("ConfigService", new ConfigService(context) as any);

    return context;
  }

  private getDefaultConfig(): ICliConfig {
    return {
      templatesPath: "./templates",
      globalTemplatesPath: "~/.scrofolder",
      logLevel: "info",
      theme: "default",
    };
  }
}
