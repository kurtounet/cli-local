import { Command } from "commander";

import { getEntities } from "@parsersMdj/services/get-entities.service";
import * as fs from "fs";
import { writeFile } from "@utils/file-utils";
import { logError, logInfo, logSuccess } from "@utils/logger";
import { writeFileSync } from "@utils/file-utils-sync";
import { mdjUpdateHandleColumsService } from "@features/parsersMdj/services/mdj-update-handle-colums.service";

/**
 * Registers the 'mdj' command with the Commander program.
 * This command parses a StarUML .mdj file and converts it to a detailed JSON schema.
 * @param program The Commander program instance.
 */
export function registerMdjUpdateCommand(program: Command) {
  program
    .command("mdj:up <filePath>")
    .description(
      "Parse a StarUML .mdj file and convert it to a detailed JSON schema.",
    )
    .action(async (filePath: string) => {
      logInfo(`Parsing MDJ file: ${filePath}`);
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const updatedFileContent = mdjUpdateHandleColumsService(fileContent);
        const outputFilePath = filePath.replace(".mdj", ".json");
        writeFileSync(
          outputFilePath,
          JSON.stringify(updatedFileContent, null, 2),
        );

        logSuccess(
          `Fichier MDJ mis à jour et transformé avec succès! Output saved to ${outputFilePath}`,
        );
      } catch (err: unknown) {
        logError(
          `Failed to parse or transform MDJ file: ${(err as Error).message}`,
        );
      }
    });
}
