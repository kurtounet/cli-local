import { executeCommand } from "@utils/execute-command";
import { Command } from "commander";

export function registerCreateCommandCommand(program: Command) {
  program
    .command("new:command", "Create a new command")
    .argument("[arg]", "Argument de la commande")
    .description('Description de la commande "code"')
    .option("-o, --option", "Option de la commande")
    .action((arg: string) => {
      executeCommand(
        `code I:/cli/cli-local`,
        { stdio: "inherit" },
        `Ouverture de Visual Studio Code`,
        `✅ Visual Studio Code ouvert !`,
        `❌ Erreur lors de l'ouverture de Visual Studio Code !`,
      );
    });
}
