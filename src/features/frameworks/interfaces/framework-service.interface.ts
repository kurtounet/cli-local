import { IConfigFramework } from "@/features/commun/framework.interface.js";

export interface IFrameworkService {
  initFramework(project: string): Promise<any>;
  configFrameworks(frameWorks: Array<string>): Array<IConfigFramework>;
  intallFramework(project: string): Promise<any>;
  intallDependencies(project: string): Promise<any>;
  generateFileFramework(project: string): Promise<any>;
  updateTsConfig(): Promise<void>;
}
