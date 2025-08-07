import { SCRIPTS_NITRO_MOCK } from "./nitro-scripts.mock";
import { DEPENDENCIES_NITRO_MOCK } from "./nitro-dependencies.mock";
import { ENVIRONMENTS_NITRO_MOCK } from "./nitro-environments.mock";
import { ARCHITECTURE_NITRO_MOCK } from "./nitro-architecture.mock";
import { INSTALL_OPTIONS_NITRO_MOCK } from "./nitro-install-options.mock";
import { IFramework } from "@frameworks-models/framework-commun.model";

export const CONFIG_INIT_NITRO: IFramework = {
  type: "backend",
  name: "nitro",
  version: "",
  port: 8001,
  app: "--api",
  cliCmd: "npm",
  gitBranch: ["main", "dev", "release", "hotfix"],
  gitBranchCheckout: "dev",
  initialCommit: "Install nitro",
  installOptions: INSTALL_OPTIONS_NITRO_MOCK(),
  architecture: ARCHITECTURE_NITRO_MOCK(),
  dependencies: DEPENDENCIES_NITRO_MOCK(),
  environments: ENVIRONMENTS_NITRO_MOCK(),
  script: SCRIPTS_NITRO_MOCK(),
};
