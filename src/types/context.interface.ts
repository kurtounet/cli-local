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
  /**
   * Chemin vers le répertoire des templates utilisateur.
   */
  templatesPath: string;
  /**
   * Chemin vers le répertoire des templates globaux (fournis par la CLI).
   */
  globalTemplatesPath: string;
  /**
   * Niveau de log pour la CLI.
   */
  logLevel: "debug" | "info" | "warn" | "error" | "silent";
  /**
   * Thème d'affichage de la CLI.
   */
  theme: "default" | "minimal";
}

/**
 * Interface définissant le contexte global de l'application CLI.
 * Il contient les propriétés de base de la CLI et toutes les instances de services disponibles.
 */
export interface IAppContext {
  // Propriétés de base
  /**
   * Version actuelle de la CLI.
   */
  version: string;
  /**
   * Chemin racine du projet où la CLI est exécutée.
   */
  rootPath: string;
  /**
   * Configuration globale de la CLI.
   */
  config: ICliConfig;
  /**
   * Conteneur pour l'accès aux services.
   */
  services: IServicesContainer;
  // Services
  /**
   * Service d'Intelligence Artificielle.
   */
  ai: IAiService;
  /**
   * Service de manipulation de chaînes de caractères (casse).
   */
  case: ICaseService;
  /**
   * Service d'outils génériques.
   */
  tool: IToolService;
  /**
   * Service de gestion de l'état global.
   */
  state: IStateService;
  /**
   * Service de logging.
   */
  logger: ILoggerService;
  /**
   * Service de génération de code.
   */
  generator: IGeneratorService;
  /**
   * Service de configuration de la CLI.
   */
  configService: IConfigService;
  /**
   * Service de gestion des invites utilisateur (prompts).
   */
  promptService: IPromptService;
  /**
   * Service de gestion du système de fichiers.
   */
  fileSystem: IFileSystemService;
  /**
   * Service d'analyse et de manipulation de l'architecture.
   */
  architecture: IArchitectureService;
  /**
   * Service de gestion des templates.
   */
  templateService: ITemplateService;
  /**
   * Service de gestion des erreurs.
   */
  errorHandler: IHandlerErrorService;
}
