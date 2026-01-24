import { IStateService } from "@/types/state-service.interface.js";
import { BaseService } from "./base-service.service.js";

export class StateService extends BaseService implements IStateService {
  private storage = new Map<string, any>();

  get<T>(key: string): T | undefined {
    return this.storage.get(key);
  }

  set<T>(key: string, value: T): void {
    this.storage.set(key, value);
  }

  has(key: string): boolean {
    return this.storage.has(key);
  }

  clear(): void {
    this.storage.clear();
  }
}
