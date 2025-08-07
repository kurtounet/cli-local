import { IInstallOptions } from "@frameworks-models/framework-commun.model";
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
