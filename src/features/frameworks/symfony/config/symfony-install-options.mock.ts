import { IInstallOptions } from "@/features/commun/framework.interface.js";

export function INSTALL_OPTIONS_SYMFONY_MOCK(): IInstallOptions {
  return {
    name: "backend",
    directory: "./nom-du-projet",
    skipGit: false,
    packageManager: "composer",
    language: "php",
    commit: true,
    force: true,
    newProjectRoot: "./",
    skipInstall: false,
    skipTests: false,
    style: "css",
  };
}
