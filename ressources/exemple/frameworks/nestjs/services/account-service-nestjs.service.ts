import path from 'path';
import fs from 'fs';
import { buildAndsaveFile } from '@services/files';
import { createAuthControllerNestjsMock } from '../mock/template/authentification/auth-controller.nestjs.mock.';
import { accountControllerMock } from '../mock/template/account/account-controller-nestjs.mock';
import { accountModuleMock } from '../mock/template/account/account-module-nestjs.mock';
import { accountServiceMock } from '../mock/template/account/account-service.mock';
import { accountEntityMock } from '../mock/template/account/account.entity.mock';
import { createAccountDtoMock } from '../mock/template/account/dto/create-account.dto.mock';
import { accountInterfaceMock } from '../mock/template/account/interfaces/account.interface.mock';
import { createModuleNestjs } from './module-nestjs.service';

export function createAccountModuleNestjs(projectPath: string) {
    const rootAccount = path.join(projectPath, 'src', 'modules', 'account');
    const rootaccountDtos = path.join(rootAccount, 'dto');
    const rootaccountEntity = path.join(rootAccount, 'entity');
    const rootaccountInterface = path.join(rootAccount, 'interface');
    const rootaccountInterface = path.join(rootAccount, 'interface');

    buildAndsaveFile(rootAccount + `/account.module.ts`, accountModuleMock());
    buildAndsaveFile(rootAccount + `/account.service.ts`, accountServiceMock());
    buildAndsaveFile(
        rootAccount + `/account.controller.ts`,
        accountControllerMock(),
    );
    buildAndsaveFile(
        rootaccountEntity + `/account.entity.ts`,
        accountEntityMock(),
    );
    buildAndsaveFile(
        rootaccountInterface + `/account.interface.ts`,
        accountInterfaceMock(),
    );
    buildAndsaveFile(
        rootaccountDtos + `/create-account.dto.ts`,
        createAccountDtoMock(),
    );
}
