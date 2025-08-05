### **Architecture de la CLI : `[Nom de la CLI]`**

---

### 1. Vue d'ensemble

La CLI sera une application Node.js développée en TypeScript, conçue pour être hautement modulaire, extensible et facile à maintenir. Elle adoptera une architecture basée sur des commandes et des fonctionnalités spécifiques, permettant d'intégrer facilement de nouveaux frameworks ou outils à l'avenir.

---

### 2. Structure des Répertoires

```
./
├── package.json
│   └─ Gère les dépendances et scripts npm pour le projet CLI.
├── tsconfig.json
│   └─ Configure TypeScript avec strict mode, outputDir, paths.
├── README.md
│   └─ Documente l'usage global de la CLI.
├── ARCHITECTURE.md
│   └─ Explique en détail la structure du projet.

├── src/
│   ├── main.ts             # Point d'entrée principal de la CLI
│   │   └─ bootstrap() : Initialise Commander et charge les commandes.
│   │
│   ├── commands/           # Contient la définition et la logique des commandes CLI
│   │   ├── index.ts        # Enregistre toutes les commandes disponibles
│   │   │   └─ registerAllCommands(program) : Enregistre les commandes globales et spécifiques.
│   │   │
│   │   ├── global/         # Commandes génériques applicables à tout projet
│   │   │   ├── init.command.ts
│   │   │   │   ├─ registerInitCommand() : Enregistre la commande 'init'.
│   │   │   │   └─ handleInit() : Gère l'initialisation du projet.
│   │   │   │
│   │   │   └── help.command.ts
│   │   │       ├─ registerHelpCommand() : Enregistre la commande 'help'.
│   │   │       └─ handleHelp() : Affiche l'aide générale ou spécifique.
│   │   │
│   │   └── framework/      # Commandes spécifiques à un framework (ex: generate)
│   │       ├── nestjs/     # Commandes pour le framework NestJS
│   │       │   └── nest.command.ts
│   │       │       ├─ registerNestCommand() : Enregistre la commande 'nest'.
│   │       │       └─ handleNestGenerate() : Gère la génération de modules NestJS.
│   │       │
│   │       ├── angular/    # Commandes pour le framework Angular
│   │       │   └── ng.command.ts
│   │       │       ├─ registerNgCommand() : Enregistre la commande 'ng'.
│   │       │       └─ handleNgGenerate() : Gère la génération de modules/composants Angular.
│   │       │
│   │       ├── symfony/    # Commandes pour le framework Symfony
│   │       │   └── sf.command.ts
│   │       │       ├─ registerSfCommand() : Enregistre la commande 'sf'.
│   │       │       └─ handleSfGenerate() : Gère la génération de bundles/entités Symfony.
│   │       │
│   │       └── nuxt/       # Commandes pour le framework Nuxt.js
│   │           └── nuxt.command.ts
│   │               ├─ registerNuxtCommand() : Enregistre la commande 'nuxt'.
│   │               └─ handleNuxtGenerate() : Gère la génération de pages/composants Nuxt.js.
│   │
│   ├── features/           # Logique métier et services spécifiques aux frameworks
│   │   ├── nestjs/         # Fonctionnalités pour NestJS
│   │   │   ├── config/
│   │   │   │   └── nestConfigGenerator.ts
│   │   │   │       ├─ generateTypeOrmConfig() : Génère la config TypeORM.
│   │   │   │       └─ generateNestMain() : Génère le fichier main.ts.
│   │   │   │
│   │   │   ├── services/
│   │   │   │   ├── generateModule.service.ts : Génère un module NestJS.
│   │   │   │   ├── generateController.service.ts : Génère un contrôleur NestJS.
│   │   │   │   ├── generateService.service.ts : Génère un service NestJS.
│   │   │   │   └── generateEntity.service.ts : Génère une entité NestJS.
│   │   │   │
│   │   │   ├── templates/
│   │   │   │   ├── getModuleTemplate.template.ts : Template pour les modules NestJS.
│   │   │   │   ├── getControllerTemplate.template.ts : Template pour les contrôleurs NestJS.
│   │   │   │   ├── getServiceTemplate.template.ts : Template pour les services NestJS.
│   │   │   │   └── getEntityTemplate.template.ts : Template pour les entités NestJS.
│   │   │   │
│   │   │   ├── interfaces/
│   │   │   │   └── NestModel.ts : Interfaces spécifiques à NestJS.
│   │   │   │
│   │   │   └── mock/
│   │   │       └── sampleOrmConfig.json : Fichiers mock pour les tests NestJS.
│   │   │
│   │   ├── angular/        # Fonctionnalités pour Angular
│   │   │   ├── config/
│   │   │   │   └── angularConfigGenerator.ts : Génère la config Angular.
│   │   │   ├── services/
│   │   │   │   ├── generateComponent.service.ts : Génère un composant Angular.
│   │   │   │   ├── generateModule.service.ts : Génère un module Angular.
│   │   │   │   └── generateService.service.ts : Génère un service Angular.
│   │   │   ├── templates/
│   │   │   │   ├── getComponentTemplate.template.ts : Template pour les composants Angular.
│   │   │   │   ├── getModuleTemplate.template.ts : Template pour les modules Angular.
│   │   │   │   └── getServiceTemplate.template.ts : Template pour les services Angular.
│   │   │   ├── interfaces/
│   │   │   │   └── AngularModel.ts : Interfaces spécifiques à Angular.
│   │   │   └── mock/
│   │   │       └── sampleAngularConfig.json : Fichiers mock pour les tests Angular.
│   │   │
│   │   ├── symfony/        # Fonctionnalités pour Symfony
│   │   │   ├── config/
│   │   │   │   └── symfonyConfigGenerator.ts : Génère la config Symfony.
│   │   │   ├── services/
│   │   │   │   ├── generateBundle.service.ts : Génère un bundle Symfony.
│   │   │   │   ├── generateEntity.service.ts : Génère une entité Symfony.
│   │   │   │   └── generateController.service.ts : Génère un contrôleur Symfony.
│   │   │   ├── templates/
│   │   │   │   ├── getBundleTemplate.template.ts : Template pour les bundles Symfony.
│   │   │   │   ├── getEntityTemplate.template.ts : Template pour les entités Symfony.
│   │   │   │   └── getControllerTemplate.template.ts : Template pour les contrôleurs Symfony.
│   │   │   ├── interfaces/
│   │   │   │   └── SymfonyModel.php : Interfaces spécifiques à Symfony.
│   │   │   └── mock/
│   │   │       └── sampleSymfonyConfig.yaml : Fichiers mock pour les tests Symfony.
│   │   │
│   │   └── nuxt/           # Fonctionnalités pour Nuxt.js
│   │       ├── config/
│   │       │   └── nuxtConfigGenerator.ts : Génère la config Nuxt.js.
│   │       │   ├── services/
│   │       │   │   ├── generatePage.service.ts : Génère une page Nuxt.js.
│   │       │   │   ├── generateComponent.service.ts : Génère un composant Nuxt.js.
│   │       │   │   └── generateLayout.service.ts : Génère un layout Nuxt.js.
│   │       │   ├── templates/
│   │       │   │   ├── getPageComponentTemplate.template.ts : Template pour les pages Nuxt.js.
│   │       │   │   ├── getComponentTemplate.template.ts : Template pour les composants Nuxt.js.
│   │       │   │   └── getLayoutTemplate.template.ts : Template pour les layouts Nuxt.js.
│   │       │   ├── interfaces/
│   │       │   │   └── NuxtModel.ts : Interfaces spécifiques à Nuxt.js.
│   │       │   └── mock/
│   │       │       └── sampleNuxtConfig.json : Fichiers mock pour les tests Nuxt.js.
│   │
│   ├── utils/              # Fonctions utilitaires partagées
│   │   ├── fileUtils.ts
│   │   │   ├─ copyDirectory() : Copie un dossier.
│   │   │   ├─ writeFile() : Écrit un fichier.
│   │   │   └─ deleteDirectory() : Supprime un dossier.
│   │   │
│   │   ├── logger.ts
│   │   │   ├─ info() : Log informatif.
│   │   │   ├─ success() : Log de succès.
│   │   │   └─ error() : Log d'erreur.
│   │   │
│   │   ├── prompts.ts
│   │   │   └─ askQuestion() : Gère les interactions utilisateur via inquirer.
│   │   │
│   │   └── stringUtils.ts
│   │       ├─ capitalize() : Met en majuscule la première lettre.
│   │       ├─ slugify() : Transforme en slug URL.
│   │       └─ camelCase() : Transforme en camelCase.
│   │
│   └── types/              # Définitions de types TypeScript globales
│       └── common.d.ts : Types génériques pour la CLI.
│
├── tests/
│   ├── commands/           # Tests unitaires pour les commandes
│   │   ├── global/
│   │   │   ├── init.command.test.ts
│   │   │   └── help.command.test.ts
│   │   │
│   │   └── framework/
│   │       └── nestjs/
│   │           └── nest.command.test.ts
│   │
│   └── features/           # Tests unitaires pour les fonctionnalités des frameworks
│       └── nestjs/
│           └── services/
│               └── nestServiceGenerator.test.ts
│
│   └── utils/              # Tests unitaires pour les utilitaires
│       ├── fileUtils.test.ts
│       ├── logger.test.ts
│       └── prompts.test.ts
│
├── ressources/             # Fichiers de ressources externes (ex: docker-compose.yml)
│   └── docker-compose.yml : Exemple de docker-compose pour le projet.
│
└── prd_cli.md              # Product Requirements Document
```

