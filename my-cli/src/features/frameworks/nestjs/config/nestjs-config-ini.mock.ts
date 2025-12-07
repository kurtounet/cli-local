import { SCRIPTS_NESTJS_MOCK } from "./nestjs-scripts.mock";
import { DEPENDENCIES_NESTJS_MOCK } from "./nestjs-dependencies.mock";
import { ENVIRONMENTS_NESTJS_MOCK } from "./nestjs-environments.mock";
import { ARCHITECTURE_NESTJS_MOCK } from "./nestjs-architecture.mock";
import { INSTALL_OPTIONS_NESTJS_MOCK } from "./nestjs-install-options.mock";
import { IFramework } from "@frameworks-models/framework-commun.model";

export const CONFIG_INIT_NESTJS: IFramework = {
  type: "backend",
  name: "NESTJS",
  version: "11",
  port: 3000,
  app: "--api",
  cliCmd: "nest",
  mode: "install",
  gitBranch: ["main", "dev", "release", "hotfix"],
  gitBranchCheckout: "dev",
  initialCommit: "Install NESTJS",
  installOptions: INSTALL_OPTIONS_NESTJS_MOCK(),
  architecture: ARCHITECTURE_NESTJS_MOCK(),
  dependencies: DEPENDENCIES_NESTJS_MOCK(),
  environments: ENVIRONMENTS_NESTJS_MOCK(),
  scripts: SCRIPTS_NESTJS_MOCK(),
};
