import { writeFile } from "@utils/file-utils";
import { write } from "fs";
import { symfonyCreateAllCrudEntitiesCommandPhpTemplate } from "../templates/command/symfony-create-all-crud-entities-command.php.template";

export function symfonyGenerateCommandService(
  rootPathProjectFramework: string,
) {
  writeFile(
    `${rootPathProjectFramework}/src/Command/CreateAllCrudEntitiesCommand.php`,
    symfonyCreateAllCrudEntitiesCommandPhpTemplate(),
  );
}
