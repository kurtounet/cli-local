// src/account/interfaces/account.interface.ts
export function nestjsAccountInterfaceTemplate() {
  return `export interface AccountInterface {
  id: number;
  email: string;
  password: string;
  roles: string[];
  permissions?: Record<string, boolean>;
}
`;
}