---

### 3. Composants Clés et Responsabilités

*   **`src/main.ts` (Point d'entrée) :**
    *   Responsable de l'initialisation de l'application CLI.
    *   Configure le parseur de commandes (Commander.js).
    *   Appelle `registerAllCommands` pour charger toutes les commandes.

*   **`src/commands/` (Modules de Commandes) :**
    *   **`index.ts` :** Centralise l'enregistrement de toutes les commandes auprès de Commander.js.
    *   **`global/` :** Contient les commandes génériques (`init`, `help`) qui ne dépendent pas d'un framework spécifique.
    *   **`framework/` :** Organise les commandes spécifiques à chaque framework (ex: `nest.command.ts` pour NestJS, qui gérera la commande `generate` pour NestJS).
    *   Chaque fichier de commande est responsable de définir sa commande, ses arguments, ses options et sa logique d'action.

*   **`src/features/` (Fonctionnalités par Framework) :**
    *   Ce répertoire contient la logique métier complexe et les services spécifiques à chaque framework.
    *   **`config/` :** Générateurs de fichiers de configuration spécifiques au framework.
    *   **`services/` :** Services pour la génération de code (entités, contrôleurs, services, etc.) propres au framework.
    *   **`templates/` :** Contient les templates de code (souvent avec des placeholders) utilisés par les générateurs.
    *   **`interfaces/` :** Définitions d'interfaces TypeScript spécifiques au framework.
    *   **`mock/` :** Fichiers de données mock pour les tests ou le développement.

*   **`src/utils/` (Utilitaires) :**
    *   **`fileUtils.ts` :** Fonctions génériques pour les opérations sur le système de fichiers (lecture, écriture, copie, suppression).
    *   **`logger.ts` :** Fournit des fonctions pour afficher des messages colorés et formatés dans la console (informations, succès, erreurs, avertissements).
    *   **`prompts.ts` :** Gère les interactions avec l'utilisateur via des questions interactives (utilisant `inquirer.js`).
    *   **`stringUtils.ts` :** Fonctions pour la manipulation de chaînes de caractères (capitalisation, slugification, camelCase).

*   **`src/types/` :**
    *   Contient les définitions de types TypeScript qui sont utilisées globalement à travers la CLI.

---

### 4. Flux d'Exécution d'une Commande

1.  **Démarrage :** L'utilisateur exécute `[nom-cli] <commande> [arguments] [options]`. `src/main.ts` est le point d'entrée.
2.  **Parsing :** Commander.js analyse la commande et ses paramètres.
3.  **Dispatch :** Le contrôle est passé à la fonction d'action associée à la commande dans `src/commands/global/` ou `src/commands/framework/`.
4.  **Logique Métier :** La fonction d'action exécute sa logique, en appelant si nécessaire les services appropriés dans `src/features/` et en utilisant les utilitaires de `src/utils/`.
5.  **Gestion des Erreurs :** Les erreurs sont capturées et affichées de manière conviviale via `logger.ts`.
6.  **Fin :** La CLI se termine avec un code de sortie approprié.

---

### 5. Stratégie de Gestion des Erreurs

*   **Centralisée :** Un gestionnaire d'erreurs global dans `src/main.ts` pour les exceptions non gérées.
*   **Contextuelle :** Chaque module de commande et service gère ses erreurs spécifiques pour fournir des messages précis.
*   **Clarté :** Messages d'erreur concis, informatifs, avec des suggestions de résolution.
*   **Sortie :** Erreurs sur `stderr`, colorées en rouge.

---

### 6. Stratégie de Tests

*   **Tests Unitaires :** Utilisation de Jest pour tester chaque composant (commandes, services, utilitaires) de manière isolée.
    *   Structure des tests miroir de la structure des sources.
    *   Mocks pour isoler les dépendances externes.
*   **Couverture :** Objectif d'au moins 80% de couverture de code sur la logique métier.
*   **Tests d'Intégration :** Envisagés pour les flux complexes impliquant plusieurs composants.

---

### 7. Dépendances Clés

*   **`commander` :** Pour le parsing des arguments de la ligne de commande.
*   **`inquirer` :** Pour les interactions utilisateur interactives.
*   **`chalk` :** Pour la coloration des sorties de la console.
*   **`fs-extra` :** Pour des opérations simplifiées sur le système de fichiers.
*   **`jest` :** Framework de test.
*   **`ts-node` :** Pour l'exécution de TypeScript en développement.
*   **`typescript` :** Le compilateur TypeScript.

---

Cette architecture fournit une base solide et extensible pour le développement de la CLI, en assurant modularité, testabilité et maintenabilité.