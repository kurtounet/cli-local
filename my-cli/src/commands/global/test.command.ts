import { executeCommand } from "@utils/execute-command";
import { Command } from "commander";

export function testCommand(program: Command) {
  program
    .command("test")
    .argument("[arg]", "Argument de la commande")
    .description('Description de la commande "test"')
    .option("-o, --option", "Option de la commande")
    .action((arg: string) => {
      // executeCommand(
      //   `test I:/cli/cli-local`,
      //   { stdio: "inherit" },
      //   `Ouverture de Visual Studio test`,
      //   `✅ Visual Studio test ouvert !`,
      //   `❌ Erreur lors de l'ouverture de Visual Studio test !`,
      // );
    });
}
