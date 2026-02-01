import { IConfigFramework } from "@/features/commun/framework.interface.js";
import { INSTALL_OPTIONS_ANGULAR_MOCK } from "./angular-install-options.mock.js";
import { ARCHITECTURE_ANGULAR_MOCK } from "./angular-architecture.mock.js";
import { DEPENDENCIES_ANGULAR_MOCK } from "./angular-dependencies.mock.js";
import { ENVIRONMENTS_ANGULAR_MOCK } from "./angular-environments.mock.js";
import { SCRIPTS_ANGULAR_MOCK } from "./angular-scripts.mock.js";

export const CONFIG_INIT_ANGULAR: IConfigFramework = {
  type: "frontend",
  name: "angular",
  version: "19.3.*",
  port: 4200,
  app: "--api",
  mode: "install",
  cliCmd: "ng",
  gitBranch: ["main", "dev", "release", "hotfix"],
  gitBranchCheckout: "dev",
  initialCommit: "Install angular",
  excludes: ["node_modules", "dist", ".git", ".github"],
  installOptions: INSTALL_OPTIONS_ANGULAR_MOCK(),
  architecture: ARCHITECTURE_ANGULAR_MOCK(),
  dependencies: DEPENDENCIES_ANGULAR_MOCK(),
  environments: ENVIRONMENTS_ANGULAR_MOCK(),
  scripts: SCRIPTS_ANGULAR_MOCK(),
};
