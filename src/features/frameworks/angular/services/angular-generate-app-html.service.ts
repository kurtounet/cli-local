import { writeFile } from "@utils/file-utils";
import { logInfo } from "@utils/logger";
import { write } from "fs";

import { angularGenerateComponentService } from "./angular-generate-component.service";

/**
 *
 * @param rootApp
 */
export function angularGenerateAppHtmlService(rootApp: string) {
  writeFile(`${rootApp}/app.html`, `<router-outlet />`);
}
