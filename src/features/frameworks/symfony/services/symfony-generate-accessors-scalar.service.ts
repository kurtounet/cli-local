import { symfonyGetAccessorTemplate } from "../templates/symfony-get-accessor.template";
import { symfonySetAccessorTemplate } from "../templates/symfony-set-accessor.template";

export function symfonyGenerateAccessorsScalarService(
  propName: string,
  type: string,
) {
  return `
    ${symfonyGetAccessorTemplate(propName, type)}

    ${symfonySetAccessorTemplate(propName, type)}
    `;
}
