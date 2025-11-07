import { Command } from "commander";
import { logInfo } from "@utils/logger";
import { pascalCase } from "@utils/string-utils";
export function registerSfCommand(program: Command) {
  program
    .command("sf <type> <name>")
    .description(
      "Gère la génération de bundles, entités, contrôleurs, etc., spécifiques à Symfony.",
    )
    .option("-p, --path <path>", "Spécifie le répertoire de destination.")
    .action(async () => {
      
    });
}
