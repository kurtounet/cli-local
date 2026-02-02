import { App } from "./core/App.js";

import { AppContextBuilder } from "./context/context.js";
import { CliCommand } from "./commands/app.command.js";
import { TreeCommand } from "./commands/tree.command.js";
import { MakeCommand } from "./commands/make.command.js";
import { GenerateCommand } from "./commands/generate.command.js";
import { HandlerErrorService } from "./services/handler-error.service.js";
import { ProjectCommand } from "./features/project/commands/project.command.js";
import { FrameworkCommand } from "./features/frameworks/commands/framework.command.js";

/**
 * Point d'entrée principal de la CLI
 *
 * Cette fonction bootstrap orchestre le démarrage complet de l'application :
 * 1. Construction du contexte avec tous les services
 * 2. Initialisation de l'application
 * 3. Enregistrement des commandes disponibles
 * 4. Lancement de l'application
 */
async function bootstrap(): Promise<void> {
  try {
    // ============================================================================
    // ÉTAPE 1 : Construction du contexte de l'application
    // ============================================================================
    // Le contexte contient tous les services (Logger, FileSystem, Generator, etc.)
    // ainsi que la configuration de l'application
    const builder = new AppContextBuilder();
    const cli = await builder.buildContext();
    cli.services.get<HandlerErrorService>("HandlerErrorService").setupGlobalHandlers();

    // 1) init services
    await cli.services.initializeAll();

    // 2) setup handlers après init
    cli.services.get<HandlerErrorService>("HandlerErrorService").setupGlobalHandlers();

    // ============================================================================
    // ÉTAPE 2 : Initialisation de l'application
    // ============================================================================
    // L'application reçoit le contexte complet et configure Commander.js
    const app = new App(cli);

    // ============================================================================
    // ÉTAPE 3 : Enregistrement des commandes disponibles
    // ============================================================================
    /**
     * Chaque commande est enregistrée auprès de l'application
     * Les commandes seront automatiquement disponibles via la CLI
     *
     * Exemples d'utilisation :
     * - mclp make service User
     * - mclp generate component Button
     * - mclp tree
     * - mclp init
     * - mclp ia "génère un service utilisateur"
     */
    app.registerCommand(CliCommand);
    app.registerCommand(TreeCommand);
    app.registerCommand(MakeCommand);
    app.registerCommand(ProjectCommand);
    app.registerCommand(GenerateCommand);
    app.registerCommand(FrameworkCommand);
    // app.registerCommand(IaCommand);

    // TODO: Automatiser l'enregistrement en scannant le dossier commands
    // Cela permettrait d'ajouter de nouvelles commandes sans modifier ce fichier

    // ============================================================================
    // ÉTAPE 4 : Lancement de l'application
    // ============================================================================
    // Parse les arguments de la ligne de commande et exécute la commande appropriée
    await app.run();
  } catch (error) {
    /**
     * Gestion d'erreur de dernier recours
     * Cette gestion s'active uniquement si le HandlerErrorService n'est pas encore prêt
     * ou si une erreur se produit avant son initialisation
     */
    console.error("❌ Erreur fatale lors du démarrage de la CLI :");
    console.error(error);
    process.exit(1);
  }
}

// ============================================================================
// Lancement du bootstrap
// ============================================================================
// Note : Utilisation de top-level await (nécessite Node.js >= 14.8 avec ESM)
await bootstrap();
