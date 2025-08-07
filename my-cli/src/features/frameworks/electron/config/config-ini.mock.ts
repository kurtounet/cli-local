import { SCRIPTS_ELECTRON_MOCK } from "./scripts.mock";
import { DEPENDENCIES_ELECTRON_MOCK } from "./dependencies.mock";
import { ENVIRONMENTS_ELECTRON_MOCK } from "./environments.mock";
import { ARCHITECTURE_ELECTRON_MOCK } from "./architecture.mock";
import { INSTALL_OPTIONS_ELECTRON_MOCK } from "./install-options.mock";
import { IFramework } from "@frameworks-models/framework-commun.model";

export const CONFIG_INIT_ELECTRON: IFramework = {
  type: "backend",
  name: "electron",
  version: "6.4.*",
  port: 0,
  app: "--api",
  cliCmd: "electron",
  gitBranch: ["main", "dev", "release", "hotfix"],
  gitBranchCheckout: "dev",
  initialCommit: "Install ELECTRON",
  installOptions: INSTALL_OPTIONS_ELECTRON_MOCK(),
  architecture: ARCHITECTURE_ELECTRON_MOCK(),
  dependencies: DEPENDENCIES_ELECTRON_MOCK(),
  environments: ENVIRONMENTS_ELECTRON_MOCK(),
  script: SCRIPTS_ELECTRON_MOCK(),
};
