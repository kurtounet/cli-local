import { IFramework } from "../../models/framework-commun.model.js";

/**
 *
 * @param initFramework
 */
export function configInitFramework(initFramework: IFramework): IFramework {
  return {
    type: initFramework.type,
    name: initFramework.name,
    version: initFramework.version,
    port: initFramework.port,
    app: initFramework.app,
    mode: initFramework.mode,
    cliCmd: initFramework.cliCmd,
    gitBranch: initFramework.gitBranch,
    gitBranchCheckout: initFramework.gitBranchCheckout,
    initialCommit: initFramework.initialCommit,
    installOptions: initFramework.installOptions,
    architecture: initFramework.architecture,
    dependencies: initFramework.dependencies,
    environments: initFramework.environments,
    scripts: initFramework.scripts,
    databases: initFramework.databases,
  };
}
