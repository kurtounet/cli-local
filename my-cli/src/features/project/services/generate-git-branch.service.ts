import { EMOJI, messageCreateBranch } from "@constants/messages";
import { IFramework } from "@frameworks-models/framework-commun.model";
import { executeCommand } from "@utils/execute-command";
import { logInfo, logStep } from "@utils/logger";

export function generateGitBranch(
  frameWork: IFramework,
  frameWorkPath: string,
): string {
  logStep(messageCreateBranch());
  if (frameWork?.gitBranch) {
    let command = "";
    frameWork.gitBranch.forEach((branchName, index) => {
      if (index === 0) {
        command += `git branch ${branchName}`;
      } else {
        command += ` && git branch ${branchName}`;
      }
    });
    command += ` && git checkout ${frameWork.gitBranchCheckout}`;
    logInfo(`🚀 ${command}`);
    executeCommand(
      command,
      { cwd: `${frameWorkPath}`, stdio: "inherit" },
      `🚀 Création des branches`,
      `✅ Création des branches avec succès !`,
      `${EMOJI.error} Erreur lors création des branches !`,
    );
  } else {
    return `${EMOJI.error} Erreur lors de la création des branches !`;
  }
  return `${EMOJI.success} Branch git créée avec succès !`;
}
