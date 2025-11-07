import { getEntities } from "@parsersMdj/services/get-entities.service";
import * as fs from "fs";
import { Command } from "commander";

export function registerZodCommand(program: Command) {
  program
    .command("zod")
    .argument("[arg]", "Argument de la commande")
    .description('Description de la commande "code"')
    .option("-o, --option", "Option de la commande")
    .action((arg: string) => {
      const filePath = `I:/cli/cli-local/my-cli/src/features/parsersMdj/ressource/shopify.mdj`;
      const fileContent = fs.readFileSync(filePath, "utf-8");

      const {
        entities,
        // dictionaryColumns,
        // dictionaryEntitiesJson,
        // dictionaryEntities-pivot,
        // dictionaryRelationships,
        // dictionaryEntitiesRelationships
      } = getEntities(fileContent);
      // logInfo(entities);
    });
}
