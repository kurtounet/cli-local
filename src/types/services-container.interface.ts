export interface IServicesContainer {
  register(name: string, service: any): void;
  get<T>(name: string): T;
  initializeAll(): Promise<void>;
}
