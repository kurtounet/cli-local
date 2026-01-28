import { Command } from "commander";
import { IAppContext } from "../types/context.interface.js";
import { ICommandClass, ICommand } from "../types/command.interface.js";
import { HandlerErrorService } from "../services/handler-error.service.js";

/**
 * Classe principale de l'application CLI
 * Gère l'enregistrement des commandes et l'exécution du programme
 */
export class App {
  /** Instance de Commander.js pour gérer la CLI */
  private program = new Command();

  /**
   * Constructeur de l'application
   * @param cli - Contexte de l'application contenant tous les services et configurations
   */
  constructor(private cli: IAppContext) {
    this.setupErrorHandling();
    this.program
      .name("mclp")
      .version(this.cli.version || "1.0.0")
      .description("CLI de génération et gestion de projet");
  }

  /**
   * Configure la gestion globale des erreurs via le HandlerErrorService
   * Cette méthode est appelée au démarrage pour intercepter toutes les erreurs non gérées
   */
  private setupErrorHandling(): void {
    const errorHandler = this.cli.services.get<HandlerErrorService>(
      "HandlerErrorService",
    );
    if (errorHandler) {
      errorHandler.setupGlobalHandlers();
    }
  }

  /**
   * Enregistre une commande dans l'application CLI
   *
   * @param CommandClass - Classe de commande à instancier et enregistrer
   *
   * @example
   * app.registerCommand(GenerateCommand);
   * // Permet ensuite d'utiliser : mclp generate service User
   */
  public registerCommand(CommandClass: ICommandClass): void {
    // Instanciation de la commande avec le contexte de l'application
    const cmdInstance: ICommand = new CommandClass(this.cli);

    // Récupération de la signature des arguments (ex: "<type> <name>" ou "[args...]")
    // Par défaut, on accepte un nombre illimité d'arguments optionnels
    const signature: string = cmdInstance.arguments || "[args...]";

    // Création de la commande dans Commander.js
    const cmd = this.program
      .command(`${cmdInstance.name} ${signature}`.trim())
      .description(cmdInstance.description);

    // Enregistrement des alias de la commande (ex: "g" pour "generate")
    if (cmdInstance.aliases && Array.isArray(cmdInstance.aliases)) {
      cmd.aliases(cmdInstance.aliases);
    }

    // Enregistrement des options de la commande (ex: --force, --dry-run)
    if (cmdInstance.options && Array.isArray(cmdInstance.options)) {
      cmdInstance.options.forEach((opt) => {
        cmd.option(opt.flags, opt.description, opt.defaultValue);
      });
    }

    // Configuration de l'action à exécuter lors de l'appel de la commande
    cmd.action(async (...args: unknown[]) => {
      try {
        // Récupération des options passées à la commande
        const options = cmd.opts();

        /**
         * Nettoyage des arguments pour ne garder que les arguments positionnels
         * Commander.js ajoute l'objet Command à la fin du tableau d'arguments
         * On filtre donc pour ne garder que les vraies valeurs
         */
        const cleanArgs = args
          .filter(
            (arg) =>
              (arg !== cmd && typeof arg !== "object") || Array.isArray(arg),
          )
          .flat() as string[];

        // Exécution de la commande avec les arguments nettoyés et les options
        await cmdInstance.execute(cleanArgs, options);
      } catch (error) {
        // En cas d'erreur, on utilise le gestionnaire d'erreurs centralisé
        this.cli.services
          .get<HandlerErrorService>("HandlerErrorService")
          .handle(error as Error);
      }
    });
  }

  /**
   * Lance l'application CLI et parse les arguments de la ligne de commande
   * Point d'entrée principal après l'enregistrement de toutes les commandes
   */
  public async run(): Promise<void> {
    try {
      // Parse les arguments du processus (process.argv)
      await this.program.parseAsync(process.argv);
    } catch (error) {
      // En cas d'erreur fatale, on utilise le gestionnaire d'erreurs
      const errorHandler = this.cli.services.get<HandlerErrorService>(
        "HandlerErrorService",
      );
      if (errorHandler) {
        errorHandler.handle(error as Error);
      } else {
        // Fallback si le gestionnaire d'erreurs n'est pas disponible
        console.error("❌ Échec du démarrage de l'application :", error);
        process.exit(1);
      }
    }
  }
}
