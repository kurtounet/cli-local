# Feuille de route pour la génération de la CLI

## Sujet 1 : Spécification fonctionnelle de la CLI

### 1. Objectif

L'objectif est de créer une CLI (Command Line Interface) nommée `create-fullstack-project` qui automatise la création de projets fullstack (frontend et backend) à partir d'un fichier de modèle UML StarUML (`.mdj`).

### 2. Technologies

*   **Langage :** Node.js avec TypeScript
*   **Framework CLI :** Commander.js
*   **Interactivité :** Inquirer.js
*   **Styling des logs :** Chalk / Ora

### 3. Commandes

La CLI exposera plusieurs commandes, organisées de manière modulaire.

#### 3.1. Commande principale : `new-project`

Cette commande est le cœur de la CLI. Elle permet de générer un nouveau projet complet.

*   **Nom :** `new-project`
*   **Alias :** `np`
*   **Description :** Crée un nouveau projet fullstack à partir d'un fichier `.mdj`.
*   **Options :**
    *   `--name <name>` / `-n <name>`: (Optionnel) Nom du projet. Si non fourni, la CLI le demandera interactivement.
    *   `--frontend <framework>` / `-f <framework>`: (Optionnel) Framework frontend à utiliser. Choix possibles : `angular`, `react`, `vue`, `nuxt`, `electron`.
    *   `--backend <framework>` / `-b <framework>`: (Optionnel) Framework backend à utiliser. Choix possibles : `nestjs`, `symfony`.
    *   `--database <type>` / `-d <type>`: (Optionnel) Type de base de données. Choix possibles : `mysql`, `postgres`, `sqlite`, `mongo`.
    *   `--path <path>` / `-p <path>`: (Optionnel) Chemin d'installation du projet.
    *   `--schema <file>` / `-s <file>`: (Requis) Chemin vers le fichier `.mdj` de StarUML.
    *   `--install` / `-i`: (Optionnel) Lance l'installation des dépendances (`npm install` ou `yarn`) après la génération.
    *   `--open` / `-o`: (Optionnel) Ouvre le projet dans VSCode après la génération.

*   **Exemple d'utilisation :**

    ```bash
    create-fullstack-project new-project --name my-app --frontend angular --backend nestjs --database postgres --schema ./my-schema.mdj --install --open
    ```

*   **Flux interactif (si des options sont manquantes) :**

    1.  Demander le nom du projet.
    2.  Proposer une liste de frameworks frontend.
    3.  Proposer une liste de frameworks backend.
    4.  Proposer une liste de types de base de données.
    5.  Demander le chemin d'installation.
    6.  Demander le chemin vers le fichier `.mdj`.
    7.  Confirmer les choix avant de lancer la génération.

#### 3.2. Commande spécifique à Angular : `ng`

*   **Nom :** `ng`
*   **Description :** Commandes spécifiques pour les projets Angular (ex: générer un composant, un service, etc.). Cette commande pourrait être un wrapper autour de la CLI Angular.

#### 3.3. Commande globale : `tree`

*   **Nom :** `tree`
*   **Description :** Affiche l'arborescence des fichiers qui seront générés, pour prévisualisation.

### 4. Fonctionnalités clés

*   **Parsing de `.mdj` :** La CLI doit être capable de lire et d'interpréter un fichier `.mdj` pour en extraire les classes, attributs, et relations.
*   **Génération de code modulaire :** La génération de code doit être organisée par framework et par type de fichier (entité, DTO, contrôleur, etc.).
*   **Templates :** Utilisation de fonctions TypeScript qui retournent des chaînes de caractères (templates) pour générer les fichiers de code source.
*   **Gestion des dépendances :** Installation automatique des dépendances du projet généré.
*   **Initialisation de Git :** Création d'un dépôt Git et commit initial.
*   **Création de fichiers de configuration :** Génération de fichiers `.env`, `docker-compose.yml`, `tsconfig.json`, etc.

### 5. Exemple de code pour la commande `new-project`

Voici un aperçu de ce à quoi pourrait ressembler le code de la commande `new-project` dans `cli/commands/globals/new-project.command.ts` :

```typescript
import { Command } from 'commander';
import inquirer from 'inquirer';
import { mdjToJson } from '../../features/parsersMdj/services/mdjToJson';
// ... autres imports

export function registerNewProjectCommand(program: Command) {
  program
    .command('new-project')
    .alias('np')
    .description('Crée un nouveau projet fullstack à partir d'un fichier .mdj')
    .option('-n, --name <name>', 'Nom du projet')
    // ... autres options
    .action(async (options) => {
      const answers = await inquirer.prompt([
        // ... questions interactives
      ]);

      const config = { ...options, ...answers };

      // 1. Parser le schéma .mdj
      const schema = await mdjToJson(config.schema);

      // 2. Générer le projet en fonction du framework
      if (config.backend === 'nestjs') {
        // appeler les services de génération pour NestJS
      }
      if (config.frontend === 'angular') {
        // appeler les services de génération pour Angular
      }

      // 3. Installer les dépendances, etc.

      console.log('Projet généré avec succès !');
    });
}
```
