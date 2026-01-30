import { writeFile } from "@utils/file-utils";

import { getPageComponentTemplate } from "../templates/get-page-component-template.template";
import { nuxtPageComponentTemplate } from "../templates/components/nuxt-page.template";
import { title } from "process";
import { pascalCase, slugify } from "@utils/convert";

export const generatePage = async (targetPath: string, name: string) => {
  const kebabName = slugify(name);
  const content = getPageComponentTemplate(pascalCase(name));
  await writeFile(`${targetPath}/pages/${kebabName}.vue`, content);
};

export function nuxtGeneratePagesService(
  rootPathProjectFramework: string,
  title: string,
) {
  writeFile(
    `${rootPathProjectFramework}/app/pages/index.vue`,
    nuxtPageComponentTemplate(title),
    `Création de ${rootPathProjectFramework}/app/pages/index.vue`,
  );
}
export function nuxtGeneratePagesDirectoryService(
  rootPathProjectFramework: string,
  dir: string,
  title: string,
  name: string,
) {
  writeFile(
    `${rootPathProjectFramework}/app/pages/${dir}/${name}.vue`,
    nuxtPageComponentTemplate(title),
    `Création de ${rootPathProjectFramework}/app/pages/${dir}/${name}.vue`,
  );
}
