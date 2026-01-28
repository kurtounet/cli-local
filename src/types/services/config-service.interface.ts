import { IBaseService } from "./base-service.interface.js";

// src/types/config-service.interface.ts
export interface IConfigService extends IBaseService {
  serviceName: string;
  logLevel: "debug" | "info" | "warn" | "error";
  init(): Promise<void>;
  /**
   * Charge la configuration depuis le système de fichiers
   * et fusionne avec les valeurs par défaut.
   */
  resolveLogLevel(cfg?: CliConfig): "debug" | "info" | "warn" | "error" | "silent";
  initialize(): Promise<void>;
}
