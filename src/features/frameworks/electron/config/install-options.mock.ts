import { IInstallOptions } from "@frameworks-models/framework-commun.model";

export function INSTALL_OPTIONS_ELECTRON_MOCK(): IInstallOptions {
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
