export function authDockNestjsMock() {
    return `# Authentification

## Installation

## Configuration

## Usage
// Protéger une route avec authentification JWT
@UseGuards(JwtAuthGuard)
@Get()
findAll() { ... }

// Protéger une route pour un rôle spécifique
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@Get('admin')
adminOnly() { ... }

// Protéger une route avec des permissions spécifiques
@UseGuards(JwtAuthGuard, PermissionsGuard)
@RequirePermissions('read:items')
@Get('items')
getItems() { ... }
`;
}
