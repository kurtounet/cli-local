import { camelToKebab, camelToPascal } from "@utils/convert";

export function angularTsComponentTemplate(
  name: string = "",
  prefix: string = "",
): string {
  return `
import { Component } from '@angular/core';

@Component({
  selector: 'app-${camelToKebab(name)}',
  templateUrl: './${camelToKebab(name)}${prefix}.html',
  styleUrls: ['./${camelToKebab(name)}${prefix}.css']
})
export class ${camelToPascal(name)}Component {
  // Component logic here
}
`;
}
