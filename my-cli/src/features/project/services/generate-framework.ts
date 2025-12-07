import { IFramework } from "@frameworks-models/framework-commun.model";

import { executeCommand } from "@utils/execute-command";
import { logError, logInfo, logStep, logSuccess } from "@utils/logger";
import * as fs from "fs-extra";
import { EMOJI, messageInstallationFramework } from "@constants/messages";
import { getCommandFramework } from "@features/frameworks/commun/services/get-command";

export function installFramework(
  frameWork: IFramework,
  frameWorkPath: string,
  projetName: string,
) {
  logStep(messageInstallationFramework(frameWork.name));
  if (frameWork?.name) {
    if (!fs.existsSync(`${frameWorkPath}`)) {
      let command = getCommandFramework(frameWork, projetName);

      try {
        if (!command.includes("not-found")) {
          logInfo(`🚀 ${command}`);
          executeCommand(
            command,
            { stdio: "inherit" },
            `🚀 Création du ${frameWork.type}`,
            `✅ ${frameWork.type} créé avec succès !`,
            `${EMOJI.error} Erreur lors de la création du ${frameWork.type} !`,
          );
          if (fs.existsSync(`${frameWorkPath}`)) {
            logSuccess(`✅ Le ${frameWork.type} créé avec succès !`);

            let initialBranch = ``;
            if (!frameWork.name.toLowerCase().includes("angular")) {
              initialBranch = `git checkout master &&`;
              executeCommand(
                `git add . && git commit -m "${frameWork?.initialCommit}"`,
                { cwd: `${frameWorkPath}`, stdio: "inherit" },
                `🚀 Création du commit Initiale`,
                `✅ Commit créé avec succès !`,
                `${EMOJI.error} Erreur lors du commit !`,
              );
            }
          }
        }
      } catch (error) {
        logError(
          `${EMOJI.error} Erreur lors de la création du ${frameWork.type} !`,
        );
        process.exit(1);
      }
    } else {
      logInfo(`✅ le ${frameWork.type} existe déjas !`);
    }
  }
}
