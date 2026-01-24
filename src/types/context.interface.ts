export interface ILoggerService {
  info(message: string, meta?: object): void;
  warn(message: string, meta?: object): void;
  error(message: string, error?: Error): void;
  success(message: string): void;
  debug(message: string, meta?: object): void;
}

export interface IStateService {
  get<T>(key: string): T | undefined;
  set<T>(key: string, value: T): void;
  has(key: string): boolean;
  clear(): void;
}

export interface ICliConfig {
  templatesPath: string;
  globalTemplatesPath: string;
  logLevel: "debug" | "info" | "warn" | "error" | "silent";
  theme: "default" | "minimal";
}

export interface IServicesContainer {
  register(name: string, service: any): void;
  get<T>(name: string): T;
  initializeAll(): Promise<void>;
}

export interface IAppContext {
  services: IServicesContainer;
  config: ICliConfig;
  state: IStateService;
  logger: ILoggerService;
  version: string;
  rootPath: string;
}
