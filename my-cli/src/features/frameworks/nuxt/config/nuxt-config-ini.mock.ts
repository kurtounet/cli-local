import { SCRIPTS_NUXT_MOCK } from "./nuxt-scripts.mock"; 
import { ARCHITECTURE_NUXT_MOCK } from "./nuxt-architecture.mock"; 
import { IFramework } from "@frameworks-models/framework-commun.model";
import { INSTALL_OPTIONS_NUXT_MOCK } from "./nuxt-install-options.mock";
import { ENVIRONMENTS_NUXT_MOCK } from "./nuxt-environments.mock";
import { DEPENDENCIES_NUXT_MOCK } from "./nuxt-dependencies.mock";

export const CONFIG_INIT_NUXT: IFramework = {
  type: "meta",
  name: "nuxt",
  version: "",
  port: 3000,
  app: "--api",
  cliCmd: "npm",
  gitBranch: ["main", "dev", "release", "hotfix"],
  gitBranchCheckout: "dev",
  initialCommit: "Install nuxt",
  installOptions: INSTALL_OPTIONS_NUXT_MOCK(),
  architecture: ARCHITECTURE_NUXT_MOCK(),
  dependencies: DEPENDENCIES_NUXT_MOCK(),
  environments: ENVIRONMENTS_NUXT_MOCK(),
  script: SCRIPTS_NUXT_MOCK(),
};
