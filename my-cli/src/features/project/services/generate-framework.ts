import { IFramework } from "@features/frameworks/_global/interface/framework-commun.model";
import { getCommandFramework } from "@features/frameworks/_global/service/get-command";
import { executeCommand } from "@utils/execute-command";
import * as fs from "fs-extra";

export function generateFramework(
  frameWork: IFramework,
  frameWorkPath: string,
  projetName: string,
) {
  if (frameWork && frameWork.name) {
    if (!fs.existsSync(`${frameWorkPath}`)) {
      let command = getCommandFramework(frameWork, projetName);
      try {
        console.log(`🚀 ${command}`);
        executeCommand(
          command,
          { stdio: "inherit" },
          `🚀 Création du ${frameWork.type}`,
          `✅ ${frameWork.type} créé avec succès !`,
          `❌ Erreur lors de la création du ${frameWork.type} !`,
        );
        if (fs.existsSync(`${frameWorkPath}`)) {
          console.log(`✅ Le ${frameWork.type} créé avec succès !`);

          let initialBranch = ``;
          if (!frameWork.name.toLowerCase().includes("angular")) {
            initialBranch = `git checkout master &&`;
            executeCommand(
              `git add . && git commit -m "${frameWork?.initialCommit}"`,
              { cwd: `${frameWorkPath}`, stdio: "inherit" },
              `🚀 Création du commit Initiale`,
              `✅ Commit créé avec succès !`,
              `❌ Erreur lors du commit !`,
            );
          }
        }
      } catch (error) {
        console.error(`❌ Erreur lors de la création du ${frameWork.type} !`);
        process.exit(1);
      }
    } else {
      console.log(`✅ le ${frameWork.type} existe déjas !`);
    }
  }
}
