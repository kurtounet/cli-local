import { IProjectService } from "@/features/project/interfaces/project-service.interface.js";
import { ITaskService } from "@/features/project/interfaces/task-service.interface.js";

import { IArchitectureService } from "./services/architecture-service.interface.js";
import { IAstService } from "./services/ast-service.interface.js";
import { ICaseService } from "./services/case-service.interface.js";
import { IConfigService } from "./services/config-service.interface.js";
import { IDataManagerService } from "./services/data-manager-service.interface.js";
import { IHandlerErrorService } from "./services/error-handler.interface.js";
import { IFileSystemService } from "./services/file-system.interface.js";
import { IGeneratorService } from "./services/generator.interface.js";
import { IGitService } from "./services/git-service.interface.js";
import { ILoggerService } from "./services/logger-service.interface.js";
import { IPathService } from "./services/path-service.interface.js";
import { IPluginService } from "./services/plugin-service.interface.js";
import { IPromptService } from "./services/prompt-service.interface.js";
import { IServicesContainer } from "./services/services-container.interface.js";
import { IShellService } from "./services/shell-service.interface.js";
import { IStateService } from "./services/state-service.interface.js";
import { ITemplateService } from "./services/template.interface.js";
import { IToolService } from "./services/tool-service.interface.js";

/**
 * Type définissant les noms des services principaux accessibles dans le conteneur de services.
 */
export type ServiceName =
  | "LoggerService"
  | "StateService"
  | "FileSystemService"
  | "HandlerErrorService"
  | "ConfigService";

/**
 * Interface pour la configuration globale de la CLI.
 */
export interface ICliConfig {
  templatesPath: string;

  globalTemplatesPath: string;

  logLevel: "debug" | "info" | "warn" | "error" | "silent";

  theme: "default" | "minimal";
}

/**
 * Interface définissant le contexte global de l'application CLI.
 * Il contient les propriétés de base de la CLI et toutes les instances de services disponibles.
 */
export interface IAppContext {
  version: string;
  rootPath: string;
  cliCconfig: ICliConfig;
  services: IServicesContainer;
  // ai: IAiService;
  db: IDataManagerService;
  git: IGitService;
  ast: IAstService;
  case: ICaseService;
  tool: IToolService;
  state: IStateService;
  task: ITaskService;
  path: IPathService;
  shell: IShellService;
  plugin: IPluginService;
  logger: ILoggerService;
  config: IConfigService;
  prompt: IPromptService;
  project: IProjectService;
  template: ITemplateService;
  generator: IGeneratorService;
  fileSystem: IFileSystemService;
  architecture: IArchitectureService;
  errorHandler: IHandlerErrorService;
}
