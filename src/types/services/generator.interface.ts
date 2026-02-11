import { IGenerateOptions } from "@/commands/generate.command.js";

import { IBaseService } from "./base-service.interface.js";

/**
 * Interface définissant les capacités du service de génération de code.
 * Ce service est responsable de la création de nouveaux composants, modules,
 * ou autres structures de code basées sur des modèles.
 */
export interface IGeneratorService extends IBaseService {
  serviceName: string;
  init(): Promise<void>;
  /**
   * Crée un nouveau composant ou une nouvelle entité de code.
   * @param type - Le type du composant à générer (ex: 'component', 'service', 'module').
   * @param name - Le nom du composant à générer.
   * @param options - Un objet d'options supplémentaires pour la génération (ex: chemin, propriétés).
   * @returns Une promesse qui se résout une fois le composant généré.
   */
  newComponent(
    type: string,
    name: string,
    options: IGenerateOptions,
  ): Promise<void>;
}
