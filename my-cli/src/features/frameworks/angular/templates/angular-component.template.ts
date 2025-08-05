/**
 * Generates an Angular component template string.
 * @param kebabName The kebab-case name of the component.
 * @param pascalName The PascalCase name of the component.
 * @returns The Angular component template string.
 */
export function angularComponentTemplate(
  kebabName: string,
  pascalName: string,
): string {
  return `import { Component } from '@angular/core';

@Component({
  selector: 'app-${kebabName}',
  templateUrl: './${kebabName}.component.html',
  styleUrls: ['./${kebabName}.component.css']
})
export class ${pascalName}Component {
  // Component logic here
}
`;
}
