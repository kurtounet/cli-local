import { IConfigFramework } from "@/features/commun/framework.interface.js";

import { ARCHITECTURE_SYMFONY_MOCK } from "./symfony-architecture.mock.js";
import { DEPENDENCIES_SYMFONY_MOCK } from "./symfony-dependencies.mock.js";
import { ENVIRONMENTS_SYMFONY_MOCK } from "./symfony-environments.mock.js";
import { INSTALL_OPTIONS_SYMFONY_MOCK } from "./symfony-install-options.mock.js";
import { SCRIPTS_SYMFONY_MOCK } from "./symfony-scripts.mock.js";

export const CONFIG_INIT_SYMFONY: IConfigFramework = {
  type: "backend",
  name: "symfony",
  version: "7.4.*",
  host: "localhost",
  port: 8001,
  mode: "install",
  app: "--api",
  excludes: ["var", "vendor", ".git", ".github"],
  gitBranch: ["main", "dev", "release", "hotfix"],
  gitBranchCheckout: "dev",
  cliCmd: "symfony",
  initialCommit: "Install symfony",
  dir: "api",
  installOptions: INSTALL_OPTIONS_SYMFONY_MOCK(),
  architecture: ARCHITECTURE_SYMFONY_MOCK(),
  dependencies: DEPENDENCIES_SYMFONY_MOCK(),
  environments: ENVIRONMENTS_SYMFONY_MOCK(),
  scripts: SCRIPTS_SYMFONY_MOCK(),
};
