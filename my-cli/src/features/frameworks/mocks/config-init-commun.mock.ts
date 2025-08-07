import { IFramework } from "../models/framework-commun.model";

export function configInitFramework(initFramework: IFramework): IFramework {
  return {
    type: initFramework.type,
    name: initFramework.name,
    version: initFramework.version,
    port: initFramework.port,
    app: initFramework.app,
    cliCmd: initFramework.cliCmd,
    gitBranch: initFramework.gitBranch,
    gitBranchCheckout: initFramework.gitBranchCheckout,
    initialCommit: initFramework.initialCommit,
    installOptions: initFramework.installOptions,
    architecture: initFramework.architecture,
    dependencies: initFramework.dependencies,
    environments: initFramework.environments,
    script: initFramework.script,
    databases: initFramework.databases,
  };
}
