export interface IBaseService {
  readonly serviceName: string;
  // La méthode obligatoire pour démarrer le service
  init(): Promise<void>;
}
