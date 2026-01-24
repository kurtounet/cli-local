export interface IGeneratorService {
  newComponent(type: string, name: string, options: any): Promise<void>;
}
