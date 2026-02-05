# Todo - Mise à jour du Scaffolder Symfony

L'objectif est de refactoriser le plugin de scaffolding Symfony (`plugins/scaffolders/frameworks/symfony`) pour qu'il utilise la logique de génération de templates moderne et modulaire actuellement présente dans `src/features/frameworks/symfony/`.

## 1. Analyse et Préparation

- [ ] **Analyser l'existant :**
  - [ ] Étudier le fonctionnement du `symfony.service.js` et du `manifest.json` actuels.
  - [ ] Analyser en détail les templates TypeScript dans `src/features/frameworks/symfony/templates/` pour comprendre la logique de génération (scalaires, relations, DTOs multiples, etc.).

- [ ] **Adapter `manifest.json` :**
  - [ ] Mettre à jour `manifest.json` pour refléter la nouvelle structure granulaire des fichiers à générer. Cela impliquera de remplacer un blueprint unique (comme `dto`) par plusieurs blueprints spécifiques (ex: `dto-create`, `dto-item`, `dto-update`).
  - [ ] Corriger les typos existantes (`prodiver` -> `provider`).

## 2. Conversion des Templates TypeScript en EJS

L'étape principale consiste à "traduire" la logique des fichiers de template TypeScript (`.ts`) en fichiers de template EJS (`.php.ejs`).

- [ ] **Template `entity.php.ejs` :**
  - [ ] Intégrer la logique de `api-platform-entity.template.ts` pour générer :
    - Les propriétés scalaires avec les attributs Doctrine.
    - Les propriétés de relations (`OneToOne`, `ManyToOne`, `OneToMany`, `ManyToMany`).
    - Les accesseurs (getters/setters) pour toutes les propriétés.

- [ ] **Template `repository.php.ejs` :**
  - [ ] S'assurer que le template `symfony-repository.template.ts` est correctement converti.

- [ ] **Templates de DTOs (un par type) :**
  - [ ] Créer `dto-item.php.ejs` basé sur `api-platform-entity-item-dto.template.ts`.
  - [ ] Créer `dto-collection-item.php.ejs` basé sur `api-platform-entity-collection-dto.template.ts`.
  - [ ] Créer `dto-create.php.ejs` basé sur `api-platform-entity-create-dto.template.ts`.
  - [ ] Créer `dto-update.php.ejs` basé sur `api-platform-entity-update-dto.template.ts`.

- [ ] **Template `resource.php.ejs` :**
  - [ ] Convertir la logique de `api-platform-entity-ressource-dto.template.ts` (Resource API Platform).

- [ ] **Template `mapper.php.ejs` :**
  - [ ] Convertir le fichier complexe `api-platform-entity-mapper.template.ts`.
  - [ ] Créer des partiels EJS (`/templates/partials/`) pour la logique réutilisable comme `resolve-iri.template.ts` et `to-iri-list.template.ts` afin de les inclure dans le mapper.

- [ ] **Templates des `States` (Providers & Processors) :**
  - [ ] **Providers :**
    - [ ] Créer `provider-item.php.ejs` basé sur `api-platform-entity-item-provider.template.ts`.
    - [ ] Créer `provider-collection.php.ejs` basé sur `api-platform-entity-collection-provider.template.ts`.
  - [ ] **Processors :**
    - [ ] Créer `processor-create.php.ejs` basé sur `api-platform-entity-post-processor.template.ts`.
    - [ ] Créer `processor-update.php.ejs` basé sur `api-platform-entity-update-processor.template.ts`.
    - [ ] Créer `processor-delete.php.ejs` basé sur `api-platform-entity-delete-processor.template.ts`.

## 3. Mise à jour du Service du Plugin

- [ ] **Modifier `symfony.service.js` :**
  - [ ] Adapter la méthode `execute` pour qu'elle itère sur le nouveau `manifest.json` et génère les fichiers correspondants.
  - [ ] S'assurer que les données passées aux templates EJS (`entity`) contiennent toutes les informations nécessaires (propriétés, relations, noms en camelCase/PascalCase) utilisées par la nouvelle logique.

## 4. NE RIEN SUPPRIMER ! Nettoyage et Validation

- [ ] **Supprimer les anciens fichiers :**
  - [ ] Effacer les templates EJS obsolètes qui ont été remplacés.
- [ ] **Vérification finale :**
  - [ ] Relire l'ensemble des fichiers du plugin pour s'assurer de la cohérence.
  - [ ] Lancer une génération test (si possible) pour valider que les fichiers PHP sont créés correctement.
