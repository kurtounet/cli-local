import path from "path";
import fs from "fs";
import { buildAndsaveFile } from "@utils/file-utils";
import { nestjsAccountModuleTemplate } from "../templates/account/nestjs-account-module-template";
import { nestjsAccountServiceTemplate } from "../templates/account/nestjs-account-service-template";
import { nestjsAccountControllerTemplate } from "../templates/account/nestjs-account-controller-template";
import { nestjsAccountEntityTemplate } from "../templates/account/nestjs-account-entity-template";
import { nestjsCreateAccountDtoTemplate } from "../templates/account/dto/nestjs-create-account-dto-template";
import { nestjsAccountInterfaceTemplate } from "../templates/account/interfaces/nestjs-account-interface-template";

export function nestjsCreateAccountModule(projectPath: string) {
  const rootAccount = path.join(projectPath, "src", "modules", "account");
  const rootaccountDtos = path.join(rootAccount, "dto");
  const rootaccountEntity = path.join(rootAccount, "entity");
  const rootaccountInterface = path.join(rootAccount, "interface");

  buildAndsaveFile(
    rootAccount + `/account.module.ts`,
    nestjsAccountModuleTemplate(),
  );
  buildAndsaveFile(
    rootAccount + `/account.service.ts`,
    nestjsAccountServiceTemplate(),
  );
  buildAndsaveFile(
    rootAccount + `/account.controller.ts`,
    nestjsAccountControllerTemplate(),
  );
  buildAndsaveFile(
    rootaccountEntity + `/account.entity.ts`,
    nestjsAccountEntityTemplate(),
  );
  buildAndsaveFile(
    rootaccountInterface + `/account.interface.ts`,
    nestjsAccountInterfaceTemplate(),
  );
  buildAndsaveFile(
    rootaccountDtos + `/create-account.dto.ts`,
    nestjsCreateAccountDtoTemplate(),
  );
}
