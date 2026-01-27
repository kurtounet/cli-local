import { IServicesContainer } from "@/types/services-container.interface.js";
import { IBaseService } from "@/types/base-service.interface.js";

export class ServicesContainer implements IServicesContainer {
  private services = new Map<string, IBaseService>();

  public register(name: string, service: IBaseService): void {
    this.services.set(name, service);
  }

  public get<T extends IBaseService>(name: string): T {
    const service = this.services.get(name);
    if (!service) {
      throw new Error(`Service ${name} non trouvé`);
    }
    return service as T;
  }

  public getAll(): IBaseService[] {
    return Array.from(this.services.values());
  }
}