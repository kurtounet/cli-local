// Template pour un service Angular
import { IEntityJson } from "@interfaces/entity-json.model";

/**
 * Generates an Angular service template.
 * @param entity The entity JSON object.
 * @returns The Angular service template string.
 */
export function angularServiceTemplate(entity: IEntityJson) {
  return `import { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class ${entity.namePascalCase}Service {}\n`;
}
