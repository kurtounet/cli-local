import { IStateService } from "@/types/services/state-service.interface.js";

import { BaseService } from "./base-service.service.js";

export class StateService extends BaseService implements IStateService {
  readonly serviceName = "StateService";

  private storage = new Map<string, unknown>();

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
