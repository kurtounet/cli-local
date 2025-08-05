import { writeFile } from "@utils/file-utils";
import { pascalCase, slugify } from "@utils/stringUtils";
import { angularComponentTemplate } from "../templates/angular-component.template";

/**
 * Generates an Angular component.
 * @param targetPath The target directory for the component.
 * @param name The name of the component.
 */
export const angularGenerateComponent = async (
  targetPath: string,
  name: string,
) => {
  const kebabName = slugify(name);
  const content = angularComponentTemplate(kebabName, pascalCase(name));
  const componentDir = `${targetPath}/${kebabName}`;
  await writeFile(`${componentDir}/${kebabName}.component.ts`, content);
  await writeFile(
    `${componentDir}/${kebabName}.component.html`,
    `<p>${kebabName} works!</p>`,
  );
  await writeFile(
    `${componentDir}/${kebabName}.component.css`,
    `/* ${kebabName}.component.css */`,
  );
};
