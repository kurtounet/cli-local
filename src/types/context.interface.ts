import { ICaseService } from "./case-service.interface.js";
import { IConfigService } from "./config-service.interface.js";
import { IHandlerErrorService } from "./error-handler.interface.js";
import { IFileSystemService } from "./file-system.interface.js";
import { IGeneratorService } from "./generator.interface.js";
import { ILoggerService } from "./logger-service.interface.js";
import { IPromptService } from "./prompt-service.interface.js";
import { IServicesContainer } from "./services-container.interface.js";
import { IStateService } from "./state-service.interface.js";
import { ITemplateService } from "./template.interface.js";

export type ServiceName =
  | "LoggerService"
  | "StateService"
  | "FileSystemService"
  | "HandlerErrorService"
  | "ConfigService";

export interface ICliConfig {
  templatesPath: string;
  globalTemplatesPath: string;
  logLevel: "debug" | "info" | "warn" | "error" | "silent";
  theme: "default" | "minimal";
}
export interface IAppContext {
  // Propriétés de base
  version: string;
  rootPath: string;
  config: ICliConfig;
  services: IServicesContainer;
  // Services
  case: ICaseService;
  state: IStateService;
  logger: ILoggerService;
  generator: IGeneratorService;
  configService: IConfigService;
  promptService: IPromptService;
  fileSystem: IFileSystemService;
  templateService: ITemplateService;
  errorHandler: IHandlerErrorService;
}
