# Tasks

## Épopée 1: Configuration et Initialisation du Projet

- [ ] **User Story: Initialisation de la configuration**
  - En tant que Développeur, je veux exécuter une commande `init` qui me pose des questions sur mon projet (nom, frameworks, BDD), afin de générer un fichier de configuration JSON complet sans avoir à l'écrire manuellement.

## Épopée 2: Scaffolding de Projet de Bout-en-Bout

- [ ] **User Story: Génération de projet multi-framework**
  - En tant que Développeur, je veux lancer la commande `create-project <nom_projet>`, afin que la CLI lise mon fichier de config et génère les projets frontend et backend correspondants, installe leurs dépendances et initialise Git.

- [ ] **User Story: Génération de code à partir du modèle de données**
  - En tant que Architecte, je veux que la commande `create-project` lise mon fichier `.mdj`, le transforme en JSON, et génère toutes les entités, DTOs et relations ORM, afin de garantir que le code est une implémentation fidèle de mon modèle.

## Épopée 3: Génération de Code Spécifique (Post-Scaffolding)

- [ ] **User Story: Génération de modules NestJS**
  - En tant que Développeur Backend, je veux utiliser la commande `nest generate...` pour ajouter interactivement un module CRUD complet, un système d'authentification, ou des seeders à mon projet NestJS, afin d'accélérer le développement de nouvelles fonctionnalités.