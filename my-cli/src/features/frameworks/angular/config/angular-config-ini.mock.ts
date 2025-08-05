import { SCRIPTS_ANGULAR_MOCK } from "./angular-scripts.mock";
import { DEPENDENCIES_ANGULAR_MOCK } from "./angular-dependencies.mock";
import { ENVIRONMENTS_ANGULAR_MOCK } from "./angular-environments.mock";
import { ARCHITECTURE_ANGULAR_MOCK } from "./angular-architecture.mock";
import { INSTALL_OPTIONS_ANGULAR_MOCK } from "./angular-install-options.mock";
import { IFramework } from "@features/frameworks/_global/interface/framework-commun.model";

export const CONFIG_INIT_ANGULAR: IFramework = {
  type: "frontend",
  name: "angular",
  version: "19.3.*",
  port: 4200,
  app: "--api",
  cliCmd: "ng",
  gitBranch: ["main", "dev", "release", "hotfix"],
  gitBranchCheckout: "dev",
  initialCommit: "Install angular",
  installOptions: INSTALL_OPTIONS_ANGULAR_MOCK(),
  architecture: ARCHITECTURE_ANGULAR_MOCK(),
  dependencies: DEPENDENCIES_ANGULAR_MOCK(),
  environments: ENVIRONMENTS_ANGULAR_MOCK(),
  script: SCRIPTS_ANGULAR_MOCK(),
};
