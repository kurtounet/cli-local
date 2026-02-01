import {
  IConfigFramework,
  IInstallOptions,
} from "@/features/commun/framework.interface.js";
export function INSTALL_COMMAND_ANGULAR(
  framework: IConfigFramework,
  projectName: string,
  options?: string,
): string {
  return `ng new ${projectName} --style=${framework.installOptions.style}  --ssr=false --ai-config="gemini" ${options || ""}`;
}
export function INSTALL_OPTIONS_ANGULAR_MOCK(): IInstallOptions {
  return {
    name: "frontend",
    directory: "./nom-du-projet",
    skipGit: false,
    packageManager: "npm",
    language: "typeScript",
    commit: true,
    force: true,
    newProjectRoot: "./",
    skipInstall: false,
    skipTests: false,
    style: "css",
  };
}
