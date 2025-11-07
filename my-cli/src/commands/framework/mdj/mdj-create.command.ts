import { Command } from "commander";

 
import { getEntities } from "@parsersMdj/services/get-entities.service";
import * as fs from "fs";
import { writeFile } from "@utils/file-utils";
import { logSuccess } from "@utils/logger";
import { mdjERDDiagramTemplate } from "@features/parsersMdj/templates/mdj-erddiagram.template";

/**
 * Registers the 'mdj' command with the Commander program.
 * This command parses a StarUML .mdj file and converts it to a detailed JSON schema.
 * @param program The Commander program instance.
 */
export function registerMdjNewCommand(program: Command) {
  program
    .command("mdj:new <fileName> <outputDirPath>")
    .description(
      "Parse a StarUML .mdj file and convert it to a detailed JSON schema.",
    )
    .action(async (fileName: string, outputDirPath: string) => {
      // logInfo(`New MDJ file: ${filePath}`);
      try {
        // const fileContent = fs.readFileSync(filePath, "utf-8");
        const content = mdjERDDiagramTemplate();
        const outputFilePath = `${outputDirPath}/${fileName}.mdj`;
        writeFile(
          outputFilePath,
          JSON.stringify(content, null, 2),
          `MDJ file parsed and transformed successfully! Output saved to ${outputFilePath}`,
          
        )
         
        logSuccess(
          `MDJ file parsed and transformed successfully! Output saved to ${outputFilePath}`,
        );
      } catch (err: unknown) {
        console.error(
          `Failed to parse or transform MDJ file: ${(err as Error).message}`,
        );
      }
    });
}
