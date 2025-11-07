import { Command } from "commander";
import { logInfo } from "@utils/logger";
import { pascalCase } from "@utils/string-utils";
// import { nuxtConfigGenerator } from '@features/nuxt/config/nuxtConfigGenerator';
// import { generatePage } from '@features/nuxt/services/generatePage.service';
// import { generateComponent } from '@features/nuxt/services/generateComponent.service';
// import { generateLayout } from '@features/nuxt/services/generateLayout.service';

export function registerNuxtCommand(program: Command) {
  program
    .command("nuxt <type> <name>")
    .description(
      "Gère la génération de pages, composants, layouts, etc., spécifiques à Nuxt.js.",
    )
    .option("-p, --path <path>", "Spécifie le répertoire de destination.")
    .action(async () => {
      
    });
}
