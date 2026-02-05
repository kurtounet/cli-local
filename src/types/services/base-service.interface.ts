export interface IBaseService {
  readonly serviceName: string;
  init(): Promise<void>;
}
