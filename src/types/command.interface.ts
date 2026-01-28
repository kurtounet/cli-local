import { IAppContext } from "./context.interface.js";

/**
 * Interface représentant une option de commande CLI
 */
export interface ICommandOption {
  /** Flags de l'option (ex: "-f, --force") */
  flags: string;
  /** Description de l'option */
  description: string;
  /** Valeur par défaut optionnelle */
  defaultValue?: unknown;
}

/**
 * Interface pour une instance de commande
 * Toutes les commandes doivent implémenter cette interface
 */
export interface ICommand {
  /** Nom de la commande (ex: "generate", "make") */
  name: string;
  /** Description de la commande */
  description: string;
  /** Signature des arguments (ex: "<type> <name>" ou "[args...]") */
  arguments?: string;
  /** Alias de la commande (ex: ["g"] pour "generate") */
  aliases?: string[];
  /** Options disponibles pour la commande */
  options?: ICommandOption[];
  /** Méthode d'exécution de la commande */
  execute(args: string[], options: Record<string, unknown>): Promise<void>;
}

/**
 * Interface pour une classe de commande
 * Utilisée pour l'instanciation dynamique des commandes
 */
export interface ICommandClass {
  /** Constructeur qui prend le contexte de l'application */
  new (context: IAppContext): ICommand;
}
