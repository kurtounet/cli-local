# Architecture des Frameworks

Ce document décrit l'architecture des dossiers et des fichiers pour chaque framework géré par la CLI, en se concentrant sur les fonctions de génération de code.

## 1. `_global`

Ce dossier contient les services et utilitaires génériques qui peuvent être utilisés par plusieurs frameworks.

-   **`service/install-dependencies.service.ts`**: Contient les fonctions pour installer les dépendances (npm, Composer, etc.) pour les frameworks TypeScript et PHP.
-   **`service/create-architecture.service.ts`**: Gère la création de l'architecture de base (dossiers, fichiers communs) pour un nouveau projet de framework.
-   **`service/git.service.ts`**: Fonctions liées à Git, comme la mise à jour du fichier `.gitignore`.
-   **`utils/index.ts`**: Fichier d'exportation pour les utilitaires.
-   **`utils/update-files.ts`**: Fonctions pour mettre à jour des fichiers génériques comme `tsconfig.json` et `package.json`.

## 2. `angular`

Ce dossier est dédié à la gestion des projets Angular.

-   **`service/angular.service.ts`**: Contient les fonctions spécifiques à la génération de code Angular (entités, modules, composants, etc.).

## 3. `electron`

Ce dossier est dédié à la gestion des projets Electron.

-   **`service/electron.service.ts`**: Contient les fonctions spécifiques à la génération de code Electron.

## 4. `nestjs`

Ce dossier est dédié à la gestion des projets NestJS.

-   **`service/nestjs.service.ts`**: Contient les fonctions spécifiques à la génération de code NestJS (modules, contrôleurs, services, entités, DTOs, etc.).

## 5. `nuxt`

Ce dossier est dédié à la gestion des projets Nuxt.

-   **`service/nuxt.service.ts`**: Contient les fonctions spécifiques à la génération de code Nuxt.

## 6. `react`

Ce dossier est dédié à la gestion des projets React.

-   **`service/react.service.ts`**: Contient les fonctions spécifiques à la génération de code React.

## 7. `symfony`

Ce dossier est dédié à la gestion des projets Symfony.

-   **`service/entities.service.ts`**: Fonctions pour la génération des entités Doctrine.
-   **`service/dtos.service.ts`**: Fonctions pour la génération des DTOs.
-   **`service/state-provider.service.ts`**: Fonctions pour la génération des State Providers (API Platform).
-   **`service/state-processor.service.ts`**: Fonctions pour la génération des State Processors (API Platform).
-   **`service/databases.service.ts`**: Fonctions pour la configuration des bases de données.
-   **`service/environments.service.ts`**: Fonctions pour la création des fichiers d'environnement.
-   **`service/fixtures.service.ts`**: Fonctions pour la génération des fixtures.
-   **`service/test.service.ts`**: Fonctions pour la génération des tests.

## 8. `vue`

Ce dossier est dédié à la gestion des projets Vue.js.

-   **`service/vue.service.ts`**: Contient les fonctions spécifiques à la génération de code Vue.js.

---
**Note :** Chaque fichier `service.ts` (ou équivalent) dans les dossiers de framework est responsable de la logique de génération de code spécifique à ce framework, en utilisant les données structurées issues de la conversion du fichier `.mdj` en JSON.
