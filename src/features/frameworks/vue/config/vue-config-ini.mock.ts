import { IFramework } from "@/features/commun/framework.interface.js";

export const CONFIG_INIT_NUXT: IFramework = {
  type: "frontend",
  name: "vue",
  version: "",
  port: 3000,
  app: "--api",
  mode: "install",
  cliCmd: "npm",
  gitBranch: ["main", "dev", "release", "hotfix"],
  gitBranchCheckout: "dev",
  initialCommit: "Install nuxt",
  // installOptions: INSTALL_OPTIONS_NUXT_MOCK(),
  // architecture: ARCHITECTURE_NUXT_MOCK(),
  // dependencies: DEPENDENCIES_NUXT_MOCK(),
  // environments: ENVIRONMENTS_NUXT_MOCK(),
  // scripts: SCRIPTS_NUXT_MOCK(),
};
