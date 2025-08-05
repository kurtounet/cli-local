project/
├── package.json
├── tsconfig.json
├── README.md
├── ARCHITECTURE.md

├── cli/
│   ├── bin/
│   │   └── loaderCommand.ts
│   │       └─ loadCommands()
│   │
│   ├── commands/
│   │   ├── index.ts
│   │   │   └─ registerAllCommands(program)
│   │   │
│   │   ├── angular/
│   │   │   └── ng.command.ts
│   │   │       ├─ registerNgCommand()
│   │   │       ├─ generateAngularComponent()
│   │   │       └─ generateAngularModule()
│   │   ├── nestjs/
│   │   │   └── nest.command.ts
│   │   │       ├─ registerNgCommand()
│   │   │       ├─ generateAngularComponent()
│   │   │       └─ generateAngularModule()
│   │   │
│   │   └── globals/
│   │       ├── tree.command.ts
│   │       │   ├─ registerTreeCommand()
│   │       │   └─ displayProjectTree()
│   │       │
│   │       └── new-project.command.ts
│   │           ├─ registerNewProjectCommand()
│   │           └─ handleNewProject()
│
│   └── features/
│       ├── angular/
│       │   ├── config/
│       │   │   └── angularConfigGenerator.ts
│       │   │       ├─ generateAngularJson()
│       │   │       └─ generateTsConfigAngular()
│       │   │
│       │   ├── services/
│       │   │   └── angularServiceGenerator.ts
│       │   │       ├─ generateAngularModule()
│       │   │       └─ generateAngularService()
│       │   │
│       │   ├── templates/
│       │   │   └── angularTemplates.ts
│       │   │       ├─ getAngularComponentTemplate()
│       │   │       └─ getAngularServiceTemplate()
│       │   │
│       │   ├── Mock/
│       │   │   └── sampleAngular.json
│       │   │
│       │   └── Interfaces/
│       │       └── AngularModel.ts
│       │           └─ interface AngularComponentConfig
│
│       ├── nestjs/
│       │   ├── config/
│       │   │   └── nestConfigGenerator.ts
│       │   │       ├─ generateTypeOrmConfig()
│       │   │       └─ generateNestMain()
│       │   │
│       │   ├── services/
│       │   │   └── nestServiceGenerator.ts
│       │   │       ├─ generateNestEntity()
│       │   │       ├─ generateNestController()
│       │   │       └─ generateNestService()
│       │   │
│       │   ├── templates/
│       │   │   └── nestTemplates.ts
│       │   │       ├─ getNestEntityTemplate()
│       │   │       └─ getNestControllerTemplate()
│       │   │
│       │   ├── Mock/
│       │   │   └── sampleOrmConfig.json
│       │   │
│       │   └── Interfaces/
│       │       └── NestModel.ts
│       │           └─ interface NestEntityConfig
│
│       ├── symfony/
│       │   ├── config/
│       │   │   └── symfonyConfigGenerator.ts
│       │   │       ├─ generateDoctrineYaml()
│       │   │       └─ generateServicesYaml()
│       │   │
│       │   ├── services/
│       │   │   └── symfonyServiceGenerator.ts
│       │   │       ├─ generateSymfonyEntity()
│       │   │       └─ generateSymfonyFixture()
│       │   │
│       │   ├── templates/
│       │   │   └── symfonyTemplates.ts
│       │   │       ├─ getSymfonyEntityTemplate()
│       │   │       └─ getSymfonyRepositoryTemplate()
│       │   │
│       │   ├── Mock/
│       │   │   └── sampleDoctrine.yaml
│       │   │
│       │   └── Interfaces/
│       │       └── SymfonyModel.php
│       │           └─ interface SymfonyEntityConfig
│
│       └── parsersMdj/
│           ├── interfaces/
│           │   ├── starUml.model.ts
│           │   │   └─ interface StarUmlModel
│           │   └── schema.model.ts
│           │       └─ interface SimplifiedEntity
│           │
│           └── services/
│               └── mdjToJson.ts
│                   ├─ parseMdjFile(filePath: string): StarUmlModel
│                   └─ convertToSchema(starUml: StarUmlModel): SimplifiedEntity[]
│
├── ressources/
│   └── docker-compose.yml (exemple)
│
└── utils/
    ├── fileUtils.ts
    │   ├─ copyDirectory()
    │   ├─ writeFile()
    │   └─ deleteDirectory()
    │
    ├── logger.ts
    │   ├─ info()
    │   ├─ success()
    │   └─ error()
    │
    └── stringUtils.ts
        ├─ capitalize()
        ├─ slugify()
        └─ camelCase()


Génère-moi une architecture de projet complète sous forme d'arborescence (style tree), qui inclut :

- Les dossiers (branches) du projet
- Les fichiers présents dans chaque dossier
- Les fonctions principales attendues dans chaque fichier
- Et pour chaque dossier, fichier ou fonction, ajoute UNE ligne explicative simple sur son rôle.

Voici exactement le format attendu, inspire-toi de cette structure :

project/
├── package.json
│   └─ Gère les dépendances et scripts npm pour le projet CLI.
├── tsconfig.json
│   └─ Configure TypeScript avec strict mode, outputDir, paths.
├── README.md
│   └─ Documente l'usage global de la CLI.
├── ARCHITECTURE.md
│   └─ Explique en détail la structure du projet.

