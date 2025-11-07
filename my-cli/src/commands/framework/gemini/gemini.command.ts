import { Command } from "commander";
import { logInfo } from "@utils/logger";

import { pascalCase } from "@utils/stringUtils";
import { executeCommand } from "@utils/execute-command";

export function registerGeminiCommand(program: Command) {
  program
    .command("gemini <prompt>")
    .description(
      "Gère la génération de composants, modules, services, etc., spécifiques à Angular.",
    )
    .action(async () => {

      executeCommand(
        `gemini`,
        { stdio: "inherit" },
        `Ouverture de Visual Studio Code`,
        `✅ Ouverture de Gemini réussie!`,
        `❌ Erreur lors de l'ouverture de Gemini !`,
      );
      
    });
}
