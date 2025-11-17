import * as fs from "fs";
import * as path from "path";
import { IFramework } from "../models/framework-commun.model";
import { IDirectory } from "@features/project/models/project.models";
import { logError, logInfo } from "@utils/logger";
import { EMOJI } from "@constants/messages";

export function createFolder(pathFolder: string) {
  if (!fs.existsSync(pathFolder)) {
    logInfo(`📌 Dossier créer : ${pathFolder}`);
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
      logError(`${EMOJI.error} Erreur lors de la création de l'architecture ! : ${error}`);
      
    }
  } else {
    return `✅ Aucune architecture à créer !`;
  }

  return `✅ Architecture créée avec succès !`;
}
