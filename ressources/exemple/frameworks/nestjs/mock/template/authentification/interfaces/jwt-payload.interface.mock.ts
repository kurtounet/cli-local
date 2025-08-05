export function jwtPayloadInterfaceNestjsMock() {
    return `export interface JwtPayload {
  email: string;
  sub: number;
  roles: string[];
  permissions?: Record<string, boolean>;
}`;
}
