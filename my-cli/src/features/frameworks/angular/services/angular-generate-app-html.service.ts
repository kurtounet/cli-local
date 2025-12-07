import { logInfo } from "@utils/logger";
import { angularGenerateComponentService } from "./angular-generate-component.service";
import { write } from "fs";
import { writeFile } from "@utils/file-utils";

export function angularGenerateAppHtmlService(rootApp: string) {
  writeFile(`${rootApp}/app.html`, `<router-outlet />`);
}
