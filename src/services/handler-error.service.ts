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
   * @param error erreur
   * @param contextMessage message contextuel
   */
  public handle(error: unknown, contextMessage?: string): void {
    // 1️⃣ Normaliser unknown → Error
    const err: Error =
      error instanceof Error
        ? error
        : new Error(typeof error === "string" ? error : JSON.stringify(error));

    const isCliError = err instanceof CliError;

    const message = isCliError ? err.message : `An unexpected error occurred: ${err.message}`;

    const exitCode = isCliError ? err.exitCode : 1;

    // 2️⃣ Logger SAFE (fallback console)
    const logError = (msg: string) => {
      const logger = this.cli?.logger;

      if (logger && typeof logger.error === "function") {
        logger.error(msg);
      } else {
        console.error("❌", msg);
      }
    };

    if (contextMessage) {
      logError(`${contextMessage}: ${message}`);
    } else {
      logError(message);
    }

    // 3️⃣ Stack trace en debug uniquement (safe)
    const logLevel = this.cli?.config?.logLevel;
    if (logLevel === "debug" && err.stack) {
      console.error(err.stack);
    }

    // 4️⃣ Sortie propre (jamais throw ici)
    process.exit(exitCode);
  }
}
//   public handle(error: unknown, contextMessage?: string): void {
//     const isCliError = error instanceof CliError;
//     const message = isCliError ? error.message : `An unexpected error occurred: ${error}`;
//     const code = isCliError ? error.code : ErrorCode.INTERNAL_ERROR;

//     // Log de l'erreur
//     if (contextMessage) {
//       this.cli.logger.error(`${contextMessage}: ${message}`);
//     } else {
//       this.cli.logger.error(message);
//     }

//     // En mode debug, on affiche la stack trace complète
//     if (this.cli.config.logLevel === "debug" && error.stack) {
//       console.error(error.stack);
//     }

//     // Sortie propre
//     this.exit(isCliError ? error.exitCode : 1);
//   }

//   private exit(code: number): void {
//     // Optionnel : On pourrait appeler services.destroyAll() ici avant de quitter
//     process.exit(code);
//   }
// }
