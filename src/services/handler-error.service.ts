import { IHandlerErrorService } from "@/types/services/error-handler.interface.js";
import { BaseService } from "./base-service.service.js";
import { CliError } from "@/errors/cli-errors.js";
import { IAppContext } from "@/types/context.interface.js";

export class HandlerErrorService extends BaseService implements IHandlerErrorService {
  readonly serviceName = "HandlerErrorService";

  constructor(cli: IAppContext) {
    super(cli);
  }

  /**
   * Configure les écouteurs globaux pour Node.js.
   * Empêche la CLI de crash sans loguer l'erreur.
   */
  public setupGlobalHandlers(): void {
    process.on("uncaughtException", (error: Error) => {
      this.handle(error, "Uncaught Exception");
    });

    process.on("unhandledRejection", (reason: unknown) => {
      this.handle(
        reason instanceof Error ? reason : new Error(String(reason)),
        "Unhandled Rejection",
      );
    });
  }

  /**
   * Méthode centrale pour traiter toute erreur de l'application.
   * Cette méthode est ultra-sécurisée et ne devrait jamais planter.
   * @param error erreur à traiter
   * @param contextMessage message contextuel optionnel
   */
  public handle(error: unknown, contextMessage?: string): void {
    try {
      // 1️⃣ Normaliser unknown → Error
      const err: Error =
        error instanceof Error
          ? error
          : new Error(typeof error === "string" ? error : JSON.stringify(error));

      const isCliError = err instanceof CliError;
      const message = isCliError ? err.message : `An unexpected error occurred: ${err.message}`;
      const exitCode = isCliError ? (err as CliError).exitCode : 1;

      // 2️⃣ Logger SAFE avec protection totale
      this.safeLogError(contextMessage, message);

      // 3️⃣ Stack trace en debug uniquement (ultra safe)
      this.safeLogStackTrace(err);

      // 4️⃣ Sortie propre
      process.exit(exitCode);
    } catch (handlerError) {
      // Si même le handler d'erreur plante, on utilise console brut
      console.error("❌ Critical error in error handler:");
      console.error("Context:", contextMessage ?? "Unknown");
      console.error("Original error:", error);
      console.error("Handler error:", handlerError);
      process.exit(1);
    }
  }

  /**
   * Log une erreur de manière sécurisée avec plusieurs fallbacks.
   * Cette méthode ne devrait jamais planter.
   * @param contextMessage contexte de l'erreur
   * @param message message d'erreur
   */
  private safeLogError(contextMessage: string | undefined, message: string): void {
    try {
      const logger = this.cli?.logger;

      // Tentative d'utilisation du logger configuré
      if (logger && typeof logger.error === "function") {
        const finalMessage = contextMessage ? `${contextMessage}: ${message}` : message;
        logger.error(finalMessage);
        return;
      }
    } catch (loggerError) {
      // Le logger a planté, on affiche un warning et on continue vers le fallback
      console.error("⚠️  Logger failed, falling back to console:", loggerError);
    }

    // Fallback : utilisation de console.error
    const finalMessage = contextMessage ? `${contextMessage}: ${message}` : message;
    console.error("❌", finalMessage);
  }

  /**
   * Affiche la stack trace seulement en mode debug.
   * Cette méthode ne plante jamais, même si la récupération du log level échoue.
   * @param err erreur dont on veut afficher la stack
   */
  private safeLogStackTrace(err: Error): void {
    try {
      const logLevel = this.getLogLevel();

      if (logLevel === "debug" && err.stack) {
        console.error("\n📍 Stack trace:");
        console.error(err.stack);
      }
    } catch (stackError) {
      // Si la récupération du log level plante, on affiche quand même la stack
      // en cas d'erreur critique (mieux vaut trop d'info que pas assez)
      if (err.stack) {
        console.error("\n⚠️  Stack trace (log level check failed):");
        console.error(err.stack);
      }
    }
  }

  /**
   * Récupère le log level de manière ultra-sécurisée avec plusieurs fallbacks.
   * Cette méthode ne plante jamais.
   * @returns le log level ou undefined si impossible à déterminer
   */
  private getLogLevel(): string | undefined {
    try {
      // Méthode 1 : Via this.cli.config.logLevel (standard)
      if (this.cli?.config?.logLevel) {
        return this.cli.config.logLevel;
      }

      // Méthode 2 : Via une variable d'environnement
      const envLogLevel = process.env.LOG_LEVEL;
      if (envLogLevel) {
        return envLogLevel;
      }

      // Méthode 3 : Via les arguments de ligne de commande
      if (process.argv.includes("--debug") || process.argv.includes("-d")) {
        return "debug";
      }

      if (process.argv.includes("--verbose") || process.argv.includes("-v")) {
        return "verbose";
      }

      // Valeur par défaut
      return undefined;
    } catch {
      // En cas d'erreur dans la récupération, on retourne undefined
      return undefined;
    }
  }

