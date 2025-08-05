import { writeFile } from "@utils/file-utils";
import { pascalCase } from "@utils/stringUtils";
import { getComponentTemplate } from "../templates/get-component-template.template";

export const generateComponent = async (targetPath: string, name: string) => {
  const pascalName = pascalCase(name);
  const content = getComponentTemplate(pascalName);
  await writeFile(`${targetPath}/components/${pascalName}.vue`, content);
};
