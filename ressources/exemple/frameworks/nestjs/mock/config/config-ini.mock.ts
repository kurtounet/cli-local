import { SCRIPTS_NESTJS_MOCK } from './scripts.mock';
import { DEPENDENCIES_NESTJS_MOCK } from './dependencies.mock';
import { ENVIRONMENTS_NESTJS_MOCK } from './environments.mock';
import { ARCHITECTURE_NESTJS_MOCK } from './architecture.mock';
import { INSTALL_OPTIONS_NESTJS_MOCK } from './install-options.mock';
import { IFramework } from '@ frameworks/_global/interface/framework-commun.model';
// const BASE_TEMPLATES = path.resolve(__dirname, '../../NESTJS/config/');
export const CONFIG_INIT_NESTJS: IFramework = {
    type: 'backend',
    name: 'NESTJS',
    version: '11',
    port: 3000,
    app: '--api',
    cliCmd: 'nest',
    gitBranch: ['main', 'dev', 'release', 'hotfix'],
    gitBranchCheckout: 'dev',
    initialCommit: 'Install NESTJS',
    installOptions: INSTALL_OPTIONS_NESTJS_MOCK(),
    architecture: ARCHITECTURE_NESTJS_MOCK(),
    dependencies: DEPENDENCIES_NESTJS_MOCK(),
    environments: ENVIRONMENTS_NESTJS_MOCK(),
    script: SCRIPTS_NESTJS_MOCK(),
};
