// Template pour un service Symfony
import { IEntityJson } from "@interfaces/entity-json.model";

export function getSymfonyServiceTemplate(entity: IEntityJson) {
  return `<?php\n\nnamespace App\Service;\n\nclass ${entity.namePascalCase}Service\n{\n    // Logique du service Symfony\n}\n`;
}
