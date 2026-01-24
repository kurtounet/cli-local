// src/types/config-service.interface.ts
export interface IConfigService {
  /**
   * Charge la configuration depuis le système de fichiers
   * et fusionne avec les valeurs par défaut.
   */
  initialize(): Promise<void>;
}
