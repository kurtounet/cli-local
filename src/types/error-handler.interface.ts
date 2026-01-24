// src/types/error-handler.interface.ts
export interface IHandlerErrorService {
  /**
   * Configure les écouteurs globaux (uncaughtException, unhandledRejection)
   */
  setupGlobalHandlers(): void;

  /**
   * Traite une erreur spécifique avec un message contextuel optionnel
   */
  handle(error: Error, contextMessage?: string): void;
}
