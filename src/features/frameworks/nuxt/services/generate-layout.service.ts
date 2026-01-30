import { writeFile } from "@utils/file-utils";

import { getLayoutTemplate } from "../templates/get-layout-template.template";
import { pascalCase, slugify } from "@utils/convert";

export const generateLayout = async (targetPath: string, name: string) => {
  const kebabName = slugify(name);
  const content = getLayoutTemplate(pascalCase(name));
  await writeFile(`${targetPath}/layouts/${kebabName}.vue`, content);
};
