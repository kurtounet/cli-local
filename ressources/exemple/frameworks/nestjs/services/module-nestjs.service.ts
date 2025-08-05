import * as fs from 'fs';
import * as path from 'path';
import { IEntityJson } from '@interfaces/entityJson.interface';
import { buildAndsaveFile } from '@services/files';

import { entityNestMock } from '../mock/template/entities/entity.mock';
import { createDtoNestjsMock } from '../mock/template/dto/create-dto.mock';
import { entityDtoNestjsMock } from '../mock/template/dto/entity-dto.mock';
import { updateDtoNestjsMock } from '../mock/template/dto/update-dto.mock';
import { repositoryNestMock } from '../mock/template/entities/repository.mock';
import { responseDtoNestjsMock } from '../mock/template/dto/response-dto.mock';

import { entityModuleNestMock } from '../mock/template/module/entity-module-nest.mock';
import { controllerNestjsMock } from '../mock/template/controller/controller-nestjs.mock';
import { serviceCompletNestMock } from '../mock/template/service/complet-service-nest.mock';
import { seedModuleNestjsMock } from '../mock/template/seeds/seed.module.mock';
import { seedNestjsMock } from '../mock/template/seeds/seed-nest.mock';
import { seederEntityNestjsMock } from '../mock/template/seeds/entity-seed-nest.mock';

export function createModuleNestjs(frameworkPath: string, entity: IEntityJson) {
    const folders = [
        'dto',
        'entity',
        'repository',
        'controller',
        'service',
        'fixture',
    ];
    folders.map((folder) => {
        let pathFolder = path.join(
            frameworkPath,
            'src',
            'modules',
            entity.nameKebabCase,
            folder,
        );
        if (!fs.existsSync(pathFolder)) {
            console.log(`📌 Dossier créer : ${pathFolder}`);
            fs.mkdirSync(pathFolder, { recursive: true });
        }
    });

    console.log('Module', entity.nameCamelCase);
    createEntityNestjs(frameworkPath, entity);
    createDtoNestjs(frameworkPath, entity);
    createModuleEntityNestjs(frameworkPath, entity);
    createControllerNestjs(frameworkPath, entity);
    createServiceNestjs(frameworkPath, entity);
    // createFixtureNestjs(frameworkPath, entity);
}
export function createEntityNestjs(projectPath: string, entity: IEntityJson) {
    const rootPath = path.join(
        projectPath,
        'src',
        'modules',
        entity.nameKebabCase,
        'entity',
    );
    const pathRepository = path.join(
        projectPath,
        'src',
        'modules',
        entity.nameKebabCase,
        'repository',
    );

    // let content: string = entityNestMock(entity);
    // console.log(`${content}`);
    buildAndsaveFile(
        rootPath + `/${entity.nameKebabCase}.entity.ts`,
        entityNestMock(entity),
    );

    //  buildAndsaveFile(rootPath + `/${entity.nameKebabCase}.repository.ts`, repositoryNestMock(entity));
}
export function createDtoNestjs(projectPath: string, entity: IEntityJson) {
    const rootPath = path.join(
        projectPath,
        'src',
        'modules',
        entity.nameKebabCase,
        'dto',
    );

    buildAndsaveFile(
        rootPath + `/${entity.nameKebabCase}.dto.ts`,
        entityDtoNestjsMock(entity),
    );

    buildAndsaveFile(
        rootPath + `/create-${entity.nameKebabCase}.dto.ts`,
        createDtoNestjsMock(entity),
    );

    buildAndsaveFile(
        rootPath + `/update-${entity.nameKebabCase}.dto.ts`,
        updateDtoNestjsMock(entity),
    );

    buildAndsaveFile(
        rootPath + `/response-${entity.nameKebabCase}.dto.ts`,
        responseDtoNestjsMock(entity),
    );
}
export function createControllerNestjs(
    projectPath: string,
    entity: IEntityJson,
) {
    const rootPath = path.join(
        projectPath,
        'src',
        'modules',
        entity.nameKebabCase,
        'controller',
    );

    buildAndsaveFile(
        rootPath + `/${entity.nameKebabCase}.controller.ts`,
        controllerNestjsMock(entity),
    );
}

export function createServiceNestjs(projectPath: string, entity: IEntityJson) {
    const rootPath = path.join(
        projectPath,
        'src',
        'modules',
        entity.nameKebabCase,
        'service',
    );

    buildAndsaveFile(
        rootPath + `/${entity.nameKebabCase}.service.ts`,
        serviceCompletNestMock(entity),
    );
}
export function createSeederNestjs(
    projectPath: string,
    entities: IEntityJson[],
) {
    const rootPath = path.join(projectPath, 'src', 'seeds');

    entities.map((entity: IEntityJson) => {
        buildAndsaveFile(
            rootPath + `/${entity.nameKebabCase}.seeder.ts`,
            seederEntityNestjsMock(entity),
        );
    });

    buildAndsaveFile(
        rootPath + `/seed.module.ts`,
        seedModuleNestjsMock(entities),
    );

    buildAndsaveFile(rootPath + `/seed.ts`, seedNestjsMock(entities));
}
export function createModuleEntityNestjs(
    projectPath: string,
    entity: IEntityJson,
) {
    const rootPath = path.join(
        projectPath,
        'src',
        'modules',
        entity.nameKebabCase,
    );

    buildAndsaveFile(
        rootPath + `/${entity.nameKebabCase}.module.ts`,
        entityModuleNestMock(entity),
    );
}