├── cli/
│   ├── bin/
│   │   └── loaderCommand.ts
│   │       └─ loadCommands() : Point d'entrée CLI qui initialise Commander.
│   │
│   ├── commands/
│   │   ├── index.ts
│   │   │   └─ registerAllCommands(program) : Enregistre toutes les commandes CLI.
│   │   │
│   │   ├── angular/
│   │   │   └── ng.command.ts
│   │   │       ├─ registerNgCommand() : Enregistre la commande Angular.
│   │   │       ├─ generateAngularComponent() : Génére un component Angular.
│   │   │       └─ generateAngularModule() : Génére un module Angular.
│   │   │
│   │   └── globals/
│   │       ├── tree.command.ts
│   │       │   ├─ registerTreeCommand() : Enregistre la commande tree.
│   │       │   └─ displayProjectTree() : Affiche l'arborescence du projet.
│   │       │
│   │       └── new-project.command.ts
│   │           ├─ registerNewProjectCommand() : Enregistre la commande new-project.
│   │           └─ handleNewProject() : Génére un projet complet avec prompts.

│   └── features/
│       ├── angular/
│       │   ├── config/
│       │   │   └── angularConfigGenerator.ts
│       │   │       ├─ generateAngularJson() : Crée le angular.json.
│       │   │       └─ generateTsConfigAngular() : Crée le tsconfig pour Angular.
│       │   │
│       │   ├── services/
│       │   │   └── angularServiceGenerator.ts
│       │   │       ├─ generateAngularModule() : Crée un module Angular.
│       │   │       └─ generateAngularService() : Crée un service Angular.
│       │   │
│       │   ├── templates/
│       │   │   └── angularTemplates.ts
│       │   │       ├─ getAngularComponentTemplate() : Template pour component Angular.
│       │   │       └─ getAngularServiceTemplate() : Template pour service Angular.
│       │   │
│       │   ├── Mock/
│       │   │   └── sampleAngular.json : Fichier mock pour Angular.
│       │   │
│       │   └── Interfaces/
│       │       └── AngularModel.ts
│       │           └─ interface AngularComponentConfig : Interface TS Angular.

│       ├── nestjs/
│       │   ├── config/
│       │   │   └── nestConfigGenerator.ts
│       │   │       ├─ generateTypeOrmConfig() : Crée le ormconfig.js.
│       │   │       └─ generateNestMain() : Crée le main.ts.
│       │   │
│       │   ├── services/
│       │   │   └── nestServiceGenerator.ts
│       │   │       ├─ generateNestEntity() : Crée une entité NestJS.
│       │   │       ├─ generateNestController() : Crée un controller NestJS.
│       │   │       └─ generateNestService() : Crée un service NestJS.
│       │   │
│       │   ├── templates/
│       │   │   └── nestTemplates.ts
│       │   │       ├─ getNestEntityTemplate() : Template pour entité NestJS.
│       │   │       └─ getNestControllerTemplate() : Template pour controller NestJS.
│       │   │
│       │   ├── Mock/
│       │   │   └── sampleOrmConfig.json : Fichier mock ORM NestJS.
│       │   │
│       │   └── Interfaces/
│       │       └── NestModel.ts
│       │           └─ interface NestEntityConfig : Interface TS NestJS.

│       ├── symfony/
│       │   ├── config/
│       │   │   └── symfonyConfigGenerator.ts
│       │   │       ├─ generateDoctrineYaml() : Crée doctrine.yaml.
│       │   │       └─ generateServicesYaml() : Crée services.yaml.
│       │   │
│       │   ├── services/
│       │   │   └── symfonyServiceGenerator.ts
│       │   │       ├─ generateSymfonyEntity() : Crée une entité Doctrine.
│       │   │       └─ generateSymfonyFixture() : Crée une fixture Symfony.
│       │   │
│       │   ├── templates/
│       │   │   └── symfonyTemplates.ts
│       │   │       ├─ getSymfonyEntityTemplate() : Template PHP pour entité.
│       │   │       └─ getSymfonyRepositoryTemplate() : Template PHP pour repository.
│       │   │
│       │   ├── Mock/
│       │   │   └── sampleDoctrine.yaml : Fichier mock Doctrine.
│       │   │
│       │   └── Interfaces/
│       │       └── SymfonyModel.php
│       │           └─ interface SymfonyEntityConfig : Interface PHP Symfony.

│       └── parsersMdj/
│           ├── interfaces/
│           │   ├── starUml.model.ts
│           │   │   └─ interface StarUmlModel : Structure JSON brut StarUML.
│           │   └── schema.model.ts
│           │       └─ interface SimplifiedEntity : Structure simplifiée pour générateurs.
│           │
│           └── services/
│               └── mdjToJson.ts
│                   ├─ parseMdjFile() : Parse le fichier .mdj StarUML.
│                   └─ convertToSchema() : Convertit en JSON simplifié.

├── ressources/
│   └── docker-compose.yml : Exemple de docker-compose pour le projet.

└── utils/
    ├── fileUtils.ts
    │   ├─ copyDirectory() : Copie un dossier.
    │   ├─ writeFile() : Écrit un fichier.
    │   └─ deleteDirectory() : Supprime un dossier.
    │
    ├── logger.ts
    │   ├─ info() : Log informatif.
    │   ├─ success() : Log de succès.
    │   └─ error() : Log d'erreur.
    │
    └── stringUtils.ts
        ├─ capitalize() : Met en majuscule la première lettre.
        ├─ slugify() : Transforme en slug URL.
        └─ camelCase() : Transforme en camelCase.
