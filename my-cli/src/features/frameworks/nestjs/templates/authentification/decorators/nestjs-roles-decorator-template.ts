import { logInfo } from "@utils/logger";

export function nestjsAuthRolesDecoratorTemplate() {
  logInfo("Auth");
  return `import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
}
`;
}
