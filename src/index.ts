import { App } from "./core/App.js";
import { AppContextBuilder } from "./context/context.js";
import { InitCommand } from "./commands/InitCommand.js";
import { MakeCommand } from "./commands/make.command.js";
import { GenerateCommand } from "./commands/GenerateCommand.js";
import { TreeCommand } from "./commands/tree.command.js";
import { IaCommand } from "./commands/ia.command.js";

/**
 * Point d'entrée principal de la CLI
 */
async function bootstrap() {
  try {
    // 1. On construit le contexte (Services, Config, Logger, etc.)
    const builder = new AppContextBuilder();
    const cli = builder.buildContext();

    // 2. On initialise l'application avec ce contexte
    const app = new App(cli);

    // 3. On enregistre les commandes disponibles
    // TODO : Tu peux automatiser ça plus tard en scannant le dossier commands
    app.registerCommand(MakeCommand);
    app.registerCommand(TreeCommand);
    app.registerCommand(InitCommand);
    app.registerCommand(IaCommand);
    app.registerCommand(GenerateCommand);

    // 4. On lance la machine
    await app.run();
  } catch (error) {
    // Sécurité ultime si le HandlerErrorService n'est pas encore prêt
    console.error("❌ Erreur fatale lors du démarrage de la CLI :");
    console.error(error);
    process.exit(1);
  }
}

// Lancement du bootstrap
bootstrap();
