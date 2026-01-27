import { IServicesContainer } from "@/types/services-container.interface.js";
import { IBaseService } from "@/types/base-service.interface.js";

export class ServicesContainer implements IServicesContainer {
  private services = new Map<string, IBaseService>();

  public register<T extends IBaseService>(key: string, service: T): void {
    this.services.set(key, service);
  }

  public get<T extends IBaseService>(key: string): T {
    const service = this.services.get(key);
    if (!service) {
      throw new Error(`Service ${key} non trouvé`);
    }
    return service as T;
  }

  public getAll(): IBaseService[] {
    return Array.from(this.services.values());
  }

  // Optionnel : Tu peux garder initializeAll ici si tu veux
  // que le conteneur soit autonome, ou le supprimer si le Builder s'en charge.
  public async initializeAll(): Promise<void> {
    await Promise.all(this.getAll().map((s) => s.init()));
  }
}
