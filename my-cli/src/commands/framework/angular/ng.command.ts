import { Command } from "commander";
import { logInfo } from "@utils/logger";

import { pascalCase } from "@utils/stringUtils";

export function registerNgCommand(program: Command) {
  program
    .command("ng <type> <name>")
    .description(
      "Gère la génération de composants, modules, services, etc., spécifiques à Angular.",
    )
    .option("-p, --path <path>", "Spécifie le répertoire de destination.")
    .action(async () => {
      
    });
}
