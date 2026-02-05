import { camelToKebab, camelToPascal } from "@utils/convert";

/**
 *
 * @param name
 * @param prefix
 */
export function angularTsComponentTemplate(name = "", prefix = ""): string {
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
