import { IServicesContainer } from "@/types/services-container.interface.js";
import { BaseService } from "./base-service.service.js";

export class ServicesContainer implements IServicesContainer {
  private services: Map<string, BaseService> = new Map();

  public register(name: string, service: BaseService): void {
    this.services.set(name, service);
  }

  public get<T>(name: string): T {
    const service = this.services.get(name);
    if (!service) throw new Error(`Service introuvable: ${name}`);
    return service as unknown as T;
  }

  public async initializeAll(): Promise<void> {
    for (const service of this.services.values()) {
      if (service.initialize) await service.initialize();
    }
  }
}
