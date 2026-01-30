import { writeFile } from "@utils/file-utils";
import { nuxtTailwindCssTemplate } from "../templates/css/nuxt-tailwind-css.template";
import { nuxtMainCssTemplate } from "../templates/css/nuxt-main-css.template";

export function nuxtGenerateFilesCssService(
  rootPathProjectFramework: string,
): void {
  writeFile(
    `${rootPathProjectFramework}/app/assets/css/main.css`,
    nuxtMainCssTemplate(),
    `Génération du fichier main CSS`,
    `Génération du fichier main CSS`,
  );
  writeFile(
    `${rootPathProjectFramework}/app/assets/css/tailwind.css`,
    nuxtTailwindCssTemplate(),
    `Génération du fichier tailwind CSS`,
    `Génération du fichier tailwind CSS`,
  );
}
