import { IHandlerErrorService } from "@/types/error-handler.interface.js";
import { BaseService } from "./base-service.service.js";
import { CliError, ErrorCode } from "@/errors/cli-errors.js";
export class HandlerErrorService extends BaseService implements IHandlerErrorService {
  readonly serviceName = "handlerError";
  public init(): Promise<void> {
    return Promise.resolve();
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
  public handle(error: Error | CliError, contextMessage?: string): void {
    const isCliError = error instanceof CliError;
    const message = isCliError ? error.message : `An unexpected error occurred: ${error.message}`;
    const code = isCliError ? error.code : ErrorCode.INTERNAL_ERROR;

    // Log de l'erreur
    if (contextMessage) {
      this.logger.error(`${contextMessage}: ${message}`);
    } else {
      this.logger.error(message);
    }

    // En mode debug, on affiche la stack trace complète
    if (this.config.logLevel === "debug" && error.stack) {
      console.error(error.stack);
    }

    // Sortie propre
    this.exit(isCliError ? error.exitCode : 1);
  }

  private exit(code: number): void {
    // Optionnel : On pourrait appeler services.destroyAll() ici avant de quitter
    process.exit(code);
  }
}
