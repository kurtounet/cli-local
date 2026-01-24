export interface ILoggerService {
  info(message: string, meta?: object): void;
  warn(message: string, meta?: object): void;
  error(message: string, error?: Error): void;
  success(message: string): void;
  debug(message: string, meta?: object): void;
}
