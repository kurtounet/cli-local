import { EMOJI } from "@constants/messages";
import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { executeCommand } from "@utils/execute-command";
import path from "path";

export function symfonyGenerateCrudEntityService(
  frameworkPath: string,
  entity: IEntityJson,
) {
  // const pathAdmin = path.join(frameworkPath, "src", "Controller", "Admin");
  executeCommand(
    `symfony console make:crud --entity=${entity.namePascalCase} --format=json --no-interaction --force`,
    { cwd: `${frameworkPath}`, stdio: "inherit" },
    `${EMOJI.build} Création du crud de l'entité ${entity.namePascalCase}`,
    `${EMOJI.success} crud de l'entité ${entity.namePascalCase} crée avec succès !`,
    `${EMOJI.error} Erreur lors de la génération du crud de l'entité ${entity.namePascalCase}!`,
  );
}
