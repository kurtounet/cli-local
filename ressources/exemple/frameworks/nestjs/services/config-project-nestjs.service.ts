import * as path from 'path';
import * as fs from 'fs';
import { IEntityJson } from '@interfaces/entityJson.interface';
import { databaseSourceNestjsMock } from '../mock/template/database/data-source-nest.mock';
import { buildAndsaveFile } from '@services/files';
import { appModuleMock } from '../mock/template/config/app-module-nestjs.mock';
import { mainMock } from '../mock/template/config/main-nest.mock';
import { IFramework } from '@ frameworks/_global/interface/framework-commun.model';
import { environmentsMock } from '../mock/template/config/environments-nest.mock';

export function createConfigProjectNestjs(projectPath: string) {
    // console.log('Config du projet');
    // databaseConfigNestjs(projectPath);
    // appModuleNestjs(projectPath);
    // mainFileNestjs(projectPath);
}
export function databaseConfigNestjs(
    projectPath: string,
    thisProjectConfig: IFramework,
) {
    const rootPath = path.join(projectPath, 'src', 'config');

    buildAndsaveFile(
        rootPath + `/database.config.ts`,
        databaseSourceNestjsMock(thisProjectConfig),
    );
}
export function appModuleNestjs(
    projectPath: string,
    entities: Array<{
        entityNamePascalCase: string;
        entityNameKebabCase: string;
    }>,
) {
    const rootPath = path.join(projectPath, 'src');

    buildAndsaveFile(rootPath + `/app.module.ts`, appModuleMock(entities));
}
export function mainFileNestjs(projectPath: string) {
    const rootPath = path.join(projectPath, 'src');

    buildAndsaveFile(rootPath + `/main.ts`, mainMock());
}
export function createEnvironmentsNestjs(
    projectPath: string,
    framework: IFramework,
) {
    const rootPath = path.join(projectPath, 'src');
    let content: string = '';
    framework.environments.map((environment) => {
        let envPath = '';
        content = environmentsMock(environment);
        if (environment.mode === 'env') {
            envPath = path.join(rootPath, '.env');
        } else {
            envPath = path.join(rootPath, '.env.' + environment.mode);
        }
        buildAndsaveFile(envPath, content);
    });
}
