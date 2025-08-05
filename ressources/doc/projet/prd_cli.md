### **Product Requirements Document (PRD) : Création d'une CLI**

*   **Produit :** `[Nom de la CLI, ex: "Project Scaffolder CLI"]`
*   **Auteur :** `[Votre Nom/Équipe]`
*   **Date :** 7 juillet 2025
*   **Version :** 1.0

---

### 1. Vision et Objectif du Produit

**Vision :** Créer un outil en ligne de commande (CLI) pour `[Objectif principal, ex: "automatiser la création de nouveaux projets web en générant une structure de fichiers et les configurations de base"]`.

**Problème à résoudre :** `[Décrire le problème, ex: "La configuration manuelle de chaque nouveau projet est répétitive, chronophage et source d'erreurs. Cette CLI vise à standardiser le processus et à améliorer la productivité des développeurs."]`

**Public Cible :** Développeurs `[Type de développeur, ex: "Node.js", "Frontend", "Fullstack"]`.

---

### 2. Périmètre et Fonctionnalités

#### 2.1. Fonctionnalités Incluses (MVP - Minimum Viable Product)

L'IA doit implémenter les commandes suivantes :

**Commande 1 : `init`**
*   **Description :** Initialise un nouveau projet. Crée un fichier de configuration `[nom-config].json` à la racine du projet de l'utilisateur. Ce fichier contiendra les préférences pour les autres commandes.
*   **Action :** Pose des questions interactives à l'utilisateur pour configurer le projet (ex: "Quel est le nom du projet ?", "Quel framework utiliser (React/Vue/Node/Angular/Symfony/Nuxt) ?", "Voulez-vous inclure un linter ?").
*   **Exemple :** `[nom-cli] init`
*   **Output Attendu :** Un fichier `[nom-config].json` est créé. Un message de succès s'affiche : "Configuration initialisée avec succès !".

**Commande 2 : `nest`**
*   **Description :** Gère la génération de modules, contrôleurs, services, entités, etc., spécifiques à NestJS.
*   **Arguments :**
    *   `type`: Le type de fichier à générer (ex: `module`, `controller`, `service`, `entity`).
    *   `name`: Le nom de l'élément à créer.
*   **Options :**
    *   `--path <chemin>`: Spécifie le répertoire de destination.
*   **Exemple :** `[nom-cli] nest module Users`
*   **Output Attendu :** Crée les fichiers NestJS correspondants. Affiche la liste des fichiers créés.

**Commande 3 : `ng`**
*   **Description :** Gère la génération de composants, modules, services, etc., spécifiques à Angular.
*   **Arguments :**
    *   `type`: Le type de fichier à générer (ex: `component`, `module`, `service`).
    *   `name`: Le nom de l'élément à créer.
*   **Options :**
    *   `--path <chemin>`: Spécifie le répertoire de destination.
*   **Exemple :** `[nom-cli] ng component Header`
*   **Output Attendu :** Crée les fichiers Angular correspondants. Affiche la liste des fichiers créés.

**Commande 4 : `sf`**
*   **Description :** Gère la génération de bundles, entités, contrôleurs, etc., spécifiques à Symfony.
*   **Arguments :**
    *   `type`: Le type de fichier à générer (ex: `bundle`, `entity`, `controller`).
    *   `name`: Le nom de l'élément à créer.
*   **Options :**
    *   `--path <chemin>`: Spécifie le répertoire de destination.
*   **Exemple :** `[nom-cli] sf entity Product`
*   **Output Attendu :** Crée les fichiers Symfony correspondants. Affiche la liste des fichiers créés.

**Commande 5 : `nuxt`**
*   **Description :** Gère la génération de pages, composants, layouts, etc., spécifiques à Nuxt.js.
*   **Arguments :**
    *   `type`: Le type de fichier à générer (ex: `page`, `component`, `layout`).
    *   `name`: Le nom de l'élément à créer.
*   **Options :**
    *   `--path <chemin>`: Spécifie le répertoire de destination.
*   **Exemple :** `[nom-cli] nuxt page about`
*   **Output Attendu :** Crée les fichiers Nuxt.js correspondants. Affiche la liste des fichiers créés.

**Commande 6 : `help`**
*   **Description :** Affiche l'aide pour la CLI ou pour une commande spécifique.
*   **Exemple 1 :** `[nom-cli] --help` (Affiche la liste de toutes les commandes).
*   **Exemple 2 :** `[nom-cli] nest --help` (Affiche l'aide pour la commande `nest`).
*   **Output Attendu :** Une description claire des commandes, arguments et options disponibles.

#### 2.2. Fonctionnalités Exclues (Post-MVP)

*   Gestion de plugins par des tiers.
*   Publication automatique sur npm.
*   Interfaces graphiques.

---

### 3. Spécifications Techniques (Non-Fonctionnelles)

*   **Langage :** **TypeScript** (strict mode activé).
*   **Runtime :** **Node.js** (compatible avec les versions LTS, actuellement v20+).
*   **Gestion des dépendances :** `npm`. Un `package.json` propre doit être généré.
*   **Parsing des commandes :** Utiliser une librairie robuste comme `commander.js` ou `yargs`.
*   **Interactivité :** Utiliser `inquirer.js` pour les prompts interactifs.
*   **Style de sortie :** Utiliser `chalk` pour colorer les sorties (erreurs en rouge, succès en vert, informations en bleu).
*   **Architecture :** Le code doit être hautement modulaire. La logique de chaque commande est séparée dans des fichiers distincts (ex: `src/commands/init.ts`, `src/commands/generate.ts`). De plus, les fonctions de génération de templates et de services sont elles-mêmes isolées dans des fichiers individuels (`fonctionName.template.ts`, `fonctionName.service.ts`) pour une meilleure maintenabilité et réutilisabilité.
*   **Tests :**
    *   Fournir des **tests unitaires** pour chaque commande.
    *   Utiliser le framework de test **Jest`.
    *   Viser une couverture de test d'au moins 80% sur la logique métier.
*   **Gestion des erreurs :**
    *   La CLI ne doit jamais crasher. Utiliser des blocs `try/catch` pour gérer les erreurs (ex: permissions de fichiers, arguments invalides).
    *   Afficher des messages d'erreur clairs et exploitables pour l'utilisateur.
*   **Documentation :**
    *   Générer un fichier `README.md` complet incluant :
        *   Une description du projet.
        *   Des instructions d'installation (`npm install -g .`).
        *   Des exemples d'utilisation détaillés pour chaque commande.

---

### 4. Livrables Attendus

1.  **Le code source complet** du projet CLI, structuré et commenté.
2.  Le fichier **`package.json`** avec toutes les dépendances et les scripts nécessaires (`build`, `start`, `test`).
3.  Le fichier **`tsconfig.json`** configuré pour un projet TypeScript moderne.
4.  Le répertoire **`tests`** contenant tous les fichiers de tests unitaires.
5.  Le fichier **`README.md`** documentant le projet.

---