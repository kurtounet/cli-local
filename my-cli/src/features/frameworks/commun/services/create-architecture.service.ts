import * as fs from "fs";
import * as path from "path";

import { logError, logInfo, logStep } from "@utils/logger";
import { EMOJI, messageCreateArchitecture } from "@constants/messages";
import {
  IDirectory,
  IFramework,
} from "@features/frameworks/models/framework-commun.model";

export function createFolder(pathFolder: string) {
  if (!fs.existsSync(pathFolder)) {
    logInfo(`${EMOJI.folder} Dossier créer : ${pathFolder}`);
    fs.mkdirSync(pathFolder);
  }
}
/**
 * Creates the directory structure for a given framework based on its defined architecture.
 * @param framework The framework object containing the architecture definition.
 * @param frameworkPath The base path where the framework's architecture should be created.
 * @returns A success or error message.
 */
export function createArchitecture(
  framework: IFramework,
  frameworkPath: string,
) {
  logStep(messageCreateArchitecture());
  if (framework.architecture.length > 0) {
    try {
      framework.architecture.forEach((item: IDirectory) => {
        let pathFolder = path.join(frameworkPath, item.name);
        createFolder(pathFolder);
        if (item.children.length > 0) {
          item.children.forEach((child: IDirectory) => {
            let pathFolder = path.join(frameworkPath, item.name, child.name);
            createFolder(pathFolder);
          });
        }
      });
    } catch (error) {
      logError(
        `${EMOJI.error} Erreur lors de la création de l'architecture ! : ${error}`,
      );
    }
  } else {
    return `${EMOJI.error}  Aucune architecture à créer !`;
  }

  return `${EMOJI.success}  Architecture créée avec succès !`;
}
