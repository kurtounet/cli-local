import { AiService } from "@/services/ai.service.js";
import { ToolService } from "@/services/tool.service.js";
import { CaseService } from "@/services/case.service.js";
import { ConfigService } from "@/services/config.service.js";
import { StateService } from "@/services/state.service.js";
import { LoggerService } from "@/services/logger.service.js";
import { PromptService } from "@/services/prompt.service.js";
import { PluginService } from "@/services/plugin.service.js";
import { TemplateService } from "@/services/template.service.js";
import { GeneratorService } from "@/services/generator.service.js";
import { FileSystemService } from "@/services/file-system.service.js";
import { ServicesContainer } from "../services/services-container.js";
import { IAppContext, ICliConfig } from "../types/context.interface.js";
import { DataManagerService } from "@/services/data-manager.service.js";
import { HandlerErrorService } from "@/services/handler-error.service.js";
import { ArchitectureService } from "@/services/architecture.service.js";

export class AppContextBuilder {
  private services = new ServicesContainer();

  public async buildContext(): Promise<IAppContext> {
    // 1. On prépare le shell du contexte
    const cli = {
      name: "mclp",
      version: "1.0.0",
      description: "CLI de génération et gestion de projet",
      rootPath: process.cwd(),
      services: this.services,
      config: this.getDefaultConfig(),
    } as IAppContext;

    // 2. Instanciation (Chaque service reçoit le contexte)
    // Ils implémentent tous IBaseService via leur classe parente
    cli.ai = new AiService(cli);
    cli.case = new CaseService(cli);
    cli.tool = new ToolService(cli);
    cli.state = new StateService(cli);
    cli.plugin = new PluginService(cli);
    cli.db = new DataManagerService(cli);
    cli.logger = new LoggerService(cli);
    cli.generator = new GeneratorService(cli);
    cli.promptService = new PromptService(cli);
    cli.configService = new ConfigService(cli);
    cli.fileSystem = new FileSystemService(cli);
    cli.architecture = new ArchitectureService(cli);
    cli.templateService = new TemplateService(cli);
    cli.errorHandler = new HandlerErrorService(cli);

    // 3. Enregistrement automatique dans le conteneur
    this.registerAll(cli);

    // 4. Initialisation de tous les services (puisqu'ils ont tous .init())
    // C'est ici que l'interface IBaseService devient puissante
    await this.initializeAllServices(cli);

    return cli;
  }

  private registerAll(ctx: IAppContext): void {
    // On mappe les propriétés du contexte qui sont des services
    const serviceEntries = [
      ["AiService", ctx.ai],
      ["LoggerService", ctx.logger],
      ["FileSystemService", ctx.fileSystem],
      ["CaseService", ctx.case],
      ["ToolService", ctx.tool],
      ["StateService", ctx.state],
      ["PluginService", ctx.plugin],
      ["DataManagerService", ctx.db],
      ["GeneratorService", ctx.generator],
      ["PromptService", ctx.promptService],
      ["ConfigService", ctx.configService],
      ["ArchitectureService", ctx.architecture],
      ["TemplateService", ctx.templateService],
      ["HandlerErrorService", ctx.errorHandler],
    ] as const;

    for (const [name, instance] of serviceEntries) {
      this.services.register(name, instance);
    }
  }

  private async initializeAllServices(ctx: IAppContext): Promise<void> {
    // On récupère tous les services enregistrés et on lance leur init()
    const allServices = this.services.getAll(); // ou this.services.getAll(); // Suppose que tu as une méthode getAll()
    await Promise.all(allServices.map((s) => s.init()));
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
