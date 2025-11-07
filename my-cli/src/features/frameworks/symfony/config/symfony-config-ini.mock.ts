import { SCRIPTS_SYMFONY_MOCK } from "./symfony-scripts.mock";
import { DEPENDENCIES_SYMFONY_MOCK } from "./symfony-dependencies.mock";
import { ENVIRONMENTS_SYMFONY_MOCK } from "./symfony-environments.mock";
import { ARCHITECTURE_SYMFONY_MOCK } from "./symfony-architecture.mock";
import { INSTALL_OPTIONS_SYMFONY_MOCK } from "./symfony-install-options.mock";
import { IFramework } from "@frameworks-models/framework-commun.model";

export const CONFIG_INIT_SYMFONY: IFramework = {
  type: "backend",
  name: "symfony",
  version: "7.3.*",
  port: 8001,
  app: "--api",
  cliCmd: "symfony",
  gitBranch: ["main", "dev", "release", "hotfix"],
  gitBranchCheckout: "dev",
  initialCommit: "Install symfony",
  installOptions: INSTALL_OPTIONS_SYMFONY_MOCK(),
  architecture: ARCHITECTURE_SYMFONY_MOCK(),
  dependencies: DEPENDENCIES_SYMFONY_MOCK(),
  environments: ENVIRONMENTS_SYMFONY_MOCK(),
  scripts: SCRIPTS_SYMFONY_MOCK(),
};
