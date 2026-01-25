import { CaseService } from "@/services/case.service.js";
import { ConfigService } from "@/services/config.service.js";
import { StateService } from "@/services/state.service.js";
import { LoggerService } from "@/services/logger.service.js";
import { PromptService } from "@/services/prompt.service.js";
import { TemplateService } from "@/services/template.service.js";
import { GeneratorService } from "@/services/generator.service.js";
import { FileSystemService } from "@/services/file-system.service.js";
import { ServicesContainer } from "../services/services-container.js";
import { IAppContext, ICliConfig } from "../types/context.interface.js";
import { HandlerErrorService } from "@/services/handler-error.service.js";
import { ToolService } from "@/services/tool.service.js";
import { ArchitectureService } from "@/services/architecture.service.js";

export class AppContextBuilder {
  private services = new ServicesContainer();

  public buildContext(): IAppContext {
    // 1. Création de l'objet context de base
    const cli: IAppContext = {
      version: "1.0.0",
      rootPath: process.cwd(),
      services: this.services,
      ia: null as any,
      case: null as any,
      tool: null as any,
      state: null as any,
      logger: null as any,
      generator: null as any,
      errorHandler: null as any,
      fileSystem: null as any,
      architecture: null as any,
      promptService: null as any,
      configService: null as any,
      templateService: null as any,
      config: this.getDefaultConfig(),
    };

    // 2. Instanciation des services (Injection du contexte dans chaque service)
    cli.ia = new CaseService(cli);
    cli.case = new CaseService(cli);
    cli.tool = new ToolService(cli);
    cli.state = new StateService(cli);
    cli.logger = new LoggerService(cli);
    cli.generator = new GeneratorService(cli);
    cli.promptService = new PromptService(cli);
    cli.configService = new ConfigService(cli);
    cli.fileSystem = new FileSystemService(cli);
    cli.architecture = new ArchitectureService(cli);
    cli.templateService = new TemplateService(cli);
    cli.errorHandler = new HandlerErrorService(cli);

    // 3. Enregistrement dans le conteneur pour l'accès global via context.services.get()
    this.services.register("IaService", cli.ia as any);
    this.services.register("CaseService", cli.case as any);
    this.services.register("ToolService", cli.tool as any);
    this.services.register("StateService", cli.state as any);
    this.services.register("LoggerService", cli.logger as any);
    this.services.register("GeneratorService", cli.generator as any);
    this.services.register("PromptService", cli.promptService as any);
    this.services.register("ConfigService", cli.configService as any);
    this.services.register("FileSystemService", cli.fileSystem as any);
    this.services.register("HandlerErrorService", cli.errorHandler as any);
    this.services.register("TemplateService", cli.templateService as any);

    return cli;
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
