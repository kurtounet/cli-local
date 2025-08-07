import { Command } from "commander";

import { logSuccess, logError, logInfo } from "../../utils/logger";
import { getEntities } from "@parsersMdj/services/get-entities.service";
import * as fs from "fs";

/**
 * Registers the 'mdj' command with the Commander program.
 * This command parses a StarUML .mdj file and converts it to a detailed JSON schema.
 * @param program The Commander program instance.
 */
export function registerMdjCommand(program: Command) {
  program
    .command("mdj <filePath>")
    .description(
      "Parse a StarUML .mdj file and convert it to a detailed JSON schema.",
    )
    .action(async (filePath: string) => {
      logInfo(`Parsing MDJ file: ${filePath}`);
      try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const detailedSchema = getEntities(fileContent);
        const outputFilePath = filePath.replace(".mdj", ".json");
        fs.writeFileSync(
          outputFilePath,
          JSON.stringify(detailedSchema, null, 2),
        );
        logSuccess(
          `MDJ file parsed and transformed successfully! Output saved to ${outputFilePath}`,
        );
      } catch (err: unknown) {
        logError(
          `Failed to parse or transform MDJ file: ${(err as Error).message}`,
        );
      }
    });
}
