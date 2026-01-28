import { IAppContext } from "@/types/context.interface.js";
import { ICommand, ICommandOption } from "@/types/command.interface.js";

/**
 * Classe de base abstraite pour toutes les commandes de la CLI
 *
 * Cette classe fournit une structure commune et des utilitaires pour toutes les commandes.
 * Elle implémente l'interface ICommand et offre des méthodes helper pour faciliter
 * le développement de nouvelles commandes.
 *
 * @abstract
 * @example
 * export class MyCommand extends BaseCommand {
 *   name = "mycommand";
 *   description = "Ma commande personnalisée";
 *
 *   async execute(args: string[], options: Record<string, unknown>): Promise<void> {
 *     this.logger.info("Exécution de ma commande");
 *     // Votre logique ici
 *   }
 * }
 */
export abstract class BaseCommand implements ICommand {
  /**
   * Nom de la commande (doit être défini dans les classes dérivées)
   * @example "generate", "make", "init"
   */
  abstract name: string;

  /**
   * Description de la commande (doit être définie dans les classes dérivées)
   * @example "Génère des fichiers à partir de templates"
   */
  abstract description: string;

  /**
   * Signature des arguments optionnelle
   * @example "<type> <name>" ou "[args...]"
   */
  arguments?: string;

  /**
   * Alias de la commande optionnels
   * @example ["g"] pour "generate"
   */
  aliases?: string[];

  /**
   * Options de la commande optionnelles
   */
  options?: ICommandOption[];

  /**
   * Constructeur de la classe de base
   * @param cli - Le contexte de l'application contenant tous les services
   */
  constructor(protected cli: IAppContext) {}

  /**
   * Méthode abstraite à implémenter dans les classes dérivées
   * Contient la logique d'exécution de la commande
   *
   * @param args - Arguments positionnels de la commande
   * @param options - Options passées à la commande (flags)
   */
  abstract execute(args: string[], options: Record<string, unknown>): Promise<void>;

  // ============================================================================
  // MÉTHODES HELPER POUR FACILITER LE DÉVELOPPEMENT
  // ============================================================================

  /**
   * Raccourci pour accéder au service de logging
   */
  protected get logger() {
    return this.cli.logger;
  }

  /**
   * Raccourci pour accéder au service de fichiers
   */
  protected get fileSystem() {
    return this.cli.fileSystem;
  }

  /**
   * Raccourci pour accéder au service de génération
   */
  protected get generator() {
    return this.cli.generator;
  }

  /**
   * Raccourci pour accéder au service de templates
   */
  protected get templateService() {
    return this.cli.templateService;
  }

  /**
   * Raccourci pour accéder au service de configuration
   */
  protected get configService() {
    return this.cli.configService;
  }

  /**
   * Valide qu'un nombre minimum d'arguments a été fourni
   * @param args - Tableau d'arguments à valider
   * @param min - Nombre minimum d'arguments requis
   * @param usage - Message d'utilisation à afficher en cas d'erreur
   * @throws Error si le nombre d'arguments est insuffisant
   *
   * @example
   * this.validateArgs(args, 2, "Usage: mclp generate <type> <name>");
   */
  protected validateArgs(args: string[], min: number, usage?: string): void {
    if (args.length < min) {
      const errorMsg = usage
        ? `Arguments insuffisants. ${usage}`
        : `Cette commande nécessite au moins ${min} argument(s), ${args.length} fourni(s).`;

      throw new Error(errorMsg);
    }
  }

  /**
   * Affiche un message de succès formaté
   *
   * @param message - Message à afficher
   *
   * @example
   * this.success("Fichier créé avec succès !");
   */
  protected success(message: string): void {
    this.logger.info(`✅ ${message}`);
  }

  /**
   * Affiche un message d'erreur formaté
   *
   * @param message - Message d'erreur à afficher
   *
   * @example
   * this.error("Impossible de créer le fichier");
   */
  protected error(message: string): void {
    this.logger.error(`❌ ${message}`);
  }

  /**
   * Affiche un message d'avertissement formaté
   *
   * @param message - Message d'avertissement à afficher
   *
   * @example
   * this.warning("Le fichier existe déjà");
   */
  protected warning(message: string): void {
    this.logger.warn(`⚠️  ${message}`);
  }

  /**
   * Affiche un message d'information formaté
   *
   * @param message - Message d'information à afficher
   *
   * @example
   * this.info("Génération en cours...");
   */
  protected info(message: string): void {
    this.logger.info(`ℹ️  ${message}`);
  }

  /**
   * Vérifie si une option booléenne est activée
   *
   * @param options - Objet des options de la commande
   * @param optionName - Nom de l'option à vérifier
   * @returns true si l'option est présente et vraie
   *
   * @example
   * if (this.hasOption(options, 'force')) {
   *   // L'option --force est activée
   * }
   */
  protected hasOption(options: Record<string, unknown>, optionName: string): boolean {
    return options[optionName] === true;
  }

  /**
   * Récupère la valeur d'une option avec une valeur par défaut
   *
   * @param options - Objet des options de la commande
   * @param optionName - Nom de l'option à récupérer
   * @param defaultValue - Valeur par défaut si l'option n'est pas présente
   * @returns La valeur de l'option ou la valeur par défaut
   *
   * @example
   * const output = this.getOption(options, 'output', './dist');
   */
  protected getOption<T>(options: Record<string, unknown>, optionName: string, defaultValue: T): T {
    const value = options[optionName];
    return value !== undefined ? (value as T) : defaultValue;
  }

  /**
   * Affiche l'aide de la commande (peut être surchargée)
   * @example
   * protected showHelp(): void {
   *   console.log("Utilisation: mclp mycommand <arg1> <arg2>");
   *   console.log("Options:");
   *   console.log("  --force    Force l'opération");
   * }
   */
  protected showHelp(): void {
    this.logger.info(`Commande: ${this.name}`);
    this.logger.info(`Description: ${this.description}`);

    if (this.arguments) {
      this.logger.info(`Arguments: ${this.arguments}`);
    }

    if (this.aliases && this.aliases.length > 0) {
      this.logger.info(`Alias: ${this.aliases.join(", ")}`);
    }

    if (this.options && this.options.length > 0) {
      this.logger.info("Options:");
      this.options.forEach((opt) => {
        this.logger.info(`  ${opt.flags.padEnd(20)} ${opt.description}`);
      });
    }
  }
}
