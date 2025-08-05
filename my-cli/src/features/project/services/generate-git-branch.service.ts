import { IFramework } from "@features/frameworks/_global/interface/framework-commun.model";
import { executeCommand } from "@utils/execute-command";

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
    console.log(`🚀 ${command}`);
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
