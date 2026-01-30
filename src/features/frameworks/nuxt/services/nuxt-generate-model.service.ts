import { writeFile } from "@utils/file-utils";
import { nuxtApiResponseTemplate } from "../templates/models/nuxt-api-response.template";
import { logInfo } from "@utils/logger";

export function nuxtGenerateModelService(rootPathProjectFramework: string) {
  writeFile(
    `${rootPathProjectFramework}/shared/models/api-response.model.ts`,
    nuxtApiResponseTemplate(),
  );
  logInfo(`Génération de l'interface Nuxt pour ApiResponse`);
}
