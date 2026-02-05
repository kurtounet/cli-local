import { buildAndsaveFile } from "@utils/file-utils";
import fs from "fs";
import path from "path";

import { nestjsAuthPermissionsDecoratorTemplate } from "../templates/authentification/decorators/nestjs-permissions-decorator-template";
import { nestjsAuthRolesDecoratorTemplate } from "../templates/authentification/decorators/nestjs-roles-decorator-template";
import { nestjsloginDtoTemplate } from "../templates/authentification/dto/nestjs-login-dto";
import { nestjsJwtAuthGuardTemplate } from "../templates/authentification/guards/nestjs-jwt-auth-guard-template";
import { nestjsPermissionsGuardTemplate } from "../templates/authentification/guards/nestjs-permissions-guard-template";
import { nestjsRolesGuardTemplate } from "../templates/authentification/guards/nestjs-roles-guard-template";
import { nestjsJwtPayloadInterfaceTemplate } from "../templates/authentification/interfaces/nestjs-jwt-payload-interface-template";
import { nestjsAuthControllerTemplate } from "../templates/authentification/nestjs-auth-controller-mock";
import { nestjsAuthModuleTemplate } from "../templates/authentification/nestjs-auth-module-template";
import { nestjsAuthServiceTemplate } from "../templates/authentification/nestjs-auth-service-template";
import { nestjsJwtStrategyTemplate } from "../templates/authentification/strategies/nestjs-jwt-strategy-template";

/**
 *
 * @param projectPath
 */
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
/**
 *
 * @param projectPath
 */
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
/**
 *
 * @param projectPath
 */
export function createAuthDtosNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth", "dto");

  buildAndsaveFile(rootPath + `/login.dto.ts`, nestjsloginDtoTemplate());
}
/**
 *
 * @param projectPath
 */
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
/**
 *
 * @param projectPath
 */
export function createAuthInterfacesNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth", "interfaces");

  buildAndsaveFile(
    rootPath + `/jwt-payload.interface.ts`,
    nestjsJwtPayloadInterfaceTemplate(),
  );
}
/**
 *
 * @param projectPath
 */
export function createJwtStrategyNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth", "strategies");

  buildAndsaveFile(
    rootPath + `/jwt.strategies.ts`,
    nestjsJwtStrategyTemplate(),
  );
}

/**
 *
 * @param projectPath
 */
export function createAuthServiceNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth");

  buildAndsaveFile(rootPath + `/auth.service.ts`, nestjsAuthServiceTemplate());
}
/**
 *
 * @param projectPath
 */
export function createAuthModuleNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth");

  buildAndsaveFile(rootPath + `/auth.module.ts`, nestjsAuthModuleTemplate());
}
/**
 *
 * @param projectPath
 */
export function createAuthControllerNestjs(projectPath: string) {
  const rootPath = path.join(projectPath, "src", "auth");

  buildAndsaveFile(
    rootPath + `/auth.controller.ts`,
    nestjsAuthControllerTemplate(),
  );
}
