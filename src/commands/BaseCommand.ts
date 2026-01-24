import { IAppContext } from "../types/context.interface.js";
import { ILoggerService } from "@/types/logger-service.interface.js";
import { ICommand, ICommandOption } from "@/types/command.interface.js";

export abstract class BaseCommand implements ICommand {
  // Propriétés obligatoires pour chaque commande
  public abstract name: string;
  public abstract description: string;
  public arguments = "[type] [names...]";

  // Propriétés optionnelles
  public aliases?: string[];
  public options?: ICommandOption[];

  constructor(protected cli: IAppContext) {}

  /**
   * Accès rapide au logger sans passer par le contexte
   */
  protected get logger(): ILoggerService {
    return this.cli.logger;
  }

  /**
   * Méthode principale à implémenter dans chaque commande
   */
  public abstract execute(
    args: string[],
    options: Record<string, unknown>,
  ): Promise<void>;

  /**
   * Utilitaire pour récupérer un service rapidement
   */
  protected getService<T>(name: string): T {
    return this.cli.services.get<T>(name);
  }
}
