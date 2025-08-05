## Sujet 4 : Génération de code

### 1. Objectif

Une fois que nous avons notre `Schema` simplifié à partir du fichier `.mdj`, l'étape suivante est de l'utiliser pour générer les fichiers de code source pour les frameworks frontend et backend sélectionnés. Ce processus s'appuiera sur un système de templates.

### 2. Le système de templates

Nous utiliserons des fonctions TypeScript qui retournent des chaînes de caractères représentant le code. Ces fonctions contiendront du code standard avec des placeholders qui seront remplacés par les données de notre `Schema` (noms d'entités, attributs, etc.).

*   **Lieu des templates :** Les fonctions de template seront organisées par framework dans `cli/features/framework/<framework-name>/templates/` avec un fichier par fonction (`fonctionName.template.ts`).

### 3. Les services de génération

Chaque framework aura ses propres services de génération. Chaque fonction de service sera dans son propre fichier. Ces services seront responsables de :

1.  Itérer sur les entités du `Schema`.
2.  Appeler les fonctions de template correspondantes.
3.  Écrire le résultat dans les fichiers appropriés.

*   **Lieu des services :** `cli/features/framework/<framework-name>/services/`

### 4. Exemple : Génération d'une entité NestJS

#### 4.1. La fonction template (`getEntityTemplate.template.ts`)

*   **Lieu :** `cli/features/framework/nestjs/templates/getEntityTemplate.template.ts`

```typescript
export function getEntityTemplate(name: string): string {
  return `import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ${name} {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
`;
}
```

#### 4.2. Le service de génération (`generateEntity.service.ts`)

*   **Lieu :** `cli/features/framework/nestjs/services/generateEntity.service.ts`

```typescript
import { writeFile } from '@utils/file-utils';
import { pascalCase } from '@utils/stringUtils';
import { getEntityTemplate } from '../templates/getEntityTemplate.template';

export const generateEntity = async (targetPath: string, name: string) => {
  const content = getEntityTemplate(name);
  await writeFile(`${targetPath}/${pascalCase(name)}.entity.ts`, content);
};
```

### 5. Organisation des templates et des services

Il est crucial de bien organiser les templates et les services pour chaque fonctionnalité et chaque framework. Chaque fonction de template et de service est désormais dans son propre fichier.

**Exemple pour NestJS :**

*   `cli/features/framework/nestjs/`
    *   `services/`
        *   `generateEntities.service.ts`
        *   `generateDtos.service.ts`
        *   `generateControllers.service.ts`
        *   `generateServices.service.ts`
        *   `generateModules.service.ts`
    *   `templates/`
        *   `getEntityTemplate.template.ts`
        *   `getCreateDtoTemplate.template.ts`
        *   `getUpdateDtoTemplate.template.ts`
        *   `getControllerTemplate.template.ts`
        *   `getServiceTemplate.template.ts`
        *   `getModuleTemplate.template.ts`

### 6. Utilisation des utilitaires

Les services de génération feront un usage intensif des utilitaires :

*   `utils/fileUtils.ts`: Pour lire les templates et écrire les fichiers générés.
*   `utils/stringUtils.ts`: Pour manipuler les noms (ex: `capitalize`, `camelCase`, `pluralize`) lors de la génération de code.

Avec ces quatre rapports, une IA dispose maintenant d'une feuille de route complète et détaillée pour générer le code de la CLI et l'architecture du projet.