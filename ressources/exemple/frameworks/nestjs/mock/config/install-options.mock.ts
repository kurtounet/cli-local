import { IInstallOptions } from '@ frameworks/_global/interface/framework-commun.model';

export function INSTALL_OPTIONS_NESTJS_MOCK(): IInstallOptions {
    return {
        name: 'backend',
        directory: './nom-du-projet',
        skipGit: false,
        packageManager: 'npm',
        language: 'typeScript',
        commit: true,
        force: true,
        newProjectRoot: './',
        skipInstall: false,
        skipTests: false,
        style: 'css',
    };
}
