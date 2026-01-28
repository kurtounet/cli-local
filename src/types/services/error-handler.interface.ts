import { IBaseService } from "./base-service.interface.js";

// src/types/error-handler.interface.ts
export interface IHandlerErrorServic extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  /**
   * Configure les écouteurs globaux (uncaughtException, unhandledRejection)
   */
  setupGlobalHandlers(): void;

  /**
   * Traite une erreur spécifique avec un message contextuel optionnel
   */
  handle(error: Error, contextMessage?: string): void;
}
