import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { saveFileSync } from "@utils/file-utils";
import { logInfo } from "@utils/logger";
/**
 * Generates an Angular DTO (Data Transfer Object).
 * @param entity The entity JSON object.
 */
export function angularGenerateDto(entity: IEntityJson) {
  // Logique de génération de DTO Angular ici
  logInfo(`Génération du DTO Angular pour: ${entity.namePascalCase}`);
  // Exemple: Écrire le contenu du DTO dans un fichier
  //
  //
  const content = `export class Create${entity.namePascalCase}Dto {\n  //   // ... propriétés basées sur entity.columns\n  // }`;
  saveFileSync(
    `path/to/angular/dtos/create-${entity.nameKebabCase}.dto.ts`,
    content,
  );
}
