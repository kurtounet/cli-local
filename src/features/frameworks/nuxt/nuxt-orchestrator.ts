// src/features/frameworks/nuxt/nuxt-orchestrator.ts
import { NuxtGeneratePageService } from "./services/nuxt-generate-page.service.js";
import { NuxtGenerateComponentService } from "./services/nuxt-generate-component.service";

export class NuxtOrchestrator {
  private commands = {
    page: new NuxtGeneratePageService(),
    component: new NuxtGenerateComponentService(),
  };

  generate(type: string, name: string) {
    const service = this.commands[type];
    if (service) {
      service.execute(name);
    } else {
      console.error("Type Nuxt inconnu");
    }
  }
}
