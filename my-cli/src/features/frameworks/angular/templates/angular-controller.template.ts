// Template pour un contrôleur Angular
import { IEntityJson } from "@interfaces/entity-json.model";

/**
 * Generates an Angular controller template.
 * @param entity The entity JSON object.
 * @returns The Angular controller template string.
 */
export function angularControllerTemplate(entity: IEntityJson) {
  return `import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-${entity.nameKebabCase}',\n  templateUrl: './${entity.nameKebabCase}.component.html',\n  styleUrls: ['./${entity.nameKebabCase}.component.css']\n})\nexport class ${entity.namePascalCase}Component {}\n`;
}