  /**
   * Méthode utilitaire pour forcer l'affichage de détails en mode debug.
   * Utile pour le développement.
   * @param title titre de la section de debug
   * @param data données à afficher
   */
  public debugLog(title: string, data: unknown): void {
    try {
      const logLevel = this.getLogLevel();

      if (logLevel === "debug") {
        console.log(`\n🔍 ${title}:`);
        console.log(JSON.stringify(data, null, 2));
      }
    } catch {
      // En cas d'erreur, on ignore silencieusement
    }
  }

  /**
   * Vérifie si le service est correctement initialisé.
   * Utile pour le debugging.
   * @returns true si le service est correctement configuré
   */
  public isProperlyConfigured(): boolean {
    try {
      return !!(this.cli?.logger && typeof this.cli.logger.error === "function");
    } catch {
      return false;
    }
  }

  /**
   * Retourne un diagnostic de l'état du service.
   * Utile pour comprendre pourquoi les erreurs ne sont pas loguées correctement.
   * @returns objet contenant les informations de diagnostic
   */
  public getDiagnostics(): {
    hasCliContext: boolean;
    hasLogger: boolean;
    hasConfig: boolean;
    logLevel: string | undefined;
    isFullyConfigured: boolean;
  } {
    try {
      return {
        hasCliContext: !!this.cli,
        hasLogger: !!this.cli?.logger,
        hasConfig: !!this.cli?.config,
        logLevel: this.getLogLevel(),
        isFullyConfigured: this.isProperlyConfigured(),
      };
    } catch {
      return {
        hasCliContext: false,
        hasLogger: false,
        hasConfig: false,
        logLevel: undefined,
        isFullyConfigured: false,
      };
    }
  }
}
// import { IHandlerErrorService } from "@/types/services/error-handler.interface.js";
// import { BaseService } from "./base-service.service.js";
// import { CliError } from "@/errors/cli-errors.js";
// import { IAppContext } from "@/types/context.interface.js";

// export class HandlerErrorService extends BaseService implements IHandlerErrorService {
//   readonly serviceName = "HandlerErrorService";
//   goodCli = {
//     logger: {
//       error: (msg: string) => console.log("LOGGER:", msg),
//     },
//     config: {
//       logLevel: "debug",
//     },
//   };
//   constructor(cli: IAppContext) {
//     super(cli);
//   }

//   /**
//    * Configure les écouteurs globaux pour Node.js.
//    * Empêche la CLI de crash sans loguer l'erreur.
//    */
//   public setupGlobalHandlers(): void {
//     process.on("uncaughtException", (error: Error) => {
//       this.handle(error, "Uncaught Exception");
//     });

//     process.on("unhandledRejection", (reason: unknown) => {
//       this.handle(
//         reason instanceof Error ? reason : new Error(String(reason)),
//         "Unhandled Rejection",
//       );
//     });
//   }

//   /**
//    * Méthode centrale pour traiter toute erreur de l'application.
//    * @param error erreur
//    * @param contextMessage message contextuel
//    */
//   public handle(error: unknown, contextMessage?: string): void {
//     try {
//       // 1️⃣ Normaliser unknown → Error
//       const err: Error =
//         error instanceof Error
//           ? error
//           : new Error(typeof error === "string" ? error : JSON.stringify(error));

//       const isCliError = err instanceof CliError;
//       const message = isCliError ? err.message : `An unexpected error occurred: ${err.message}`;
//       const exitCode = isCliError ? err.exitCode : 1;

//       // 2️⃣ Logger SAFE avec protection totale
//       this.safeLogError(contextMessage, message);

//       // 3️⃣ Stack trace en debug uniquement (ultra safe)
//       this.safeLogStackTrace(err);

//       // 4️⃣ Sortie propre
//       process.exit(exitCode);
//     } catch (handlerError) {
//       // Si même le handler d'erreur plante, on utilise console brut
//       console.error("❌ Critical error in error handler:");
//       console.error(contextMessage ?? "Unknown context");
//       console.error(error);
//       console.error("Handler error:", handlerError);
//       process.exit(1);
//     }
//   }

//   /**
//    * Log une erreur de manière sécurisée avec plusieurs fallbacks
//    */
//   private safeLogError(contextMessage: string | undefined, message: string): void {
//     try {
//       const logger = this.cli?.logger;

//       if (logger && typeof logger.error === "function") {
//         const finalMessage = contextMessage ? `${contextMessage}: ${message}` : message;
//         logger.error(finalMessage);
//         return;
//       }
//     } catch (loggerError) {
//       // Le logger a planté, on continue vers le fallback
//       console.error("⚠️  Logger failed:", loggerError);
//     }

