# Commande `create-project`

La commande `create-project` est le cœur de notre CLI pour l'initialisation et la configuration de nouveaux projets. Elle automatise la création de l'architecture de projet, l'installation des dépendances, et la génération de code basée sur un fichier de configuration et un modèle StarUML (`.mdj`).

## Utilisation

```bash
my-cli create-project <nom_du_projet>
```

- `<nom_du_projet>`: Le nom de votre projet. Ce nom sera utilisé pour localiser le fichier de configuration `<nom_du_projet>-config.json`.

## Fonctionnalités

Cette commande effectue les opérations suivantes :

1.  **Lecture et Validation de la Configuration :**
    -   Recherche et lit le fichier de configuration `[nom_du_projet]-config.json` dans le répertoire courant.
    -   Valide la structure et le contenu de ce fichier pour s'assurer que toutes les informations nécessaires sont présentes et correctes.
    -   Vérifie la présence du chemin vers le fichier `.mdj` (modèle StarUML) dans la configuration.

2.  **Traitement du Modèle StarUML (`.mdj`) :**
    -   Lit le fichier `.mdj` spécifié dans la configuration.
    -   Convertit les entités, colonnes et relations définies dans le `.mdj` en un format JSON structuré (`entitiesJsonFile`). Ce JSON devient la source de vérité pour la génération de code.

3.  **Génération et Configuration des Frameworks :**
    -   Parcourt la liste des frameworks (Frontend et Backend) définis dans le fichier de configuration (ex: Angular, VueJS, NestJS, Electron, Symfony, FastAPI).
    -   Pour chaque framework :
        -   **Initialisation :** Crée le répertoire du projet et initialise le framework (si ce n'est pas déjà fait).
        -   **Gestion Git :** Crée des branches Git spécifiques pour le framework.
        -   **Structure CLI Locale :** Met en place une structure de fichiers spécifique à la CLI pour le projet local.
        -   **Installation des Dépendances :** Installe les dépendances nécessaires (npm, Composer, etc.).
        -   **Création de l'Architecture :** Génère la structure de dossiers et de fichiers de base du framework.
        -   **Mise à jour des Fichiers :** Met à jour les fichiers de configuration (ex: `tsconfig.json`, `package.json`) et `.gitignore`.
        -   **Environnements :** Crée les fichiers d'environnement (ex: pour les bases de données).

4.  **Génération de Code Spécifique au Framework (basée sur le `.mdj`) :**
    -   Utilise les données extraites du fichier `.mdj` (via `entitiesJsonFile`) pour générer des éléments spécifiques :
        -   **Symfony :** Génération des entités, DTOs (Data Transfer Objects), State Providers et State Processors.
        -   **NestJS :** (Commenté dans le code actuel, mais la structure est prête pour la génération de modules).

5.  **Opérations Post-Génération :**
    -   Crée les bases de données configurées.
    -   Lance VSCode dans le répertoire du framework.
    -   Démarre le serveur de développement du framework (ex: `npm run start:dev` pour NestJS, `symfony server:start` pour Symfony).
    -   Génère une arborescence des fichiers créés par la CLI locale.

En résumé, `create-project` est une commande puissante qui transforme un fichier de configuration simple et un modèle de base de données en une structure de projet complète et fonctionnelle, prête pour le développement.
