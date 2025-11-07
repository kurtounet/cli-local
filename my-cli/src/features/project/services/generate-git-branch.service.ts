import { IFramework } from "@frameworks-models/framework-commun.model";
import { executeCommand } from "@utils/execute-command";
import { logInfo } from "@utils/logger";

export function generateGitBranch(
  frameWork: IFramework,
  frameWorkPath: string,
): string {
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
      `❌ Erreur lors création des branches !`,
    );
  } else {
    return `❌ Erreur lors de la création des branches !`;
  }
  return `✅ Branch git créée avec succès !`;
}
