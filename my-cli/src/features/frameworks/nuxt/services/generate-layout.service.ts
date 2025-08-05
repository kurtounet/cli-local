import { writeFile } from "@utils/file-utils";
import { pascalCase, slugify } from "@utils/stringUtils";
import { getLayoutTemplate } from "../templates/get-layout-template.template";

export const generateLayout = async (targetPath: string, name: string) => {
  const kebabName = slugify(name);
  const content = getLayoutTemplate(pascalCase(name));
  await writeFile(`${targetPath}/layouts/${kebabName}.vue`, content);
};
