import path from 'path';
import fs from 'fs';
import { buildAndsaveFile } from '@services/files';
import { createAuthModuleNestjsMock } from '../mock/template/authentification/auth-module-nestjs.mock';
import { createAuthServiceNestjsMock } from '../mock/template/authentification/auth-service.nestjs.mock';
import { createAuthControllerNestjsMock } from '../mock/template/authentification/auth-controller.nestjs.mock.';
import { createModuleNestjs } from './module-nestjs.service';
import { jwtAuthGuardNestjsMock } from '../mock/template/authentification/guards/jwt-auth.guard.mock';
import { jwtStrategyNestjsMock } from '../mock/template/authentification/strategies/jwt-strategy.mock';
import { authPermissionsDecoratorNestjsMock } from '../mock/template/authentification/decorators/permissions.decorator';
import { authRolesDecoratorNestjsMock } from '../mock/template/authentification/decorators/roles.decorator';
import { loginDtoNestjsMock } from '../mock/template/authentification/dto/login.dto';
import { rolesGuardNestjsMock } from '../mock/template/authentification/guards/roles.guard.mock';
import { permissionsGuardNestjsMock } from '../mock/template/authentification/guards/permissions.guard.mock';
import { jwtPayloadInterfaceNestjsMock } from '../mock/template/authentification/interfaces/jwt-payload.interface.mock';

export function createAuthNestjs(projectPath: string) {
    const rootAuth = path.join(projectPath, 'src', 'auth');
    const rootDecorators = path.join(rootAuth, 'decorators');
    const rootDtos = path.join(rootAuth, 'dto');
    const rootGuards = path.join(rootAuth, 'guards');
    const rootTnterfaces = path.join(rootAuth, 'interfaces');
    const rootStrategies = path.join(rootAuth, 'strategies');

    createAuthServiceNestjs(projectPath);
    createAuthModuleNestjs(projectPath);
    createAuthControllerNestjs(projectPath);
    createAuthDecoratorsNestjs(projectPath);
    createAuthDtosNestjs(projectPath);
    createAuthGuardsNestjs(projectPath);
    createAuthInterfacesNestjs(projectPath);
    createJwtStrategyNestjs(projectPath);
}
export function createAuthDecoratorsNestjs(projectPath: string) {
    const rootPath = path.join(projectPath, 'src', 'auth', 'decorators');

    buildAndsaveFile(
        rootPath + `/roles.decorator.ts`,
        authRolesDecoratorNestjsMock(),
    );
    buildAndsaveFile(
        rootPath + `/permissions.decorator.ts`,
        authPermissionsDecoratorNestjsMock(),
    );
}
export function createAuthDtosNestjs(projectPath: string) {
    const rootPath = path.join(projectPath, 'src', 'auth', 'dto');

    buildAndsaveFile(rootPath + `/login.dto.ts`, loginDtoNestjsMock());
}
export function createAuthGuardsNestjs(projectPath: string) {
    const rootPath = path.join(projectPath, 'src', 'auth', 'guards');

    buildAndsaveFile(rootPath + `/jwt-auth.guard.ts`, jwtAuthGuardNestjsMock());
    buildAndsaveFile(
        rootPath + `/permissions.guard.ts`,
        permissionsGuardNestjsMock(),
    );
    buildAndsaveFile(rootPath + `/roles.guard.ts`, rolesGuardNestjsMock());
}
export function createAuthInterfacesNestjs(projectPath: string) {
    const rootPath = path.join(projectPath, 'src', 'auth', 'interfaces');

    buildAndsaveFile(
        rootPath + `/jwt-payload.interface.ts`,
        jwtPayloadInterfaceNestjsMock(),
    );
}
export function createJwtStrategyNestjs(projectPath: string) {
    const rootPath = path.join(projectPath, 'src', 'auth', 'strategies');

    buildAndsaveFile(rootPath + `/jwt.strategies.ts`, jwtStrategyNestjsMock());
}

export function createAuthServiceNestjs(projectPath: string) {
    const rootPath = path.join(projectPath, 'src', 'auth');

    buildAndsaveFile(
        rootPath + `/auth.service.ts`,
        createAuthServiceNestjsMock(),
    );
}
export function createAuthModuleNestjs(projectPath: string) {
    const rootPath = path.join(projectPath, 'src', 'auth');

    buildAndsaveFile(
        rootPath + `/auth.module.ts`,
        createAuthModuleNestjsMock(),
    );
}
export function createAuthControllerNestjs(projectPath: string) {
    const rootPath = path.join(projectPath, 'src', 'auth');

    buildAndsaveFile(
        rootPath + `/auth.controller.ts`,
        createAuthControllerNestjsMock(),
    );
}
