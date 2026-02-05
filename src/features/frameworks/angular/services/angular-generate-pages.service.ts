import { logInfo } from "@utils/logger";

import { angularGenerateComponentService } from "./angular-generate-component.service";

/**
 *
 * @param pagesPath
 * @param pages
 */
export function angularGeneratePagesService(
  pagesPath: string,
  pages: string[],
) {
  if (pages.length === 0) pages = ["home"];
  pages.forEach((page) => {
    angularGenerateComponentService(pagesPath, page, ".component");
    logInfo(`${page} Générée avec succès`);
  });
}
/**
 *
 * @param pagesPath
 * @param page
 */
export function angularGeneratePageService(pagesPath: string, page: string) {
  angularGenerateComponentService(pagesPath, page, ".component");
  logInfo(`${page} Générée avec succès`);
}
