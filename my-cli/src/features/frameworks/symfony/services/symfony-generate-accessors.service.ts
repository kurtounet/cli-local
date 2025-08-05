import { symfonyGetAccessorTemplate } from "../templates/symfony-get-accessor.template";
import { symfonySetAccessorTemplate } from "../templates/symfony-set-accessor.template";

export function symfonyGenerateAccessorsService(
  propName: string,
  type: string,
) {
  return `
    ${symfonyGetAccessorTemplate(propName, type)}

    ${symfonySetAccessorTemplate(propName, type)}
    `;
}
