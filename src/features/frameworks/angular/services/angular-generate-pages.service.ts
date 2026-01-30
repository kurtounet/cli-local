import { logInfo } from "@utils/logger";
import { angularGenerateComponentService } from "./angular-generate-component.service";

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
export function angularGeneratePageService(pagesPath: string, page: string) {
  angularGenerateComponentService(pagesPath, page, ".component");
  logInfo(`${page} Générée avec succès`);
}
