import { writeFile } from "@utils/file-utils";
import { logInfo } from "@utils/logger";

import { iriFromResourceTemplate } from "../../templates/api-platform/services/iri-from-resource.template";

/**
 *
 * @param frameworkPath
 */
export function apiPlatformServicesService(frameworkPath: string) {
  writeFile(`${frameworkPath}/IriFromResource.php`, iriFromResourceTemplate());
  logInfo("Génération de fichiers symfony");
}
