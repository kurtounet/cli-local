import { Command } from "commander";
import { IAppContext } from "../types/context.interface.js";
import { HandlerErrorService } from "../services/handler-error.service.js";

export class App {
  private program = new Command();

  constructor(private cli: IAppContext) {
    this.setupErrorHandling();
    this.program
      .name("scrofolder")
      .version(this.cli.version || "1.0.0")
      .description("CLI de génération et gestion de projet");
  }

  private setupErrorHandling() {
    const errorHandler = this.cli.services.get<HandlerErrorService>(
      "HandlerErrorService",
    );
    if (errorHandler) {
      errorHandler.setupGlobalHandlers();
    }
  }
  /**
   * Enregistre une classe de commande dans Commander.js
   */
  public registerCommand(CommandClass: any) {
    const cmdInstance = new CommandClass(this.cli);

    // On utilise soit la signature spécifique, soit le catch-all [args...]
    const signature = cmdInstance.arguments || "[args...]";

    const cmd = this.program
      // On ajoute "[args...]" pour dire à Commander d'accepter n'importe quel nombre d'arguments
      /**
       * name : Seul le mot generate est autorisé.
       * <arg> : Un argument obligatoire.
       * [arg] : Un argument optionnel.
       * [args...] : Un nombre illimité d'arguments optionnels (ce qu'il nous faut pour g service User Post Auth).
       */
      .command(`${cmdInstance.name} ${signature}`.trim())
      .description(cmdInstance.description);

    // Enregistrement des alias (ex: 'm' pour 'make')
    if (cmdInstance.aliases && Array.isArray(cmdInstance.aliases)) {
      cmd.aliases(cmdInstance.aliases);
    }

    // Enregistrement des options (ex: --force, --dry-run)
    if (cmdInstance.options && Array.isArray(cmdInstance.options)) {
      cmdInstance.options.forEach((opt: any) => {
        cmd.option(opt.flags, opt.description, opt.defaultValue);
      });
    }

    // cmd.action(async (...args) => {
    //   try {
    //     // 1. Extraire les arguments (tout ce qui est string avant l'objet final)
    //     const commandArgs = args.filter((arg) => typeof arg === "string");

    //     // 2. EXTRAIRE LES OPTIONS RÉELLES (le plus important !)
    //     // On appelle la méthode .opts() sur l'instance de la commande
    //     const options = cmd.opts();

    //     // 3. Envoyer les bonnes données à la commande
    //     await cmdInstance.execute(commandArgs, options);
    //   } catch (e) {
    //     this.cli.services.get<HandlerErrorService>("HandlerErrorService").handle(e as Error);
    //   }
    // });
    // cmd.action(async (...args: any[]) => {
    //   try {
    //     /**
    //      * Commander envoie les arguments dans l'ordre de la signature,
    //      * puis l'objet options en dernier.
    //      */
    //     const options = args.pop(); // Le dernier élément est toujours l'objet options

    //     // Si on utilise [args...], le premier élément de 'args' est un tableau
    //     // Sinon, on aplatit pour que execute reçoive toujours un string[]
    //     const commandArgs = Array.isArray(args[0]) ? args[0] : args;

    //     await cmdInstance.execute(commandArgs, options);
    //   } catch (e) {
    //     const errorHandler = this.cli.services.get<HandlerErrorService>("HandlerErrorService");
    //     if (errorHandler) {
    //       errorHandler.handle(e as Error);
    //     } else {
    //       console.error("Erreur critique (HandlerErrorService non trouvé) :", e);
    //     }
    //   }
    // });
    // cmd.action(async () => {
    //   try {
    //     // On récupère les arguments proprement parsés (ex: ['service', ['test']])
    //     // On les aplatit pour que execute reçoive un string[] simple : ['service', 'test']
    //     const rawArgs = cmd.processedArgs;
    //     const flatArgs = rawArgs.flat(Infinity).filter((a: any) => typeof a === "string");

    //     const options = cmd.opts();

    //     await cmdInstance.execute(flatArgs, options);
    //   } catch (e) {
    //     this.cli.services.get<HandlerErrorService>("HandlerErrorService").handle(e as Error);
    //   }
    // });
    cmd.action(async (...args: any[]) => {
      try {
        /**
         * args contient : [arg1, arg2, ..., options, commandInstance]
         * On veut extraire uniquement les arguments positionnels.
         */

        // 1. On récupère les options (toujours l'avant-dernier ou le dernier selon les versions)
        const options = cmd.opts();

        // 2. On filtre 'args' pour ne garder que ce qui n'est pas l'objet Command
        // et on aplatit uniquement d'un niveau pour gérer [args...]
        const cleanArgs = args
          .filter(
            (arg) =>
              (arg !== cmd && typeof arg !== "object") || Array.isArray(arg),
          )
          .flat();

        await cmdInstance.execute(cleanArgs, options);
      } catch (e) {
        this.cli.services
          .get<HandlerErrorService>("HandlerErrorService")
          .handle(e as Error);
      }
    });
  }

  public async run() {
    try {
      // On attend que tous les services (dont GeneratorService) soient prêts
      await this.cli.services.initializeAll();

      // On parse les arguments du processus
      await this.program.parseAsync(process.argv);
    } catch (error) {
      console.error("Échec du démarrage de l'application :", error);
    }
  }
}
