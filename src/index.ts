import { CliApp } from "./src/core/CliApp.js";
import { InitCommand } from "./src/core/commands/InitCommand.js";
import { LoggerService } from "./src/core/services/LoggerService.js";

// 1. Initialiser les services
const logger = new LoggerService();

// 2. Initialiser les commandes avec leurs dépendances
const commands = [
  new InitCommand(logger),
  // Ajoutez vos futures commandes ici...
];

// 3. Lancer l'application
const app = new CliApp(commands);
app.run();
