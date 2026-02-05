import { symfonyGetAccessorTemplate } from "../templates/symfony-get-accessor.template";
import { symfonySetAccessorTemplate } from "../templates/symfony-set-accessor.template";

/**
 *
 * @param propName
 * @param type
 */
export function symfonyGenerateAccessorsScalarService(
  propName: string,
  type: string,
) {
  return `
    ${symfonyGetAccessorTemplate(propName, type)}

    ${symfonySetAccessorTemplate(propName, type)}
    `;
}
