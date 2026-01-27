import { IArchitectureService } from "./architecture-service.interface.js";
import { ICaseService } from "./case-service.interface.js";
import { IConfigService } from "./config-service.interface.js";
import { IHandlerErrorService } from "./error-handler.interface.js";
import { IFileSystemService } from "./file-system.interface.js";
import { IGeneratorService } from "./generator.interface.js";
import { IAiService } from "./ai-service.interface.js"; // Correction du nom de fichier
import { ILoggerService } from "./logger-service.interface.js";
import { IPromptService } from "./prompt-service.interface.js";
import { IServicesContainer } from "./services-container.interface.js";
import { IStateService } from "./state-service.interface.js";
import { ITemplateService } from "./template.interface.js";
import { IToolService } from "./tool-service.interface.js";
import { IDataManagerService } from "./data-manager-service.interface.js";
import { IPluginService } from "./plugin-service.interface.js";

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
  config: ICliConfig;
  services: IServicesContainer;
  ai: IAiService;
  db: IDataManagerService;
  case: ICaseService;
  tool: IToolService;
  state: IStateService;
  plugin: IPluginService;
  logger: ILoggerService;
  generator: IGeneratorService;
  configService: IConfigService;
  promptService: IPromptService;
  fileSystem: IFileSystemService;
  architecture: IArchitectureService;
  templateService: ITemplateService;
  errorHandler: IHandlerErrorService;
}
