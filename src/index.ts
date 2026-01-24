import { InitCommand } from "./commands/InitCommand.js";
import { CliApp } from "./core/CliApp.js";

import { LoggerService } from "./services/LoggerService.js";

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
