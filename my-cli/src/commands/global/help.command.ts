import { Command } from "commander";
import { logInfo  } from "../../utils/logger";
/**
 * Registers the 'help' command with the Commander program.
 * This command displays help information for the CLI or a specific command.
 * @param program The Commander program instance.
 */
export function registerHelpCommand(program: Command) {
  program
    .command("help [command]")
    .description("Affiche l'aide pour la CLI ou pour une commande spécifique.")
    .action((commandName?: string) => {
      if (commandName) {
        const command = program.commands.find(
          (cmd) => cmd.name() === commandName,
        );
        if (command) {
          command.outputHelp();
        } else {
          logInfo(
            `Commande inconnue: ${commandName}. Affichez l\'aide générale avec 'my-cli help'.`,
          );
        }
      } else {
        program.outputHelp();
      }
    });
}
