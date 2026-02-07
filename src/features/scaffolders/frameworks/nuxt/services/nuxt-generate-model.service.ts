import { writeFile } from "@utils/file-utils";
import { logInfo } from "@utils/logger";

import { nuxtApiResponseTemplate } from "../templates/models/nuxt-api-response.template";

/**
 *
 * @param rootPathProjectFramework
 */
export function nuxtGenerateModelService(rootPathProjectFramework: string) {
  writeFile(
    `${rootPathProjectFramework}/shared/models/api-response.model.ts`,
    nuxtApiResponseTemplate(),
  );
  logInfo(`Génération de l'interface Nuxt pour ApiResponse`);
}
