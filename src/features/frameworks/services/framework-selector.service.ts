// import { ReactService } from "./react.service.js";

import { IAppContext } from "@/types/context.interface.js";

import { AngularService } from "../angular/services/angular.service.js";
import { IFrameworkService } from "../interfaces/framework-service.interface.js";
import { SymfonyService } from "../symfony/services/symfony.service.js";

export class FrameworkSelector {
  private services = new Map<string, IFrameworkService>();

  constructor(private cli: IAppContext) {
    // On initialise les services disponibles
    // Tu pourras en ajouter ici au fur et à mesure
    this.register(new AngularService(this.cli));
    this.register(new SymfonyService(this.cli));
  }

  private register(service: IFrameworkService) {
    // On utilise le nom du service en minuscule comme clé (ex: 'angularservice')
    // Ou mieux, tu peux ajouter une propriété 'slug' (ex: 'angular') à ton interface
    const key = service.serviceName.toLowerCase().replace("service", "");
    this.services.set(key, service);
  }

  /**
   * Récupère le service correspondant au framework
   * @param frameworkName - Nom du framework
   * @returns  Le service du framework
   */
  getService(frameworkName: string): IFrameworkService {
    const service = this.services.get(frameworkName.toLowerCase());

    if (!service) {
      throw new Error(`Le framework "${frameworkName}" n'est pas encore supporté par la CLI.`);
    }

    return service;
  }
}
