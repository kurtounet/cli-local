├── 📁 .cli-local
│   ├── 📄 config-project.json
│   ├── 📄 entities.json
│   ├── 📄 mcd.json
│   └── 📄 mcd.mdj
├── 📄 .env
├── 📄 .gitignore
├── 📄 .mclprc.json
├── 📄 .prettierignore
├── 📄 eslint-formatter.js
├── 📄 eslint.config.mjs
├── 📁 output
│   └── 📁 src
│       ├── 📁 ApiResource
│       │   ├── 📁 Mapper
│       │   │   ├── 📄 PostMapper.php
│       │   │   └── 📄 UserMapper.php
│       │   ├── 📁 Resources
│       │   │   ├── 📄 PostResource.php
│       │   │   └── 📄 UserResource.php
│       │   └── 📁 States
│       │       ├── 📄 PostProcessor.php
│       │       ├── 📄 PostProvider.php
│       │       ├── 📄 UserProcessor.php
│       │       └── 📄 UserProvider.php
│       ├── 📁 Dto
│       │   ├── 📄 PostDto.php
│       │   └── 📄 UserDto.php
│       ├── 📁 Entity
│       │   ├── 📄 Post.php
│       │   └── 📄 User.php
│       └── 📁 Repository
│           ├── 📄 PostRepository.php
│           └── 📄 UserRepository.php
├── 📄 package-lock.json
├── 📄 package.json
├── 📁 plugins
│   ├── 📄 index.json
│   ├── 📁 scaffolders
│   │   ├── 📁 cli
│   │   │   ├── 📁 command
│   │   │   ├── 📁 plugin
│   │   │   └── 📁 service
│   │   └── 📁 frameworks
│   │       ├── 📁 .cli-local
│   │       │   ├── 📄 config-project.json
│   │       │   ├── 📄 entities.json
│   │       │   ├── 📄 mcd.json
│   │       │   └── 📄 mcd.mdj
│   │       ├── 📁 angular
│   │       └── 📁 symfony
│   │           ├── 📄 index.js
│   │           ├── 📄 manifest.json
│   │           ├── 📄 symfony.service.js
│   │           ├── 📁 templates
│   │           │   ├── 📄 collection-item-dto.php.ejs
│   │           │   ├── 📄 collection-provider.php.ejs
│   │           │   ├── 📁 commands
│   │           │   │   └── 📄 crud-all.php.ejs
│   │           │   ├── 📄 controller.php.ejs
│   │           │   ├── 📄 create-dto.php.ejs
│   │           │   ├── 📄 delete-processor.php.ejs
│   │           │   ├── 📄 dto.php.ejs
│   │           │   ├── 📄 entity.php.ejs
│   │           │   ├── 📁 env
│   │           │   │   └── 📄 env.local.ejs
│   │           │   ├── 📄 mapper.php.ejs
│   │           │   ├── 📁 partials
│   │           │   │   ├── 📄 entity-accessor-relation.php.ejs
│   │           │   │   ├── 📄 entity-relation.php.ejs
│   │           │   │   ├── 📄 mapper-logic.php.ejs
│   │           │   │   ├── 📄 mapper-resolve-iri.php.ejs
│   │           │   │   └── 📄 mapper-to-iri-list.php.ejs
│   │           │   ├── 📄 processor.php.ejs
│   │           │   ├── 📄 prodiver.php.ejs
│   │           │   ├── 📄 provider.php.ejs
│   │           │   ├── 📄 repository.php.ejs
│   │           │   ├── 📄 resource.php.ejs
│   │           │   ├── 📄 service.php.ejs
│   │           │   ├── 📁 services
│   │           │   │   └── 📄 iri-from-resource.php.ejs
│   │           │   ├── 📄 test.php.ejs
│   │           │   ├── 📄 update-dto.php.ejs
│   │           │   └── 📄 update-processor.php.ejs
│   │           ├── 📄 test-generator.js
│   │           └── 📁 utils
│   │               ├── 📄 convert.js
│   │               └── 📄 mapping.js
│   └── 📁 tools
│       └── 📁 architecture
│           ├── 📄 architecture.service.js
│           └── 📄 manifest.json
├── 📄 rapport-perso.txt
├── 📁 scripts
│   └── 📄 test-generation.ts
├── 📁 src
│   ├── 📁 assets
│   │   └── 📄 messages.ts
│   ├── 📁 commands
│   │   ├── 📄 BaseCommand.ts
│   │   ├── 📄 ai.command.ts
│   │   ├── 📄 app.command.ts
│   │   ├── 📄 doc.command.ts
│   │   ├── 📄 generate.command.ts
│   │   ├── 📄 list-command.help.md
│   │   ├── 📄 mcp.command.ts
│   │   ├── 📄 plugin.command.ts
│   │   └── 📄 tree.command.ts
│   ├── 📁 config
│   │   ├── 📄 .mclp.yml
│   │   └── 📄 config.ts
│   ├── 📁 context
│   │   └── 📄 context.ts
│   ├── 📁 core
│   │   └── 📄 App.ts
│   ├── 📁 errors
│   │   ├── 📄 cli-errors.ts
│   │   └── 📄 handler-error.md
│   ├── 📁 features
│   │   ├── 📄 .gitignore
│   │   ├── 📁 commun
│   │   │   ├── 📄 .gitignore
│   │   │   ├── 📄 architecture.interface.ts
│   │   │   ├── 📄 database.interface.ts
│   │   │   ├── 📄 file-node.interface.ts
│   │   │   ├── 📄 framework.interface.ts
│   │   │   ├── 📄 member-info.interface.ts
│   │   │   ├── 📄 package-json.model.ts
│   │   │   └── 📄 projet.interface.ts
│   │   ├── 📁 parserMdj
│   │   │   ├── 📁 models
│   │   │   │   ├── 📄 entity-json.model.ts
│   │   │   │   ├── 📄 mdj.model.ts
│   │   │   │   ├── 📄 schema.model.ts
│   │   │   │   └── 📄 star-uml.model.ts
│   │   │   ├── 📁 ressource
│   │   │   │   ├── 📄 shopify.json
│   │   │   │   └── 📄 shopify.mdj
│   │   │   └── 📁 services
│   │   │       ├── 📄 .gitignore
│   │   │       ├── 📄 mapping.ts
│   │   │       ├── 📁 old_services
│   │   │       │   ├── 📄 get-colums.service.ts
│   │   │       │   ├── 📄 get-entities.service.ts
│   │   │       │   ├── 📄 get-relationships.service.ts
│   │   │       │   ├── 📄 mdj-handle-colums.service.ts
│   │   │       │   ├── 📄 mdj-to-json.service.ts
│   │   │       │   ├── 📄 mdj-update-handle-colums.service.ts
│   │   │       │   ├── 📄 nestjs-code-generation.service.ts
│   │   │       │   ├── 📄 nestjs-generate-dto.service.ts
│   │   │       │   ├── 📄 nestjs-generate-entity.service.ts
│   │   │       │   ├── 📄 nestjs-generate-interface.service.ts
│   │   │       │   ├── 📄 symfony-code-generation.service.ts
│   │   │       │   ├── 📄 symfony-generate-dto.service.ts
│   │   │       │   └── 📄 symfony-generate-entity.service.ts
│   │   │       ├── 📄 parser-mdj.service.ts
│   │   │       └── 📄 symfony-mapping.ts
│   │   ├── 📁 project
│   │   │   ├── 📄 .gitignore
│   │   │   ├── 📁 commands
│   │   │   │   └── 📄 project.command.ts
│   │   │   ├── 📁 config
│   │   │   │   └── 📄 config.ts
│   │   │   ├── 📁 interfaces
│   │   │   │   ├── 📄 file-node.interface.ts
│   │   │   │   ├── 📄 project-command.interface.ts
│   │   │   │   ├── 📄 project-service.interface.ts
│   │   │   │   └── 📄 task-service.interface.ts
│   │   │   └── 📁 services
│   │   │       ├── 📄 project.service.ts
│   │   │       └── 📄 task.service.ts
│   │   └── 📁 scaffolders
│   │       ├── 📁 common
│   │       │   ├── 📄 .gitignore
│   │       │   ├── 📄 base-generator.ts
│   │       │   ├── 📁 commands
│   │       │   │   └── 📄 framework.command.ts
│   │       │   ├── 📁 config
│   │       │   │   └── 📄 config-frameworks.ts
│   │       │   ├── 📁 services
│   │       │   │   ├── 📄 base-framework.service.ts
│   │       │   │   ├── 📄 build-command.service.ts
│   │       │   │   ├── 📄 confi-framework.service.ts
│   │       │   │   ├── 📄 create-architecture.service.ts
│   │       │   │   ├── 📄 framework-selector.service.ts
│   │       │   │   ├── 📄 framework.service.ts
│   │       │   │   ├── 📄 generate-interface-service.ts
│   │       │   │   ├── 📄 generate-route.service.ts
│   │       │   │   ├── 📄 generate-types-d.service.ts
│   │       │   │   ├── 📄 generate-types-db.service.ts
│   │       │   │   ├── 📄 generate-zod-schema-db.service.ts
│   │       │   │   ├── 📄 generate-zod-shema-entity.service.ts
│   │       │   │   ├── 📄 get-command.ts
│   │       │   │   ├── 📄 git.service.ts
│   │       │   │   ├── 📄 install-dependencies.service.ts
│   │       │   │   ├── 📄 switch-generate-file-framework.service.ts
│   │       │   │   ├── 📄 universal-orchestrator.ts
│   │       │   │   └── 📄 update-package-json.service.ts
│   │       │   └── 📁 templates
│   │       │       ├── 📄 doc.md
│   │       │       ├── 📄 input-html.template.ts
│   │       │       ├── 📄 model-entity.template.ts
│   │       │       └── 📄 types-entity.template.ts
│   │       ├── 📁 database
│   │       │   ├── 📁 config
│   │       │   └── 📁 mock
│   │       │       └── 📄 database.mock.ts
│   │       ├── 📁 frameworks
│   │       │   ├── 📄 .gitignore
│   │       │   ├── 📁 angular
│   │       │   │   ├── 📁 config
│   │       │   │   │   ├── 📄 angular-architecture.mock.ts
│   │       │   │   │   ├── 📄 angular-config-ini.mock.ts
│   │       │   │   │   ├── 📄 angular-dependencies.mock.ts
│   │       │   │   │   ├── 📄 angular-environments.mock.ts
│   │       │   │   │   ├── 📄 angular-initiale-architecture-project.mock.ts
│   │       │   │   │   ├── 📄 angular-install-options.mock.ts
│   │       │   │   │   └── 📄 angular-scripts.mock.ts
│   │       │   │   ├── 📁 mock
│   │       │   │   │   └── 📄 angular-sample-config.json
│   │       │   │   ├── 📁 model
│   │       │   │   │   └── 📄 angular-model.ts
│   │       │   │   ├── 📁 services
│   │       │   │   │   ├── 📄 .gitignore
│   │       │   │   │   ├── 📄 angular.service.ts
│   │       │   │   │   ├── 📄 index.ts
│   │       │   │   │   └── 📁 old
│   │       │   │   │       ├── 📄 angular-generate-app-html.service.ts
│   │       │   │   │       ├── 📄 angular-generate-component.service.ts
│   │       │   │   │       ├── 📄 angular-generate-crud-entity.service.ts
│   │       │   │   │       ├── 📄 angular-generate-dto.service.ts
│   │       │   │   │       ├── 📄 angular-generate-environments.service.ts
│   │       │   │   │       ├── 📄 angular-generate-files-framework.service.ts
│   │       │   │   │       ├── 📄 angular-generate-form-entity.service.ts
│   │       │   │   │       ├── 📄 angular-generate-interface-entity.service.ts
│   │       │   │   │       ├── 📄 angular-generate-mock-entity.service.ts
│   │       │   │   │       ├── 📄 angular-generate-module.service.ts
│   │       │   │   │       ├── 📄 angular-generate-pages.service.ts
│   │       │   │   │       ├── 📄 angular-generate-signal-form-entity.service.ts
│   │       │   │   │       ├── 📄 angular-generate-signal-store-entity.service.ts
│   │       │   │   │       ├── 📄 angular-generate-test.service.ts
│   │       │   │   │       └── 📄 angular-generate-zod-schema-entity.service.ts
│   │       │   │   └── 📁 templates
│   │       │   │       ├── 📄 angular-crud-service.template.ts
│   │       │   │       ├── 📄 angular-dto.template.ts
│   │       │   │       ├── 📄 angular-entity.template.ts
│   │       │   │       ├── 📄 angular-example.template.ts
│   │       │   │       ├── 📄 angular-feature.template.ts
│   │       │   │       ├── 📄 angular-interface.template.ts
│   │       │   │       ├── 📄 angular-module.template.ts
│   │       │   │       ├── 📄 angular-service-template.template.ts
│   │       │   │       ├── 📄 angular-service.template.ts
│   │       │   │       ├── 📄 angular-signal-store-entity.template.ts
│   │       │   │       ├── 📄 angular-test.template.ts
│   │       │   │       ├── 📁 component
│   │       │   │       │   ├── 📄 angular-css-component.template.ts
│   │       │   │       │   ├── 📄 angular-html-component.template.ts
│   │       │   │       │   ├── 📄 angular-spec-component.template.ts
│   │       │   │       │   ├── 📄 angular-ts-component.template.ts
│   │       │   │       │   └── 📁 form
│   │       │   │       │       ├── 📄 angular-form-css-entity.template.ts
│   │       │   │       │       ├── 📄 angular-form-html-entity.template.ts
│   │       │   │       │       ├── 📄 angular-form-spec-entity.template.ts
│   │       │   │       │       └── 📄 angular-form-ts-entity.template.ts
│   │       │   │       └── 📄 index.ts
│   │       │   ├── 📁 drizzle
│   │       │   │   ├── 📄 .gitignore
│   │       │   │   ├── 📁 old
│   │       │   │   ├── 📁 services
│   │       │   │   │   ├── 📄 .gitignore
│   │       │   │   │   └── 📁 old
│   │       │   │   │       ├── 📄 drizzle-generate-config.service.ts
│   │       │   │   │       ├── 📄 drizzle-generate-index-schemas.service.ts
│   │       │   │   │       ├── 📄 drizzle-generate-index-seed.service.ts
│   │       │   │   │       ├── 📄 drizzle-generate-schema-entity.service.ts
│   │       │   │   │       ├── 📄 drizzle-generate-schema.service.ts
│   │       │   │   │       ├── 📄 drizzle-generate-script-create-database.service.ts
│   │       │   │   │       ├── 📄 drizzle-generate-seed-entity.service.ts
│   │       │   │   │       ├── 📄 drizzle-generate-types-db.service.ts
│   │       │   │   │       ├── 📄 drizzle-schema-from-entity.service copy.ts
│   │       │   │   │       └── 📄 drizzle-schema-from-entity.service.ts
│   │       │   │   ├── 📁 templates
│   │       │   │   │   ├── 📄 drizzle-columns.helpers.template.ts
│   │       │   │   │   ├── 📄 drizzle-config-template.ts
│   │       │   │   │   ├── 📄 drizzle-config-url-template.ts
│   │       │   │   │   ├── 📄 drizzle-schemas.template.ts
│   │       │   │   │   ├── 📄 drizzle-seed-entity.template.ts
│   │       │   │   │   ├── 📄 nitro-connection-drizzle-template.ts
│   │       │   │   │   └── 📁 scripts
│   │       │   │   │       └── 📄 drizzle-create-database.template.ts
│   │       │   │   └── 📁 utils
│   │       │   │       └── 📄 generate-value.utils.ts
│   │       │   ├── 📁 electron
│   │       │   │   ├── 📁 config
│   │       │   │   │   ├── 📄 architecture.mock.ts
│   │       │   │   │   ├── 📄 config-ini.mock.ts
│   │       │   │   │   ├── 📄 dependencies.mock.ts
│   │       │   │   │   ├── 📄 environments.mock.ts
│   │       │   │   │   ├── 📄 initiale-architecture-project.mock.ts
│   │       │   │   │   ├── 📄 install-options.mock.ts
│   │       │   │   │   └── 📄 scripts.mock.ts
│   │       │   │   ├── 📁 interfaces
│   │       │   │   │   └── 📄 electron-model.ts
│   │       │   │   ├── 📁 mock
│   │       │   │   │   └── 📄 sample-angular-config.json
│   │       │   │   ├── 📁 services
│   │       │   │   │   ├── 📄 .gitignore
│   │       │   │   │   └── 📁 old
│   │       │   │   │       ├── 📄 electron-generate-controller.service.ts
│   │       │   │   │       ├── 📄 electron-generate-dto.service.ts
│   │       │   │   │       ├── 📄 electron-generate-entity.service.ts
│   │       │   │   │       ├── 📄 electron-generate-files-framework.service.ts
│   │       │   │   │       ├── 📄 electron-generate-interface.service.ts
│   │       │   │   │       ├── 📄 electron-generate-ipcRenderer.service.ts
│   │       │   │   │       ├── 📄 electron-generate-module.service.ts
│   │       │   │   │       ├── 📄 electron-generate-service.service.ts
│   │       │   │   │       └── 📄 electron-generate-test.service.ts
│   │       │   │   └── 📁 templates
│   │       │   │       ├── 📄 electron-controller-template.template.ts
│   │       │   │       ├── 📄 electron-dto-template.template.ts
│   │       │   │       ├── 📄 electron-entity-template.template.ts
│   │       │   │       ├── 📄 electron-interface-template.template.ts
│   │       │   │       ├── 📄 electron-ipc-renderer.template.ts
│   │       │   │       ├── 📄 electron-module-template.template.ts
│   │       │   │       ├── 📄 electron-module.template.ts
│   │       │   │       ├── 📄 electron-service-template.template.ts
│   │       │   │       ├── 📄 electron-test-template.template.ts
│   │       │   │       └── 📄 service-template.template.ts
│   │       │   ├── 📁 mocks
│   │       │   │   ├── 📄 config-init-commun.mock.ts
│   │       │   │   ├── 📄 environments-commun.mock.ts
│   │       │   │   └── 📄 install-options-commun.mock.ts
│   │       │   ├── 📁 nestjs
│   │       │   │   ├── 📁 commun
│   │       │   │   │   └── 📄 readme.md
│   │       │   │   ├── 📁 config
│   │       │   │   │   ├── 📄 nestjs-architecture.mock.ts
│   │       │   │   │   ├── 📄 nestjs-categories-validators-array.ts
│   │       │   │   │   ├── 📄 nestjs-config-ini.mock.ts
│   │       │   │   │   ├── 📄 nestjs-current-validators.ts
│   │       │   │   │   ├── 📄 nestjs-dependencies.mock.ts
│   │       │   │   │   ├── 📄 nestjs-environments.mock.ts
│   │       │   │   │   ├── 📄 nestjs-initiale-architecture-project.mock.ts
│   │       │   │   │   ├── 📄 nestjs-install-options.mock.ts
│   │       │   │   │   ├── 📄 nestjs-scripts.mock.ts
│   │       │   │   │   ├── 📄 nestjs-type-validator.mock.ts
│   │       │   │   │   ├── 📄 nestjs-validators-array.ts
│   │       │   │   │   ├── 📄 nestjs-validators-by-category.ts
│   │       │   │   │   └── 📄 nestjs-validators-with-options.ts.txt
│   │       │   │   ├── 📁 constant
│   │       │   │   │   └── 📄 nestjs-constants.constant.ts
│   │       │   │   ├── 📁 mock
│   │       │   │   │   └── 📄 nestjs-sample-orm-config.json
│   │       │   │   ├── 📁 models
│   │       │   │   │   ├── 📄 nestjs-column-decorators-result.model.ts
│   │       │   │   │   ├── 📄 nestjs-dto-generator-result.model.ts
│   │       │   │   │   ├── 📄 nestjs-dto-property.model.ts
│   │       │   │   │   ├── 📄 nestjs-entity-property.model.ts
│   │       │   │   │   ├── 📄 nestjs-model.ts
│   │       │   │   │   ├── 📄 nestjs-relation-config.model.ts
│   │       │   │   │   └── 📄 nestjs-relationship-result.model.ts
│   │       │   │   ├── 📁 services
│   │       │   │   │   ├── 📄 .gitignore
│   │       │   │   │   └── 📁 old
│   │       │   │   │       ├── 📁 dto
│   │       │   │   │       │   ├── 📄 analyse.md
│   │       │   │   │       │   ├── 📄 erreurs.md
│   │       │   │   │       │   ├── 📄 instruction.md
│   │       │   │   │       │   ├── 📄 nest-get-example-value.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-build-api-property-decorator.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-generate-all-dtos.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-generate-column-description.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-generate-create-dto.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-generate-dto-file.services.ts
│   │       │   │   │       │   ├── 📄 nestjs-generate-dto.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-generate-response-dto.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-generate-update-dto-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-column-decorators.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-column-optional-status.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-dto-suffix.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-relation-decorators.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-transform-decorators.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-type-validation-decorators.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-validation-decorators.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-process-column-for-dto.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-process-relation-for-dto.service.ts
│   │       │   │   │       │   └── 📄 nestjs-should-exclude-column.service.ts
│   │       │   │   │       ├── 📁 entity
│   │       │   │   │       │   ├── 📄 nestjs-build-api-property-entity-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-build-column-options-entity-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-build-import-entity-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-build-import-statements-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-build-relation-decorator-entity-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-build-relation-entity.service.ts
│   │       │   │   │       │   ├── 📄 nestjs-generate-entity-file-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-column-decorator-entity-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-columns-decorators-entity-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-relation-config-entity-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-relationships-entity-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-get-type-mapping-entity-service.ts
│   │       │   │   │       │   ├── 📄 nestjs-process-relationship-entity-service.ts
│   │       │   │   │       │   └── 📄 nestjs-should-add-join-column-entity-service.ts
│   │       │   │   │       ├── 📄 instruction.txt
│   │       │   │   │       ├── 📄 nestjs-account-service.service.ts
│   │       │   │   │       ├── 📄 nestjs-auth.service.ts
│   │       │   │   │       ├── 📄 nestjs-build-api-property.service.ts
│   │       │   │   │       ├── 📄 nestjs-build-imports-dto-entity.service.ts
│   │       │   │   │       ├── 📄 nestjs-command.ts
│   │       │   │   │       ├── 📄 nestjs-config-project.service.ts
│   │       │   │   │       ├── 📄 nestjs-database.service.ts
│   │       │   │   │       ├── 📄 nestjs-environment.service.ts
│   │       │   │   │       ├── 📄 nestjs-generate-controller.service.ts
│   │       │   │   │       ├── 📄 nestjs-generate-entity.service.ts
│   │       │   │   │       ├── 📄 nestjs-generate-feature.service.ts
│   │       │   │   │       ├── 📄 nestjs-generate-files-framework.service.ts
│   │       │   │   │       ├── 📄 nestjs-generate-interface.service.ts
│   │       │   │   │       ├── 📄 nestjs-generate-mock.service.ts
│   │       │   │   │       ├── 📄 nestjs-generate-module.service.ts
│   │       │   │   │       ├── 📄 nestjs-generate-service.service.ts
│   │       │   │   │       ├── 📄 nestjs-generate-test.service.ts
│   │       │   │   │       ├── 📄 nestjs-relationship-type-orm.service.ts
│   │       │   │   │       ├── 📄 nestjs-tests.service.ts
│   │       │   │   │       └── 📁 old_dto
│   │       │   │   │           ├── 📄 analyse.md
│   │       │   │   │           ├── 📄 erreurs.md
│   │       │   │   │           ├── 📄 instruction.md
│   │       │   │   │           ├── 📄 nest-get-example-value.service.ts
│   │       │   │   │           ├── 📄 nestjs-build-api-property-decorator.service.ts
│   │       │   │   │           ├── 📄 nestjs-generate-all-dtos.service.ts
│   │       │   │   │           ├── 📄 nestjs-generate-column-description.service.ts
│   │       │   │   │           ├── 📄 nestjs-generate-create-dto.service.ts
│   │       │   │   │           ├── 📄 nestjs-generate-dto-file.services.ts
│   │       │   │   │           ├── 📄 nestjs-generate-dto.service.ts
│   │       │   │   │           ├── 📄 nestjs-generate-response-dto.service.ts
│   │       │   │   │           ├── 📄 nestjs-generate-update-dto-service.ts
│   │       │   │   │           ├── 📄 nestjs-get-column-decorators.service.ts
│   │       │   │   │           ├── 📄 nestjs-get-column-optional-status.service.ts
│   │       │   │   │           ├── 📄 nestjs-get-dto-suffix.service.ts
│   │       │   │   │           ├── 📄 nestjs-get-relation-decorators.service.ts
│   │       │   │   │           ├── 📄 nestjs-get-transform-decorators.service.ts
│   │       │   │   │           ├── 📄 nestjs-get-type-validation-decorators.service.ts
│   │       │   │   │           ├── 📄 nestjs-get-validation-decorators.service.ts
│   │       │   │   │           ├── 📄 nestjs-process-column-for-dto.service.ts
│   │       │   │   │           ├── 📄 nestjs-process-relation-for-dto.service.ts
│   │       │   │   │           └── 📄 nestjs-should-exclude-column.service.ts
│   │       │   │   └── 📁 templates
│   │       │   │       ├── 📁 account
│   │       │   │       │   ├── 📁 dto
│   │       │   │       │   │   └── 📄 nestjs-create-account-dto-template.ts
│   │       │   │       │   ├── 📁 entity
│   │       │   │       │   ├── 📁 interfaces
│   │       │   │       │   │   └── 📄 nestjs-account-interface-template.ts
│   │       │   │       │   ├── 📄 nestjs-account-controller-template.ts
│   │       │   │       │   ├── 📄 nestjs-account-entity-template.ts
│   │       │   │       │   ├── 📄 nestjs-account-module-template.ts
│   │       │   │       │   └── 📄 nestjs-account-service-template.ts
│   │       │   │       ├── 📁 authentification
│   │       │   │       │   ├── 📁 decorators
│   │       │   │       │   │   ├── 📄 nestjs-permissions-decorator-template.ts
│   │       │   │       │   │   ├── 📄 nestjs-permissions-decorator.ts
│   │       │   │       │   │   ├── 📄 nestjs-roles-decorator-template.ts
│   │       │   │       │   │   └── 📄 nestjs-roles-decorator.ts
│   │       │   │       │   ├── 📁 dto
│   │       │   │       │   │   └── 📄 nestjs-login-dto.ts
│   │       │   │       │   ├── 📁 guards
│   │       │   │       │   │   ├── 📄 nestjs-auth-jwt-guard-mock-ts.txt
│   │       │   │       │   │   ├── 📄 nestjs-jwt-auth-guard-template.ts
│   │       │   │       │   │   ├── 📄 nestjs-permissions-guard-template.ts
│   │       │   │       │   │   └── 📄 nestjs-roles-guard-template.ts
│   │       │   │       │   ├── 📁 interfaces
│   │       │   │       │   │   └── 📄 nestjs-jwt-payload-interface-template.ts
│   │       │   │       │   ├── 📄 nestjs-auth-controller-mock.ts
│   │       │   │       │   ├── 📄 nestjs-auth-doc-template.ts
│   │       │   │       │   ├── 📄 nestjs-auth-module-template.ts
│   │       │   │       │   ├── 📄 nestjs-auth-service-template.ts
│   │       │   │       │   └── 📁 strategies
│   │       │   │       │       └── 📄 nestjs-jwt-strategy-template.ts
│   │       │   │       ├── 📁 config
│   │       │   │       │   ├── 📁 json
│   │       │   │       │   │   ├── 📄 nestjs-architecture-initial.json
│   │       │   │       │   │   ├── 📄 nestjs-dependencies-list.json
│   │       │   │       │   │   ├── 📄 nestjs-dependencies.json
│   │       │   │       │   │   ├── 📄 nestjs-dev-dependencies.json
│   │       │   │       │   │   ├── 📄 nestjs-dev-dependencies.json~
│   │       │   │       │   │   ├── 📄 nestjs-dot-env.json
│   │       │   │       │   │   ├── 📄 nestjs-environments.json
│   │       │   │       │   │   ├── 📄 nestjs-install-options.json
│   │       │   │       │   │   ├── 📄 nestjs-install-options.json~
│   │       │   │       │   │   ├── 📄 nestjs-packagejson.json
│   │       │   │       │   │   ├── 📄 nestjs-packagejson.json~
│   │       │   │       │   │   ├── 📄 nestjs-ressources.json
│   │       │   │       │   │   ├── 📄 nestjs-ressources.json~
│   │       │   │       │   │   └── 📄 nestjs-tsconfigjson.json
│   │       │   │       │   ├── 📄 nestjs-app-module-template.ts
│   │       │   │       │   ├── 📄 nestjs-environments-mock.ts
│   │       │   │       │   ├── 📄 nestjs-environments-template.ts
│   │       │   │       │   └── 📄 nestjs-main-template.ts
│   │       │   │       ├── 📁 controller
│   │       │   │       │   ├── 📄 controller-restfull.md
│   │       │   │       │   ├── 📄 nestjs-controller-template.ts
│   │       │   │       │   ├── 📄 nestjs-generic-controlle-template.ts
│   │       │   │       │   ├── 📄 nestjs-restfull-controller-template.ts
│   │       │   │       │   ├── 📄 nestjs-test-controller-spec-template.ts
│   │       │   │       │   ├── 📄 old-nestjs-controller-template.ts
│   │       │   │       │   └── 📄 old-nestjs-restfull-controller-template.ts
│   │       │   │       ├── 📁 database
│   │       │   │       │   ├── 📄 nestjs-data-source-template.ts
│   │       │   │       │   └── 📄 nestjs-database-config-template.ts
│   │       │   │       ├── 📁 doc
│   │       │   │       │   └── 📄 nestjs-dependancies.md
│   │       │   │       ├── 📁 dto
│   │       │   │       │   ├── 📄 doc.md
│   │       │   │       │   ├── 📄 nestjs-create-dto-template.ts
│   │       │   │       │   ├── 📄 nestjs-dto-template.ts
│   │       │   │       │   ├── 📄 nestjs-entity-dto-template.ts
│   │       │   │       │   ├── 📄 nestjs-response-dto-template.ts
│   │       │   │       │   ├── 📄 nestjs-update-dto-template.ts
│   │       │   │       │   ├── 📄 old-nestjs-create-dto-template.ts
│   │       │   │       │   ├── 📄 old-nestjs-response-dto-template.ts
│   │       │   │       │   ├── 📄 old-nestjs-update-dto-template.ts
│   │       │   │       │   ├── 📄 readme.md
│   │       │   │       │   └── 📄 should-exclude-column.ts
│   │       │   │       ├── 📁 entities
│   │       │   │       │   ├── 📄 convention.md
│   │       │   │       │   ├── 📄 entities.md
│   │       │   │       │   ├── 📄 nestjs-entity-template-copy.ts
│   │       │   │       │   ├── 📄 nestjs-entity-template.ts
│   │       │   │       │   ├── 📄 nestjs-generic-entity-template.ts
│   │       │   │       │   ├── 📄 nestjs-relations.md
│   │       │   │       │   ├── 📄 nestjs-repository-template.ts
│   │       │   │       │   ├── 📄 nestjsGetTypeMappingEntity.service.ts
│   │       │   │       │   ├── 📄 old-nestjs-entity-template.ts
│   │       │   │       │   └── 📄 readme.md
│   │       │   │       ├── 📁 feartures-services
│   │       │   │       ├── 📁 fixtures
│   │       │   │       │   └── 📄 nestjs-fixture-template.ts
│   │       │   │       ├── 📁 helpers
│   │       │   │       │   └── 📁 utils
│   │       │   │       │       └── 📄 date-transformer.ts
│   │       │   │       ├── 📁 interface
│   │       │   │       │   ├── 📄 nestjs-entity-interface-template.ts
│   │       │   │       │   └── 📄 nestjs-interface-template.ts
│   │       │   │       ├── 📁 mock
│   │       │   │       ├── 📁 module
│   │       │   │       │   ├── 📄 nestjs-entity-module-template.ts
│   │       │   │       │   └── 📄 nestjs-generic-module-template.ts
│   │       │   │       ├── 📁 seeds
│   │       │   │       │   ├── 📄 nestjs-entity-seed-template.ts
│   │       │   │       │   ├── 📄 nestjs-seed-module-template.ts
│   │       │   │       │   └── 📄 nestjs-seed-template.ts
│   │       │   │       ├── 📁 service
│   │       │   │       │   ├── 📄 nestjs-crud-service-template.ts
│   │       │   │       │   ├── 📄 nestjs-generic-service-template.ts
│   │       │   │       │   ├── 📄 nestjs-service-template.ts
│   │       │   │       │   ├── 📄 nestjs-test-service-spec-template.ts
│   │       │   │       │   ├── 📄 nestjs-user-service.ts
│   │       │   │       │   ├── 📄 old-nestjs-crud-service-template.ts
│   │       │   │       │   └── 📄 old-nestjs-service-template.ts
│   │       │   │       ├── 📁 test
│   │       │   │       │   └── 📄 nestjs-test-template.ts
│   │       │   │       ├── 📁 type-orm
│   │       │   │       │   └── 📄 nestjs-type-orm-config-template.ts
│   │       │   │       ├── 📁 user
│   │       │   │       │   ├── 📄 nestjs-users-module-template.ts
│   │       │   │       │   └── 📄 nestjs-users-service-template.ts
│   │       │   │       └── 📁 validation-contraints
│   │       │   │           ├── 📄 nestjs-contraint-template.ts
│   │       │   │           └── 📄 nestjs-validation-template.ts
│   │       │   ├── 📁 nitro
│   │       │   │   ├── 📄 auth-cookie-http-only.md
│   │       │   │   ├── 📄 auth.md
│   │       │   │   ├── 📁 config
│   │       │   │   │   ├── 📄 nitro-architecture.mock.ts
│   │       │   │   │   ├── 📄 nitro-config-ini.mock.ts
│   │       │   │   │   ├── 📄 nitro-dependencies.mock.ts
│   │       │   │   │   ├── 📄 nitro-environments.mock.ts
│   │       │   │   │   ├── 📄 nitro-initiale-architecture-project.mock.ts
│   │       │   │   │   ├── 📄 nitro-install-options.mock.ts
│   │       │   │   │   └── 📄 nitro-scripts.mock.ts
│   │       │   │   ├── 📄 readme.md
│   │       │   │   ├── 📁 services
│   │       │   │   │   ├── 📄 .gitignore
│   │       │   │   │   ├── 📄 dot-env-generate.service.ts
│   │       │   │   │   └── 📁 old
│   │       │   │   │       ├── 📄 nitro-generate-config-drizzle.service.txt
│   │       │   │   │       ├── 📄 nitro-generate-connection-drizzle.service.ts
│   │       │   │   │       ├── 📄 nitro-generate-files-framework.service.ts
│   │       │   │   │       ├── 📄 nitro-generate-repository-entity.service.ts
│   │       │   │   │       ├── 📄 nitro-generate-routes-entity.service.ts
│   │       │   │   │       ├── 📄 nitro-generate-service-entity.service.ts
│   │       │   │   │       └── 📄 nitro-generate-specific-file-.service.ts
│   │       │   │   └── 📁 templates
│   │       │   │       ├── 📁 config
│   │       │   │       ├── 📁 doc
│   │       │   │       │   └── 📄 readme.template.ts
│   │       │   │       ├── 📁 models
│   │       │   │       │   ├── 📄 model-base-repository-template.ts
│   │       │   │       │   └── 📄 model-base-service-template.ts
│   │       │   │       ├── 📁 repositories
│   │       │   │       │   ├── 📄 base-repository-template.ts
│   │       │   │       │   ├── 📄 drizzle-entity-repository-template copy.ts
│   │       │   │       │   ├── 📄 drizzle-entity-repository-template-v1.ts
│   │       │   │       │   ├── 📄 drizzle-entity-repository-template-v2.ts
│   │       │   │       │   ├── 📄 drizzle-entity-repository-template.ts
│   │       │   │       │   └── 📄 readme.md
│   │       │   │       ├── 📁 routes
│   │       │   │       │   ├── 📄 nitro-id-delete-template.ts
│   │       │   │       │   ├── 📄 nitro-id-get-template.ts
│   │       │   │       │   ├── 📄 nitro-id-patch-template.ts
│   │       │   │       │   ├── 📄 nitro-id-put-template.ts
│   │       │   │       │   ├── 📄 nitro-index-get-template.ts
│   │       │   │       │   ├── 📄 nitro-index-post-template.ts
│   │       │   │       │   └── 📄 readme.md
│   │       │   │       ├── 📁 services
│   │       │   │       │   ├── 📄 base-service-template.ts
│   │       │   │       │   ├── 📄 nitro-entity-service-template copy.ts
│   │       │   │       │   ├── 📄 nitro-entity-service-template.objet.ts
│   │       │   │       │   └── 📄 nitro-entity-service-template.ts
│   │       │   │       └── 📁 utils
│   │       │   │           ├── 📄 dot.env.template.ts
│   │       │   │           ├── 📄 logger.template.ts
│   │       │   │           ├── 📄 nitro-handle-api-error-template.ts
│   │       │   │           └── 📄 nitro-utils-db-template.ts
│   │       │   ├── 📁 nuxt
│   │       │   │   ├── 📁 config
│   │       │   │   │   ├── 📄 nuxt-architecture.mock.ts
│   │       │   │   │   ├── 📄 nuxt-config-generator.ts
│   │       │   │   │   ├── 📄 nuxt-config-ini.mock.ts
│   │       │   │   │   ├── 📄 nuxt-dependencies.mock.ts
│   │       │   │   │   ├── 📄 nuxt-environments.mock.ts
│   │       │   │   │   ├── 📄 nuxt-initiale-architecture-project.mock.ts
│   │       │   │   │   ├── 📄 nuxt-install-options.mock.ts
│   │       │   │   │   └── 📄 nuxt-scripts.mock.ts
│   │       │   │   ├── 📄 gene_fram.md
│   │       │   │   ├── 📁 mock
│   │       │   │   │   ├── 📁 layers
│   │       │   │   │   │   ├── 📁 core-app
│   │       │   │   │   │   │   └── 📄 nuxt.config.ts
│   │       │   │   │   │   └── 📁 core-ui
│   │       │   │   │   │       ├── 📁 assets
│   │       │   │   │   │       │   └── 📁 css
│   │       │   │   │   │       │       └── 📄 main.css
│   │       │   │   │   │       ├── 📁 composables
│   │       │   │   │   │       │   └── 📄 useTheme.ts
│   │       │   │   │   │       ├── 📄 nuxt.config.ts
│   │       │   │   │   │       └── 📁 plugins
│   │       │   │   │   │           └── 📄 dayjs.ts
│   │       │   │   │   ├── 📄 mock.md
│   │       │   │   │   └── 📄 sample-nuxt-config.json
│   │       │   │   ├── 📁 models
│   │       │   │   │   ├── 📄 nuxt-config-ts.model.ts
│   │       │   │   │   └── 📄 nuxt-model.ts
│   │       │   │   ├── 📄 readme.md
│   │       │   │   ├── 📁 services
│   │       │   │   │   ├── 📄 .gitignore
│   │       │   │   │   ├── 📄 generate-controller.service.ts
│   │       │   │   │   ├── 📄 generate-dto.service.ts
│   │       │   │   │   ├── 📄 generate-entity.service.ts
│   │       │   │   │   ├── 📄 generate-layout.service.ts
│   │       │   │   │   ├── 📄 generate-module.service.ts
│   │       │   │   │   ├── 📄 generate-service.service.ts
│   │       │   │   │   ├── 📄 generate-test.service.ts
│   │       │   │   │   ├── 📄 nuxt-generate-component.service.ts
│   │       │   │   │   ├── 📄 nuxt-generate-files-css.service.ts
│   │       │   │   │   ├── 📄 nuxt-generate-files-framework.service.ts
│   │       │   │   │   ├── 📄 nuxt-generate-form-entity-component.service.ts
│   │       │   │   │   ├── 📄 nuxt-generate-model-schema-entity.service.ts
│   │       │   │   │   ├── 📄 nuxt-generate-model.service.ts
│   │       │   │   │   ├── 📄 nuxt-generate-page.service.ts
│   │       │   │   │   ├── 📄 nuxt-generate-store.entity.service.ts
│   │       │   │   │   └── 📄 nuxt-update-file-nuxt-config-ts.service.ts
│   │       │   │   ├── 📁 templates
│   │       │   │   │   ├── 📁 components
│   │       │   │   │   │   ├── 📄 get-component-template.template.ts
│   │       │   │   │   │   ├── 📄 nuxt-app.template.ts
│   │       │   │   │   │   ├── 📄 nuxt-from-entity-component-template.ts
│   │       │   │   │   │   └── 📄 nuxt-page.template.ts
│   │       │   │   │   ├── 📁 css
│   │       │   │   │   │   ├── 📄 nuxt-main-css.template.ts
│   │       │   │   │   │   └── 📄 nuxt-tailwind-css.template.ts
│   │       │   │   │   ├── 📄 get-layout-template.template.ts
│   │       │   │   │   ├── 📄 get-nuxt-controller-template.template.ts
│   │       │   │   │   ├── 📄 get-nuxt-dto-template.template.ts
│   │       │   │   │   ├── 📄 get-nuxt-entity-template.template.ts
│   │       │   │   │   ├── 📄 get-nuxt-interface-template.template.ts
│   │       │   │   │   ├── 📄 get-nuxt-module-template.template.ts
│   │       │   │   │   ├── 📄 get-nuxt-service-template.template.ts
│   │       │   │   │   ├── 📄 get-nuxt-test-template.template.ts
│   │       │   │   │   ├── 📄 get-page-component-template.template.ts
│   │       │   │   │   ├── 📁 models
│   │       │   │   │   │   └── 📄 nuxt-api-response.template.ts
│   │       │   │   │   ├── 📁 stores
│   │       │   │   │   │   ├── 📄 nuxt-store-actions.template.ts
│   │       │   │   │   │   ├── 📄 nuxt-store-getters.template.ts
│   │       │   │   │   │   └── 📄 nuxt-store.template.ts
│   │       │   │   │   └── 📄 tree_template.md
│   │       │   │   └── 📁 templates-ejs
│   │       │   │       ├── 📁 apps
│   │       │   │       │   └── 📁 web
│   │       │   │       │       ├── 📄 nuxt.config.ts.ejs
│   │       │   │       │       ├── 📄 package.json.ejs
│   │       │   │       │       └── 📁 pages
│   │       │   │       │           └── 📄 index.vue.ejs
│   │       │   │       ├── 📁 layers
│   │       │   │       │   ├── 📁 auth
│   │       │   │       │   │   ├── 📁 composables
│   │       │   │       │   │   │   └── 📄 useAuth.ts.ejs
│   │       │   │       │   │   ├── 📄 nuxt.config.ts.ejs
│   │       │   │       │   │   ├── 📁 pages
│   │       │   │       │   │   │   ├── 📄 login.vue.ejs
│   │       │   │       │   │   │   └── 📄 register.vue.ejs
│   │       │   │       │   │   ├── 📁 server
│   │       │   │       │   │   │   └── 📁 api
│   │       │   │       │   │   │       └── 📄 auth.login.post.ts.ejs
│   │       │   │       │   │   └── 📁 stores
│   │       │   │       │   │       └── 📄 auth.store.ts.ejs
│   │       │   │       │   ├── 📁 core-app
│   │       │   │       │   │   ├── 📄 app.config.ts.ejs
│   │       │   │       │   │   ├── 📄 app.vue.ejs
│   │       │   │       │   │   ├── 📁 assets
│   │       │   │       │   │   │   └── 📁 css
│   │       │   │       │   │   │       └── 📄 main.css.ejs
│   │       │   │       │   │   ├── 📁 composables
│   │       │   │       │   │   │   ├── 📄 useAuth.ts.ejs
│   │       │   │       │   │   │   └── 📄 useFetchApi.ts.ejs
│   │       │   │       │   │   ├── 📄 error.vue.ejs
│   │       │   │       │   │   ├── 📁 layouts
│   │       │   │       │   │   │   ├── 📄 admin.vue.ejs
│   │       │   │       │   │   │   └── 📄 default.vue.ejs
│   │       │   │       │   │   ├── 📁 middleware
│   │       │   │       │   │   │   ├── 📄 admin.ts.ejs
│   │       │   │       │   │   │   └── 📄 auth.global.ts.ejs
│   │       │   │       │   │   ├── 📄 nuxt.config.ts.ejs
│   │       │   │       │   │   ├── 📁 pages
│   │       │   │       │   │   │   ├── 📄 [slug].vue.ejs
│   │       │   │       │   │   │   ├── 📄 about.vue.ejs
│   │       │   │       │   │   │   ├── 📁 admin
│   │       │   │       │   │   │   │   └── 📄 index.vue.ejs
│   │       │   │       │   │   │   └── 📄 index.vue.ejs
│   │       │   │       │   │   ├── 📁 plugins
│   │       │   │       │   │   │   └── 📄 axios.ts.ejs
│   │       │   │       │   │   ├── 📁 public
│   │       │   │       │   │   │   ├── 📄 favicon.ico.ejs
│   │       │   │       │   │   │   └── 📄 robots.txt.ejs
│   │       │   │       │   │   ├── 📁 server
│   │       │   │       │   │   │   ├── 📁 api
│   │       │   │       │   │   │   │   └── 📄 health.get.ts.ejs
│   │       │   │       │   │   │   ├── 📁 middleware
│   │       │   │       │   │   │   │   └── 📄 logs.ts.ejs
│   │       │   │       │   │   │   └── 📁 services
│   │       │   │       │   │   │       └── 📄 db.ts.ejs
│   │       │   │       │   │   ├── 📁 stores
│   │       │   │       │   │   │   ├── 📄 settings.store.ts.ejs
│   │       │   │       │   │   │   └── 📄 user.store.ts.ejs
│   │       │   │       │   │   ├── 📁 types
│   │       │   │       │   │   │   └── 📄 global.d.ts.ejs
│   │       │   │       │   │   └── 📁 utils
│   │       │   │       │   │       ├── 📄 formatDate.ts.ejs
│   │       │   │       │   │       └── 📄 validators.ts.ejs
│   │       │   │       │   └── 📁 core-ui
│   │       │   │       │       ├── 📁 assets
│   │       │   │       │       │   └── 📁 css
│   │       │   │       │       │       └── 📄 main.css.ejs
│   │       │   │       │       ├── 📁 composables
│   │       │   │       │       │   └── 📄 useTheme.ts.ejs
│   │       │   │       │       ├── 📄 nuxt.config.ts.ejs
│   │       │   │       │       └── 📁 plugins
│   │       │   │       │           └── 📄 dayjs.ts.ejs
│   │       │   │       └── 📁 root
│   │       │   │           ├── 📄 .gitignore.ejs
│   │       │   │           ├── 📄 package.json.ejs
│   │       │   │           └── 📄 pnpm-workspace.yaml.ejs
│   │       │   ├── 📁 symfony
│   │       │   │   ├── 📁 commands
│   │       │   │   │   └── 📄 symfony.command.ts
│   │       │   │   ├── 📁 config
│   │       │   │   │   ├── 📄 symfony-architecture.mock.ts
│   │       │   │   │   ├── 📄 symfony-config-ini.mock.ts
│   │       │   │   │   ├── 📄 symfony-dependencies.mock.ts
│   │       │   │   │   ├── 📄 symfony-environments.mock.ts
│   │       │   │   │   ├── 📄 symfony-initiale-architecture-project.mock.ts
│   │       │   │   │   ├── 📄 symfony-install-options.mock.ts
│   │       │   │   │   └── 📄 symfony-scripts.mock.ts
│   │       │   │   ├── 📁 constant
│   │       │   │   │   └── 📄 symfony-constants.constant.ts
│   │       │   │   ├── 📁 factories
│   │       │   │   │   └── 📄 symfony-file.factory.ts
│   │       │   │   ├── 📁 interfaces
│   │       │   │   │   └── 📄 symfony-symfony-model.php
│   │       │   │   ├── 📁 mock
│   │       │   │   │   └── 📄 symfony-sample-symfony-config.yaml
│   │       │   │   ├── 📁 services
│   │       │   │   │   ├── 📄 .gitignore
│   │       │   │   │   ├── 📁 commun
│   │       │   │   │   │   ├── 📄 symfony-create-attribute-orm.service.ts
│   │       │   │   │   │   ├── 📄 symfony-create-attribute-validation.service.ts
│   │       │   │   │   │   └── 📄 symfony-get-attribute-type-orm.ts
│   │       │   │   │   ├── 📁 old
│   │       │   │   │   │   ├── 📁 api-plaform
│   │       │   │   │   │   │   ├── 📄 api-plaform-generate-files-framework.service.ts
│   │       │   │   │   │   │   ├── 📄 api-plaform-read-doc-jsonld.service.ts
│   │       │   │   │   │   │   ├── 📄 api-plaform-save-doc-jsonld.service.ts
│   │       │   │   │   │   │   ├── 📄 api-platform-doc-jsonld.service.ts
│   │       │   │   │   │   │   ├── 📄 api-platform-entity-dto.service.ts
│   │       │   │   │   │   │   ├── 📄 api-platform-entity-mapper.service.ts
│   │       │   │   │   │   │   ├── 📄 api-platform-entity-processor.service.ts
│   │       │   │   │   │   │   ├── 📄 api-platform-entity-provider.service.ts
│   │       │   │   │   │   │   ├── 📄 api-platform-entity.service.ts
│   │       │   │   │   │   │   └── 📄 api-platform-services.service.ts
│   │       │   │   │   │   ├── 📁 dto
│   │       │   │   │   │   ├── 📁 entity
│   │       │   │   │   │   │   └── 📄 readme.md
│   │       │   │   │   │   ├── 📄 old-symfony-generate-entities.service.ts
│   │       │   │   │   │   ├── 📄 symfony-databases.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-accessors-relation.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-accessors-scalar.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-architecture.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-command.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-crud-entity.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-dtos.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-entities.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-environments.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-files-framework.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-fixtures.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-relationships.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-state-processor.service.ts
│   │       │   │   │   │   ├── 📄 symfony-generate-state-provider.service.ts
│   │       │   │   │   │   ├── 📄 symfony-test.service.ts
│   │       │   │   │   │   └── 📄 symfony-validation.service.ts
│   │       │   │   │   └── 📄 symfony.service.ts
│   │       │   │   ├── 📁 templates
│   │       │   │   │   ├── 📄 .gitignore
│   │       │   │   │   ├── 📁 api-platform
│   │       │   │   │   │   ├── 📄 api-platform-entity-mapper.template.ts
│   │       │   │   │   │   ├── 📄 api-platform-entity-processor.template.ts
│   │       │   │   │   │   ├── 📄 api-platform-entity.template.ts
│   │       │   │   │   │   ├── 📄 api-platform-services.template.ts
│   │       │   │   │   │   ├── 📁 dtos
│   │       │   │   │   │   │   ├── 📄 api-platform-entity-collection-dto.template.ts
│   │       │   │   │   │   │   ├── 📄 api-platform-entity-create-dto.template.ts
│   │       │   │   │   │   │   ├── 📄 api-platform-entity-item-dto.template.ts
│   │       │   │   │   │   │   ├── 📄 api-platform-entity-ressource-dto.template.ts
│   │       │   │   │   │   │   └── 📄 api-platform-entity-update-dto.template.ts
│   │       │   │   │   │   ├── 📁 mapper
│   │       │   │   │   │   │   ├── 📄 resolve-iri.template.ts
│   │       │   │   │   │   │   ├── 📄 scalar-dto-to-entity.template.ts
│   │       │   │   │   │   │   ├── 📄 scalar-entity-to-dto.template.ts
│   │       │   │   │   │   │   ├── 📄 to-iri-list.template.ts
│   │       │   │   │   │   │   ├── 📄 to-many-dto-to-entity.template.ts
│   │       │   │   │   │   │   ├── 📄 to-many-entity-to-dto.template.ts
│   │       │   │   │   │   │   ├── 📄 to-one-dto-to-entity.template.ts
│   │       │   │   │   │   │   └── 📄 to-one-entity-to-dto.template.ts
│   │       │   │   │   │   ├── 📁 services
│   │       │   │   │   │   │   └── 📄 iri-from-resource.template.ts
│   │       │   │   │   │   └── 📁 states
│   │       │   │   │   │       ├── 📁 processors
│   │       │   │   │   │       │   ├── 📄 api-platform-entity-delete-processor.template.ts
│   │       │   │   │   │       │   ├── 📄 api-platform-entity-post-processor.template.ts
│   │       │   │   │   │       │   └── 📄 api-platform-entity-update-processor.template.ts
│   │       │   │   │   │       └── 📁 providers
│   │       │   │   │   │           ├── 📄 api-platform-entity-collection-provider.template.ts
│   │       │   │   │   │           └── 📄 api-platform-entity-item-provider.template.ts
│   │       │   │   │   ├── 📁 old
│   │       │   │   │   │   ├── 📁 bundles
│   │       │   │   │   │   │   ├── 📄 symfony-env-lexik-jwt-authentication.template.ts
│   │       │   │   │   │   │   ├── 📄 symfony-env-mailer.template.ts
│   │       │   │   │   │   │   └── 📄 symfony-env-nelmio.template.ts
│   │       │   │   │   │   ├── 📁 command
│   │       │   │   │   │   │   └── 📄 symfony-create-all-crud-entities-command.php.template.ts
│   │       │   │   │   │   └── 📁 dto
│   │       │   │   │   │       ├── 📄 symfony-create-dto-template.ts
│   │       │   │   │   │       ├── 📄 symfony-response-dto-template.ts
│   │       │   │   │   │       └── 📄 symfony-update-dto-template.ts
│   │       │   │   │   ├── 📄 symfony-bundle-template.template.ts
│   │       │   │   │   ├── 📄 symfony-controller.template.ts
│   │       │   │   │   ├── 📄 symfony-dto.template.ts
│   │       │   │   │   ├── 📄 symfony-entity.template.ts
│   │       │   │   │   ├── 📄 symfony-env-database-url.template.ts
│   │       │   │   │   ├── 📄 symfony-environment.template.ts
│   │       │   │   │   ├── 📄 symfony-get-accessor-relation.template.ts
│   │       │   │   │   ├── 📄 symfony-get-accessor.template.ts
│   │       │   │   │   ├── 📄 symfony-repository.template.ts
│   │       │   │   │   ├── 📄 symfony-service.template.ts
│   │       │   │   │   ├── 📄 symfony-set-accessor.template.ts
│   │       │   │   │   ├── 📄 symfony-state-processor-template.ts
│   │       │   │   │   ├── 📄 symfony-state-provider-template.ts
│   │       │   │   │   └── 📄 symfony-test.template.ts
│   │       │   │   ├── 📁 types
│   │       │   │   │   └── 📄 api-platform-doc-json-ld.type.ts
│   │       │   │   └── 📁 utils
│   │       │   │       └── 📄 mapping.ts
│   │       │   ├── 📁 utils
│   │       │   │   └── 📄 utils.ts
│   │       │   └── 📁 vue
│   │       │       ├── 📁 config
│   │       │       │   ├── 📄 vue-architecture.mock.ts
│   │       │       │   ├── 📄 vue-config-generator.ts
│   │       │       │   ├── 📄 vue-config-ini.mock.ts
│   │       │       │   ├── 📄 vue-dependencies.mock.ts
│   │       │       │   ├── 📄 vue-environments.mock.ts
│   │       │       │   ├── 📄 vue-initiale-architecture-project.mock.ts
│   │       │       │   ├── 📄 vue-install-options.mock.ts
│   │       │       │   └── 📄 vue-scripts.mock.ts
│   │       │       ├── 📁 services
│   │       │       │   ├── 📄 vue-generate-component.service.ts
│   │       │       │   ├── 📄 vue-generate-dto.service.ts
│   │       │       │   ├── 📄 vue-generate-entity.service.ts
│   │       │       │   ├── 📄 vue-generate-files-framework.service.ts
│   │       │       │   ├── 📄 vue-generate-interface.service.ts
│   │       │       │   ├── 📄 vue-generate-service.service.ts
│   │       │       │   ├── 📄 vue-generate-store.service.ts
│   │       │       │   └── 📄 vue-generate-test.service.ts
│   │       │       └── 📁 templates
│   │       │           ├── 📄 vue-component-template.template.ts
│   │       │           ├── 📄 vue-dto-template.template.ts
│   │       │           ├── 📄 vue-entity-template.template.ts
│   │       │           ├── 📄 vue-interface-template.template.ts
│   │       │           ├── 📄 vue-service-template.template.ts
│   │       │           ├── 📄 vue-store-template.template.ts
│   │       │           └── 📄 vue-test-template.template.ts
│   │       ├── 📁 interfaces
│   │       │   ├── 📄 framework-service.interface.ts
│   │       │   └── 📄 framework.interface.ts
│   │       ├── 📁 models
│   │       │   ├── 📄 autre.ts
│   │       │   ├── 📄 database.model.ts
│   │       │   ├── 📄 framework-commun.model.ts
│   │       │   └── 📄 package-json.model.ts
│   │       ├── 📄 readme.md
│   │       └── 📁 tools
│   │           └── 📄 rename_files.py
│   ├── 📄 index.ts
│   ├── 📁 mcp
│   │   ├── 📄 McpCommand.ts.txt
│   │   ├── 📄 mcp-commands.ts.txt
│   │   ├── 📄 mcp-process-utils.ts
│   │   ├── 📄 mcp-server.ts
│   │   └── 📄 mcp-server.ts.txt
│   ├── 📁 plugins
│   │   ├── 📄 architect.plugin.js
│   │   ├── 📁 blague
│   │   │   ├── 📄 blague.service.js
│   │   │   └── 📄 manifest.json
│   │   ├── 📄 doc.plugin.js
│   │   ├── 📄 hello.plugin.js
│   │   ├── 📁 symfony
│   │   │   ├── 📄 index.js
│   │   │   ├── 📄 manifest.json
│   │   │   ├── 📄 symfony.service.js
│   │   │   └── 📁 templates
│   │   ├── 📄 task_manager.data.json
│   │   ├── 📄 task_manager.plugin.js
│   │   ├── 📄 task_manager_cli.plugin.js
│   │   ├── 📄 task_manager_sql_lite.plugin.js
│   │   ├── 📄 tasks.db
│   │   ├── 📄 test.plugin.js
│   │   └── 📄 weather.plugin.js
│   ├── 📁 services
│   │   ├── 📁 __tests__
│   │   │   ├── 📄 case-service.test.ts
│   │   │   ├── 📄 file-system.service.spec.ts
│   │   │   ├── 📄 logger-service.test.ts.txt
│   │   │   ├── 📄 services-container.test.ts
│   │   │   └── 📄 shell-service.spec.ts
│   │   ├── 📄 ai.service.ts
│   │   ├── 📄 architecture.service.ts
│   │   ├── 📄 ast.service.ts
│   │   ├── 📄 base-generator.service.ts
│   │   ├── 📄 base-service.service.ts
│   │   ├── 📄 case.service.ts
│   │   ├── 📄 config.service.ts
│   │   ├── 📄 data-manager.service.ts
│   │   ├── 📄 file-system.service.ts
│   │   ├── 📄 generate-dto.service.ts
│   │   ├── 📄 generator.service.ts
│   │   ├── 📄 git.service.ts
│   │   ├── 📄 handler-error.service.ts
│   │   ├── 📄 logger.service.ts
│   │   ├── 📄 path.service.ts
│   │   ├── 📄 plugin.service.ts
│   │   ├── 📄 prompt.service.ts
│   │   ├── 📄 services-container.ts
│   │   ├── 📄 services-container.ts.txt
│   │   ├── 📄 shell.service.ts
│   │   ├── 📄 state.service.ts
│   │   ├── 📄 task-manager.service.ts
│   │   ├── 📄 template.factory.ts
│   │   ├── 📄 template.service.ts
│   │   ├── 📄 test-error-handler.ts
│   │   └── 📄 tool.service.ts
│   ├── 📁 templates
│   │   ├── 📄 class.ts.txt
│   │   ├── 📄 manifest.ejs
│   │   ├── 📄 plugin.ejs
│   │   └── 📄 service.ejs
│   ├── 📁 test
│   └── 📁 types
│       ├── 📄 cli-options.type.ts
│       ├── 📄 command.interface.ts
│       ├── 📁 commun
│       │   ├── 📄 database.interface.ts
│       │   ├── 📄 file-node.interface.ts
│       │   ├── 📄 member-info.interface.ts
│       │   └── 📄 sdk-context.interface.ts
│       ├── 📄 config.interface.ts
│       ├── 📄 context.interface.ts
│       ├── 📄 plugin.interface.ts
│       └── 📁 services
│           ├── 📄 ai-service.interface.ts
│           ├── 📄 architecture-service.interface.ts
│           ├── 📄 ast-service.interface.ts
│           ├── 📄 base-service.interface.ts
│           ├── 📄 case-service.interface.ts
│           ├── 📄 config-service.interface.ts
│           ├── 📄 data-manager-service.interface.ts
│           ├── 📄 error-handler.interface.ts
│           ├── 📄 file-system.interface.ts
│           ├── 📄 generator.interface.ts
│           ├── 📄 git-service.interface.ts
│           ├── 📄 logger-service.interface.ts
│           ├── 📄 path-service.interface.ts
│           ├── 📄 plugin-service.interface.ts
│           ├── 📄 prompt-service.interface.ts
│           ├── 📄 services-container.interface.ts
│           ├── 📄 shell-service.interface.ts
│           ├── 📄 state-service.interface.ts
│           ├── 📄 task-manager-service.interface.ts
│           ├── 📄 template.interface.ts
│           └── 📄 tool-service.interface.ts
├── 📁 tests
│   ├── 📄 cli-e2e.test.ts
│   ├── 📄 setup.ts
│   └── 📄 utils.ts
├── 📁 tree
│   ├── 📄 doc.md
│   ├── 📄 tree.json
│   ├── 📄 tree.md
│   └── 📄 tree.yaml
├── 📄 tsconfig.json
├── 📄 tsup.config.ts
└── 📄 vite.config.js

Summary: 236 directories, 805 files
