import { EMOJI } from "@constants/messages";
import { executeCommand } from "@utils/execute-command";
import { Command } from "commander";

export function registerCreateFrameworkCommand(program: Command) {
  program
    .command("framework")
    .argument("[arg]", "Argument de la commande")
    .description('Description de la commande "code"')
    .option("-o, --option", "Option de la commande")
    .action((arg: string) => {
      executeCommand(
        `code I:/cli/cli-local`,
        { stdio: "inherit" },
        `Ouverture de Visual Studio Code`,
        `✅ Visual Studio Code ouvert !`,
        `${EMOJI.error} Erreur lors de l'ouverture de Visual Studio Code !`,
      );
    });
}
