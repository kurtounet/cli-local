import { writeFile } from "@utils/file-utils";
import { apiPlatformReadDocJsonldService } from "./api-plaform-read-doc-jsonld.service";

/**
 * Service pour lire et normaliser le fichier documentation-api.json
 */
export function apiPlatformSaveDocJsonldService(
  pathfile: string,
  doc: unknown,
): boolean {
  writeFile(pathfile, JSON.stringify(doc, null, 2));
  const file = apiPlatformReadDocJsonldService(pathfile);
  if (file === null) {
    return false;
  }
  return true;
}
