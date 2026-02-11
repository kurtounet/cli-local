import { writeFile } from "@utils/file-utils";

import { nuxtAppComponentTemplate } from "../templates/components/nuxt-app.template";

/**
 *
 * @param rootPathProjectFramework
 */
export function nuxtGenerateComponentService(rootPathProjectFramework: string) {
  writeFile(
    `${rootPathProjectFramework}/app/app.vue`,
    nuxtAppComponentTemplate(),
    `Création de ${rootPathProjectFramework}/app.vue`,
  );
}
