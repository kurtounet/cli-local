import path from "path";
import fs from "fs";
import { buildAndsaveFile } from "@utils/file-utils";
import { nestjsAuthRolesDecoratorTemplate } from "../templates/authentification/decorators/nestjs-roles-decorator-template";
import { nestjsAuthPermissionsDecoratorTemplate } from "../templates/authentification/decorators/nestjs-permissions-decorator-template";
import { nestjsloginDtoTemplate } from "../templates/authentification/dto/nestjs-login-dto";
import { nestjsJwtAuthGuardTemplate } from "../templates/authentification/guards/nestjs-jwt-auth-guard-template";
import { nestjsPermissionsGuardTemplate } from "../templates/authentification/guards/nestjs-permissions-guard-template";
import { nestjsRolesGuardTemplate } from "../templates/authentification/guards/nestjs-roles-guard-template";
import { nestjsJwtPayloadInterfaceTemplate } from "../templates/authentification/interfaces/nestjs-jwt-payload-interface-template";
import { nestjsJwtStrategyTemplate } from "../templates/authentification/strategies/nestjs-jwt-strategy-template";
import { nestjsAuthServiceTemplate } from "../templates/authentification/nestjs-auth-service-template";
import { nestjsAuthModuleTemplate } from "../templates/authentification/nestjs-auth-module-template";
import { nestjsAuthControllerTemplate } from "../templates/authentification/nestjs-auth-controller-mock";

export function createAuthNestjs(projectPath: string) {
  const rootAuth = path.join(projectPath, "src", "auth");
  const rootDecorators = path.join(rootAuth, "decorators");
  const rootDtos = path.join(rootAuth, "dto");
  const rootGuards = path.join(rootAuth, "guards");
  const rootTnterfaces = path.join(rootAuth, "interfaces");
  const rootStrategies = path.join(rootAuth, "strategies");

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
  const rootPath = path.join(projectPath, "src", "auth", "decorators");

  buildAndsaveFile(
    rootPath + `/roles.decorator.ts`,
    nestjsAuthRolesDecoratorTemplate(),
  );
  buildAndsaveFile(
    rootPath + `/permissions.decorator.ts`,
    nestjsAuthPermissionsDecoratorTemplate(),
  );
}
export function createAuthDtosNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth", "dto");

  buildAndsaveFile(rootPath + `/login.dto.ts`, nestjsloginDtoTemplate());
}
export function createAuthGuardsNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth", "guards");

  buildAndsaveFile(
    rootPath + `/jwt-auth.guard.ts`,
    nestjsJwtAuthGuardTemplate(),
  );
  buildAndsaveFile(
    rootPath + `/permissions.guard.ts`,
    nestjsPermissionsGuardTemplate(),
  );
  buildAndsaveFile(rootPath + `/roles.guard.ts`, nestjsRolesGuardTemplate());
}
export function createAuthInterfacesNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth", "interfaces");

  buildAndsaveFile(
    rootPath + `/jwt-payload.interface.ts`,
    nestjsJwtPayloadInterfaceTemplate(),
  );
}
export function createJwtStrategyNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth", "strategies");

  buildAndsaveFile(
    rootPath + `/jwt.strategies.ts`,
    nestjsJwtStrategyTemplate(),
  );
}

export function createAuthServiceNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth");

  buildAndsaveFile(rootPath + `/auth.service.ts`, nestjsAuthServiceTemplate());
}
export function createAuthModuleNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth");

  buildAndsaveFile(rootPath + `/auth.module.ts`, nestjsAuthModuleTemplate());
}
export function createAuthControllerNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth");

  buildAndsaveFile(
    rootPath + `/auth.controller.ts`,
    nestjsAuthControllerTemplate(),
  );
}
