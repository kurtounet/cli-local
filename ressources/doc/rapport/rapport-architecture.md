## Sujet 2 : Architecture du projet de la CLI

### 1. Vue d'ensemble

L'architecture du projet de la CLI est conçue pour être modulaire, maintenable et évolutive. Elle sépare clairement les préoccupations : la définition des commandes, la logique métier de génération de code, et les utilitaires partagés.

### 2. Structure des dossiers et fichiers

Voici la structure détaillée du projet, avec les explications pour chaque partie :

```plaintext
project/
├── cli/                                # Racine du code source de la CLI
│   ├── bin/
│   │   └── loaderCommand.ts       # Point d'entrée Node (#!/usr/bin/env node) qui charge la CLI
│   ├── commands/                  # Contient toutes les commandes exposées dans la CLI
│   │   ├── angular/ng.command.ts  # Commande CLI spécifique à Angular (ex: generate component)
│   │   ├── globals/tree.command.ts# Commande pour afficher l'arborescence des fichiers générés
│   │   ├── globals/new-project.command.ts # Commande pour créer un nouveau projet complet
│   │   └── index.ts               # Enregistre toutes les commandes avec CommanderJS
│   └── features/                  # Logique métier et modules génériques de génération
│       ├── framework/             # Spécificités des frameworks (Angular, NestJS, Symfony, etc.)
│       │   ├── angular/           # module Angular  
│       │       ├──config/                # Génération des fichiers de config globaux (env, docker-compose, etc.)
│               ├──services/              # Services globaux pour la transformation, parsing, scaffolding
│               │   ├── generateComponent.service.ts
│               │   ├── generateModule.service.ts
│               │   └── generateService.service.ts
│               ├──templates/             # Templates de code communs à tous les frameworks (CRUD, entité, DTO)
│               │   ├── getComponentTemplate.template.ts
│               │   ├── getModuleTemplate.template.ts
│               │   └── getServiceTemplate.template.ts

│       │   ├── nestjs/            # Surcharge NestJS
│       │       ├── config/
│       │       │   └── nestConfigGenerator.ts
│       │       │       ├─ generateTypeOrmConfig() : Génère la config TypeORM.
│       │       │       └─ generateNestMain() : Génère le fichier main.ts.
│       │       │
│       │       ├── services/
│       │       │   ├── generateModule.service.ts : Génère un module NestJS.
│       │       │   ├── generateController.service.ts : Génère un contrôleur NestJS.
│       │       │   ├── generateService.service.ts : Génère un service NestJS.
│       │       │   └── generateEntity.service.ts : Génère une entité NestJS.
│       │       │
│       │       ├── templates/
│       │       │   ├── getModuleTemplate.template.ts : Template pour les modules NestJS.
│       │       │   ├── getControllerTemplate.template.ts : Template pour les contrôleurs NestJS.
│       │       │   ├── getServiceTemplate.template.ts : Template pour les services NestJS.
│       │       │   └── getEntityTemplate.template.ts : Template pour les entités NestJS.
│       │
│       │   ├── nuxt/              # Spécificités Nuxt.js
│       │       ├── config/
│       │       │   └── nuxtConfigGenerator.ts # Génère le fichier nuxt.config.js
│       │       │
│       │       ├── services/
│       │       │   ├── generateComponent.service.ts : Génère un composant Vue.js pour Nuxt.
│       │       │   ├── generateLayout.service.ts : Génère un layout Nuxt.
│       │       │   └── generatePage.service.ts : Génère une page Nuxt.
│       │       │
│       │       ├── templates/
│       │       │   ├── getComponentTemplate.template.ts : Modèle pour les composants Nuxt.
│       │       │   ├── getLayoutTemplate.template.ts : Modèle pour les layouts Nuxt.
│       │       │   └── getPageComponentTemplate.template.ts : Modèle pour les pages Nuxt.
│       │
│       │   ├── symfony/           # Spécificités Symfony
│       │       ├── config/
│       │       │   └── symfonyConfigGenerator.ts # Génère les fichiers de configuration Symfony (framework.yaml, annotations.yaml, services.yaml)
│       │       │
│       │       ├── services/
│       │       │   ├── generateBundle.service.ts : Génère un bundle Symfony.
│       │       │   ├── generateController.service.ts : Génère un contrôleur Symfony.
│       │       │   └── generateEntity.service.ts : Génère une entité Doctrine pour Symfony.
│       │       │
│       │       ├── templates/
│       │       │   ├── getBundleTemplate.template.ts : Modèle pour les bundles Symfony.
│       │       │   ├── getControllerTemplate.template.ts : Modèle pour les contrôleurs Symfony.
│       │       │   └── getEntityTemplate.template.ts : Modèle pour les entités Doctrine.
│       └── parsersMdj/            # Parser pour les fichiers .mdj StarUML
│           ├── interfaces/
│           │   ├── starUml.model.ts # Interfaces TS pour typer le JSON brut du .mdj StarUML
│           │   └── schema.model.ts  # Interfaces TS pour ton modèle JSON simplifié (entités, props)
│           └── services/
│               └── mdjToJson.ts    # Service qui parse un .mdj et produit un JSON simplifié exploitable
│
├── ressources/                    # Ressources statiques globales (ex: snippets, configs)
│
├── utils/                         # Utilitaires partagés
│   ├── fileUtils.ts               # Fonctions pour manipuler le système de fichiers
│   ├── logger.ts                  # Log stylé avec Chalk / Ora
│   └── stringUtils.ts             # Fonctions pour transformer les noms (capitalize, etc.)
│
├── package.json                   # Dépendances et scripts du projet
├── tsconfig.json                  # Configuration TypeScript pour le projet
└── README.md                      # Documentation de la CLI
```

### 3. Flux de l'application

1.  **Démarrage :** L'utilisateur exécute la CLI. Le point d'entrée est `cli/bin/loaderCommand.ts`.
2.  **Chargement des commandes :** `loaderCommand.ts` importe et exécute `cli/commands/index.ts`.
3.  **Enregistrement des commandes :** `cli/commands/index.ts` importe toutes les commandes (de `globals`, `angular`, etc.) et les enregistre auprès de Commander.js.
4.  **Exécution de la commande :** Commander.js parse les arguments de la ligne de commande et exécute l'action de la commande correspondante (par exemple, l'action de `new-project`).
5.  **Logique métier :** L'action de la commande appelle les services nécessaires depuis `cli/features/` pour effectuer le travail (parsing, génération de code, etc.).
6.  **Génération des fichiers :** Les services utilisent les templates et les utilitaires pour créer les fichiers du projet dans le système de fichiers.

### 4. Exemple de code pour le chargement des commandes

Voici un exemple de ce à quoi pourrait ressembler `cli/commands/index.ts` :

```typescript
import { Command } from 'commander';
import { registerNewProjectCommand } from './globals/new-project.command';
import { registerNgCommand } from './angular/ng.command';
import { registerTreeCommand } from './globals/tree.command';

export function loadCommands() {
  const program = new Command();

  registerNewProjectCommand(program);
  registerNgCommand(program);
  registerTreeCommand(program);

  program.parse(process.argv);
}
```

Et `cli/bin/loaderCommand.ts` serait très simple :

```typescript
#!/usr/bin/env node

import { loadCommands } from '../commands';

loadCommands();
```
