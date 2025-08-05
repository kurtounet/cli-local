├── 📁 src/
│   ├── 📁 commands/
│   │   ├── 📁 framework/
│   │   │   ├── 📁 angular/
│   │   │   │   └── 📘 ng.command.ts
│   │   │   ├── 📁 electron/
│   │   │   ├── 📁 laravel/
│   │   │   ├── 📁 nestjs/
│   │   │   │   └── 📘 nest.command.ts
│   │   │   ├── 📁 nuxt/
│   │   │   │   └── 📘 nuxt.command.ts
│   │   │   ├── 📁 react/
│   │   │   ├── 📁 symfony/
│   │   │   │   └── 📘 sf.command.ts
│   │   │   └── 📁 vue/
│   │   ├── 📁 global/
│   │   │   ├── 📘 create-project.ts
│   │   │   ├── 📘 help.command.ts
│   │   │   ├── 📘 init.command.ts
│   │   │   ├── 📘 mdj.command.ts
│   │   │   ├── 📝 README.md
│   │   │   ├── 📘 tree-analyzer-json.command.ts
│   │   │   ├── 📘 tree-analyzer-md.command.ts
│   │   │   └── 📘 tree.command.ts
│   │   └── 📘 index.ts
│   ├── 📁 constants/
│   │   ├── 📘 constantes-template.ts
│   │   ├── 📘 generate-files.constants.ts
│   │   ├── 📘 global.constants.ts
│   │   └── 📘 path.constants.ts
│   ├── 📁 doc/
│   │   └── 📋 test-config.json
│   ├── 📁 features/
│   │   ├── 📁 frameworks/
│   │   │   ├── 📁 _global/
│   │   │   │   ├── 📁 interface/
│   │   │   │   │   ├── 📘 database.interface.ts
│   │   │   │   │   └── 📘 framework-commun.model.ts
│   │   │   │   ├── 📁 mocks/
│   │   │   │   │   ├── 📘 config-init-commun.mock.ts
│   │   │   │   │   ├── 📘 environments-commun.mock.ts
│   │   │   │   │   └── 📘 install-options-commun.mock.ts
│   │   │   │   ├── 📁 service/
│   │   │   │   │   ├── 📘 create-architecture.service.ts
│   │   │   │   │   ├── 📘 entity.service.ts
│   │   │   │   │   ├── 📘 command.ts
│   │   │   │   │   ├── 📘 config-frameworks.service.ts
│   │   │   │   │   ├── 📘 git.service.ts
│   │   │   │   │   └── 📘 install-dependencies.service.ts
│   │   │   │   └── 📘 utils.ts
│   │   │   ├── 📁 angular/
│   │   │   │   ├── 📁 config/
│   │   │   │   │   ├── 📘 architecture.mock.ts
│   │   │   │   │   ├── 📘 config-ini.mock.ts
│   │   │   │   │   ├── 📘 dependencies.mock.ts
│   │   │   │   │   ├── 📘 environments.mock.ts
│   │   │   │   │   ├── 📘 initiale-architecture-project.mock.ts
│   │   │   │   │   ├── 📘 install-options.mock.ts
│   │   │   │   │   └── 📘 scripts.mock.ts
│   │   │   │   ├── 📁 interfaces/
│   │   │   │   │   └── 📘 angular-model.ts
│   │   │   │   ├── 📁 mock/
│   │   │   │   │   └── 📋 sample-angular-config.json
│   │   │   │   ├── 📁 services/
│   │   │   │   │   ├── 📘 generate-component.service.ts
│   │   │   │   │   ├── 📘 generate-controller.service.ts
│   │   │   │   │   ├── 📘 generate-dto.service.ts
│   │   │   │   │   ├── 📘 generate-entity.service.ts
│   │   │   │   │   ├── 📘 generate-files-framework-angular.service.ts
│   │   │   │   │   ├── 📘 generate-interface.service.ts
│   │   │   │   │   ├── 📘 generate-module.service.ts
│   │   │   │   │   ├── 📘 generate-service.service.ts
│   │   │   │   │   └── 📘 generate-test.service.ts
│   │   │   │   └── 📁 templates/
│   │   │   │       ├── 📘 angular-crud-service.template.ts
│   │   │   │       ├── 📘 angular-controller-template.template.ts
│   │   │   │       ├── 📘 angular-dto-template.template.ts
│   │   │   │       ├── 📘 angular-entity-template.template.ts
│   │   │   │       ├── 📘 angular-interface-template.template.ts
│   │   │   │       ├── 📘 angular-module-template.template.ts
│   │   │   │       ├── 📘 angular-service-template.template.ts
│   │   │   │       ├── 📘 angular-test-template.template.ts
│   │   │   │       ├── 📘 component-template.template.ts
│   │   │   │       ├── 📘 module-template.template.ts
│   │   │   │       └── 📘 service-template.template.ts
│   │   │   ├── 📁 electron/
│   │   │   │   ├── 📁 config/
│   │   │   │   │   ├── 📘 architecture.mock.ts
│   │   │   │   │   ├── 📘 config-ini.mock.ts
│   │   │   │   │   ├── 📘 dependencies.mock.ts
│   │   │   │   │   ├── 📘 environments.mock.ts
│   │   │   │   │   ├── 📘 initiale-architecture-project.mock.ts
│   │   │   │   │   ├── 📘 install-options.mock.ts
│   │   │   │   │   └── 📘 scripts.mock.ts
│   │   │   │   ├── 📁 interfaces/
│   │   │   │   │   └── 📘 electron-model.ts
│   │   │   │   ├── 📁 mock/
│   │   │   │   │   └── 📋 sample-angular-config.json
│   │   │   │   ├── 📁 services/
│   │   │   │   │   ├── 📘 generate-component.service.ts
│   │   │   │   │   ├── 📘 generate-controller.service.ts
│   │   │   │   │   ├── 📘 generate-dto.service.ts
│   │   │   │   │   ├── 📘 generate-entity.service.ts
│   │   │   │   │   ├── 📘 generate-files-framework-electron.service.ts
│   │   │   │   │   ├── 📘 generate-interface.service.ts
│   │   │   │   │   ├── 📘 generate-module.service.ts
│   │   │   │   │   ├── 📘 generate-service.service.ts
│   │   │   │   │   └── 📘 generate-test.service.ts
│   │   │   │   └── 📁 templates/
│   │   │   │       ├── 📘 component-template.template.ts
│   │   │   │       ├── 📘 electron-controller-template.template.ts
│   │   │   │       ├── 📘 electron-dto-template.template.ts
│   │   │   │       ├── 📘 electron-entity-template.template.ts
│   │   │   │       ├── 📘 electron-interface-template.template.ts
│   │   │   │       ├── 📘 electron-module-template.template.ts
│   │   │   │       ├── 📘 electron-service-template.template.ts
│   │   │   │       ├── 📘 electron-test-template.template.ts
│   │   │   │       ├── 📘 module-template.template.ts
│   │   │   │       └── 📘 service-template.template.ts
│   │   │   ├── 📁 nestjs/
│   │   │   │   ├── 📁 config/
│   │   │   │   │   ├── 📘 architecture.mock.ts
│   │   │   │   │   ├── 📘 categories-validators-array.ts
│   │   │   │   │   ├── 📘 config-ini.mock.ts
│   │   │   │   │   ├── 📘 current-validators.ts
│   │   │   │   │   ├── 📘 dependencies.mock.ts
│   │   │   │   │   ├── 📘 environments.mock.ts
│   │   │   │   │   ├── 📘 initiale-architecture-project.mock.ts
│   │   │   │   │   ├── 📘 install-options.mock.ts
│   │   │   │   │   ├── 📘 scripts.mock.ts
│   │   │   │   │   ├── 📘 type-validator.mock.ts
│   │   │   │   │   ├── 📘 validators-array.ts
│   │   │   │   │   ├── 📘 validators-by-category.ts
│   │   │   │   │   └── 📄 validators-with-options.ts.txt
│   │   │   │   ├── 📁 interfaces/
│   │   │   │   │   └── 📘 nest-model.ts
│   │   │   │   ├── 📁 mock/
│   │   │   │   │   └── 📋 sample-orm-config.json
│   │   │   │   ├── 📁 services/
│   │   │   │   │   ├── 📘 account-service-nestjs.service.ts
│   │   │   │   │   ├── 📘 auth-nestjs.service.ts
│   │   │   │   │   ├── 📘 config-project-nestjs.service.ts
│   │   │   │   │   ├── 📘 database-nestjs.service.ts
│   │   │   │   │   ├── 📘 environment-nestjs.service.ts
│   │   │   │   │   ├── 📘 generate--controller.service.ts
│   │   │   │   │   ├── 📘 generate-dto.service.ts
│   │   │   │   │   ├── 📘 generate-entity.service.ts
│   │   │   │   │   ├── 📘 generate-files-framework-nest-js.service.ts
│   │   │   │   │   ├── 📘 generate-interface.service.ts
│   │   │   │   │   ├── 📘 generate-mock.service.ts
│   │   │   │   │   ├── 📘 generate-module.service.ts
│   │   │   │   │   ├── 📘 generate-service.service.ts
│   │   │   │   │   ├── 📘 generate-test.service.ts
│   │   │   │   │   ├── 📘 module-nestjs.service.ts
│   │   │   │   │   ├── 📘 nest.command.ts
│   │   │   │   │   ├── 📘 relationship-type-orm-nestjs.service.ts
│   │   │   │   │   └── 📘 tests-nestjs.service.ts
│   │   │   │   └── 📁 templates/
│   │   │   │       ├── 📁 account/
│   │   │   │       │   ├── 📁 dto/
│   │   │   │       │   │   └── 📘 create-account.dto.template.ts
│   │   │   │       │   ├── 📁 entity/
│   │   │   │       │   ├── 📁 interfaces/
│   │   │   │       │   │   ├── 📘 account.interface.mock.ts
│   │   │   │       │   │   └── 📘 account.interface.template.ts
│   │   │   │       │   ├── 📘 account-controller-nestjs.mock.ts
│   │   │   │       │   ├── 📘 account-controller-nestjs.template.ts
│   │   │   │       │   ├── 📘 account-module-nestjs.template.ts
│   │   │   │       │   ├── 📘 account-service.mock.ts
│   │   │   │       │   ├── 📘 account-service.template.ts
│   │   │   │       │   ├── 📘 account.entity.mock.ts
│   │   │   │       │   └── 📘 account.entity.template.ts
│   │   │   │       ├── 📁 authentification/
│   │   │   │       │   ├── 📁 decorators/
│   │   │   │       │   │   ├── 📘 permissions.decorator-nestjs.template.ts
│   │   │   │       │   │   ├── 📘 permissions.decorator.ts
│   │   │   │       │   │   ├── 📘 roles.decorator-nestjs.template.ts
│   │   │   │       │   │   └── 📘 roles.decorator.ts
│   │   │   │       │   ├── 📁 dto/
│   │   │   │       │   │   └── 📘 login.dto.ts
│   │   │   │       │   ├── 📁 guards/
│   │   │   │       │   │   ├── 📄 auth-jwt-guard.nestjs.mock.ts.txt
│   │   │   │       │   │   ├── 📘 jwt-auth.guard.template.ts
│   │   │   │       │   │   ├── 📘 permissions.guard.template.ts
│   │   │   │       │   │   └── 📘 roles.guard.template.ts
│   │   │   │       │   ├── 📁 interfaces/
│   │   │   │       │   │   └── 📘 jwt-payload.interface.template.ts
│   │   │   │       │   ├── 📁 strategies/
│   │   │   │       │   │   └── 📘 jwt-strategy.template.ts
│   │   │   │       │   ├── 📘 auth-controller.nestjs.mock..ts
│   │   │   │       │   ├── 📘 auth-doc-nestjs.template.ts
│   │   │   │       │   ├── 📘 auth-module-nestjs.template.ts
│   │   │   │       │   └── 📘 auth-service.nestjs.template.ts
│   │   │   │       ├── 📁 config/
│   │   │   │       │   ├── 📁 json/
│   │   │   │       │   │   ├── 📋 architecture-initial-.json
│   │   │   │       │   │   ├── 📋 dependencies-list.json
│   │   │   │       │   │   ├── 📋 dependencies.json
│   │   │   │       │   │   ├── 📋 dev-dependencies.json
│   │   │   │       │   │   ├── 📄 dev-dependencies.json~
│   │   │   │       │   │   ├── 📋 dot-env.json
│   │   │   │       │   │   ├── 📋 environments.json
│   │   │   │       │   │   ├── 📋 install-options.json
│   │   │   │       │   │   ├── 📄 install-options.json~
│   │   │   │       │   │   ├── 📋 packagejson.json
│   │   │   │       │   │   ├── 📄 packagejson.json~
│   │   │   │       │   │   ├── 📋 ressources.json
│   │   │   │       │   │   ├── 📄 ressources.json~
│   │   │   │       │   │   └── 📋 tsconfigjson.json
│   │   │   │       │   ├── 📘 app-module-nestjs.template.ts
│   │   │   │       │   ├── 📘 environments-nest.mock.ts
│   │   │   │       │   ├── 📘 environments-nest.template.ts
│   │   │   │       │   └── 📘 main-nest.template.ts
│   │   │   │       ├── 📁 controller/
│   │   │   │       │   ├── 📘 controller-nestjs.template.ts
│   │   │   │       │   ├── 📘 restfull-controller-nestjs.template.ts
│   │   │   │       │   └── 📘 test.controller.spec.template.ts
│   │   │   │       ├── 📁 database/
│   │   │   │       │   ├── 📘 data-source-nest.mock.ts
│   │   │   │       │   ├── 📘 data-source-nest.template.ts
│   │   │   │       │   └── 📘 database.config-nestjs.template.ts
│   │   │   │       ├── 📁 doc/
│   │   │   │       │   ├── 📝 controller.doc.md
│   │   │   │       │   └── 📝 dependancies.md
│   │   │   │       ├── 📁 dto/
│   │   │   │       │   ├── 📘 create-dto.mock.ts
│   │   │   │       │   ├── 📘 create-dto.template.ts
│   │   │   │       │   ├── 📘 entity-dto.template.ts
│   │   │   │       │   ├── 📘 response-dto.template.ts
│   │   │   │       │   └── 📘 update-dto.template.ts
│   │   │   │       ├── 📁 entities/
│   │   │   │       │   ├── 📘 entity.template.ts
│   │   │   │       │   ├── 📝 relations.md
│   │   │   │       │   └── 📘 repository.template.ts
│   │   │   │       ├── 📁 feartures-services/
│   │   │   │       ├── 📁 fixtures/
│   │   │   │       │   └── 📘 fixture-nest.template.ts
│   │   │   │       ├── 📁 interface/
│   │   │   │       │   └── 📘 entity-interface-nest.template.ts
│   │   │   │       ├── 📁 mock/
│   │   │   │       ├── 📁 module/
│   │   │   │       │   └── 📘 entity-module-nest.template.ts
│   │   │   │       ├── 📁 seeds/
│   │   │   │       │   ├── 📘 entity-seed-nest.template.ts
│   │   │   │       │   ├── 📘 seed-nest.template.ts
│   │   │   │       │   └── 📘 seed.module.template.ts
│   │   │   │       ├── 📁 service/
│   │   │   │       │   ├── 📘 complet-service-nest.template.ts
│   │   │   │       │   ├── 📘 service-nest.template.ts
│   │   │   │       │   ├── 📘 test.service.spec.template.ts
│   │   │   │       │   └── 📘 user-service-nest.ts
│   │   │   │       ├── 📁 type-orm/
│   │   │   │       │   └── 📘 type-orm-config-nest.template.ts
│   │   │   │       ├── 📁 user/
│   │   │   │       │   ├── 📘 users-service.template.ts
│   │   │   │       │   └── 📘 users.module.template.ts
│   │   │   │       ├── 📁 validation-contraints/
│   │   │   │       │   ├── 📘 contraint-nest.template.ts
│   │   │   │       │   └── 📘 validation-nest.template.ts
│   │   │   │       ├── 📘 controller-template.template.ts
│   │   │   │       ├── 📘 entity-template.template.ts
│   │   │   │       ├── 📘 module-template.template.ts
│   │   │   │       ├── 📘 nestjs-controller-template.template.ts
│   │   │   │       ├── 📘 nestjs-dto-template.template.ts
│   │   │   │       ├── 📘 nestjs-entity-template.template.ts
│   │   │   │       ├── 📘 nestjs-interface-template.template.ts
│   │   │   │       ├── 📘 nestjs-module-template.template.ts
│   │   │   │       ├── 📘 nestjs-service-template.template.ts
│   │   │   │       ├── 📘 nestjs-test-template.template.ts
│   │   │   │       └── 📘 service-template.template.ts
│   │   │   ├── 📁 nuxt/
│   │   │   │   ├── 📁 config/
│   │   │   │   │   └── 📘 nuxt-config-generator.ts
│   │   │   │   ├── 📁 interfaces/
│   │   │   │   │   └── 📘 nuxt-model.ts
│   │   │   │   ├── 📁 mock/
│   │   │   │   │   └── 📋 sample-nuxt-config.json
│   │   │   │   ├── 📁 services/
│   │   │   │   │   ├── 📘 generate-component.service.ts
│   │   │   │   │   ├── 📘 generate-controller.service.ts
│   │   │   │   │   ├── 📘 generate-dto.service.ts
│   │   │   │   │   ├── 📘 generate-entity.service.ts
│   │   │   │   │   ├── 📘 generate-files-framework-nuxt.service.ts
│   │   │   │   │   ├── 📘 generate-interface.service.ts
│   │   │   │   │   ├── 📘 generate-layout.service.ts
│   │   │   │   │   ├── 📘 generate-module.service.ts
│   │   │   │   │   ├── 📘 generate-page.service.ts
│   │   │   │   │   ├── 📘 generate-service.service.ts
│   │   │   │   │   └── 📘 generate-test.service.ts
│   │   │   │   └── 📁 templates/
│   │   │   │       ├── 📘 component-template.template.ts
│   │   │   │       ├── 📘 layout-template.template.ts
│   │   │   │       ├── 📘 nuxt-controller-template.template.ts
│   │   │   │       ├── 📘 nuxt-dto-template.template.ts
│   │   │   │       ├── 📘 nuxt-entity-template.template.ts
│   │   │   │       ├── 📘 nuxt-interface-template.template.ts
│   │   │   │       ├── 📘 nuxt-module-template.template.ts
│   │   │   │       ├── 📘 nuxt-service-template.template.ts
│   │   │   │       ├── 📘 nuxt-test-template.template.ts
│   │   │   │       └── 📘 page-component-template.template.ts
│   │   │   ├── 📁 react/
│   │   │   │   ├── 📁 services/
│   │   │   │   │   ├── 📘 generate-component.service.ts
│   │   │   │   │   ├── 📘 generate-controller.service.ts
│   │   │   │   │   ├── 📘 generate-dto.service.ts
│   │   │   │   │   ├── 📘 generate-entity.service.ts
│   │   │   │   │   ├── 📘 generate-files-framework-react.service.ts
│   │   │   │   │   ├── 📘 generate-interface.service.ts
│   │   │   │   │   ├── 📘 generate-service.service.ts
│   │   │   │   │   └── 📘 generate-test.service.ts
│   │   │   │   └── 📁 templates/
│   │   │   │       ├── 📘 react-component-template.template.ts
│   │   │   │       ├── 📘 react-controller-template.template.ts
│   │   │   │       ├── 📘 react-dto-template.template.ts
│   │   │   │       ├── 📘 react-entity-template.template.ts
│   │   │   │       ├── 📘 react-interface-template.template.ts
│   │   │   │       ├── 📘 react-service-template.template.ts
│   │   │   │       └── 📘 react-test-template.template.ts
│   │   │   ├── 📁 symfony/
│   │   │   │   ├── 📁 config/
│   │   │   │   │   ├── 📘 architecture.mock.ts
│   │   │   │   │   ├── 📘 config-ini.mock.ts
│   │   │   │   │   ├── 📘 dependencies.mock.ts
│   │   │   │   │   ├── 📘 environments.mock.ts
│   │   │   │   │   ├── 📘 initiale-architecture-project.mock.ts
│   │   │   │   │   ├── 📘 install-options.mock.ts
│   │   │   │   │   └── 📘 scripts.mock.ts
│   │   │   │   ├── 📁 interfaces/
│   │   │   │   │   └── 🐘 symfony-model.php
│   │   │   │   ├── 📁 mock/
│   │   │   │   │   └── 📄 sample-symfony-config.yaml
│   │   │   │   ├── 📁 services/
│   │   │   │   │   ├── 📘 dtos.service.ts
│   │   │   │   │   ├── 📘 entities.service.ts
│   │   │   │   │   ├── 📘 environments.service.ts
│   │   │   │   │   ├── 📘 fixtures.service.ts
│   │   │   │   │   ├── 📘 generate-accessors.service.ts
│   │   │   │   │   ├── 📘 generate-architecture.service.ts
│   │   │   │   │   ├── 📘 generate-databases.service.ts
│   │   │   │   │   ├── 📘 generate-files-framework-symfony.service.ts
│   │   │   │   │   ├── 📘 generate-state-processor.service.ts
│   │   │   │   │   ├── 📘 state-provider.service.ts
│   │   │   │   │   ├── 📘 test.service.ts
│   │   │   │   │   └── 📘 validation.service.ts
│   │   │   │   └── 📁 templates/
│   │   │   │       ├── 📘 bundle-template.template.ts
│   │   │   │       ├── 📘 controller-template.template.ts
│   │   │   │       ├── 📘 entity-template.template.ts
│   │   │   │       ├── 📘 symfony-controller-template.template.ts
│   │   │   │       ├── 📘 symfony-dto-template.template.ts
│   │   │   │       ├── 📘 symfony-entity-template.template.ts
│   │   │   │       ├── 📘 symfony-interface-template.template.ts
│   │   │   │       ├── 📘 symfony-service-template.template.ts
│   │   │   │       └── 📘 symfony-test-template.template.ts
│   │   │   ├── 📁 vue/
│   │   │   │   ├── 📁 services/
│   │   │   │   │   ├── 📘 generate-component.service.ts
│   │   │   │   │   ├── 📘 generate-dto.service.ts
│   │   │   │   │   ├── 📘 generate-entity.service.ts
│   │   │   │   │   ├── 📘 generate-files-framework-vue.service.ts
│   │   │   │   │   ├── 📘 generate-interface.service.ts
│   │   │   │   │   ├── 📘 generate-service.service.ts
│   │   │   │   │   ├── 📘 generate-store.service.ts
│   │   │   │   │   └── 📘 generate-test.service.ts
│   │   │   │   └── 📁 templates/
│   │   │   │       ├── 📘 vue-component-template.template.ts
│   │   │   │       ├── 📘 vue-dto-template.template.ts
│   │   │   │       ├── 📘 vue-entity-template.template.ts
│   │   │   │       ├── 📘 vue-interface-template.template.ts
│   │   │   │       ├── 📘 vue-service-template.template.ts
│   │   │   │       ├── 📘 vue-store-template.template.ts
│   │   │   │       └── 📘 vue-test-template.template.ts
│   │   │   ├── 📝 arborescence.md
│   │   │   └── 📝 architecture.md
│   │   ├── 📁 parsersMdj/
│   │   │   ├── 📁 interfaces/
│   │   │   │   ├── 📘 entity-json.model.ts
│   │   │   │   ├── 📘 mdj.model.ts
│   │   │   │   ├── 📘 schema.model.ts
│   │   │   │   └── 📘 star-uml.model.ts
│   │   │   ├── 📁 ressource/
│   │   │   │   ├── 📋 shopify.json
│   │   │   │   └── 📄 shopify.mdj
│   │   │   ├── 📁 services/
│   │   │   │   ├── 📘 colums.service.ts
│   │   │   │   ├── 📘 entities.service.ts
│   │   │   │   ├── 📘 relationships.service.ts
│   │   │   │   └── 📘 mdj-to-json.service.ts
│   │   │   └── 📝 README.md
│   │   ├── 📁 project/
│   │   │   ├── 📁 config/
│   │   │   ├── 📁 interfaces/
│   │   │   │   └── 📘 project.models.ts
│   │   │   ├── 📁 mocks/
│   │   │   ├── 📁 services/
│   │   │   │   ├── 📘 cli-local-directory.service.ts
│   │   │   │   ├── 📘 create-project.service.ts
│   │   │   │   ├── 📘 generate-framework.ts
│   │   │   │   ├── 📘 generate-git-branch.service.ts
│   │   │   │   ├── 📘 files-entities-json.service.ts
│   │   │   │   ├── 📘 update-git-ignore.service.ts
│   │   │   │   ├── 📘 update-package-json.service.ts
│   │   │   │   ├── 📘 update-tscongfig.service.ts
│   │   │   │   └── 📘 verify-file-config.ts
│   │   │   └── 📁 templates/
│   │   └── 📁 tools/
│   │       └── 📁 tree/
│   │           └── 📁 services/
│   │               └── 📘 generate-tree-json.service.ts
│   ├── 📁 services/
│   │   └── 📁 cli-conf/
│   │       └── 📁 services/
│   │           └── 📘 cli-local-directory.service.ts
│   ├── 📁 types/
│   │   └── 📘 common.d.ts
│   ├── 📁 utils/
│   │   ├── 📘 convert.ts
│   │   ├── 📘 execute-command.ts
│   │   ├── 📘 file-utils.ts
│   │   ├── 📘 logger.ts
│   │   ├── 📘 mapping.ts
│   │   ├── 📘 prompts.ts
│   │   └── 📘 string-utils.ts
│   └── 📘 main.ts
├── 📁 temp/
│   └── 📄 test.txt
├── 📁 tests/
│   ├── 📁 commands/
│   │   ├── 📁 framework/
│   │   │   ├── 📁 angular/
│   │   │   │   └── 📘 ng.command.test.ts
│   │   │   ├── 📁 nestjs/
│   │   │   │   └── 📘 nest.command.test.ts
│   │   │   ├── 📁 nuxt/
│   │   │   │   └── 📘 nuxt.command.test.ts
│   │   │   └── 📁 symfony/
│   │   │       └── 📘 sf.command.test.ts
│   │   └── 📁 global/
│   │       ├── 📘 help.command.test.ts
│   │       └── 📘 init.command.test.ts
│   ├── 📁 features/
│   │   ├── 📁 angular/
│   │   │   └── 📁 services/
│   │   │       └── 📘 angularServiceGenerator.test.ts
│   │   ├── 📁 nestjs/
│   │   │   └── 📁 services/
│   │   │       └── 📘 nestServiceGenerator.test.ts
│   │   ├── 📁 nuxt/
│   │   │   └── 📁 services/
│   │   │       └── 📘 nuxtServiceGenerator.test.ts
│   │   └── 📁 symfony/
│   │       └── 📁 services/
│   │           └── 📘 symfonyServiceGenerator.test.ts
│   └── 📁 utils/
 │       ├── 📘 fileUtils.test.ts
│       ├── 📘 logger.test.ts
│       └── 📘 prompts.test.ts
 
