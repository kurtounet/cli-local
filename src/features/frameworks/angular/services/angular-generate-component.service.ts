import { writeFile } from "@utils/file-utils";

import { angularSpecComponentTemplate } from "../templates/component/angular-spec-component.template";
import { angularTsComponentTemplate } from "../templates/component/angular-ts-component.template";
import { angularHtmlComponentTemplate } from "../templates/component/angular-html-component.template";
import { angularCssComponentTemplate } from "../templates/component/angular-css-component.template";
import { camelToKebab, camelToPascal } from "@utils/convert";

/**
 * Generates an Angular component.
 * @param targetPath The target directory for the component.
 * @param name The name of the component.
 */
/*
export function angularGenerateComponentService(
  targetPath: string,
  name: string 
) {
  const kebabName = slugify(name);
  const content = angularComponentTemplate(kebabName, pascalCase(name));
  const componentDir = `${targetPath}/${kebabName}`;
   writeFile(
    `${componentDir}/${kebabName}.component.ts`, 
    content);

   writeFile(
    `${componentDir}/${kebabName}.component.spec.ts`, 
    content);
   
   writeFile(
    `${componentDir}/${kebabName}.component.html`,
    `<p>${kebabName} works!</p>`,
  );
  writeFile(
    `${componentDir}/${kebabName}.component.css`,
    `  ${kebabName}.component.css  `,
  );
};
*/

export function angularGenerateComponentService(
  componentDir: string,
  name: string,
  prefix: string,
) {
  writeFile(
    `${componentDir}/${camelToKebab(name)}/${camelToKebab(name)}${prefix}.css`,
    angularCssComponentTemplate(),
  );
  writeFile(
    `${componentDir}/${camelToKebab(name)}/${camelToKebab(name)}${prefix}.html`,
    angularHtmlComponentTemplate(camelToKebab(name)),
  );
  writeFile(
    `${componentDir}/${camelToKebab(name)}/${camelToKebab(name)}${prefix}.ts`,
    angularTsComponentTemplate(name, prefix),
  );
  writeFile(
    `${componentDir}/${camelToKebab(name)}/${camelToKebab(name)}${prefix}.spec.ts`,
    angularSpecComponentTemplate(camelToPascal(name), prefix),
  );
}
