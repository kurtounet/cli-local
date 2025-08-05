

## Sujet 4 : Génération de code

### 1. Objectif

Une fois que nous avons notre `Schema` simplifié à partir du fichier `.mdj`, l'étape suivante est de l'utiliser pour générer les fichiers de code source pour les frameworks frontend et backend sélectionnés. Ce processus s'appuiera sur un système de templates.

### 2. Le système de templates

Nous utiliserons une bibliothèque de templating comme **EJS (Embedded JavaScript)** pour créer des modèles de fichiers. Ces templates contiendront du code standard avec des placeholders qui seront remplacés par les données de notre `Schema` (noms d'entités, attributs, etc.).

*   **Lieu des templates :** Les templates seront organisés par framework dans `cli/features/framework/<framework-name>/templates/`.

### 3. Les services de génération

Chaque framework aura ses propres services de génération. Ces services seront responsables de :

1.  Itérer sur les entités du `Schema`.
2.  Charger les templates EJS correspondants.
3.  Compiler les templates avec les données de l'entité.
4.  Écrire le résultat dans les fichiers appropriés.

*   **Lieu des services :** `cli/features/framework/<framework-name>/services/`

### 4. Exemple : Génération d'une entité NestJS

#### 4.1. Le template EJS (`entity.ts.ejs`)

*   **Lieu :** `cli/features/framework/nestjs/templates/entity.ts.ejs`

```typescript
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class <%= entity.name %> {
  @PrimaryGeneratedColumn()
  id: number;

<% entity.attributes.forEach(attribute => { -%>
  @Column()
  <%= attribute.name %>: <%= attribute.type %>;
<% }); -%>

<% /* Logique pour les relations à ajouter ici */ -%>
}
```

#### 4.2. Le service de génération (`generate-entities.service.ts`)

*   **Lieu :** `cli/features/framework/nestjs/services/generate-entities.service.ts`

```typescript
import * as ejs from 'ejs';
import * as fs from 'fs-extra';
import * as path from 'path';
import { Schema } from '@parsersMdj/interfaces/schema.model';

export async function generateNestjsEntities(schema: Schema, projectPath: string) {
  const templatePath = path.join(__dirname, '../templates/entity.ts.ejs');
  const template = await fs.readFile(templatePath, 'utf-8');

  for (const entity of schema.entities) {
    const generatedCode = ejs.render(template, { entity });

    const outputPath = path.join(projectPath, `src/modules/${entity.name.toLowerCase()}/${entity.name.toLowerCase()}.entity.ts`);
    await fs.ensureDir(path.dirname(outputPath));
    await fs.writeFile(outputPath, generatedCode);
  }
}
```

### 5. Organisation des templates et des services

Il est crucial de bien organiser les templates et les services pour chaque fonctionnalité et chaque framework.

**Exemple pour NestJS :**

*   `cli/features/framework/nestjs/`
    *   `services/`
        *   `generate-entities.service.ts`
        *   `generate-dtos.service.ts`
        *   `generate-controllers.service.ts`
        *   `generate-services.service.ts`
        *   `generate-modules.service.ts`
    *   `templates/`
        *   `entity.ts.ejs`
        *   `create-dto.ts.ejs`
        *   `update-dto.ts.ejs`
        *   `controller.ts.ejs`
        *   `service.ts.ejs`
        *   `module.ts.ejs`

### 6. Utilisation des utilitaires

Les services de génération feront un usage intensif des utilitaires :

*   `utils/fileUtils.ts`: Pour lire les templates et écrire les fichiers générés.
*   `utils/stringUtils.ts`: Pour manipuler les noms (ex: `capitalize`, `camelCase`, `pluralize`) lors de la génération de code.

Avec ces quatre rapports, une IA dispose maintenant d'une feuille de route complète et détaillée pour générer le code de la CLI et l'architecture du projet.