//     // Fallback console
//     const finalMessage = contextMessage ? `${contextMessage}: ${message}` : message;
//     console.error("❌", finalMessage);
//   }

//   /**
//    * Affiche la stack trace seulement en mode debug
//    */
//   private safeLogStackTrace(err: Error): void {
//     try {
//       // Multiples niveaux de protection pour accéder au logLevel
//       const logLevel = this.getLogLevel();

//       if (logLevel === "debug" && err.stack) {
//         console.error("\n📍 Stack trace:");
//         console.error(err.stack);
//       }
//     } catch (stackError) {
//       // Si on ne peut pas afficher la stack, ce n'est pas grave
//       // On l'affiche quand même en cas d'erreur critique
//       if (err.stack) {
//         console.error("\n⚠️  Stack trace (log level check failed):");
//         console.error(err.stack);
//       }
//     }
//   }

//   /**
//    * Récupère le log level de manière ultra-sécurisée
//    */
//   private getLogLevel(): string | undefined {
//     try {
//       // Méthode 1 : Via this.cli.config
//       if (this.cli?.config?.logLevel) {
//         return this.cli.config.logLevel;
//       }

//       // Méthode 2 : Via une variable d'environnement
//       if (process.env.LOG_LEVEL) {
//         return process.env.LOG_LEVEL;
//       }

//       // Méthode 3 : Via les arguments de ligne de commande
//       if (process.argv.includes("--debug") || process.argv.includes("-d")) {
//         return "debug";
//       }

//       return undefined;
//     } catch {
//       return undefined;
//     }
//   }
// }

// import { IHandlerErrorService } from "@/types/services/error-handler.interface.js";
// import { BaseService } from "./base-service.service.js";
// import { CliError } from "@/errors/cli-errors.js";
// import { IAppContext } from "@/types/context.interface.js";
// export class HandlerErrorService extends BaseService implements IHandlerErrorService {
//   readonly serviceName = "HandlerErrorService";
//   constructor(cli: IAppContext) {
//     super(cli);
//   }
//   /**
//    * Configure les écouteurs globaux pour Node.js.
//    * Empêche la CLI de crash sans loguer l'erreur.
//    */
//   public setupGlobalHandlers(): void {
//     process.on("uncaughtException", (error: Error) => {
//       this.handle(error, "Uncaught Exception");
//     });

//     process.on("unhandledRejection", (reason: unknown) => {
//       this.handle(
//         reason instanceof Error ? reason : new Error(String(reason)),
//         "Unhandled Rejection",
//       );
//     });
//   }

//   /**
//    * Méthode centrale pour traiter toute erreur de l'application.
//    * @param error erreur
//    * @param contextMessage message contextuel
//    */
//   public handle(error: unknown, contextMessage?: string): void {
//     // 1️⃣ Normaliser unknown → Error
//     const err: Error =
//       error instanceof Error
//         ? error
//         : new Error(typeof error === "string" ? error : JSON.stringify(error));

//     const isCliError = err instanceof CliError;

//     const message = isCliError ? err.message : `An unexpected error occurred: ${err.message}`;

//     const exitCode = isCliError ? err.exitCode : 1;

//     // 2️⃣ Logger SAFE (fallback console)
//     const logError = (msg: string) => {
//       const logger = this.cli?.logger;

//       if (logger && typeof logger.error === "function") {
//         logger.error(msg);
//       } else {
//         console.error("❌", msg);
//       }
//     };

//     if (contextMessage) {
//       logError(`${contextMessage}: ${message}`);
//     } else {
//       logError(message);
//     }

//     // 3️⃣ Stack trace en debug uniquement (safe)
//     const logLevel = this.cli?.config?.logLevel;
//     if (logLevel === "debug" && err.stack) {
//       console.error(err.stack);
//     }

//     // 4️⃣ Sortie propre (jamais throw ici)
//     process.exit(exitCode);
//   }
// }
// //   public handle(error: unknown, contextMessage?: string): void {
// //     const isCliError = error instanceof CliError;
// //     const message = isCliError ? error.message : `An unexpected error occurred: ${error}`;
// //     const code = isCliError ? error.code : ErrorCode.INTERNAL_ERROR;

// //     // Log de l'erreur
// //     if (contextMessage) {
// //       this.cli.logger.error(`${contextMessage}: ${message}`);
// //     } else {
// //       this.cli.logger.error(message);
// //     }

// //     // En mode debug, on affiche la stack trace complète
// //     if (this.cli.config.logLevel === "debug" && error.stack) {
// //       console.error(error.stack);
// //     }

// //     // Sortie propre
// //     this.exit(isCliError ? error.exitCode : 1);
// //   }

// //   private exit(code: number): void {
// //     // Optionnel : On pourrait appeler services.destroyAll() ici avant de quitter
// //     process.exit(code);
// //   }
// // }
