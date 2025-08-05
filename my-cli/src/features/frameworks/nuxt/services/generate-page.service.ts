import { writeFile } from "@utils/file-utils";
import { pascalCase, slugify } from "@utils/stringUtils";
import { getPageComponentTemplate } from "../templates/get-page-component-template.template";

export const generatePage = async (targetPath: string, name: string) => {
  const kebabName = slugify(name);
  const content = getPageComponentTemplate(pascalCase(name));
  await writeFile(`${targetPath}/pages/${kebabName}.vue`, content);
};
