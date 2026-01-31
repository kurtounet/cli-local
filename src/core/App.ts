import { Command } from "commander";
import { IAppContext } from "../types/context.interface.js";
import { ICommandClass, ICommand, ICommandOption } from "../types/command.interface.js";
import { HandlerErrorService } from "../services/handler-error.service.js";
import { AnyOptions } from "@/types/cli-options.type.js";

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
    // Configuration globale de l'application
    this.program
      .name("mclp")
      .version(this.cli.version || "1.0.0")
      .description("CLI de génération et gestion de projet");
  }

  /**
   * Configure la gestion globale des erreurs via le HandlerErrorService
   * Cette méthode est appelée au démarrage pour intercepter toutes les erreurs non gérées
   */
  // private setupErrorHandling(): void {
  //   const errorHandler = this.cli.services.get<HandlerErrorService>("HandlerErrorService");
  //   if (errorHandler) {
  //     errorHandler.setupGlobalHandlers();
  //   }
  // }

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
    const signature: string = cmdInstance.arguments ?? "[args...]";

    // Création de la commande dans Commander.js
    const cmd = this.program
      .command(`${cmdInstance.name} ${signature}`.trim())
      .description(cmdInstance.description);

    if (cmdInstance.helpAfterText) {
      cmd.addHelpText("after", "\n" + cmdInstance.helpAfterText);
    }

    // Enregistrement des alias de la commande (ex: "g" pour "generate")
    if (cmdInstance.aliases?.length) {
      cmd.aliases(cmdInstance.aliases);
    }

    // Enregistrement des options de la commande (ex: --force, --dry-run)
    if (cmdInstance.options?.length) {
      cmdInstance.options.forEach((opt) => {
        if (opt.type === "boolean") {
          cmd.option(opt.flags, opt.description, opt.defaultValue ?? false);
        } else {
          cmd.option(opt.flags, opt.description);
        }
      });
    }

    cmd.action(async (...actionArgs: unknown[]) => {
      const errorHandler = this.cli.services.get<HandlerErrorService>("HandlerErrorService");

      try {
        // Commander passe généralement l'instance Command en dernier
        const last = actionArgs[actionArgs.length - 1];
        const positional = last instanceof Command ? actionArgs.slice(0, -1) : actionArgs;

        const commanderCmd = last instanceof Command ? last : cmd;

        const cleanArgs: string[] = positional.flatMap((a: unknown): string[] => {
          if (Array.isArray(a)) return a.map(String);
          if (typeof a === "string" || typeof a === "number" || typeof a === "boolean")
            return [String(a)];
          return []; // drop objets (Command, options internes, etc.)
        });

        // ✅ Si aucun arg positionnel -> afficher l'aide de CETTE commande
        if (cleanArgs.length === 0) {
          commanderCmd.help(); // affiche et exit (Commander)
          return;
        }

        const raw = cmd.opts();
        const rawOptions = this.toAnyOptions(raw); // type-guard runtime (cf. plus bas)
        const options = this.coerceOptions(rawOptions, cmdInstance.options); // (cf. plus bas)

        // IMPORTANT: utilise run() si disponible (BaseCommand)
        if (typeof cmdInstance.run === "function") {
          await cmdInstance.run(cleanArgs, options as AnyOptions);
        } else {
          await cmdInstance.execute(cleanArgs, options as AnyOptions);
        }
      } catch (error) {
        if (errorHandler) errorHandler.handle(error as Error);
        else {
          console.error("❌ Erreur commande :", error);
          process.exitCode = 1;
        }
      }
    });
  }

  /**
   * Lance l'application CLI et parse les arguments de la ligne de commande
   * Point d'entrée principal après l'enregistrement de toutes les commandes
   */
  public async run(): Promise<void> {
    const errorHandler = this.cli.services.get<HandlerErrorService>("HandlerErrorService");
    await this.cli.config.load(process.cwd());
    try {
      // Parse les arguments du processus (process.argv)
      await this.program.parseAsync(process.argv);
    } catch (error) {
      // En cas d'erreur fatale, on utilise le gestionnaire d'erreurs

      if (errorHandler) {
        errorHandler.handle(error as Error, "❌ Échec du démarrage de l'application :");
      } else {
        // Fallback si le gestionnaire d'erreurs n'est pas disponible
        console.error("❌ Échec du démarrage de l'application :", error);
        process.exit(1);
      }
    }
  }

  private isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  }
  private toAnyOptions(value: unknown): AnyOptions {
    return this.isRecord(value) ? value : {};
  }
  public coerceOptions(
    raw: Record<string, unknown>,
    spec?: ICommandOption[],
  ): Record<string, unknown> {
    if (!spec?.length) return raw;

    const out: Record<string, unknown> = { ...raw };

    for (const opt of spec) {
      const long = opt.flags
        .split(/[ ,|]+/)
        .find((f) => f.startsWith("--"))
        ?.replace(/^--/, "")
        ?.replace(/^no-/, "");

      if (!long) continue;

      // Defaults (si non fourni)
      if (out[long] === undefined && "defaultValue" in opt && opt.defaultValue !== undefined) {
        out[long] = opt.defaultValue;
      }

      // Cast number
      if (opt.type === "number") {
        const v = out[long];
        if (typeof v === "string") {
          const n = Number(v);
          if (!Number.isNaN(n)) out[long] = n;
        }
      }
    }

    return out;
  }
}
