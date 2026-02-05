import { ProjectService } from "@/features/project/services/project.service.js";
import { TaskService } from "@/features/project/services/task.service.js";
import { AiService } from "@/services/ai.service.js";
import { ArchitectureService } from "@/services/architecture.service.js";
import { AstService } from "@/services/ast.service.js";
import { CaseService } from "@/services/case.service.js";
import { ConfigService } from "@/services/config.service.js";
import { DataManagerService } from "@/services/data-manager.service.js";
import { FileSystemService } from "@/services/file-system.service.js";
import { GeneratorService } from "@/services/generator.service.js";
import { GitService } from "@/services/git.service.js";
import { HandlerErrorService } from "@/services/handler-error.service.js";
import { LoggerService } from "@/services/logger.service.js";
import { PluginService } from "@/services/plugin.service.js";
import { PromptService } from "@/services/prompt.service.js";
import { ShellService } from "@/services/shell.service.js";
import { StateService } from "@/services/state.service.js";
import { TemplateService } from "@/services/template.service.js";
import { ToolService } from "@/services/tool.service.js";
import { IBaseService } from "@/types/services/base-service.interface.js";

import { ServicesContainer } from "../services/services-container.js";
import { IAppContext, ICliConfig } from "../types/context.interface.js";

/**
 * Builder pour la construction du contexte de l'application
 * Responsable de l'instanciation, l'enregistrement et l'initialisation de tous les services
 */
export class AppContextBuilder {
  /** Conteneur de services pour l'injection de dépendances */
  private services = new ServicesContainer();

  /**
   * Construit le contexte complet de l'application
   *
   * Cette méthode suit un processus en 4 étapes :
   * 1. Création de la structure de base du contexte
   * 2. Instanciation de tous les services
   * 3. Enregistrement des services dans le conteneur
   * 4. Initialisation asynchrone de tous les services   *
   * @returns Le contexte de l'application prêt à l'emploi
   */
  public async buildContext(): Promise<IAppContext> {
    // ============================================================================
    // ÉTAPE 1 : Préparation du shell du contexte
    // ============================================================================
    const cli = {
      name: "mclp",
      version: "1.0.0",
      description: "CLI de génération et gestion de projet",
      rootPath: process.cwd(),
      services: this.services,
      cliCconfig: this.getDefaultConfig(),
    } as unknown as IAppContext;

    // ============================================================================
    // ÉTAPE 2 : Instanciation de tous les services
    // ============================================================================
    // Chaque service reçoit le contexte complet et implémente IBaseService
    // L'ordre d'instanciation n'est pas critique car les dépendances sont résolues
    // via le contexte partagé

    cli.ai = new AiService(cli);
    cli.git = new GitService(cli);
    cli.ast = new AstService(cli);
    cli.task = new TaskService(cli);
    cli.case = new CaseService(cli);
    cli.tool = new ToolService(cli);
    cli.state = new StateService(cli);
    cli.plugin = new PluginService(cli);
    cli.db = new DataManagerService(cli);
    cli.logger = new LoggerService(cli);
    cli.prompt = new PromptService(cli);
    cli.project = new ProjectService(cli);
    cli.config = new ConfigService(cli);
    cli.shell = new ShellService(cli);
    cli.template = new TemplateService(cli);
    cli.generator = new GeneratorService(cli);
    cli.fileSystem = new FileSystemService(cli);
    cli.architecture = new ArchitectureService(cli);
    cli.errorHandler = new HandlerErrorService(cli);

    // ============================================================================
    // ÉTAPE 3 : Enregistrement automatique dans le conteneur
    // ============================================================================
    this.registerAllServices(cli);

    // ============================================================================
    // ÉTAPE 4 : Initialisation asynchrone de tous les services
    // ============================================================================
    // Utilisation de la méthode du conteneur pour éviter la duplication de code
    await this.services.initializeAll();

    return cli;
  }

  /**
   * Enregistre tous les services du contexte dans le conteneur
   * Permet l'injection de dépendances via le pattern Service Locator   *
   * @param ctx - Le contexte contenant tous les services instanciés
   */
  private registerAllServices(ctx: IAppContext): void {
    /**
     * Mapping entre les noms de services (clés du conteneur) et leurs instances
     * Le nom de service est utilisé pour la récupération via services.get<T>(name)
     */
    const serviceEntries: readonly [string, IBaseService][] = [
      ["AiService", ctx.ai],
      ["GitService", ctx.git],
      ["AstService", ctx.ast],
      ["CaseService", ctx.case],
      ["ToolService", ctx.tool],
      ["TaskService", ctx.task],
      ["ShellService", ctx.shell],
      ["StateService", ctx.state],
      ["LoggerService", ctx.logger],
      ["PromptService", ctx.prompt],
      ["PluginService", ctx.plugin],
      ["ConfigService", ctx.config],
      ["DataManagerService", ctx.db],
      ["ProjectService", ctx.project],
      ["TemplateService", ctx.template],
      ["GeneratorService", ctx.generator],
      ["FileSystemService", ctx.fileSystem],
      ["ArchitectureService", ctx.architecture],
      ["HandlerErrorService", ctx.errorHandler],
    ];

    // Enregistrement de chaque service dans le conteneur
    for (const [name, instance] of serviceEntries) {
      this.services.register(name, instance);
    }
  }

  /**
   * Retourne la configuration par défaut de la CLI
   * Ces valeurs peuvent être surchargées par un fichier de configuration   *
   * @returns Configuration par défaut
   */
  private getDefaultConfig(): ICliConfig {
    return {
      /** Chemin local des templates du projet */
      templatesPath: "./templates",
      /** Chemin global des templates partagés (home directory) */
      globalTemplatesPath: "~/.scrofolder",
      /** Niveau de log (debug, info, warn, error) */
      logLevel: "debug",
      /** Thème de la CLI */
      theme: "default",
    };
  }
}
