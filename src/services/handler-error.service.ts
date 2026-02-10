import { CliError } from "@/errors/cli-errors.js";
import { IAppContext } from "@/types/context.interface.js";
import { IHandlerErrorService } from "@/types/services/error-handler.interface.js";

import { BaseService } from "./base-service.service.js";

export class HandlerErrorService
  extends BaseService
  implements IHandlerErrorService
{
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
   * @param error - erreur à traiter
   * @param contextMessage - message contextuel optionnel
   */
  public handle(error: unknown, contextMessage?: string): void {
    try {
      // 1️⃣ Normaliser unknown → Error
      const err: Error =
        error instanceof Error
          ? error
          : new Error(
              typeof error === "string" ? error : JSON.stringify(error),
            );

      const isCliError = err instanceof CliError;
      const message = isCliError
        ? err.message
        : `An unexpected error occurred: ${err.message}`;
      const exitCode = isCliError ? err.exitCode : 1;

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
   * @param contextMessage - contexte de l'erreur
   * @param message - message d'erreur
   */
  private safeLogError(
    contextMessage: string | undefined,
    message: string,
  ): void {
    try {
      const logger = this.cli?.logger;

      // Tentative d'utilisation du logger configuré
      if (logger && typeof logger.error === "function") {
        const finalMessage = contextMessage
          ? `${contextMessage}: ${message}`
          : message;
        logger.error(finalMessage);
        return;
      }
    } catch (loggerError) {
      // Le logger a planté, on affiche un warning et on continue vers le fallback
      console.error("⚠️  Logger failed, falling back to console:", loggerError);
    }

    // Fallback : utilisation de console.error
    const finalMessage = contextMessage
      ? `${contextMessage}: ${message}`
      : message;
    console.error("❌", finalMessage);
  }

  /**
   * Affiche la stack trace seulement en mode debug.
   * Cette méthode ne plante jamais, même si la récupération du log level échoue.
   * @param err - erreur dont on veut afficher la stack
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
      try {
        if (this.cli.config.logLevel) {
          return this.cli.config.logLevel;
        }
      } catch {
        this.cli.logger.warn(
          "⚠️  Failed to get log level from this.cli.config.logLevel",
        );
      }

      // Méthode 2 : Via une variable d'environnement
      // Priorité 2 : Env (Sûr aussi)
      if (process.env.LOG_LEVEL) return process.env.LOG_LEVEL;

      // Méthode 3 : Via les arguments de ligne de commande
      if (process.argv.includes("--debug") || process.argv.includes("-d")) {
        return "debug";
      }

      if (process.argv.includes("--verbose") || process.argv.includes("-v")) {
        return "verbose";
      }

      // Valeur par défaut
      return "info";
    } catch {
      // En cas d'erreur dans la récupération, on retourne undefined
      return "debug";
    }
  }

  /**
   * Méthode utilitaire pour forcer l'affichage de détails en mode debug.
   * Utile pour le développement.
   * @param title - titre de la section de debug
   * @param data - données à afficher
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
      return !!(
        this.cli?.logger && typeof this.cli.logger.error === "function"
      );
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
