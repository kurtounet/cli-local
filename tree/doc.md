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
│       │   │      └──⚙️ [class] PostDto()
│       │   │      └──⚙️ [method] PostDto.__construct(string: any, $title: any)
│       │   │      └──⚙️ [method] PostDto.getTitle()
│       │   └── 📄 UserDto.php
│       │          └──⚙️ [class] UserDto()
│       │          └──⚙️ [method] UserDto.__construct(string: any, $email: any)
│       │          └──⚙️ [method] UserDto.getEmail()
│       ├── 📁 Entity
│       │   ├── 📄 Post.php
│       │   │      └──⚙️ [class] Post()
│       │   │      └──⚙️ [method] Post.getId()
│       │   └── 📄 User.php
│       │          └──⚙️ [class] User()
│       │          └──⚙️ [method] User.getId()
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
│   │           │      └──⚙️ [class] SymfonyPlugin()
│   │           │      └──⚙️ [method] SymfonyPlugin.execute(args: any, data: any)
│   │           ├── 📄 manifest.json
│   │           ├── 📄 symfony.service.js
│   │           │      └──⚙️ [class] SymfonyPlugin()
│   │           │      └──⚙️ [method] SymfonyPlugin.enrichEntity(entity: any)
│   │           │      └──⚙️ [method] SymfonyPlugin.renderAndWrite(blueprint: any, data: any)
│   │           │      └──⚙️ [method] SymfonyPlugin.execute(args: any, data: any)
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
│   │           │      └──⚙️ [function] enrichEntityMock(entity: any)
│   │           └── 📁 utils
│   │               ├── 📄 convert.js
│   │               │      └──⚙️ [function] snakeToCamel(str: any)
│   │               │      └──⚙️ [function] snakeToPascal(str: any)
│   │               └── 📄 mapping.js
│   │                      └──⚙️ [function] symfonyGetAttributeTypeORM(sqlType: any)
│   │                      └──⚙️ [function] symfonyGetPropertyType(sqlType: any)
│   └── 📁 tools
│       └── 📁 architecture
│           ├── 📄 architecture.service.js
│           │      └──⚙️ [class] ArchitecturePlugin()
│           │      └──⚙️ [method] ArchitecturePlugin.createDirectoryStructure(nodes: any, parentPath: any)
│           │      └──⚙️ [method] ArchitecturePlugin.execute(args: any, data: any)
│           └── 📄 manifest.json
├── 📄 rapport-perso.txt
├── 📁 scripts
│   └── 📄 test-generation.ts
│          └──⚙️ [function] main()
├── 📁 src
│   ├── 📁 assets
│   │   └── 📄 messages.ts
│   │          └──⚙️ [function] messageInitProject(projectName: string)
│   │          └──⚙️ [function] messageInstallationFramework(frameworkName: string)
│   │          └──⚙️ [function] messageCreateBranch()
│   │          └──⚙️ [function] messageCreateArchitecture()
│   │          └──⚙️ [function] messageCreateFolderCli()
│   │          └──⚙️ [function] messageCreateFile(filename: string)
│   ├── 📁 commands
│   │   ├── 📄 BaseCommand.ts
│   │   │      └──⚙️ [class] BaseCommand()
│   │   │      └──⚙️ [method] BaseCommand.execute(args: string[], options: TOptions)
│   │   │      └──⚙️ [method] BaseCommand.validateArgs(args: string[], min: number, usage: string)
│   │   │      └──⚙️ [method] BaseCommand.success(message: string)
│   │   │      └──⚙️ [method] BaseCommand.error(message: string)
│   │   │      └──⚙️ [method] BaseCommand.warning(message: string)
│   │   │      └──⚙️ [method] BaseCommand.info(message: string)
│   │   │      └──⚙️ [method] BaseCommand.hasOption(options: TOptions, optionName: OptionKey<TOptions>)
│   │   │      └──⚙️ [method] BaseCommand.getOption(options: TOptions, optionName: K, defaultValue: TDefault)
│   │   │      └──⚙️ [method] BaseCommand.showHelp()
│   │   │      └──⚙️ [method] BaseCommand.beforeExecute(_args: string[], _options: TOptions)
│   │   │      └──⚙️ [method] BaseCommand.afterExecute(_args: string[], _options: TOptions)
│   │   │      └──⚙️ [method] BaseCommand.onError(err: unknown)
│   │   │      └──⚙️ [method] BaseCommand.run(args: string[], options: TOptions)
│   │   ├── 📄 ai.command.ts
│   │   ├── 📄 app.command.ts
│   │   │      └──⚙️ [class] AppCommand()
│   │   │      └──⚙️ [method] AppCommand.execute(args: string[])
│   │   ├── 📄 doc.command.ts
│   │   │      └──⚙️ [interface] IDocOptions()
│   │   │      └──⚙️ [property] IDocOptions.view()
│   │   │      └──⚙️ [property] IDocOptions.metadata()
│   │   │      └──⚙️ [property] IDocOptions.level()
│   │   │      └──⚙️ [property] IDocOptions.save()
│   │   │      └──⚙️ [property] IDocOptions.output()
│   │   │      └──⚙️ [property] IDocOptions.force()
│   │   │      └──⚙️ [property] IDocOptions.dryRun()
│   │   │      └──⚙️ [class] DocCommand()
│   │   │      └──⚙️ [method] DocCommand.execute(args: string[], options: IDocOptions)
│   │   ├── 📄 generate.command.ts
│   │   │      └──⚙️ [interface] IGenerateOptions()
│   │   │      └──⚙️ [property] IGenerateOptions.force()
│   │   │      └──⚙️ [property] IGenerateOptions.output()
│   │   │      └──⚙️ [class] GenerateCommand()
│   │   │      └──⚙️ [method] GenerateCommand.execute(args: string[], options: IGenerateOptions)
│   │   ├── 📄 list-command.help.md
│   │   ├── 📄 mcp.command.ts
│   │   │      └──⚙️ [class] McpCommand()
│   │   │      └──⚙️ [method] McpCommand.execute(args: string[])
│   │   │      └──⚙️ [method] McpCommand.handleStart()
│   │   │      └──⚙️ [method] McpCommand.handleStop()
│   │   │      └──⚙️ [method] McpCommand.handleRestart()
│   │   │      └──⚙️ [method] McpCommand.handleStatus()
│   │   │      └──⚙️ [method] McpCommand.handlePs()
│   │   │      └──⚙️ [method] McpCommand.handleKill()
│   │   ├── 📄 plugin.command.ts
│   │   │      └──⚙️ [interface] IPluginOptions()
│   │   │      └──⚙️ [property] IPluginOptions.force()
│   │   │      └──⚙️ [property] IPluginOptions.output()
│   │   │      └──⚙️ [property] IPluginOptions.count()
│   │   │      └──⚙️ [class] PluginCommand()
│   │   │      └──⚙️ [method] PluginCommand.execute(args: string[], options: IPluginOptions)
│   │   └── 📄 tree.command.ts
│   │          └──⚙️ [interface] ITreeOptions()
│   │          └──⚙️ [property] ITreeOptions.code()
│   │          └──⚙️ [property] ITreeOptions.view()
│   │          └──⚙️ [property] ITreeOptions.metadata()
│   │          └──⚙️ [property] ITreeOptions.level()
│   │          └──⚙️ [property] ITreeOptions.save()
│   │          └──⚙️ [property] ITreeOptions.output()
│   │          └──⚙️ [property] ITreeOptions.force()
│   │          └──⚙️ [property] ITreeOptions.dryRun()
│   │          └──⚙️ [class] TreeCommand()
│   │          └──⚙️ [method] TreeCommand.execute(args: string[], options: ITreeOptions)
│   ├── 📁 config
│   │   ├── 📄 .mclp.yml
│   │   └── 📄 config.ts
│   ├── 📁 context
│   │   └── 📄 context.ts
│   │          └──⚙️ [class] AppContextBuilder()
│   │          └──⚙️ [method] AppContextBuilder.buildContext()
│   │          └──⚙️ [method] AppContextBuilder.registerAllServices(ctx: IAppContext)
│   │          └──⚙️ [method] AppContextBuilder.getDefaultConfig()
│   ├── 📁 core
│   │   └── 📄 App.ts
│   │          └──⚙️ [class] App()
│   │          └──⚙️ [method] App.registerCommand(CommandClass: ICommandClass)
│   │          └──⚙️ [method] App.run()
│   │          └──⚙️ [method] App.isRecord(value: unknown)
│   │          └──⚙️ [method] App.toAnyOptions(value: unknown)
│   │          └──⚙️ [method] App.coerceOptions(raw: Record<string, unknown>, spec: ICommandOption[])
│   ├── 📁 errors
│   │   ├── 📄 cli-errors.ts
│   │   │      └──⚙️ [class] CliError()
│   │   │      └──⚙️ [class] ValidationError()
│   │   │      └──⚙️ [class] FilesystemError()
│   │   │      └──⚙️ [class] TemplateNotFoundError()
│   │   │      └──⚙️ [class] ServiceNotFoundError()
│   │   │      └──⚙️ [class] InternalError()
│   │   │      └──⚙️ [class] UnknownError()
│   │   │      └──⚙️ [class] NotImplemented()
│   │   └── 📄 handler-error.md
│   ├── 📁 features
│   │   ├── 📄 .gitignore
│   │   ├── 📁 commun
│   │   │   ├── 📄 .gitignore
│   │   │   ├── 📄 architecture.interface.ts
│   │   │   │      └──⚙️ [interface] IFileNode()
│   │   │   │      └──⚙️ [property] IFileNode.type()
│   │   │   │      └──⚙️ [property] IFileNode.name()
│   │   │   │      └──⚙️ [property] IFileNode.path()
│   │   │   │      └──⚙️ [property] IFileNode.extension()
│   │   │   │      └──⚙️ [property] IFileNode.size()
│   │   │   │      └──⚙️ [property] IFileNode.level()
│   │   │   │      └──⚙️ [property] IFileNode.content()
│   │   │   │      └──⚙️ [property] IFileNode.metadata()
│   │   │   │      └──⚙️ [property] IFileNode.children()
│   │   │   │      └──⚙️ [interface] IArchitecture()
│   │   │   │      └──⚙️ [property] IArchitecture.directory()
│   │   │   │      └──⚙️ [interface] IFile()
│   │   │   │      └──⚙️ [property] IFile.type()
│   │   │   │      └──⚙️ [property] IFile.framework()
│   │   │   │      └──⚙️ [property] IFile.name()
│   │   │   │      └──⚙️ [property] IFile.pathInProject()
│   │   │   │      └──⚙️ [property] IFile.pathTemplate()
│   │   │   │      └──⚙️ [property] IFile.content()
│   │   │   │      └──⚙️ [interface] IDirectory()
│   │   │   │      └──⚙️ [property] IDirectory._type()
│   │   │   │      └──⚙️ [property] IDirectory.name()
│   │   │   │      └──⚙️ [property] IDirectory.pathInProject()
│   │   │   │      └──⚙️ [property] IDirectory.gitIgnore()
│   │   │   │      └──⚙️ [property] IDirectory.content()
│   │   │   │      └──⚙️ [property] IDirectory.createdAt()
│   │   │   │      └──⚙️ [property] IDirectory.updatedAt()
│   │   │   │      └──⚙️ [property] IDirectory.children()
│   │   │   │      └──⚙️ [property] IDirectory.varsTemplate()
│   │   │   │      └──⚙️ [interface] IFolder()
│   │   │   │      └──⚙️ [property] IFolder.name()
│   │   │   │      └──⚙️ [property] IFolder.files()
│   │   │   │      └──⚙️ [property] IFolder.subFolders()
│   │   │   ├── 📄 database.interface.ts
│   │   │   │      └──⚙️ [interface] IConfigDatabase()
│   │   │   │      └──⚙️ [property] IConfigDatabase.type()
│   │   │   │      └──⚙️ [property] IConfigDatabase.host()
│   │   │   │      └──⚙️ [property] IConfigDatabase.port()
│   │   │   │      └──⚙️ [property] IConfigDatabase.user()
│   │   │   │      └──⚙️ [property] IConfigDatabase.password()
│   │   │   │      └──⚙️ [property] IConfigDatabase.database()
│   │   │   │      └──⚙️ [property] IConfigDatabase.entities()
│   │   │   │      └──⚙️ [property] IConfigDatabase.synchronize()
│   │   │   ├── 📄 file-node.interface.ts
│   │   │   │      └──⚙️ [interface] IFileNode()
│   │   │   │      └──⚙️ [property] IFileNode.name()
│   │   │   │      └──⚙️ [property] IFileNode.path()
│   │   │   │      └──⚙️ [property] IFileNode.type()
│   │   │   │      └──⚙️ [property] IFileNode.extension()
│   │   │   │      └──⚙️ [property] IFileNode.size()
│   │   │   │      └──⚙️ [property] IFileNode.level()
│   │   │   │      └──⚙️ [property] IFileNode.content()
│   │   │   │      └──⚙️ [property] IFileNode.metadata()
│   │   │   │      └──⚙️ [property] IFileNode.children()
│   │   │   ├── 📄 framework.interface.ts
│   │   │   │      └──⚙️ [interface] IConfigFramework()
│   │   │   │      └──⚙️ [property] IConfigFramework.type()
│   │   │   │      └──⚙️ [property] IConfigFramework.name()
│   │   │   │      └──⚙️ [property] IConfigFramework.version()
│   │   │   │      └──⚙️ [property] IConfigFramework.host()
│   │   │   │      └──⚙️ [property] IConfigFramework.dir()
│   │   │   │      └──⚙️ [property] IConfigFramework.port()
│   │   │   │      └──⚙️ [property] IConfigFramework.app()
│   │   │   │      └──⚙️ [property] IConfigFramework.plateform()
│   │   │   │      └──⚙️ [property] IConfigFramework.excludes()
│   │   │   │      └──⚙️ [property] IConfigFramework.mode()
│   │   │   │      └──⚙️ [property] IConfigFramework.cliCmd()
│   │   │   │      └──⚙️ [property] IConfigFramework.gitBranch()
│   │   │   │      └──⚙️ [property] IConfigFramework.gitBranchCheckout()
│   │   │   │      └──⚙️ [property] IConfigFramework.initialCommit()
│   │   │   │      └──⚙️ [property] IConfigFramework.installOptions()
│   │   │   │      └──⚙️ [property] IConfigFramework.architecture()
│   │   │   │      └──⚙️ [property] IConfigFramework.dependencies()
│   │   │   │      └──⚙️ [property] IConfigFramework.environments()
│   │   │   │      └──⚙️ [property] IConfigFramework.scripts()
│   │   │   │      └──⚙️ [property] IConfigFramework.databases()
│   │   │   │      └──⚙️ [interface] IInstallOptions()
│   │   │   │      └──⚙️ [property] IInstallOptions.name()
│   │   │   │      └──⚙️ [property] IInstallOptions.directory()
│   │   │   │      └──⚙️ [property] IInstallOptions.skipGit()
│   │   │   │      └──⚙️ [property] IInstallOptions.strict()
│   │   │   │      └──⚙️ [property] IInstallOptions.packageManager()
│   │   │   │      └──⚙️ [property] IInstallOptions.language()
│   │   │   │      └──⚙️ [property] IInstallOptions.commit()
│   │   │   │      └──⚙️ [property] IInstallOptions.createApplication()
│   │   │   │      └──⚙️ [property] IInstallOptions.defaults()
│   │   │   │      └──⚙️ [property] IInstallOptions.dryRun()
│   │   │   │      └──⚙️ [property] IInstallOptions.experimentalZoneless()
│   │   │   │      └──⚙️ [property] IInstallOptions.force()
│   │   │   │      └──⚙️ [property] IInstallOptions.inlineStyle()
│   │   │   │      └──⚙️ [property] IInstallOptions.inlineTemplate()
│   │   │   │      └──⚙️ [property] IInstallOptions.interactive()
│   │   │   │      └──⚙️ [property] IInstallOptions.minimal()
│   │   │   │      └──⚙️ [property] IInstallOptions.newProjectRoot()
│   │   │   │      └──⚙️ [property] IInstallOptions.prefix()
│   │   │   │      └──⚙️ [property] IInstallOptions.routing()
│   │   │   │      └──⚙️ [property] IInstallOptions.serverRouting()
│   │   │   │      └──⚙️ [property] IInstallOptions.skipInstall()
│   │   │   │      └──⚙️ [property] IInstallOptions.skipTests()
│   │   │   │      └──⚙️ [property] IInstallOptions.ssr()
│   │   │   │      └──⚙️ [property] IInstallOptions.standalone()
│   │   │   │      └──⚙️ [property] IInstallOptions.style()
│   │   │   │      └──⚙️ [property] IInstallOptions.viewEncapsulation()
│   │   │   │      └──⚙️ [interface] IDependencies()
│   │   │   │      └──⚙️ [property] IDependencies.packageManager()
│   │   │   │      └──⚙️ [property] IDependencies.prod()
│   │   │   │      └──⚙️ [property] IDependencies.dev()
│   │   │   │      └──⚙️ [property] IDependencies.optional()
│   │   │   │      └──⚙️ [interface] IScript()
│   │   │   │      └──⚙️ [property] IScript.name()
│   │   │   │      └──⚙️ [property] IScript.command()
│   │   │   │      └──⚙️ [interface] IScripts()
│   │   │   │      └──⚙️ [property] IScripts.build()
│   │   │   │      └──⚙️ [property] IScripts.format()
│   │   │   │      └──⚙️ [property] IScripts.start()
│   │   │   │      └──⚙️ [property] IScripts.startDev()
│   │   │   │      └──⚙️ [property] IScripts.startDebug()
│   │   │   │      └──⚙️ [property] IScripts.startProd()
│   │   │   │      └──⚙️ [property] IScripts.lint()
│   │   │   │      └──⚙️ [property] IScripts.test()
│   │   │   │      └──⚙️ [property] IScripts.testWatch()
│   │   │   │      └──⚙️ [property] IScripts.testCov()
│   │   │   │      └──⚙️ [property] IScripts.testDebug()
│   │   │   │      └──⚙️ [property] IScripts.testE2e()
│   │   │   │      └──⚙️ [property] IScripts.fixturesLoad()
│   │   │   │      └──⚙️ [interface] IEnvironment()
│   │   │   │      └──⚙️ [property] IEnvironment.mode()
│   │   │   │      └──⚙️ [property] IEnvironment.debug()
│   │   │   │      └──⚙️ [property] IEnvironment.logLevel()
│   │   │   │      └──⚙️ [property] IEnvironment.variables()
│   │   │   │      └──⚙️ [property] IEnvironment.baseUrlApi()
│   │   │   │      └──⚙️ [property] IEnvironment.dataUrl()
│   │   │   │      └──⚙️ [interface] IVariables()
│   │   │   │      └──⚙️ [property] IVariables.appPort()
│   │   │   │      └──⚙️ [property] IVariables.corsOrigine()
│   │   │   │      └──⚙️ [property] IVariables.databaseConfig()
│   │   │   │      └──⚙️ [property] IVariables.mailer()
│   │   │   │      └──⚙️ [property] IVariables.jwt()
│   │   │   │      └──⚙️ [interface] IApiSchematicOptions()
│   │   │   │      └──⚙️ [property] IApiSchematicOptions.name()
│   │   │   │      └──⚙️ [property] IApiSchematicOptions.directory()
│   │   │   │      └──⚙️ [property] IApiSchematicOptions.noDryRun()
│   │   │   │      └──⚙️ [property] IApiSchematicOptions.skipGit()
│   │   │   │      └──⚙️ [property] IApiSchematicOptions.strict()
│   │   │   │      └──⚙️ [property] IApiSchematicOptions.packageManager()
│   │   │   │      └──⚙️ [property] IApiSchematicOptions.language()
│   │   │   │      └──⚙️ [interface] IInstallFramework()
│   │   │   │      └──⚙️ [property] IInstallFramework.projectName()
│   │   │   │      └──⚙️ [property] IInstallFramework.rootProjectPath()
│   │   │   │      └──⚙️ [property] IInstallFramework.projectPath()
│   │   │   │      └──⚙️ [property] IInstallFramework.framework()
│   │   │   │      └──⚙️ [property] IInstallFramework.databases()
│   │   │   ├── 📄 member-info.interface.ts
│   │   │   │      └──⚙️ [interface] IMemberInfo()
│   │   │   │      └──⚙️ [property] IMemberInfo.type()
│   │   │   │      └──⚙️ [property] IMemberInfo.name()
│   │   │   │      └──⚙️ [property] IMemberInfo.arguments()
│   │   │   ├── 📄 package-json.model.ts
│   │   │   │      └──⚙️ [interface] IpackageJson()
│   │   │   │      └──⚙️ [property] IpackageJson.name()
│   │   │   │      └──⚙️ [property] IpackageJson.type()
│   │   │   │      └──⚙️ [property] IpackageJson.private()
│   │   │   │      └──⚙️ [property] IpackageJson.version()
│   │   │   │      └──⚙️ [property] IpackageJson.description()
│   │   │   │      └──⚙️ [property] IpackageJson.main()
│   │   │   │      └──⚙️ [property] IpackageJson.author()
│   │   │   │      └──⚙️ [property] IpackageJson.license()
│   │   │   │      └──⚙️ [property] IpackageJson.scripts()
│   │   │   │      └──⚙️ [property] IpackageJson.dependencies()
│   │   │   │      └──⚙️ [property] IpackageJson.devDependencies()
│   │   │   └── 📄 projet.interface.ts
│   │   │          └──⚙️ [interface] IProjectConfig()
│   │   │          └──⚙️ [property] IProjectConfig.projectName()
│   │   │          └──⚙️ [property] IProjectConfig.description()
│   │   │          └──⚙️ [property] IProjectConfig.path()
│   │   │          └──⚙️ [property] IProjectConfig.starUml()
│   │   │          └──⚙️ [property] IProjectConfig.version()
│   │   │          └──⚙️ [property] IProjectConfig.mode()
│   │   │          └──⚙️ [property] IProjectConfig.frameworks()
│   │   │          └──⚙️ [property] IProjectConfig.databases()
│   │   ├── 📁 frameworks
│   │   │   ├── 📁 angular
│   │   │   │   ├── 📁 config
│   │   │   │   │   ├── 📄 angular-architecture.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_ANGULAR_MOCK()
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_ANGULAR_CORE_MOCK()
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_ANGULAR_DIR_SHARED_MOCK()
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_ANGULAR_DIR_FEATURE_MOCK()
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_ANGULAR_DIR_GENERAL_MOCK()
│   │   │   │   │   ├── 📄 angular-config-ini.mock.ts
│   │   │   │   │   ├── 📄 angular-dependencies.mock.ts
│   │   │   │   │   │      └──⚙️ [function] DEPENDENCIES_ANGULAR_MOCK()
│   │   │   │   │   ├── 📄 angular-environments.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ENVIRONMENTS_ANGULAR_MOCK()
│   │   │   │   │   ├── 📄 angular-initiale-architecture-project.mock.ts
│   │   │   │   │   ├── 📄 angular-install-options.mock.ts
│   │   │   │   │   │      └──⚙️ [function] INSTALL_COMMAND_ANGULAR(framework: IConfigFramework, projectName: string, options: string)
│   │   │   │   │   │      └──⚙️ [function] INSTALL_OPTIONS_ANGULAR_MOCK()
│   │   │   │   │   └── 📄 angular-scripts.mock.ts
│   │   │   │   │          └──⚙️ [function] SCRIPTS_ANGULAR_MOCK()
│   │   │   │   ├── 📁 mock
│   │   │   │   │   └── 📄 angular-sample-config.json
│   │   │   │   ├── 📁 model
│   │   │   │   │   └── 📄 angular-model.ts
│   │   │   │   │          └──⚙️ [interface] AngularModel()
│   │   │   │   │          └──⚙️ [property] AngularModel.name()
│   │   │   │   │          └──⚙️ [interface] IRoute()
│   │   │   │   │          └──⚙️ [property] IRoute.path()
│   │   │   │   │          └──⚙️ [property] IRoute.component()
│   │   │   │   ├── 📁 services
│   │   │   │   │   ├── 📄 angular-generate-app-html.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateAppHtmlService(rootApp: string)
│   │   │   │   │   ├── 📄 angular-generate-component.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateComponentService(componentDir: string, name: string, prefix: string)
│   │   │   │   │   ├── 📄 angular-generate-crud-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateCrudEntityService(componentDir: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 angular-generate-dto.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateDto(entity: IEntityJson)
│   │   │   │   │   ├── 📄 angular-generate-environments.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateEnvironmentsService(componentDir: string)
│   │   │   │   │   ├── 📄 angular-generate-files-framework.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateFilesFramework(configFile: IProjectConfig, framework: IFramework, rootPathProjectFramework: string, entitiesJsonFile: object, mode: string)
│   │   │   │   │   ├── 📄 angular-generate-form-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateFormEntityService(componentDir: string, entity: IEntityJson, typeForm: any, prefix: string)
│   │   │   │   │   ├── 📄 angular-generate-interface-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateInterfaceEntityService(pathDir: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 angular-generate-mock-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateMockEntityService(componentDir: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 angular-generate-module.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateModule(entity: IEntityJson)
│   │   │   │   │   ├── 📄 angular-generate-pages.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGeneratePagesService(pagesPath: string, pages: string[])
│   │   │   │   │   │      └──⚙️ [function] angularGeneratePageService(pagesPath: string, page: string)
│   │   │   │   │   ├── 📄 angular-generate-signal-form-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateFormEntityService(componentDir: string, entity: IEntityJson, typeForm: any, prefix: string)
│   │   │   │   │   ├── 📄 angular-generate-signal-store-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateSignalStoreEntityService(componentDir: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 angular-generate-test.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateTest(entity: IEntityJson)
│   │   │   │   │   ├── 📄 angular-generate-zod-schema-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateZodSchemaEntityService(pathDir: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 angular.service.ts
│   │   │   │   │   │      └──⚙️ [class] AngularService()
│   │   │   │   │   │      └──⚙️ [method] AngularService.installFramework(config: IInstallFramework)
│   │   │   │   │   │      └──⚙️ [method] AngularService.installDependencies(config: IInstallFramework)
│   │   │   │   │   │      └──⚙️ [method] AngularService.generateArchitecture(config: IInstallFramework)
│   │   │   │   │   │      └──⚙️ [method] AngularService.generateFileFramework(config: IInstallFramework)
│   │   │   │   │   │      └──⚙️ [method] AngularService.updateFile(config: IInstallFramework)
│   │   │   │   │   └── 📄 index.ts
│   │   │   │   └── 📁 templates
│   │   │   │       ├── 📄 angular-crud-service.template.ts
│   │   │   │       │      └──⚙️ [function] angularCrudServiceTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 angular-dto.template.ts
│   │   │   │       │      └──⚙️ [function] angularDtoTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 angular-entity.template.ts
│   │   │   │       │      └──⚙️ [function] angularFormEntityTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 angular-example.template.ts
│   │   │   │       │      └──⚙️ [function] angularExampleTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 angular-feature.template.ts
│   │   │   │       │      └──⚙️ [function] angularFeautureTemplate(name: string)
│   │   │   │       ├── 📄 angular-interface.template.ts
│   │   │   │       │      └──⚙️ [function] angularInterfaceTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 angular-module.template.ts
│   │   │   │       │      └──⚙️ [function] angularModuleTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 angular-service-template.template.ts
│   │   │   │       │      └──⚙️ [function] angularServiceTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 angular-service.template.ts
│   │   │   │       │      └──⚙️ [function] angularServiceTemplate(name: string)
│   │   │   │       ├── 📄 angular-signal-store-entity.template.ts
│   │   │   │       │      └──⚙️ [function] defaultInitialValueType(type: string)
│   │   │   │       │      └──⚙️ [function] angularInitialEntityState(entity: IEntityJson)
│   │   │   │       │      └──⚙️ [function] angularSignalStoreEntityTemplate(entity: IEntityJson, dir: string)
│   │   │   │       ├── 📄 angular-test.template.ts
│   │   │   │       │      └──⚙️ [function] angularTestTemplate(entity: IEntityJson)
│   │   │   │       ├── 📁 component
│   │   │   │       │   ├── 📄 angular-css-component.template.ts
│   │   │   │       │   │      └──⚙️ [function] angularCssComponentTemplate()
│   │   │   │       │   ├── 📄 angular-html-component.template.ts
│   │   │   │       │   │      └──⚙️ [function] angularHtmlComponentTemplate(name: string)
│   │   │   │       │   ├── 📄 angular-spec-component.template.ts
│   │   │   │       │   │      └──⚙️ [function] angularSpecComponentTemplate(namePascalCase: any, prefix: any)
│   │   │   │       │   ├── 📄 angular-ts-component.template.ts
│   │   │   │       │   │      └──⚙️ [function] angularTsComponentTemplate(name: any, prefix: any)
│   │   │   │       │   └── 📁 form
│   │   │   │       │       ├── 📄 angular-form-css-entity.template.ts
│   │   │   │       │       │      └──⚙️ [function] angularFormCssEntityTemplate(entity: IEntityJson)
│   │   │   │       │       ├── 📄 angular-form-html-entity.template.ts
│   │   │   │       │       │      └──⚙️ [function] typeField(col: IColumnJson)
│   │   │   │       │       │      └──⚙️ [function] angularFormHtmlEntityTemplate(entity: IEntityJson, typeForm: any)
│   │   │   │       │       │      └──⚙️ [function] angularFormHtmlErrorsTemplate(col: IColumnJson)
│   │   │   │       │       ├── 📄 angular-form-spec-entity.template.ts
│   │   │   │       │       │      └──⚙️ [function] angularFormSpecEntityTemplate(entity: IEntityJson, typeForm: any)
│   │   │   │       │       └── 📄 angular-form-ts-entity.template.ts
│   │   │   │       │              └──⚙️ [function] angularFormTscEntityTemplate(entity: IEntityJson, typeForm: any)
│   │   │   │       │              └──⚙️ [function] validators(col: IColumnJson, operation: string)
│   │   │   │       └── 📄 index.ts
│   │   │   ├── 📁 commands
│   │   │   │   └── 📄 framework.command.ts
│   │   │   │          └──⚙️ [interface] IFrameworkOptions()
│   │   │   │          └──⚙️ [property] IFrameworkOptions.code()
│   │   │   │          └──⚙️ [property] IFrameworkOptions.view()
│   │   │   │          └──⚙️ [property] IFrameworkOptions.metadata()
│   │   │   │          └──⚙️ [property] IFrameworkOptions.level()
│   │   │   │          └──⚙️ [property] IFrameworkOptions.save()
│   │   │   │          └──⚙️ [property] IFrameworkOptions.output()
│   │   │   │          └──⚙️ [property] IFrameworkOptions.force()
│   │   │   │          └──⚙️ [property] IFrameworkOptions.dryRun()
│   │   │   │          └──⚙️ [interface] IFrameworkCommand()
│   │   │   │          └──⚙️ [property] IFrameworkCommand.name()
│   │   │   │          └──⚙️ [property] IFrameworkCommand.directory()
│   │   │   │          └──⚙️ [property] IFrameworkCommand.noDryRun()
│   │   │   │          └──⚙️ [property] IFrameworkCommand.skipGit()
│   │   │   │          └──⚙️ [property] IFrameworkCommand.strict()
│   │   │   │          └──⚙️ [property] IFrameworkCommand.packageManager()
│   │   │   │          └──⚙️ [property] IFrameworkCommand.language()
│   │   │   │          └──⚙️ [class] FrameworkCommand()
│   │   │   │          └──⚙️ [method] FrameworkCommand.execute(args: string[], options: IFrameworkOptions)
│   │   │   │          └──⚙️ [method] FrameworkCommand.newProject(answers: any)
│   │   │   │          └──⚙️ [method] FrameworkCommand.generateProject(config: IProjectConfig)
│   │   │   │          └──⚙️ [method] FrameworkCommand.loadConfigProject(config: string)
│   │   │   ├── 📁 common
│   │   │   │   ├── 📄 base-generator.ts
│   │   │   │   │      └──⚙️ [class] BaseGenerator()
│   │   │   │   │      └──⚙️ [method] BaseGenerator.getTemplate(name: string)
│   │   │   │   │      └──⚙️ [method] BaseGenerator.getTargetFolder()
│   │   │   │   │      └──⚙️ [method] BaseGenerator.getFileSuffix()
│   │   │   │   │      └──⚙️ [method] BaseGenerator.execute(name: string)
│   │   │   │   ├── 📁 config
│   │   │   │   │   └── 📄 config-frameworks.ts
│   │   │   │   ├── 📁 services
│   │   │   │   │   ├── 📄 build-command.service.ts
│   │   │   │   │   │      └──⚙️ [function] buildCommandService(framework: IFramework, command: string)
│   │   │   │   │   ├── 📄 create-architecture.service.ts
│   │   │   │   │   │      └──⚙️ [function] createFolder(pathFolder: string)
│   │   │   │   │   │      └──⚙️ [function] createArchitecture(framework: IFramework, frameworkPath: string)
│   │   │   │   │   ├── 📄 generate-interface-service.ts
│   │   │   │   │   │      └──⚙️ [function] generateInterfaceService(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] getInterfaceImports(entity: IEntityJson, allEntities: IEntityJson[])
│   │   │   │   │   │      └──⚙️ [function] generateInterfaceFileContent(entity: IEntityJson, allEntities: IEntityJson[])
│   │   │   │   │   ├── 📄 generate-route.service.ts
│   │   │   │   │   │      └──⚙️ [function] angularGenerateRouteService(rootPathProjectFramework: string, routes: IRoute[])
│   │   │   │   │   ├── 📄 generate-types-d.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateTypesDService(rootPathProjectFramework: string, entities: string[], types: string)
│   │   │   │   │   ├── 📄 generate-types-db.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateTypesDbService(rootPathProjectFramework: string, entities: string[], types: string)
│   │   │   │   │   ├── 📄 generate-zod-schema-db.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateZodSchemaDbService(rootPathProjectFramework: string, entities: string[], zodSchemas: string)
│   │   │   │   │   ├── 📄 generate-zod-shema-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateZodShemaEntityService(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] ZodProperty(col: IColumnJson)
│   │   │   │   │   ├── 📄 get-command.ts
│   │   │   │   │   │      └──⚙️ [function] getCommandFramework(frameWork: IFramework, projectName: string)
│   │   │   │   │   ├── 📄 git.service.ts
│   │   │   │   │   │      └──⚙️ [function] updateGitIgnore(frameworkProjectPath: string, contentToAdd: string)
│   │   │   │   │   │      └──⚙️ [function] gitCommit(frameworkPath: string, message: string)
│   │   │   │   │   │      └──⚙️ [function] gitCommitAndPush(message: string)
│   │   │   │   │   │      └──⚙️ [function] verifyInGitIgnoreFile(pathGitIgnore: string, dir: string)
│   │   │   │   │   ├── 📄 install-dependencies.service.ts
│   │   │   │   │   │      └──⚙️ [function] installTSDependencies(framework: IConfigFramework, path: string)
│   │   │   │   │   │      └──⚙️ [function] installComposerDependencies(framework: IFramework, path: string)
│   │   │   │   │   ├── 📄 switch-generate-file-framework.service.ts
│   │   │   │   │   │      └──⚙️ [function] switchGenerateFileFrameworkService(configFile: IProjectConfig, framework: IFramework, rootPathProjectFramework: string, entitiesJsonFile: object)
│   │   │   │   │   ├── 📄 universal-orchestrator.ts
│   │   │   │   │   └── 📄 update-package-json.service.ts
│   │   │   │   │          └──⚙️ [function] updatePackageJsonService(rootPathProjectFramework: string, framework: IFramework)
│   │   │   │   └── 📁 templates
│   │   │   │       ├── 📄 doc.md
│   │   │   │       ├── 📄 input-html.template.ts
│   │   │   │       │      └──⚙️ [function] getInputHtmlTemplate(type: string)
│   │   │   │       ├── 📄 model-entity.template.ts
│   │   │   │       │      └──⚙️ [function] modelEntityTemplate(entity: IEntityJson)
│   │   │   │       └── 📄 types-entity.template.ts
│   │   │   │              └──⚙️ [function] typesTemplate(entity: IEntityJson)
│   │   │   ├── 📁 database
│   │   │   │   ├── 📁 config
│   │   │   │   └── 📁 mock
│   │   │   │       └── 📄 database.mock.ts
│   │   │   │              └──⚙️ [function] DATABASE_CONFIG_MYSQL_MOCK()
│   │   │   ├── 📁 drizzle
│   │   │   │   ├── 📁 services
│   │   │   │   │   ├── 📄 drizzle-generate-config.service.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleGenerateConfigService(rootPathProjectFramework: string, configFile: IProjectConfig, url: any)
│   │   │   │   │   ├── 📄 drizzle-generate-index-schemas.service.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleGenerateIndexSchemasService(rootServer: string, entities: string[])
│   │   │   │   │   ├── 📄 drizzle-generate-index-seed.service.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleGenerateIndexSeedService(rootServer: string, entities: string[])
│   │   │   │   │   ├── 📄 drizzle-generate-schema-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleGenerateSchemaEntityService(rootServer: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 drizzle-generate-schema.service.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleGenerateSchemaService(rootServerApi: string, schemas: string)
│   │   │   │   │   ├── 📄 drizzle-generate-script-create-database.service.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleGenerateScriptCreateDatabase(rootPathProjectFramework: string, configFile: IProjectConfig)
│   │   │   │   │   ├── 📄 drizzle-generate-seed-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleGenerateSeedEntityService(rootServer: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 drizzle-generate-types-db.service.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleGenerateTypesDbService(rootPathProjectFramework: string, entities: string[], types: string)
│   │   │   │   │   ├── 📄 drizzle-schema-from-entity.service copy.ts
│   │   │   │   │   └── 📄 drizzle-schema-from-entity.service.ts
│   │   │   │   │          └──⚙️ [function] toCamel(s: string)
│   │   │   │   │          └──⚙️ [function] toPascal(s: string)
│   │   │   │   │          └──⚙️ [function] toKebab(s: string)
│   │   │   │   │          └──⚙️ [function] q(s: string)
│   │   │   │   │          └──⚙️ [function] asNum(v: string | number | null | undefined)
│   │   │   │   │          └──⚙️ [interface] GenOptions()
│   │   │   │   │          └──⚙️ [method] GenOptions.importResolver(tableName: string)
│   │   │   │   │          └──⚙️ [interface] FkActions()
│   │   │   │   │          └──⚙️ [property] FkActions.onDelete()
│   │   │   │   │          └──⚙️ [property] FkActions.onUpdate()
│   │   │   │   │          └──⚙️ [function] parseFkActions(validations: string[] | null)
│   │   │   │   │          └──⚙️ [function] pick(k: "onDelete" | "onUpdate")
│   │   │   │   │          └──⚙️ [interface] ImportsBag()
│   │   │   │   │          └──⚙️ [property] ImportsBag.mysqlCore()
│   │   │   │   │          └──⚙️ [property] ImportsBag.drizzle()
│   │   │   │   │          └──⚙️ [property] ImportsBag.extraTables()
│   │   │   │   │          └──⚙️ [property] ImportsBag.opt()
│   │   │   │   │          └──⚙️ [function] drizzleSchemaFromEntityService(e: IEntityJson, opt: GenOptions)
│   │   │   │   │          └──⚙️ [function] drizzleSchemaFromEntitiesService(entities: IEntityJson[], opt: GenOptions)
│   │   │   │   │          └──⚙️ [function] findFkColumnReferencing(e: IEntityJson, targetTable: string)
│   │   │   │   │          └──⚙️ [function] mapColumnBuilder(c: IColumnJson, imports: ImportsBag)
│   │   │   │   │          └──⚙️ [function] add(name: string, mod: string)
│   │   │   │   │          └──⚙️ [function] parseDecimal()
│   │   │   │   │          └──⚙️ [function] applyModifiers(c: IColumnJson, expr: string, ctx: { pkCount: number; imports: ImportsBag; ownerTable: string })
│   │   │   │   ├── 📁 templates
│   │   │   │   │   ├── 📄 drizzle-columns.helpers.template.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleColumnsHelpersTemplate()
│   │   │   │   │   ├── 📄 drizzle-config-template.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleConfigTemplate(configFile: IProjectConfig)
│   │   │   │   │   ├── 📄 drizzle-config-url-template.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleConfigUrlTemplate(configFile: IProjectConfig)
│   │   │   │   │   ├── 📄 drizzle-schemas.template.ts
│   │   │   │   │   │      └──⚙️ [function] drizzleSchemaTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 drizzle-seed-entity.template.ts
│   │   │   │   │   │      └──⚙️ [function] indentBlock(str: string, spaces: any)
│   │   │   │   │   │      └──⚙️ [function] drizzleSeedEntityTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 nitro-connection-drizzle-template.ts
│   │   │   │   │   │      └──⚙️ [function] nitroConnectionDrizzleTemplate(configFile: IProjectConfig)
│   │   │   │   │   └── 📁 scripts
│   │   │   │   │       └── 📄 drizzle-create-database.template.ts
│   │   │   │   │              └──⚙️ [function] drizzleScriptCreateDatabaseTemplate(configFile: IProjectConfig)
│   │   │   │   └── 📁 utils
│   │   │   │       └── 📄 generate-value.utils.ts
│   │   │   │              └──⚙️ [interface] IColumnJson()
│   │   │   │              └──⚙️ [property] IColumnJson.id()
│   │   │   │              └──⚙️ [property] IColumnJson.name()
│   │   │   │              └──⚙️ [property] IColumnJson.typeSql()
│   │   │   │              └──⚙️ [property] IColumnJson.typeTypeScript()
│   │   │   │              └──⚙️ [property] IColumnJson.typeORM()
│   │   │   │              └──⚙️ [property] IColumnJson.typeDoctrine()
│   │   │   │              └──⚙️ [property] IColumnJson.parent()
│   │   │   │              └──⚙️ [property] IColumnJson.length()
│   │   │   │              └──⚙️ [property] IColumnJson.maxLength()
│   │   │   │              └──⚙️ [property] IColumnJson.minLength()
│   │   │   │              └──⚙️ [property] IColumnJson.precision()
│   │   │   │              └──⚙️ [property] IColumnJson.isEmpty()
│   │   │   │              └──⚙️ [property] IColumnJson.unique()
│   │   │   │              └──⚙️ [property] IColumnJson.nullable()
│   │   │   │              └──⚙️ [property] IColumnJson.primaryKey()
│   │   │   │              └──⚙️ [property] IColumnJson.foreignKey()
│   │   │   │              └──⚙️ [property] IColumnJson.documentation()
│   │   │   │              └──⚙️ [property] IColumnJson.description()
│   │   │   │              └──⚙️ [property] IColumnJson.referenceTo()
│   │   │   │              └──⚙️ [property] IColumnJson.propsEntiy()
│   │   │   │              └──⚙️ [property] IColumnJson.validations()
│   │   │   │              └──⚙️ [property] IColumnJson.enumValues()
│   │   │   │              └──⚙️ [function] formatDate(time: string)
│   │   │   │              └──⚙️ [function] generateValue(column: IColumnJson)
│   │   │   │              └──⚙️ [function] item(entity: IEntityJson, exclude: string[])
│   │   │   ├── 📁 electron
│   │   │   │   ├── 📁 config
│   │   │   │   │   ├── 📄 architecture.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_ELECTRON_MOCK()
│   │   │   │   │   ├── 📄 config-ini.mock.ts
│   │   │   │   │   ├── 📄 dependencies.mock.ts
│   │   │   │   │   │      └──⚙️ [function] DEPENDENCIES_ELECTRON_MOCK()
│   │   │   │   │   ├── 📄 environments.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ENVIRONMENTS_ELECTRON_MOCK()
│   │   │   │   │   ├── 📄 initiale-architecture-project.mock.ts
│   │   │   │   │   ├── 📄 install-options.mock.ts
│   │   │   │   │   │      └──⚙️ [function] INSTALL_OPTIONS_ELECTRON_MOCK()
│   │   │   │   │   └── 📄 scripts.mock.ts
│   │   │   │   │          └──⚙️ [function] SCRIPTS_ELECTRON_MOCK()
│   │   │   │   ├── 📁 interfaces
│   │   │   │   │   └── 📄 electron-model.ts
│   │   │   │   │          └──⚙️ [interface] IelectronModel()
│   │   │   │   │          └──⚙️ [property] IelectronModel.name()
│   │   │   │   ├── 📁 mock
│   │   │   │   │   └── 📄 sample-angular-config.json
│   │   │   │   ├── 📁 services
│   │   │   │   │   ├── 📄 electron-generate-controller.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateElectronController(entity: IEntityJson)
│   │   │   │   │   ├── 📄 electron-generate-dto.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateElectronDto(entity: IEntityJson)
│   │   │   │   │   ├── 📄 electron-generate-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateElectronEntity(entity: IEntityJson)
│   │   │   │   │   ├── 📄 electron-generate-files-framework.service.ts
│   │   │   │   │   │      └──⚙️ [function] electronGenerateFilesFramework(configFile: IProjectConfig, framework: IFramework, rootPathProjectFramework: string, entitiesJsonFile: object)
│   │   │   │   │   ├── 📄 electron-generate-interface.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateElectronInterface(entity: IEntityJson)
│   │   │   │   │   ├── 📄 electron-generate-ipcRenderer.service.ts
│   │   │   │   │   │      └──⚙️ [function] electronGenerateIpcRendererService(entity: IEntityJson)
│   │   │   │   │   ├── 📄 electron-generate-module.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateElectronModule(entity: IEntityJson)
│   │   │   │   │   ├── 📄 electron-generate-service.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateElectronService(entity: IEntityJson)
│   │   │   │   │   └── 📄 electron-generate-test.service.ts
│   │   │   │   │          └──⚙️ [function] generateElectronTest(entity: IEntityJson)
│   │   │   │   └── 📁 templates
│   │   │   │       ├── 📄 electron-controller-template.template.ts
│   │   │   │       │      └──⚙️ [function] getElectronControllerTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 electron-dto-template.template.ts
│   │   │   │       │      └──⚙️ [function] getElectronDtoTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 electron-entity-template.template.ts
│   │   │   │       │      └──⚙️ [function] getElectronEntityTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 electron-interface-template.template.ts
│   │   │   │       │      └──⚙️ [function] getElectronInterfaceTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 electron-ipc-renderer.template.ts
│   │   │   │       │      └──⚙️ [function] electronIpcRendererTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 electron-module-template.template.ts
│   │   │   │       │      └──⚙️ [function] getElectronModuleTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 electron-module.template.ts
│   │   │   │       │      └──⚙️ [function] getModuleTemplate(name: string)
│   │   │   │       ├── 📄 electron-service-template.template.ts
│   │   │   │       │      └──⚙️ [function] getElectronServiceTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 electron-test-template.template.ts
│   │   │   │       │      └──⚙️ [function] getElectronTestTemplate(entity: IEntityJson)
│   │   │   │       └── 📄 service-template.template.ts
│   │   │   │              └──⚙️ [function] getServiceTemplate(name: string)
│   │   │   ├── 📁 example
│   │   │   ├── 📁 interfaces
│   │   │   │   ├── 📄 framework-service.interface.ts
│   │   │   │   │      └──⚙️ [interface] IFrameworkService()
│   │   │   │   │      └──⚙️ [property] IFrameworkService.serviceName()
│   │   │   │   │      └──⚙️ [method] IFrameworkService.generate(projectConfig: IProjectConfig, entityJson: IGetEntityJson, fileMdj: any)
│   │   │   │   └── 📄 framework.interface.ts
│   │   │   ├── 📁 mocks
│   │   │   │   ├── 📄 config-init-commun.mock.ts
│   │   │   │   │      └──⚙️ [function] configInitFramework(initFramework: IFramework)
│   │   │   │   ├── 📄 environments-commun.mock.ts
│   │   │   │   │      └──⚙️ [function] ENVIRONMENTS_ELECTRON_MOCK()
│   │   │   │   └── 📄 install-options-commun.mock.ts
│   │   │   │          └──⚙️ [function] INSTALL_OPTIONS_COMMUN_MOCK()
│   │   │   ├── 📁 models
│   │   │   │   ├── 📄 autre.ts
│   │   │   │   ├── 📄 database.model.ts
│   │   │   │   │      └──⚙️ [interface] IDatabase()
│   │   │   │   │      └──⚙️ [property] IDatabase.type()
│   │   │   │   │      └──⚙️ [property] IDatabase.host()
│   │   │   │   │      └──⚙️ [property] IDatabase.port()
│   │   │   │   │      └──⚙️ [property] IDatabase.user()
│   │   │   │   │      └──⚙️ [property] IDatabase.password()
│   │   │   │   │      └──⚙️ [property] IDatabase.database()
│   │   │   │   │      └──⚙️ [property] IDatabase.entities()
│   │   │   │   │      └──⚙️ [property] IDatabase.synchronize()
│   │   │   │   ├── 📄 framework-commun.model.ts
│   │   │   │   │      └──⚙️ [interface] IArchitecture()
│   │   │   │   │      └──⚙️ [property] IArchitecture.directory()
│   │   │   │   │      └──⚙️ [interface] IFile()
│   │   │   │   │      └──⚙️ [property] IFile.type()
│   │   │   │   │      └──⚙️ [property] IFile.framework()
│   │   │   │   │      └──⚙️ [property] IFile.name()
│   │   │   │   │      └──⚙️ [property] IFile.pathInProject()
│   │   │   │   │      └──⚙️ [property] IFile.pathTemplate()
│   │   │   │   │      └──⚙️ [property] IFile.content()
│   │   │   │   │      └──⚙️ [interface] IDirectory()
│   │   │   │   │      └──⚙️ [property] IDirectory._type()
│   │   │   │   │      └──⚙️ [property] IDirectory.name()
│   │   │   │   │      └──⚙️ [property] IDirectory.pathInProject()
│   │   │   │   │      └──⚙️ [property] IDirectory.gitIgnore()
│   │   │   │   │      └──⚙️ [property] IDirectory.content()
│   │   │   │   │      └──⚙️ [property] IDirectory.createdAt()
│   │   │   │   │      └──⚙️ [property] IDirectory.updatedAt()
│   │   │   │   │      └──⚙️ [property] IDirectory.children()
│   │   │   │   │      └──⚙️ [property] IDirectory.varsTemplate()
│   │   │   │   │      └──⚙️ [interface] IFolder()
│   │   │   │   │      └──⚙️ [property] IFolder.name()
│   │   │   │   │      └──⚙️ [property] IFolder.files()
│   │   │   │   │      └──⚙️ [property] IFolder.subFolders()
│   │   │   │   │      └──⚙️ [interface] IInstallOptions()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.name()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.directory()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.skipGit()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.strict()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.packageManager()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.language()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.commit()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.createApplication()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.defaults()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.dryRun()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.experimentalZoneless()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.force()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.inlineStyle()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.inlineTemplate()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.interactive()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.minimal()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.newProjectRoot()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.prefix()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.routing()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.serverRouting()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.skipInstall()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.skipTests()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.ssr()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.standalone()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.style()
│   │   │   │   │      └──⚙️ [property] IInstallOptions.viewEncapsulation()
│   │   │   │   │      └──⚙️ [interface] IApiSchematicOptions()
│   │   │   │   │      └──⚙️ [property] IApiSchematicOptions.name()
│   │   │   │   │      └──⚙️ [property] IApiSchematicOptions.directory()
│   │   │   │   │      └──⚙️ [property] IApiSchematicOptions.noDryRun()
│   │   │   │   │      └──⚙️ [property] IApiSchematicOptions.skipGit()
│   │   │   │   │      └──⚙️ [property] IApiSchematicOptions.strict()
│   │   │   │   │      └──⚙️ [property] IApiSchematicOptions.packageManager()
│   │   │   │   │      └──⚙️ [property] IApiSchematicOptions.language()
│   │   │   │   │      └──⚙️ [interface] IDependencies()
│   │   │   │   │      └──⚙️ [property] IDependencies.packageManager()
│   │   │   │   │      └──⚙️ [property] IDependencies.prod()
│   │   │   │   │      └──⚙️ [property] IDependencies.dev()
│   │   │   │   │      └──⚙️ [property] IDependencies.optional()
│   │   │   │   │      └──⚙️ [interface] IScript()
│   │   │   │   │      └──⚙️ [property] IScript.name()
│   │   │   │   │      └──⚙️ [property] IScript.command()
│   │   │   │   │      └──⚙️ [interface] IScripts()
│   │   │   │   │      └──⚙️ [property] IScripts.build()
│   │   │   │   │      └──⚙️ [property] IScripts.format()
│   │   │   │   │      └──⚙️ [property] IScripts.start()
│   │   │   │   │      └──⚙️ [property] IScripts.startDev()
│   │   │   │   │      └──⚙️ [property] IScripts.startDebug()
│   │   │   │   │      └──⚙️ [property] IScripts.startProd()
│   │   │   │   │      └──⚙️ [property] IScripts.lint()
│   │   │   │   │      └──⚙️ [property] IScripts.test()
│   │   │   │   │      └──⚙️ [property] IScripts.testWatch()
│   │   │   │   │      └──⚙️ [property] IScripts.testCov()
│   │   │   │   │      └──⚙️ [property] IScripts.testDebug()
│   │   │   │   │      └──⚙️ [property] IScripts.testE2e()
│   │   │   │   │      └──⚙️ [property] IScripts.fixturesLoad()
│   │   │   │   │      └──⚙️ [interface] IFramework()
│   │   │   │   │      └──⚙️ [property] IFramework.type()
│   │   │   │   │      └──⚙️ [property] IFramework.name()
│   │   │   │   │      └──⚙️ [property] IFramework.version()
│   │   │   │   │      └──⚙️ [property] IFramework.host()
│   │   │   │   │      └──⚙️ [property] IFramework.dir()
│   │   │   │   │      └──⚙️ [property] IFramework.port()
│   │   │   │   │      └──⚙️ [property] IFramework.app()
│   │   │   │   │      └──⚙️ [property] IFramework.plateform()
│   │   │   │   │      └──⚙️ [property] IFramework.mode()
│   │   │   │   │      └──⚙️ [property] IFramework.cliCmd()
│   │   │   │   │      └──⚙️ [property] IFramework.gitBranch()
│   │   │   │   │      └──⚙️ [property] IFramework.gitBranchCheckout()
│   │   │   │   │      └──⚙️ [property] IFramework.initialCommit()
│   │   │   │   │      └──⚙️ [property] IFramework.installOptions()
│   │   │   │   │      └──⚙️ [property] IFramework.architecture()
│   │   │   │   │      └──⚙️ [property] IFramework.dependencies()
│   │   │   │   │      └──⚙️ [property] IFramework.environments()
│   │   │   │   │      └──⚙️ [property] IFramework.scripts()
│   │   │   │   │      └──⚙️ [property] IFramework.databases()
│   │   │   │   │      └──⚙️ [interface] IEnvironment()
│   │   │   │   │      └──⚙️ [property] IEnvironment.mode()
│   │   │   │   │      └──⚙️ [property] IEnvironment.debug()
│   │   │   │   │      └──⚙️ [property] IEnvironment.logLevel()
│   │   │   │   │      └──⚙️ [property] IEnvironment.variables()
│   │   │   │   │      └──⚙️ [property] IEnvironment.baseUrlApi()
│   │   │   │   │      └──⚙️ [property] IEnvironment.dataUrl()
│   │   │   │   │      └──⚙️ [interface] IProjectConfig()
│   │   │   │   │      └──⚙️ [property] IProjectConfig.projectName()
│   │   │   │   │      └──⚙️ [property] IProjectConfig.description()
│   │   │   │   │      └──⚙️ [property] IProjectConfig.path()
│   │   │   │   │      └──⚙️ [property] IProjectConfig.starUml()
│   │   │   │   │      └──⚙️ [property] IProjectConfig.version()
│   │   │   │   │      └──⚙️ [property] IProjectConfig.frameworks()
│   │   │   │   │      └──⚙️ [property] IProjectConfig.databases()
│   │   │   │   │      └──⚙️ [interface] IVariables()
│   │   │   │   │      └──⚙️ [property] IVariables.appPort()
│   │   │   │   │      └──⚙️ [property] IVariables.corsOrigine()
│   │   │   │   │      └──⚙️ [property] IVariables.databaseConfig()
│   │   │   │   │      └──⚙️ [property] IVariables.mailer()
│   │   │   │   │      └──⚙️ [property] IVariables.jwt()
│   │   │   │   └── 📄 package-json.model.ts
│   │   │   │          └──⚙️ [interface] IpackageJson()
│   │   │   │          └──⚙️ [property] IpackageJson.name()
│   │   │   │          └──⚙️ [property] IpackageJson.type()
│   │   │   │          └──⚙️ [property] IpackageJson.private()
│   │   │   │          └──⚙️ [property] IpackageJson.version()
│   │   │   │          └──⚙️ [property] IpackageJson.description()
│   │   │   │          └──⚙️ [property] IpackageJson.main()
│   │   │   │          └──⚙️ [property] IpackageJson.author()
│   │   │   │          └──⚙️ [property] IpackageJson.license()
│   │   │   │          └──⚙️ [property] IpackageJson.scripts()
│   │   │   │          └──⚙️ [property] IpackageJson.dependencies()
│   │   │   │          └──⚙️ [property] IpackageJson.devDependencies()
│   │   │   ├── 📁 nestjs
│   │   │   │   ├── 📄 best-practices.md
│   │   │   │   ├── 📁 commun
│   │   │   │   │   └── 📄 readme.md
│   │   │   │   ├── 📁 config
│   │   │   │   │   ├── 📄 nestjs-architecture.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_NESTJS_MOCK()
│   │   │   │   │   ├── 📄 nestjs-categories-validators-array.ts
│   │   │   │   │   ├── 📄 nestjs-config-ini.mock.ts
│   │   │   │   │   ├── 📄 nestjs-current-validators.ts
│   │   │   │   │   ├── 📄 nestjs-dependencies.mock.ts
│   │   │   │   │   │      └──⚙️ [function] DEPENDENCIES_NESTJS_MOCK()
│   │   │   │   │   ├── 📄 nestjs-environments.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ENVIRONMENTS_NESTJS_MOCK()
│   │   │   │   │   ├── 📄 nestjs-initiale-architecture-project.mock.ts
│   │   │   │   │   ├── 📄 nestjs-install-options.mock.ts
│   │   │   │   │   │      └──⚙️ [function] INSTALL_OPTIONS_NESTJS_MOCK()
│   │   │   │   │   ├── 📄 nestjs-scripts.mock.ts
│   │   │   │   │   │      └──⚙️ [function] SCRIPTS_NESTJS_MOCK()
│   │   │   │   │   ├── 📄 nestjs-type-validator.mock.ts
│   │   │   │   │   ├── 📄 nestjs-validators-array.ts
│   │   │   │   │   ├── 📄 nestjs-validators-by-category.ts
│   │   │   │   │   └── 📄 nestjs-validators-with-options.ts.txt
│   │   │   │   ├── 📁 constant
│   │   │   │   │   └── 📄 nestjs-constants.constant.ts
│   │   │   │   ├── 📁 mock
│   │   │   │   │   └── 📄 nestjs-sample-orm-config.json
│   │   │   │   ├── 📁 models
│   │   │   │   │   ├── 📄 nestjs-column-decorators-result.model.ts
│   │   │   │   │   │      └──⚙️ [interface] ColumnDecoratorsResult()
│   │   │   │   │   │      └──⚙️ [property] ColumnDecoratorsResult.decorators()
│   │   │   │   │   │      └──⚙️ [property] ColumnDecoratorsResult.typeormImports()
│   │   │   │   │   ├── 📄 nestjs-dto-generator-result.model.ts
│   │   │   │   │   │      └──⚙️ [interface] DtoGeneratorResult()
│   │   │   │   │   │      └──⚙️ [property] DtoGeneratorResult.createDto()
│   │   │   │   │   │      └──⚙️ [property] DtoGeneratorResult.updateDto()
│   │   │   │   │   │      └──⚙️ [property] DtoGeneratorResult.responseDto()
│   │   │   │   │   ├── 📄 nestjs-dto-property.model.ts
│   │   │   │   │   │      └──⚙️ [interface] DtoProperty()
│   │   │   │   │   │      └──⚙️ [property] DtoProperty.name()
│   │   │   │   │   │      └──⚙️ [property] DtoProperty.isOptional()
│   │   │   │   │   │      └──⚙️ [property] DtoProperty.tsType()
│   │   │   │   │   │      └──⚙️ [property] DtoProperty.decorators()
│   │   │   │   │   │      └──⚙️ [property] DtoProperty.description()
│   │   │   │   │   ├── 📄 nestjs-entity-property.model.ts
│   │   │   │   │   │      └──⚙️ [interface] EntityProperty()
│   │   │   │   │   │      └──⚙️ [property] EntityProperty.name()
│   │   │   │   │   │      └──⚙️ [property] EntityProperty.nullable()
│   │   │   │   │   │      └──⚙️ [property] EntityProperty.tsType()
│   │   │   │   │   │      └──⚙️ [property] EntityProperty.decorators()
│   │   │   │   │   ├── 📄 nestjs-model.ts
│   │   │   │   │   │      └──⚙️ [interface] NestModel()
│   │   │   │   │   │      └──⚙️ [property] NestModel.name()
│   │   │   │   │   ├── 📄 nestjs-relation-config.model.ts
│   │   │   │   │   │      └──⚙️ [interface] RelationConfig()
│   │   │   │   │   │      └──⚙️ [property] RelationConfig.propertyName()
│   │   │   │   │   │      └──⚙️ [property] RelationConfig.propertyType()
│   │   │   │   │   │      └──⚙️ [property] RelationConfig.inverseSideProperty()
│   │   │   │   │   │      └──⚙️ [property] RelationConfig.isArray()
│   │   │   │   │   └── 📄 nestjs-relationship-result.model.ts
│   │   │   │   │          └──⚙️ [interface] RelationshipResult()
│   │   │   │   │          └──⚙️ [property] RelationshipResult.relations()
│   │   │   │   │          └──⚙️ [property] RelationshipResult.entityImports()
│   │   │   │   │          └──⚙️ [property] RelationshipResult.typeormImports()
│   │   │   │   ├── 📁 services
│   │   │   │   │   ├── 📁 dto
│   │   │   │   │   │   ├── 📄 analyse.md
│   │   │   │   │   │   ├── 📄 erreurs.md
│   │   │   │   │   │   ├── 📄 instruction.md
│   │   │   │   │   │   ├── 📄 nest-get-example-value.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetExampleValue(column: IColumnJson)
│   │   │   │   │   │   ├── 📄 nestjs-build-api-property-decorator.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsBuildApiPropertyDecorator(column: IColumnJson, dtoType: DtoType)
│   │   │   │   │   │   ├── 📄 nestjs-generate-all-dtos.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGenerateAllDtos(entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 nestjs-generate-column-description.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGenerateColumnDescription(column: IColumnJson)
│   │   │   │   │   │   ├── 📄 nestjs-generate-create-dto.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGenerateCreateDto(entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 nestjs-generate-dto-file.services.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGenerateDtoFile(entity: IEntityJson, properties: DtoProperty[], imports: string[], dtoType: DtoType, responseDtoImports: Set<string>)
│   │   │   │   │   │   ├── 📄 nestjs-generate-dto.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGenerateDto(entity: IEntityJson, dtoType: DtoType)
│   │   │   │   │   │   ├── 📄 nestjs-generate-response-dto.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsgenerateResponseDto(entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 nestjs-generate-update-dto-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] generateUpdateDto(entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 nestjs-get-column-decorators.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetColumnDecorators(column: IColumnJson, dtoType: DtoType, validationImports: Set<string>, transformImports: Set<string>)
│   │   │   │   │   │   ├── 📄 nestjs-get-column-optional-status.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetColumnOptionalStatus(column: IColumnJson, dtoType: DtoType)
│   │   │   │   │   │   ├── 📄 nestjs-get-dto-suffix.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetDtoSuffix(dtoType: DtoType)
│   │   │   │   │   │   ├── 📄 nestjs-get-relation-decorators.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetRelationDecorators(targetPascal: string, isArray: boolean, validationImports: Set<string>, transformImports: Set<string>)
│   │   │   │   │   │   ├── 📄 nestjs-get-transform-decorators.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetTransformDecorators(column: IColumnJson, transformImports: Set<string>)
│   │   │   │   │   │   ├── 📄 nestjs-get-type-validation-decorators.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetTypeValidationDecorators(column: IColumnJson, validationImports: Set<string>)
│   │   │   │   │   │   ├── 📄 nestjs-get-validation-decorators.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetValidationDecorators(column: IColumnJson, dtoType: DtoType, validationImports: Set<string>)
│   │   │   │   │   │   ├── 📄 nestjs-process-column-for-dto.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsProcessColumnForDto(column: IColumnJson, dtoType: DtoType, validationImports: Set<string>, transformImports: Set<string>)
│   │   │   │   │   │   ├── 📄 nestjs-process-relation-for-dto.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsProcessRelationForDto(relation: IRelation, currentEntityTableName: string, validationImports: Set<string>, transformImports: Set<string>, responseDtoImports: Set<string>)
│   │   │   │   │   │   └── 📄 nestjs-should-exclude-column.service.ts
│   │   │   │   │   │          └──⚙️ [function] nestjsShouldExcludeColumn(column: IColumnJson)
│   │   │   │   │   ├── 📁 entity
│   │   │   │   │   │   ├── 📄 nestjs-build-api-property-entity-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsBuildApiPropertyEntity(targetPascal: string, isArray: boolean)
│   │   │   │   │   │   ├── 📄 nestjs-build-column-options-entity-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsBuildColumnOptionsEntity(column: IColumnJson)
│   │   │   │   │   │   ├── 📄 nestjs-build-import-entity-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsBuildImportEntity(entityName: string)
│   │   │   │   │   │   ├── 📄 nestjs-build-import-statements-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] buildImportStatements(typeormImports: Set<string>, entityImports: Set<string>)
│   │   │   │   │   │   ├── 📄 nestjs-build-relation-decorator-entity-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsBuildRelationDecoratorEntity(relationType: string, targetPascal: string, targetCamel: string, inverseSideProperty: string, isOwningSide: boolean)
│   │   │   │   │   │   ├── 📄 nestjs-build-relation-entity.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsBuildRelationEntity(relation: IRelation, currentEntityTableName: string)
│   │   │   │   │   │   ├── 📄 nestjs-generate-entity-file-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGenerateEntityFile(entity: IEntityJson, properties: EntityProperty[], relations: string[], imports: string[])
│   │   │   │   │   │   ├── 📄 nestjs-get-column-decorator-entity-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetColumnDecoratorEntity(column: IColumnJson)
│   │   │   │   │   │   ├── 📄 nestjs-get-columns-decorators-entity-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetColumnsDecoratorsEntity(column: IColumnJson)
│   │   │   │   │   │   │      └──⚙️ [function] nestjGetColumnDecoratorEntity(column: IColumnJson)
│   │   │   │   │   │   ├── 📄 nestjs-get-relation-config-entity-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetRelationConfigEntity(relationType: string, source: string, target: string, currentEntityTableName: string)
│   │   │   │   │   │   ├── 📄 nestjs-get-relationships-entity-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetRelationshipsEntity(entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 nestjs-get-type-mapping-entity-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsGetTypeMappingEntity()
│   │   │   │   │   │   ├── 📄 nestjs-process-relationship-entity-service.ts
│   │   │   │   │   │   │      └──⚙️ [function] nestjsProcessRelationshipEntity(relationship: IRelation, currentEntityTableName: string, relations: string[], entityImports: Set<string>, typeormImports: Set<string>)
│   │   │   │   │   │   └── 📄 nestjs-should-add-join-column-entity-service.ts
│   │   │   │   │   │          └──⚙️ [function] nestjsShouldAddJoinColumnEntity(relationship: IRelation)
│   │   │   │   │   ├── 📄 instruction.txt
│   │   │   │   │   ├── 📄 nestjs-account-service.service.ts
│   │   │   │   │   │      └──⚙️ [function] nestjsCreateAccountModule(projectPath: string)
│   │   │   │   │   ├── 📄 nestjs-auth.service.ts
│   │   │   │   │   │      └──⚙️ [function] createAuthNestjs(projectPath: string)
│   │   │   │   │   │      └──⚙️ [function] createAuthDecoratorsNestjs(projectPath: string)
│   │   │   │   │   │      └──⚙️ [function] createAuthDtosNestjs(projectPath: string)
│   │   │   │   │   │      └──⚙️ [function] createAuthGuardsNestjs(projectPath: string)
│   │   │   │   │   │      └──⚙️ [function] createAuthInterfacesNestjs(projectPath: string)
│   │   │   │   │   │      └──⚙️ [function] createJwtStrategyNestjs(projectPath: string)
│   │   │   │   │   │      └──⚙️ [function] createAuthServiceNestjs(projectPath: string)
│   │   │   │   │   │      └──⚙️ [function] createAuthModuleNestjs(projectPath: string)
│   │   │   │   │   │      └──⚙️ [function] createAuthControllerNestjs(projectPath: string)
│   │   │   │   │   ├── 📄 nestjs-build-api-property.service.ts
│   │   │   │   │   ├── 📄 nestjs-build-imports-dto-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] nestjsBuildDtoEntityImports(validationImports: Set<string>, transformImports: Set<string>)
│   │   │   │   │   ├── 📄 nestjs-command.ts
│   │   │   │   │   ├── 📄 nestjs-config-project.service.ts
│   │   │   │   │   │      └──⚙️ [function] createConfigProjectNestjs(projectPath: string)
│   │   │   │   │   │      └──⚙️ [function] databaseConfigNestjs(projectPath: string, thisProjectConfig: IFramework)
│   │   │   │   │   │      └──⚙️ [function] appModuleNestjs(projectPath: string, entities: {
    entityNamePascalCase: string;
    entityNameKebabCase: string;
  }[])
│   │   │   │   │   │      └──⚙️ [function] mainFileNestjs(projectPath: string)
│   │   │   │   │   │      └──⚙️ [function] createEnvironmentsNestjs(projectPath: string, framework: IFramework)
│   │   │   │   │   ├── 📄 nestjs-database.service.ts
│   │   │   │   │   ├── 📄 nestjs-environment.service.ts
│   │   │   │   │   │      └──⚙️ [function] createEnvironmentNestjs(projectPath: string)
│   │   │   │   │   ├── 📄 nestjs-generate-controller.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateNestjsController(entity: IEntityJson)
│   │   │   │   │   ├── 📄 nestjs-generate-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] nestjsGenerateEntity(entity: IEntityJson)
│   │   │   │   │   ├── 📄 nestjs-generate-feature.service.ts
│   │   │   │   │   │      └──⚙️ [function] nestjsGenerateFeature(frameworkPath: string, entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] createEntityNestjs(projectPath: string, entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] createDtoNestjs(projectPath: string, entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] createControllerNestjs(projectPath: string, entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] createServiceNestjs(projectPath: string, entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] createSeederNestjs(projectPath: string, entities: IEntityJson[])
│   │   │   │   │   │      └──⚙️ [function] createModuleEntityNestjs(projectPath: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 nestjs-generate-files-framework.service.ts
│   │   │   │   │   │      └──⚙️ [function] nestjsGenerateFilesFramework(configFile: IProjectConfig, framework: IFramework, rootPathProjectFramework: string, entitiesJsonFile: object)
│   │   │   │   │   ├── 📄 nestjs-generate-interface.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateNestjsInterface(entity: IEntityJson)
│   │   │   │   │   ├── 📄 nestjs-generate-mock.service.ts
│   │   │   │   │   │      └──⚙️ [function] nestjsGenerateMock(entity: IEntityJson)
│   │   │   │   │   ├── 📄 nestjs-generate-module.service.ts
│   │   │   │   │   │      └──⚙️ [function] nestjsGenerateModule(entity: IEntityJson)
│   │   │   │   │   ├── 📄 nestjs-generate-service.service.ts
│   │   │   │   │   │      └──⚙️ [function] nestjsGenerateService(entity: IEntityJson)
│   │   │   │   │   ├── 📄 nestjs-generate-test.service.ts
│   │   │   │   │   │      └──⚙️ [function] nestjsGenerateTest(entity: IEntityJson)
│   │   │   │   │   ├── 📄 nestjs-relationship-type-orm.service.ts
│   │   │   │   │   │      └──⚙️ [function] getRelation(type: string, inEntity: string, toEntity: string)
│   │   │   │   │   │      └──⚙️ [function] getRelationType(source_cardinality: string, target_cardinality: string)
│   │   │   │   │   │      └──⚙️ [function] getInEntity(dictionaryEntitiesJson: Map<string, IEntityJson>, end: Iend)
│   │   │   │   │   │      └──⚙️ [function] getinverseSide()
│   │   │   │   │   │      └──⚙️ [function] getRelationShips(entity: IERDEntity, dictionaryEntitiesJson: Map<string, IEntityJson>)
│   │   │   │   │   ├── 📄 nestjs-tests.service.ts
│   │   │   │   │   │      └──⚙️ [function] nestjsCreateTests(projectPath: string, entity: IEntityJson)
│   │   │   │   │   └── 📁 old_dto
│   │   │   │   │       ├── 📄 analyse.md
│   │   │   │   │       ├── 📄 erreurs.md
│   │   │   │   │       ├── 📄 instruction.md
│   │   │   │   │       ├── 📄 nest-get-example-value.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGetExampleValue(column: IColumnJson)
│   │   │   │   │       ├── 📄 nestjs-build-api-property-decorator.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsBuildApiPropertyDecorator(column: IColumnJson, dtoType: DtoType)
│   │   │   │   │       ├── 📄 nestjs-generate-all-dtos.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGenerateAllDtos(entity: IEntityJson)
│   │   │   │   │       ├── 📄 nestjs-generate-column-description.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGenerateColumnDescription(column: IColumnJson)
│   │   │   │   │       ├── 📄 nestjs-generate-create-dto.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGenerateCreateDto(entity: IEntityJson)
│   │   │   │   │       ├── 📄 nestjs-generate-dto-file.services.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGenerateDtoFile(entity: IEntityJson, properties: DtoProperty[], imports: string[], dtoType: DtoType)
│   │   │   │   │       ├── 📄 nestjs-generate-dto.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGenerateDto(entity: IEntityJson, dtoType: DtoType)
│   │   │   │   │       ├── 📄 nestjs-generate-response-dto.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsgenerateResponseDto(entity: IEntityJson)
│   │   │   │   │       ├── 📄 nestjs-generate-update-dto-service.ts
│   │   │   │   │       │      └──⚙️ [function] generateUpdateDto(entity: IEntityJson)
│   │   │   │   │       ├── 📄 nestjs-get-column-decorators.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGetColumnDecorators(column: IColumnJson, dtoType: DtoType, validationImports: Set<string>, transformImports: Set<string>)
│   │   │   │   │       ├── 📄 nestjs-get-column-optional-status.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGetColumnOptionalStatus(column: IColumnJson, dtoType: DtoType)
│   │   │   │   │       ├── 📄 nestjs-get-dto-suffix.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGetDtoSuffix(dtoType: DtoType)
│   │   │   │   │       ├── 📄 nestjs-get-relation-decorators.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGetRelationDecorators(targetPascal: string, isArray: boolean, validationImports: Set<string>, transformImports: Set<string>)
│   │   │   │   │       ├── 📄 nestjs-get-transform-decorators.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGetTransformDecorators(column: IColumnJson, transformImports: Set<string>)
│   │   │   │   │       ├── 📄 nestjs-get-type-validation-decorators.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGetTypeValidationDecorators(column: IColumnJson, validationImports: Set<string>)
│   │   │   │   │       ├── 📄 nestjs-get-validation-decorators.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsGetValidationDecorators(column: IColumnJson, dtoType: DtoType, validationImports: Set<string>)
│   │   │   │   │       ├── 📄 nestjs-process-column-for-dto.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsProcessColumnForDto(column: IColumnJson, dtoType: DtoType, validationImports: Set<string>, transformImports: Set<string>)
│   │   │   │   │       ├── 📄 nestjs-process-relation-for-dto.service.ts
│   │   │   │   │       │      └──⚙️ [function] nestjsProcessRelationForDto(relation: IRelation, currentEntityTableName: string, validationImports: Set<string>, transformImports: Set<string>)
│   │   │   │   │       └── 📄 nestjs-should-exclude-column.service.ts
│   │   │   │   │              └──⚙️ [function] nestjsShouldExcludeColumn(column: IColumnJson)
│   │   │   │   └── 📁 templates
│   │   │   │       ├── 📁 account
│   │   │   │       │   ├── 📁 dto
│   │   │   │       │   │   └── 📄 nestjs-create-account-dto-template.ts
│   │   │   │       │   │          └──⚙️ [function] nestjsCreateAccountDtoTemplate()
│   │   │   │       │   ├── 📁 entity
│   │   │   │       │   ├── 📁 interfaces
│   │   │   │       │   │   └── 📄 nestjs-account-interface-template.ts
│   │   │   │       │   │          └──⚙️ [function] nestjsAccountInterfaceTemplate()
│   │   │   │       │   ├── 📄 nestjs-account-controller-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsAccountControllerTemplate()
│   │   │   │       │   ├── 📄 nestjs-account-entity-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsAccountEntityJsonTemplate()
│   │   │   │       │   │      └──⚙️ [function] nestjsAccountEntityTemplate()
│   │   │   │       │   ├── 📄 nestjs-account-module-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsAccountModuleTemplate()
│   │   │   │       │   └── 📄 nestjs-account-service-template.ts
│   │   │   │       │          └──⚙️ [function] nestjsAccountServiceTemplate()
│   │   │   │       ├── 📁 authentification
│   │   │   │       │   ├── 📁 decorators
│   │   │   │       │   │   ├── 📄 nestjs-permissions-decorator-template.ts
│   │   │   │       │   │   │      └──⚙️ [function] nestjsAuthPermissionsDecoratorTemplate()
│   │   │   │       │   │   ├── 📄 nestjs-permissions-decorator.ts
│   │   │   │       │   │   │      └──⚙️ [function] nestjsAuthPermissionsDecoratorTemplate()
│   │   │   │       │   │   ├── 📄 nestjs-roles-decorator-template.ts
│   │   │   │       │   │   │      └──⚙️ [function] nestjsAuthRolesDecoratorTemplate()
│   │   │   │       │   │   └── 📄 nestjs-roles-decorator.ts
│   │   │   │       │   │          └──⚙️ [function] nestjsAuthRolesDecoratorTemplate()
│   │   │   │       │   ├── 📁 dto
│   │   │   │       │   │   └── 📄 nestjs-login-dto.ts
│   │   │   │       │   │          └──⚙️ [function] nestjsloginDtoTemplate()
│   │   │   │       │   ├── 📁 guards
│   │   │   │       │   │   ├── 📄 nestjs-auth-jwt-guard-mock-ts.txt
│   │   │   │       │   │   ├── 📄 nestjs-jwt-auth-guard-template.ts
│   │   │   │       │   │   │      └──⚙️ [function] nestjsJwtAuthGuardTemplate()
│   │   │   │       │   │   ├── 📄 nestjs-permissions-guard-template.ts
│   │   │   │       │   │   │      └──⚙️ [function] nestjsPermissionsGuardTemplate()
│   │   │   │       │   │   └── 📄 nestjs-roles-guard-template.ts
│   │   │   │       │   │          └──⚙️ [function] nestjsRolesGuardTemplate()
│   │   │   │       │   ├── 📁 interfaces
│   │   │   │       │   │   └── 📄 nestjs-jwt-payload-interface-template.ts
│   │   │   │       │   │          └──⚙️ [function] nestjsJwtPayloadInterfaceTemplate()
│   │   │   │       │   ├── 📄 nestjs-auth-controller-mock.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsAuthControllerTemplate()
│   │   │   │       │   ├── 📄 nestjs-auth-doc-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsAuthDockTemplate()
│   │   │   │       │   ├── 📄 nestjs-auth-module-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsAuthModuleTemplate()
│   │   │   │       │   ├── 📄 nestjs-auth-service-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsAuthServiceTemplate()
│   │   │   │       │   └── 📁 strategies
│   │   │   │       │       └── 📄 nestjs-jwt-strategy-template.ts
│   │   │   │       │              └──⚙️ [function] nestjsJwtStrategyTemplate()
│   │   │   │       ├── 📁 config
│   │   │   │       │   ├── 📁 json
│   │   │   │       │   │   ├── 📄 nestjs-architecture-initial.json
│   │   │   │       │   │   ├── 📄 nestjs-dependencies-list.json
│   │   │   │       │   │   ├── 📄 nestjs-dependencies.json
│   │   │   │       │   │   ├── 📄 nestjs-dev-dependencies.json
│   │   │   │       │   │   ├── 📄 nestjs-dev-dependencies.json~
│   │   │   │       │   │   ├── 📄 nestjs-dot-env.json
│   │   │   │       │   │   ├── 📄 nestjs-environments.json
│   │   │   │       │   │   ├── 📄 nestjs-install-options.json
│   │   │   │       │   │   ├── 📄 nestjs-install-options.json~
│   │   │   │       │   │   ├── 📄 nestjs-packagejson.json
│   │   │   │       │   │   ├── 📄 nestjs-packagejson.json~
│   │   │   │       │   │   ├── 📄 nestjs-ressources.json
│   │   │   │       │   │   ├── 📄 nestjs-ressources.json~
│   │   │   │       │   │   └── 📄 nestjs-tsconfigjson.json
│   │   │   │       │   ├── 📄 nestjs-app-module-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsAppModuleTemplate(entities: {
    entityNamePascalCase: string;
    entityNameKebabCase: string;
  }[])
│   │   │   │       │   ├── 📄 nestjs-environments-mock.ts
│   │   │   │       │   ├── 📄 nestjs-environments-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsEnvironmentsTemplate(environment: IEnvironment)
│   │   │   │       │   └── 📄 nestjs-main-template.ts
│   │   │   │       │          └──⚙️ [function] nestjsMainTemplate()
│   │   │   │       ├── 📁 controller
│   │   │   │       │   ├── 📄 controller-restfull.md
│   │   │   │       │   ├── 📄 nestjs-controller-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsControlleTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nestjs-generic-controlle-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsGenericControllerTemplate(name: string)
│   │   │   │       │   ├── 📄 nestjs-restfull-controller-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsControlleRestfullTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nestjs-test-controller-spec-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsTestControllerSpecTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 old-nestjs-controller-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsControlleTemplate(entity: IEntityJson)
│   │   │   │       │   └── 📄 old-nestjs-restfull-controller-template.ts
│   │   │   │       │          └──⚙️ [function] nestjsControlleRestfullTemplate(entity: IEntityJson)
│   │   │   │       ├── 📁 database
│   │   │   │       │   ├── 📄 nestjs-data-source-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsDatabaseSourceTemplate(thisProjectConfig: IFramework)
│   │   │   │       │   └── 📄 nestjs-database-config-template.ts
│   │   │   │       │          └──⚙️ [function] nestjsDatabaseConfigTemplate(projectPath: string)
│   │   │   │       ├── 📁 doc
│   │   │   │       │   └── 📄 nestjs-dependancies.md
│   │   │   │       ├── 📁 dto
│   │   │   │       │   ├── 📄 doc.md
│   │   │   │       │   ├── 📄 nestjs-create-dto-template.ts
│   │   │   │       │   │      └──⚙️ [interface] ValidatorMapping()
│   │   │   │       │   │      └──⚙️ [property] ValidatorMapping.importDecorators()
│   │   │   │       │   │      └──⚙️ [property] ValidatorMapping.validators()
│   │   │   │       │   │      └──⚙️ [interface] Validators()
│   │   │   │       │   │      └──⚙️ [property] Validators.name()
│   │   │   │       │   │      └──⚙️ [property] Validators.nullable()
│   │   │   │       │   │      └──⚙️ [property] Validators.typeSql()
│   │   │   │       │   │      └──⚙️ [property] Validators.tsType()
│   │   │   │       │   │      └──⚙️ [property] Validators.decorators()
│   │   │   │       │   │      └──⚙️ [function] nestjsCreateDtoTemplate(entity: IEntityJson)
│   │   │   │       │   │      └──⚙️ [function] mapSqlTypeToValidators(column: IColumnJson)
│   │   │   │       │   ├── 📄 nestjs-dto-template.ts
│   │   │   │       │   ├── 📄 nestjs-entity-dto-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsEntityDtoTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nestjs-response-dto-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsResponseDtoTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nestjs-update-dto-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsUpdateDtoTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 old-nestjs-create-dto-template.ts
│   │   │   │       │   │      └──⚙️ [interface] ValidatorMapping()
│   │   │   │       │   │      └──⚙️ [property] ValidatorMapping.importDecorators()
│   │   │   │       │   │      └──⚙️ [property] ValidatorMapping.validators()
│   │   │   │       │   │      └──⚙️ [interface] Validators()
│   │   │   │       │   │      └──⚙️ [property] Validators.name()
│   │   │   │       │   │      └──⚙️ [property] Validators.nullable()
│   │   │   │       │   │      └──⚙️ [property] Validators.typeSql()
│   │   │   │       │   │      └──⚙️ [property] Validators.tsType()
│   │   │   │       │   │      └──⚙️ [property] Validators.decorators()
│   │   │   │       │   │      └──⚙️ [function] nestjsCreateDtoTemplate(entity: IEntityJson)
│   │   │   │       │   │      └──⚙️ [function] mapSqlTypeToValidators(column: IColumnJson)
│   │   │   │       │   │      └──⚙️ [function] propertyNameToValidators(column: IColumnJson)
│   │   │   │       │   ├── 📄 old-nestjs-response-dto-template.ts
│   │   │   │       │   │      └──⚙️ [interface] ValidatorMapping()
│   │   │   │       │   │      └──⚙️ [property] ValidatorMapping.importDecorators()
│   │   │   │       │   │      └──⚙️ [property] ValidatorMapping.validators()
│   │   │   │       │   │      └──⚙️ [interface] Validators()
│   │   │   │       │   │      └──⚙️ [property] Validators.name()
│   │   │   │       │   │      └──⚙️ [property] Validators.nullable()
│   │   │   │       │   │      └──⚙️ [property] Validators.typeSql()
│   │   │   │       │   │      └──⚙️ [property] Validators.tsType()
│   │   │   │       │   │      └──⚙️ [property] Validators.decorators()
│   │   │   │       │   │      └──⚙️ [function] nestjsresponseDtoTemplate(entity: IEntityJson)
│   │   │   │       │   │      └──⚙️ [function] mapSqlTypeToValidators(column: IColumnJson)
│   │   │   │       │   ├── 📄 old-nestjs-update-dto-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsUpdateDtoTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 readme.md
│   │   │   │       │   └── 📄 should-exclude-column.ts
│   │   │   │       ├── 📁 entities
│   │   │   │       │   ├── 📄 convention.md
│   │   │   │       │   ├── 📄 entities.md
│   │   │   │       │   ├── 📄 nestjs-entity-template-copy.ts
│   │   │   │       │   │      └──⚙️ [interface] TProperty()
│   │   │   │       │   │      └──⚙️ [property] TProperty.name()
│   │   │   │       │   │      └──⚙️ [property] TProperty.nullable()
│   │   │   │       │   │      └──⚙️ [property] TProperty.tsType()
│   │   │   │       │   │      └──⚙️ [property] TProperty.decorators()
│   │   │   │       │   │      └──⚙️ [function] nestjsEntityTemplate(entity: IEntityJson)
│   │   │   │       │   │      └──⚙️ [function] buildImportEntity(entityName: string)
│   │   │   │       │   │      └──⚙️ [function] getRelationShips(entity: IEntityJson)
│   │   │   │       │   │      └──⚙️ [function] getColumnsDecorators(column: IColumnJson)
│   │   │   │       │   │      └──⚙️ [function] buildRelation(relation: IRelation, currentEntityTableName: string)
│   │   │   │       │   ├── 📄 nestjs-entity-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsEntityTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nestjs-generic-entity-template.ts
│   │   │   │       │   │      └──⚙️ [function] getEntityTemplate(name: string)
│   │   │   │       │   ├── 📄 nestjs-relations.md
│   │   │   │       │   ├── 📄 nestjs-repository-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsRepositoryTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nestjsGetTypeMappingEntity.service.ts
│   │   │   │       │   ├── 📄 old-nestjs-entity-template.ts
│   │   │   │       │   │      └──⚙️ [interface] TProperty()
│   │   │   │       │   │      └──⚙️ [property] TProperty.name()
│   │   │   │       │   │      └──⚙️ [property] TProperty.nullable()
│   │   │   │       │   │      └──⚙️ [property] TProperty.tsType()
│   │   │   │       │   │      └──⚙️ [property] TProperty.decorators()
│   │   │   │       │   │      └──⚙️ [function] nestjsEntityTemplate(entity: IEntityJson)
│   │   │   │       │   │      └──⚙️ [function] buildImportEntity(entityName: string)
│   │   │   │       │   │      └──⚙️ [function] getRelationShips(entity: IEntityJson)
│   │   │   │       │   │      └──⚙️ [function] getColumnsDecorators(column: IColumnJson)
│   │   │   │       │   │      └──⚙️ [function] buildRelation(relation: IRelation, currentEntityTableName: string)
│   │   │   │       │   └── 📄 readme.md
│   │   │   │       ├── 📁 feartures-services
│   │   │   │       ├── 📁 fixtures
│   │   │   │       │   └── 📄 nestjs-fixture-template.ts
│   │   │   │       ├── 📁 helpers
│   │   │   │       │   └── 📁 utils
│   │   │   │       │       └── 📄 date-transformer.ts
│   │   │   │       │              └──⚙️ [function] transformToISOString({
  value,
}: {
  value: string | Date | undefined;
})
│   │   │   │       ├── 📁 interface
│   │   │   │       │   ├── 📄 nestjs-entity-interface-template.ts
│   │   │   │       │   │      └──⚙️ [function] getNestjsInterfaceTemplate(entity: IEntityJson)
│   │   │   │       │   └── 📄 nestjs-interface-template.ts
│   │   │   │       │          └──⚙️ [function] getNestjsInterfaceTemplate(entity: IEntityJson)
│   │   │   │       ├── 📁 mock
│   │   │   │       ├── 📁 module
│   │   │   │       │   ├── 📄 nestjs-entity-module-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsEntityModuleTemplate(entity: IEntityJson)
│   │   │   │       │   └── 📄 nestjs-generic-module-template.ts
│   │   │   │       │          └──⚙️ [function] getModuleTemplate(name: string)
│   │   │   │       ├── 📁 seeds
│   │   │   │       │   ├── 📄 nestjs-entity-seed-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsSeederEntityTemplate(entity: IEntityJson)
│   │   │   │       │   │      └──⚙️ [function] generateValue(col: IColumnJson)
│   │   │   │       │   │      └──⚙️ [function] generateSeeder(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nestjs-seed-module-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsSeedModuleTemplate(entities: IEntityJson[])
│   │   │   │       │   └── 📄 nestjs-seed-template.ts
│   │   │   │       │          └──⚙️ [function] nestjsSeedTemplate(entities: IEntityJson[])
│   │   │   │       ├── 📁 service
│   │   │   │       │   ├── 📄 nestjs-crud-service-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsServiceCrudTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nestjs-generic-service-template.ts
│   │   │   │       │   │      └──⚙️ [function] getNestjsServiceTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nestjs-service-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsServiceTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nestjs-test-service-spec-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestTestServiceSpecTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nestjs-user-service.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsUserServiceTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 old-nestjs-crud-service-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsServiceCrudTemplate(entity: IEntityJson)
│   │   │   │       │   └── 📄 old-nestjs-service-template.ts
│   │   │   │       │          └──⚙️ [function] nestjsServiceTemplate(entity: IEntityJson)
│   │   │   │       ├── 📁 test
│   │   │   │       │   └── 📄 nestjs-test-template.ts
│   │   │   │       │          └──⚙️ [function] getNestjsTestTemplate(entity: IEntityJson)
│   │   │   │       ├── 📁 type-orm
│   │   │   │       │   └── 📄 nestjs-type-orm-config-template.ts
│   │   │   │       ├── 📁 user
│   │   │   │       │   ├── 📄 nestjs-users-module-template.ts
│   │   │   │       │   │      └──⚙️ [function] nestjsUsersModuleTemplate()
│   │   │   │       │   └── 📄 nestjs-users-service-template.ts
│   │   │   │       │          └──⚙️ [function] nestjsUserTemplate()
│   │   │   │       └── 📁 validation-contraints
│   │   │   │           ├── 📄 nestjs-contraint-template.ts
│   │   │   │           └── 📄 nestjs-validation-template.ts
│   │   │   ├── 📁 nitro
│   │   │   │   ├── 📄 auth-cookie-http-only.md
│   │   │   │   ├── 📄 auth.md
│   │   │   │   ├── 📁 config
│   │   │   │   │   ├── 📄 nitro-architecture.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_NITRO_MOCK()
│   │   │   │   │   ├── 📄 nitro-config-ini.mock.ts
│   │   │   │   │   ├── 📄 nitro-dependencies.mock.ts
│   │   │   │   │   │      └──⚙️ [function] DEPENDENCIES_NITRO_MOCK()
│   │   │   │   │   ├── 📄 nitro-environments.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ENVIRONMENTS_NITRO_MOCK()
│   │   │   │   │   ├── 📄 nitro-initiale-architecture-project.mock.ts
│   │   │   │   │   ├── 📄 nitro-install-options.mock.ts
│   │   │   │   │   │      └──⚙️ [function] INSTALL_OPTIONS_NITRO_MOCK()
│   │   │   │   │   └── 📄 nitro-scripts.mock.ts
│   │   │   │   │          └──⚙️ [function] SCRIPTS_NITRO_MOCK()
│   │   │   │   ├── 📄 readme.md
│   │   │   │   ├── 📁 services
│   │   │   │   │   ├── 📄 dot-env-generate.service.ts
│   │   │   │   │   │      └──⚙️ [function] dotEnvGenerateService(projectPath: string, configFile: IProjectConfig)
│   │   │   │   │   ├── 📄 nitro-generate-config-drizzle.service.txt
│   │   │   │   │   ├── 📄 nitro-generate-connection-drizzle.service.ts
│   │   │   │   │   │      └──⚙️ [function] nitroGenerateConnectionDrizzleService(rootServer: string, configFile: IProjectConfig, url: any)
│   │   │   │   │   ├── 📄 nitro-generate-files-framework.service.ts
│   │   │   │   │   │      └──⚙️ [function] nitroGenerateFilesFramework(rootPathProjectFramework: string, configFile: IProjectConfig, framework: IFramework, entitiesJsonFile: object, mode: string)
│   │   │   │   │   ├── 📄 nitro-generate-repository-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] nitroGenerateRepositoryEntityService(rootServerApi: string, entity: IEntityJson, mode: string)
│   │   │   │   │   ├── 📄 nitro-generate-routes-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] nitroGenerateRoutesEntityService(rootServerApi: string, entity: IEntityJson, mode: string)
│   │   │   │   │   ├── 📄 nitro-generate-service-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] nitroGenerateServiceEntityService(rootServerApi: string, entity: IEntityJson)
│   │   │   │   │   └── 📄 nitro-generate-specific-file-.service.ts
│   │   │   │   │          └──⚙️ [function] nitroGenerateSpecificFileService(rootServer: string)
│   │   │   │   └── 📁 templates
│   │   │   │       ├── 📁 config
│   │   │   │       ├── 📁 doc
│   │   │   │       │   └── 📄 readme.template.ts
│   │   │   │       │          └──⚙️ [function] readmeTemplate()
│   │   │   │       ├── 📁 models
│   │   │   │       │   ├── 📄 model-base-repository-template.ts
│   │   │   │       │   │      └──⚙️ [function] interfaceBaseRepositoryTemplate()
│   │   │   │       │   └── 📄 model-base-service-template.ts
│   │   │   │       │          └──⚙️ [function] interfaceBaseServiceTemplate()
│   │   │   │       ├── 📁 repositories
│   │   │   │       │   ├── 📄 base-repository-template.ts
│   │   │   │       │   │      └──⚙️ [function] baseRepositoryTemplate()
│   │   │   │       │   ├── 📄 drizzle-entity-repository-template copy.ts
│   │   │   │       │   │      └──⚙️ [function] drizzleEntityRepositoryTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 drizzle-entity-repository-template-v1.ts
│   │   │   │       │   │      └──⚙️ [function] drizzleEntityRepositoryTemplatev1(entity: IEntityJson)
│   │   │   │       │   ├── 📄 drizzle-entity-repository-template-v2.ts
│   │   │   │       │   │      └──⚙️ [function] drizzleEntityRepositoryTemplatev2(entity: IEntityJson)
│   │   │   │       │   ├── 📄 drizzle-entity-repository-template.ts
│   │   │   │       │   │      └──⚙️ [function] drizzleEntityRepositoryTemplate(entity: IEntityJson)
│   │   │   │       │   └── 📄 readme.md
│   │   │   │       ├── 📁 routes
│   │   │   │       │   ├── 📄 nitro-id-delete-template.ts
│   │   │   │       │   │      └──⚙️ [function] nitroIdDeleteTemplate(entity: IEntityJson, mode: string)
│   │   │   │       │   ├── 📄 nitro-id-get-template.ts
│   │   │   │       │   │      └──⚙️ [function] nitroIdGetTemplate(entity: IEntityJson, mode: string)
│   │   │   │       │   ├── 📄 nitro-id-patch-template.ts
│   │   │   │       │   │      └──⚙️ [function] nitroIdPatchTemplate(entity: IEntityJson, mode: string)
│   │   │   │       │   ├── 📄 nitro-id-put-template.ts
│   │   │   │       │   │      └──⚙️ [function] nitroIdPutTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nitro-index-get-template.ts
│   │   │   │       │   │      └──⚙️ [function] nitroIndexGetTemplate(entity: IEntityJson, mode: string)
│   │   │   │       │   ├── 📄 nitro-index-post-template.ts
│   │   │   │       │   │      └──⚙️ [function] nitroIndexPostTemplate(entity: IEntityJson, mode: string)
│   │   │   │       │   └── 📄 readme.md
│   │   │   │       ├── 📁 services
│   │   │   │       │   ├── 📄 base-service-template.ts
│   │   │   │       │   │      └──⚙️ [function] baseServiceTemplate()
│   │   │   │       │   ├── 📄 nitro-entity-service-template copy.ts
│   │   │   │       │   │      └──⚙️ [interface] BaseEntity()
│   │   │   │       │   │      └──⚙️ [property] BaseEntity.id()
│   │   │   │       │   │      └──⚙️ [property] BaseEntity.email()
│   │   │   │       │   │      └──⚙️ [property] BaseEntity.name()
│   │   │   │       │   │      └──⚙️ [property] BaseEntity.createdAt()
│   │   │   │       │   │      └──⚙️ [property] BaseEntity.updatedAt()
│   │   │   │       │   │      └──⚙️ [interface] CreateEntityData()
│   │   │   │       │   │      └──⚙️ [property] CreateEntityData.email()
│   │   │   │       │   │      └──⚙️ [property] CreateEntityData.name()
│   │   │   │       │   │      └──⚙️ [interface] UpdateEntityData()
│   │   │   │       │   │      └──⚙️ [property] UpdateEntityData.name()
│   │   │   │       │   │      └──⚙️ [property] UpdateEntityData.email()
│   │   │   │       │   │      └──⚙️ [interface] GenericRepository()
│   │   │   │       │   │      └──⚙️ [function] nitroEntityServiceTemplate(entity: IEntityJson)
│   │   │   │       │   ├── 📄 nitro-entity-service-template.objet.ts
│   │   │   │       │   │      └──⚙️ [function] nitroEntityServiceTemplate(entity: IEntityJson)
│   │   │   │       │   └── 📄 nitro-entity-service-template.ts
│   │   │   │       │          └──⚙️ [function] nitroEntityServiceTemplate(entity: IEntityJson)
│   │   │   │       └── 📁 utils
│   │   │   │           ├── 📄 dot.env.template.ts
│   │   │   │           │      └──⚙️ [function] dotEnvTemplate(projectPath: string, configFile: IProjectConfig)
│   │   │   │           ├── 📄 logger.template.ts
│   │   │   │           ├── 📄 nitro-handle-api-error-template.ts
│   │   │   │           │      └──⚙️ [function] nitroHandleApiErrorTemplate()
│   │   │   │           └── 📄 nitro-utils-db-template.ts
│   │   │   │                  └──⚙️ [function] nitroUtilsDbTemplate()
│   │   │   ├── 📁 nuxt
│   │   │   │   ├── 📁 config
│   │   │   │   │   ├── 📄 nuxt-architecture.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_DIRECTORY_COMMUN_NUXT_MOCK(path: string)
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_DIRECTORY_PROJECT_NUXT_MOCK()
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_DIRECTORY_SHARED_NUXT_MOCK()
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_NUXT_MOCK()
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_CLASSIC_NUXT_MOCK()
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_NUXT_LAYERS_CORE_UI_MOCK()
│   │   │   │   │   ├── 📄 nuxt-config-generator.ts
│   │   │   │   │   │      └──⚙️ [function] generateNuxtConfig(targetPath: string)
│   │   │   │   │   ├── 📄 nuxt-config-ini.mock.ts
│   │   │   │   │   ├── 📄 nuxt-dependencies.mock.ts
│   │   │   │   │   │      └──⚙️ [function] DEPENDENCIES_NUXT_MOCK()
│   │   │   │   │   ├── 📄 nuxt-environments.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ENVIRONMENTS_NUXT_MOCK()
│   │   │   │   │   ├── 📄 nuxt-initiale-architecture-project.mock.ts
│   │   │   │   │   ├── 📄 nuxt-install-options.mock.ts
│   │   │   │   │   │      └──⚙️ [function] INSTALL_OPTIONS_NUXT_MOCK()
│   │   │   │   │   └── 📄 nuxt-scripts.mock.ts
│   │   │   │   │          └──⚙️ [function] SCRIPTS_NUXT_MOCK()
│   │   │   │   ├── 📄 gene_fram.md
│   │   │   │   ├── 📁 mock
│   │   │   │   │   ├── 📁 layers
│   │   │   │   │   │   ├── 📁 core-app
│   │   │   │   │   │   │   └── 📄 nuxt.config.ts
│   │   │   │   │   │   └── 📁 core-ui
│   │   │   │   │   │       ├── 📁 assets
│   │   │   │   │   │       │   └── 📁 css
│   │   │   │   │   │       │       └── 📄 main.css
│   │   │   │   │   │       ├── 📁 composables
│   │   │   │   │   │       │   └── 📄 useTheme.ts
│   │   │   │   │   │       ├── 📄 nuxt.config.ts
│   │   │   │   │   │       └── 📁 plugins
│   │   │   │   │   │           └── 📄 dayjs.ts
│   │   │   │   │   ├── 📄 mock.md
│   │   │   │   │   └── 📄 sample-nuxt-config.json
│   │   │   │   ├── 📁 models
│   │   │   │   │   ├── 📄 nuxt-config-ts.model.ts
│   │   │   │   │   │      └──⚙️ [interface] INuxtConfigTs()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.compatibilityDate()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.devtools()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.ssr()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.dev()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.app()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.modules()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.plugins()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.css()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.build()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.runtimeConfig()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.nitro()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.typescript()
│   │   │   │   │   │      └──⚙️ [property] INuxtConfigTs.vite()
│   │   │   │   │   └── 📄 nuxt-model.ts
│   │   │   │   │          └──⚙️ [interface] NuxtModel()
│   │   │   │   │          └──⚙️ [property] NuxtModel.name()
│   │   │   │   ├── 📄 readme.md
│   │   │   │   ├── 📁 services
│   │   │   │   │   ├── 📄 generate-controller.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateNuxtController(entity: IEntityJson)
│   │   │   │   │   ├── 📄 generate-dto.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateNuxtDto(entity: IEntityJson)
│   │   │   │   │   ├── 📄 generate-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateNuxtEntity(entity: IEntityJson)
│   │   │   │   │   ├── 📄 generate-layout.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateLayout(targetPath: string, name: string)
│   │   │   │   │   ├── 📄 generate-module.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateNuxtModule(entity: IEntityJson)
│   │   │   │   │   ├── 📄 generate-service.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateNuxtService(entity: IEntityJson)
│   │   │   │   │   ├── 📄 generate-test.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateNuxtTest(entity: IEntityJson)
│   │   │   │   │   ├── 📄 nuxt-generate-component.service.ts
│   │   │   │   │   │      └──⚙️ [function] nuxtGenerateComponentService(rootPathProjectFramework: string)
│   │   │   │   │   ├── 📄 nuxt-generate-files-css.service.ts
│   │   │   │   │   │      └──⚙️ [function] nuxtGenerateFilesCssService(rootPathProjectFramework: string)
│   │   │   │   │   ├── 📄 nuxt-generate-files-framework.service.ts
│   │   │   │   │   │      └──⚙️ [function] nuxtGenerateFilesFramework(rootPathProjectFramework: string, configFile: IProjectConfig, framework: IFramework, entitiesJsonFile: object, mode: string)
│   │   │   │   │   ├── 📄 nuxt-generate-form-entity-component.service.ts
│   │   │   │   │   │      └──⚙️ [function] nuxtGenerateFromEntityComponentService(rootPathProjectFramework: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 nuxt-generate-model-schema-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] nuxtGenerateModelSchemaEntityService(rootPathProjectFramework: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 nuxt-generate-model.service.ts
│   │   │   │   │   │      └──⚙️ [function] nuxtGenerateModelService(rootPathProjectFramework: string)
│   │   │   │   │   ├── 📄 nuxt-generate-page.service.ts
│   │   │   │   │   │      └──⚙️ [function] generatePage(targetPath: string, name: string)
│   │   │   │   │   │      └──⚙️ [function] nuxtGeneratePagesService(rootPathProjectFramework: string, title: string)
│   │   │   │   │   │      └──⚙️ [function] nuxtGeneratePagesDirectoryService(rootPathProjectFramework: string, dir: string, title: string, name: string)
│   │   │   │   │   ├── 📄 nuxt-generate-store.entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] nuxtGenerateStoreEntityService(rootPathProjectFramework: string, entity: IEntityJson)
│   │   │   │   │   └── 📄 nuxt-update-file-nuxt-config-ts.service.ts
│   │   │   │   │          └──⚙️ [function] nuxtUpdateFileNuxtConfigTsService(rootPathProjectFramework: string)
│   │   │   │   │          └──⚙️ [function] nuxtUpdateContentFileNuxtConfigTs(nuxtConfigFileJson: INuxtConfigTs)
│   │   │   │   │          └──⚙️ [function] ensureModule(arr: any[] | undefined, entry: any)
│   │   │   │   ├── 📁 templates
│   │   │   │   │   ├── 📁 components
│   │   │   │   │   │   ├── 📄 get-component-template.template.ts
│   │   │   │   │   │   │      └──⚙️ [function] getComponentTemplate(name: string)
│   │   │   │   │   │   ├── 📄 nuxt-app.template.ts
│   │   │   │   │   │   │      └──⚙️ [function] nuxtAppComponentTemplate()
│   │   │   │   │   │   ├── 📄 nuxt-from-entity-component-template.ts
│   │   │   │   │   │   │      └──⚙️ [function] nuxtFromEntityComponentTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] typeField(col: IColumnJson)
│   │   │   │   │   │   └── 📄 nuxt-page.template.ts
│   │   │   │   │   │          └──⚙️ [function] nuxtPageComponentTemplate(title: any)
│   │   │   │   │   ├── 📁 css
│   │   │   │   │   │   ├── 📄 nuxt-main-css.template.ts
│   │   │   │   │   │   │      └──⚙️ [function] nuxtMainCssTemplate()
│   │   │   │   │   │   └── 📄 nuxt-tailwind-css.template.ts
│   │   │   │   │   │          └──⚙️ [function] nuxtTailwindCssTemplate()
│   │   │   │   │   ├── 📄 get-layout-template.template.ts
│   │   │   │   │   │      └──⚙️ [function] getLayoutTemplate(name: string)
│   │   │   │   │   ├── 📄 get-nuxt-controller-template.template.ts
│   │   │   │   │   │      └──⚙️ [function] getNuxtControllerTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 get-nuxt-dto-template.template.ts
│   │   │   │   │   │      └──⚙️ [function] getNuxtDtoTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 get-nuxt-entity-template.template.ts
│   │   │   │   │   │      └──⚙️ [function] getNuxtEntityTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 get-nuxt-interface-template.template.ts
│   │   │   │   │   │      └──⚙️ [function] getNuxtInterfaceTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 get-nuxt-module-template.template.ts
│   │   │   │   │   │      └──⚙️ [function] getNuxtModuleTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 get-nuxt-service-template.template.ts
│   │   │   │   │   │      └──⚙️ [function] getNuxtServiceTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 get-nuxt-test-template.template.ts
│   │   │   │   │   │      └──⚙️ [function] getNuxtTestTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 get-page-component-template.template.ts
│   │   │   │   │   │      └──⚙️ [function] getPageComponentTemplate(name: string)
│   │   │   │   │   ├── 📁 models
│   │   │   │   │   │   └── 📄 nuxt-api-response.template.ts
│   │   │   │   │   │          └──⚙️ [function] nuxtApiResponseTemplate()
│   │   │   │   │   ├── 📁 stores
│   │   │   │   │   │   ├── 📄 nuxt-store-actions.template.ts
│   │   │   │   │   │   │      └──⚙️ [function] nuxtStoreActionsFindAllTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] nuxtStoreActionsFindByIdTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] nuxtStoreActionsCreateTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] nuxtStoreActionsCreateManyTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] nuxtStoreActionsUpdateTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] nuxtStoreActionsDeleteTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] nuxtStoreActionsFindAllCacheTemplate(entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 nuxt-store-getters.template.ts
│   │   │   │   │   │   │      └──⚙️ [function] nuxtStoreGettersTemplate(entity: IEntityJson, isActive: boolean)
│   │   │   │   │   │   └── 📄 nuxt-store.template.ts
│   │   │   │   │   │          └──⚙️ [function] nuxtStoreTemplate(entity: IEntityJson)
│   │   │   │   │   └── 📄 tree_template.md
│   │   │   │   └── 📁 templates-ejs
│   │   │   │       ├── 📁 apps
│   │   │   │       │   └── 📁 web
│   │   │   │       │       ├── 📄 nuxt.config.ts.ejs
│   │   │   │       │       ├── 📄 package.json.ejs
│   │   │   │       │       └── 📁 pages
│   │   │   │       │           └── 📄 index.vue.ejs
│   │   │   │       ├── 📁 layers
│   │   │   │       │   ├── 📁 auth
│   │   │   │       │   │   ├── 📁 composables
│   │   │   │       │   │   │   └── 📄 useAuth.ts.ejs
│   │   │   │       │   │   ├── 📄 nuxt.config.ts.ejs
│   │   │   │       │   │   ├── 📁 pages
│   │   │   │       │   │   │   ├── 📄 login.vue.ejs
│   │   │   │       │   │   │   └── 📄 register.vue.ejs
│   │   │   │       │   │   ├── 📁 server
│   │   │   │       │   │   │   └── 📁 api
│   │   │   │       │   │   │       └── 📄 auth.login.post.ts.ejs
│   │   │   │       │   │   └── 📁 stores
│   │   │   │       │   │       └── 📄 auth.store.ts.ejs
│   │   │   │       │   ├── 📁 core-app
│   │   │   │       │   │   ├── 📄 app.config.ts.ejs
│   │   │   │       │   │   ├── 📄 app.vue.ejs
│   │   │   │       │   │   ├── 📁 assets
│   │   │   │       │   │   │   └── 📁 css
│   │   │   │       │   │   │       └── 📄 main.css.ejs
│   │   │   │       │   │   ├── 📁 composables
│   │   │   │       │   │   │   ├── 📄 useAuth.ts.ejs
│   │   │   │       │   │   │   └── 📄 useFetchApi.ts.ejs
│   │   │   │       │   │   ├── 📄 error.vue.ejs
│   │   │   │       │   │   ├── 📁 layouts
│   │   │   │       │   │   │   ├── 📄 admin.vue.ejs
│   │   │   │       │   │   │   └── 📄 default.vue.ejs
│   │   │   │       │   │   ├── 📁 middleware
│   │   │   │       │   │   │   ├── 📄 admin.ts.ejs
│   │   │   │       │   │   │   └── 📄 auth.global.ts.ejs
│   │   │   │       │   │   ├── 📄 nuxt.config.ts.ejs
│   │   │   │       │   │   ├── 📁 pages
│   │   │   │       │   │   │   ├── 📄 [slug].vue.ejs
│   │   │   │       │   │   │   ├── 📄 about.vue.ejs
│   │   │   │       │   │   │   ├── 📁 admin
│   │   │   │       │   │   │   │   └── 📄 index.vue.ejs
│   │   │   │       │   │   │   └── 📄 index.vue.ejs
│   │   │   │       │   │   ├── 📁 plugins
│   │   │   │       │   │   │   └── 📄 axios.ts.ejs
│   │   │   │       │   │   ├── 📁 public
│   │   │   │       │   │   │   ├── 📄 favicon.ico.ejs
│   │   │   │       │   │   │   └── 📄 robots.txt.ejs
│   │   │   │       │   │   ├── 📁 server
│   │   │   │       │   │   │   ├── 📁 api
│   │   │   │       │   │   │   │   └── 📄 health.get.ts.ejs
│   │   │   │       │   │   │   ├── 📁 middleware
│   │   │   │       │   │   │   │   └── 📄 logs.ts.ejs
│   │   │   │       │   │   │   └── 📁 services
│   │   │   │       │   │   │       └── 📄 db.ts.ejs
│   │   │   │       │   │   ├── 📁 stores
│   │   │   │       │   │   │   ├── 📄 settings.store.ts.ejs
│   │   │   │       │   │   │   └── 📄 user.store.ts.ejs
│   │   │   │       │   │   ├── 📁 types
│   │   │   │       │   │   │   └── 📄 global.d.ts.ejs
│   │   │   │       │   │   └── 📁 utils
│   │   │   │       │   │       ├── 📄 formatDate.ts.ejs
│   │   │   │       │   │       └── 📄 validators.ts.ejs
│   │   │   │       │   └── 📁 core-ui
│   │   │   │       │       ├── 📁 assets
│   │   │   │       │       │   └── 📁 css
│   │   │   │       │       │       └── 📄 main.css.ejs
│   │   │   │       │       ├── 📁 composables
│   │   │   │       │       │   └── 📄 useTheme.ts.ejs
│   │   │   │       │       ├── 📄 nuxt.config.ts.ejs
│   │   │   │       │       └── 📁 plugins
│   │   │   │       │           └── 📄 dayjs.ts.ejs
│   │   │   │       └── 📁 root
│   │   │   │           ├── 📄 .gitignore.ejs
│   │   │   │           ├── 📄 package.json.ejs
│   │   │   │           └── 📄 pnpm-workspace.yaml.ejs
│   │   │   ├── 📁 react
│   │   │   │   ├── 📁 services
│   │   │   │   │   ├── 📄 generate-component.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateReactComponent(entity: IEntityJson)
│   │   │   │   │   ├── 📄 generate-controller.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateReactController(entity: IEntityJson)
│   │   │   │   │   ├── 📄 generate-dto.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateReactDto(entity: IEntityJson)
│   │   │   │   │   ├── 📄 generate-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateReactEntity(entity: IEntityJson)
│   │   │   │   │   ├── 📄 generate-interface.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateReactInterface(entity: IEntityJson)
│   │   │   │   │   ├── 📄 generate-service.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateReactService(entity: IEntityJson)
│   │   │   │   │   ├── 📄 generate-test.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateReactTest(entity: IEntityJson)
│   │   │   │   │   └── 📄 react-generate-files-framework.service.ts
│   │   │   │   │          └──⚙️ [function] reactGenerateFilesFramework(framework: IFramework, frameworkProjectPath: string, entitiesJsonFile: object)
│   │   │   │   └── 📁 templates
│   │   │   │       ├── 📄 get-react-component-template.template.ts
│   │   │   │       │      └──⚙️ [function] getReactComponentTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 get-react-controller-template.template.ts
│   │   │   │       │      └──⚙️ [function] getReactControllerTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 get-react-dto-template.template.ts
│   │   │   │       │      └──⚙️ [function] getReactDtoTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 get-react-entity-template.template.ts
│   │   │   │       │      └──⚙️ [function] getReactEntityTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 get-react-interface-template.template.ts
│   │   │   │       │      └──⚙️ [function] getReactInterfaceTemplate(entity: IEntityJson)
│   │   │   │       ├── 📄 get-react-service-template.template.ts
│   │   │   │       │      └──⚙️ [function] getReactServiceTemplate(entity: IEntityJson)
│   │   │   │       └── 📄 get-react-test-template.template.ts
│   │   │   │              └──⚙️ [function] getReactTestTemplate(entity: IEntityJson)
│   │   │   ├── 📄 readme.md
│   │   │   ├── 📁 services
│   │   │   │   ├── 📄 base-framework.service.ts
│   │   │   │   │      └──⚙️ [class] BaseFrameworkService()
│   │   │   │   │      └──⚙️ [method] BaseFrameworkService.step(label: string, action: () => Promise<any>)
│   │   │   │   │      └──⚙️ [method] BaseFrameworkService.buildInstallFramework(config: IProjectConfig, name: string)
│   │   │   │   │      └──⚙️ [method] BaseFrameworkService.installDependencies(config: IInstallFramework)
│   │   │   │   │      └──⚙️ [method] BaseFrameworkService.generateArchitecture(config: IInstallFramework)
│   │   │   │   │      └──⚙️ [method] BaseFrameworkService.createBranchGit(config: IInstallFramework)
│   │   │   │   │      └──⚙️ [method] BaseFrameworkService.configCli(projectPath: string)
│   │   │   │   │      └──⚙️ [method] BaseFrameworkService.endProcess(config: IInstallFramework)
│   │   │   │   │      └──⚙️ [method] BaseFrameworkService.generateFileCli(project: IProjectConfig, entitiesJson: IGetEntityJson, fileMdj: any, config: IInstallFramework)
│   │   │   │   ├── 📄 confi-framework.service.ts
│   │   │   │   │      └──⚙️ [class] ConfigFrameworkService()
│   │   │   │   │      └──⚙️ [method] ConfigFrameworkService.configFrameworks(frameWorks: string[])
│   │   │   │   │      └──⚙️ [method] ConfigFrameworkService.configDatabases(database: string[])
│   │   │   │   │      └──⚙️ [method] ConfigFrameworkService.configFrameworkMock(name: string)
│   │   │   │   │      └──⚙️ [method] ConfigFrameworkService.configDatabaseMock(name: string)
│   │   │   │   ├── 📄 framework-selector.service.ts
│   │   │   │   │      └──⚙️ [class] FrameworkSelector()
│   │   │   │   │      └──⚙️ [method] FrameworkSelector.register(service: IFrameworkService)
│   │   │   │   │      └──⚙️ [method] FrameworkSelector.getService(frameworkName: string)
│   │   │   │   └── 📄 framework.service.ts
│   │   │   │          └──⚙️ [class] FrameworkService()
│   │   │   │          └──⚙️ [method] FrameworkService.installFramework(framework: IConfigFramework)
│   │   │   │          └──⚙️ [method] FrameworkService.installDependencies(deps: IDependencies)
│   │   │   │          └──⚙️ [method] FrameworkService.generateArchitecture(architecture: IDirectory[])
│   │   │   │          └──⚙️ [method] FrameworkService.generateFileFramework(project: string)
│   │   │   │          └──⚙️ [method] FrameworkService.updateFile(project: string)
│   │   │   ├── 📁 symfony
│   │   │   │   ├── 📁 commands
│   │   │   │   │   └── 📄 symfony.command.ts
│   │   │   │   │          └──⚙️ [interface] ISymfonyOptions()
│   │   │   │   │          └──⚙️ [property] ISymfonyOptions.code()
│   │   │   │   │          └──⚙️ [property] ISymfonyOptions.view()
│   │   │   │   │          └──⚙️ [property] ISymfonyOptions.metadata()
│   │   │   │   │          └──⚙️ [property] ISymfonyOptions.level()
│   │   │   │   │          └──⚙️ [property] ISymfonyOptions.save()
│   │   │   │   │          └──⚙️ [property] ISymfonyOptions.output()
│   │   │   │   │          └──⚙️ [property] ISymfonyOptions.force()
│   │   │   │   │          └──⚙️ [property] ISymfonyOptions.dryRun()
│   │   │   │   │          └──⚙️ [property] ISymfonyOptions.internalWatch()
│   │   │   │   │          └──⚙️ [class] SymfonyCommand()
│   │   │   │   │          └──⚙️ [method] SymfonyCommand.execute(args: string[], options: ISymfonyOptions)
│   │   │   │   ├── 📁 config
│   │   │   │   │   ├── 📄 symfony-architecture.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_SYMFONY_MOCK()
│   │   │   │   │   │      └──⚙️ [function] ARCHITECTURE_SYMFONY_API_PLATFORM_MOCK()
│   │   │   │   │   ├── 📄 symfony-config-ini.mock.ts
│   │   │   │   │   ├── 📄 symfony-dependencies.mock.ts
│   │   │   │   │   │      └──⚙️ [function] DEPENDENCIES_SYMFONY_MOCK()
│   │   │   │   │   ├── 📄 symfony-environments.mock.ts
│   │   │   │   │   │      └──⚙️ [function] ENVIRONMENTS_SYMFONY_MOCK()
│   │   │   │   │   ├── 📄 symfony-initiale-architecture-project.mock.ts
│   │   │   │   │   ├── 📄 symfony-install-options.mock.ts
│   │   │   │   │   │      └──⚙️ [function] INSTALL_OPTIONS_SYMFONY_MOCK()
│   │   │   │   │   └── 📄 symfony-scripts.mock.ts
│   │   │   │   │          └──⚙️ [function] SCRIPTS_SYMFONY_MOCK()
│   │   │   │   ├── 📁 constant
│   │   │   │   │   └── 📄 symfony-constants.constant.ts
│   │   │   │   │          └──⚙️ [interface] ConstraintMeta()
│   │   │   │   │          └──⚙️ [property] ConstraintMeta.categorie()
│   │   │   │   │          └──⚙️ [property] ConstraintMeta.type()
│   │   │   │   │          └──⚙️ [property] ConstraintMeta.implantation()
│   │   │   │   │          └──⚙️ [property] ConstraintMeta.attribute()
│   │   │   │   │          └──⚙️ [property] ConstraintMeta.proprietes()
│   │   │   │   │          └──⚙️ [function] getContraintTypeORM(type: string)
│   │   │   │   ├── 📁 factories
│   │   │   │   │   └── 📄 symfony-file.factory.ts
│   │   │   │   │          └──⚙️ [class] SymfonyFileFactory()
│   │   │   │   │          └──⚙️ [method] SymfonyFileFactory.create(type: SymfonyFileType, entity: any)
│   │   │   │   │          └──⚙️ [method] SymfonyFileFactory.buildDto(entity: any)
│   │   │   │   │          └──⚙️ [method] SymfonyFileFactory.buildEntity(entity: any)
│   │   │   │   │          └──⚙️ [method] SymfonyFileFactory.createEntity(entity: any)
│   │   │   │   │          └──⚙️ [method] SymfonyFileFactory.createDto(entity: any)
│   │   │   │   ├── 📁 interfaces
│   │   │   │   │   └── 📄 symfony-symfony-model.php
│   │   │   │   │          └──⚙️ [interface] SymfonyModel()
│   │   │   │   │          └──⚙️ [function] getName()
│   │   │   │   ├── 📁 mock
│   │   │   │   │   └── 📄 symfony-sample-symfony-config.yaml
│   │   │   │   ├── 📁 services
│   │   │   │   │   ├── 📁 api-plaform
│   │   │   │   │   │   ├── 📄 api-plaform-generate-files-framework.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformGenerateFilesFrameworkService(configFile: IProjectConfig, framework: IFramework, rootPathProjectFramework: string, entitiesJsonFile: object, docJsonld: object)
│   │   │   │   │   │   ├── 📄 api-plaform-read-doc-jsonld.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformReadDocJsonldService(path: string)
│   │   │   │   │   │   │      └──⚙️ [function] ensureArray(item: T | T[] | undefined)
│   │   │   │   │   │   ├── 📄 api-plaform-save-doc-jsonld.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformSaveDocJsonldService(pathfile: string, doc: unknown)
│   │   │   │   │   │   ├── 📄 api-platform-doc-jsonld.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformDocJsonldService(processPath: string)
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformGenerateInterfaceTypeScriptFromDocJsonldService(resources: TSupportedClass[], path: string)
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformGenerateTypeTypeScriptFromDocJsonldService(resource: TSupportedClass[])
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformGenerateSchemaZodFromDocJsonldService(resource: TSupportedClass[])
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformGenerateFormFromDocJsonldService(resource: TSupportedClass[])
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformGenerateFilesService(files: any)
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformFormatResourceFromDocJsonldService(resource: TSupportedClass)
│   │   │   │   │   │   ├── 📄 api-platform-entity-dto.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityDtoService(frameworkPath: string, entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 api-platform-entity-mapper.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityMapperService(frameworkPath: string, entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 api-platform-entity-processor.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityProcessorService(frameworkPath: string, entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 api-platform-entity-provider.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityProviderService(frameworkPath: string, entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 api-platform-entity.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityService(frameworkPath: string, entity: IEntityJson)
│   │   │   │   │   │   └── 📄 api-platform-services.service.ts
│   │   │   │   │   │          └──⚙️ [function] apiPlatformServicesService(frameworkPath: string)
│   │   │   │   │   ├── 📁 commun
│   │   │   │   │   │   ├── 📄 symfony-create-attribute-orm.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] symfonyCreateAttributeORM(propName: string, type: string, length: string | null)
│   │   │   │   │   │   ├── 📄 symfony-create-attribute-validation.service.ts
│   │   │   │   │   │   │      └──⚙️ [function] symfonyCreateAttributeValidation(propName: string, type: string, length: string | null)
│   │   │   │   │   │   └── 📄 symfony-get-attribute-type-orm.ts
│   │   │   │   │   ├── 📁 dto
│   │   │   │   │   ├── 📁 entity
│   │   │   │   │   │   └── 📄 readme.md
│   │   │   │   │   ├── 📄 old-symfony-generate-entities.service.ts
│   │   │   │   │   │      └──⚙️ [interface] Iproperty()
│   │   │   │   │   │      └──⚙️ [property] Iproperty.attributeValidation()
│   │   │   │   │   │      └──⚙️ [property] Iproperty.attributeOrm()
│   │   │   │   │   │      └──⚙️ [property] Iproperty.name()
│   │   │   │   │   │      └──⚙️ [property] Iproperty.type()
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateEntityService(frameworkPath: string, entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] getProperty(entityName: string, propName: string, type: string)
│   │   │   │   │   ├── 📄 symfony-databases.service.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyCreateDatabases(framework: IFramework, frameworkProjectPath: string)
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateMigrate(frameworkProjectPath: string, mode: string)
│   │   │   │   │   │      └──⚙️ [function] symfonyCreateMigration(frameworkProjectPath: string, mode: string)
│   │   │   │   │   ├── 📄 symfony-generate-accessors-relation.service.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateAccessorsRelationService(relation: IRelation)
│   │   │   │   │   ├── 📄 symfony-generate-accessors-scalar.service.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateAccessorsScalarService(propName: string, type: string)
│   │   │   │   │   ├── 📄 symfony-generate-architecture.service.ts
│   │   │   │   │   │      └──⚙️ [function] architectureApp()
│   │   │   │   │   ├── 📄 symfony-generate-command.service.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateCommandService(rootPathProjectFramework: string)
│   │   │   │   │   ├── 📄 symfony-generate-crud-entity.service.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateCrudEntityService(frameworkPath: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 symfony-generate-dtos.service.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateDtoService(frameworkPath: string, entity: IEntityJson, platform: any)
│   │   │   │   │   │      └──⚙️ [function] getProperty(entityName: string, column: IColumnJson)
│   │   │   │   │   │      └──⚙️ [function] getContraintsPropertyType(column: IColumnJson)
│   │   │   │   │   ├── 📄 symfony-generate-entities.service.ts
│   │   │   │   │   │      └──⚙️ [interface] IProperty()
│   │   │   │   │   │      └──⚙️ [property] IProperty.attributeValidation()
│   │   │   │   │   │      └──⚙️ [property] IProperty.attributeOrm()
│   │   │   │   │   │      └──⚙️ [property] IProperty.name()
│   │   │   │   │   │      └──⚙️ [property] IProperty.type()
│   │   │   │   │   │      └──⚙️ [interface] IEntityGenerationResult()
│   │   │   │   │   │      └──⚙️ [property] IEntityGenerationResult.properties()
│   │   │   │   │   │      └──⚙️ [property] IEntityGenerationResult.accessors()
│   │   │   │   │   │      └──⚙️ [property] IEntityGenerationResult.relations()
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateEntityService(frameworkPath: string, entity: IEntityJson, platform: any)
│   │   │   │   │   │      └──⚙️ [function] getEntityPaths(frameworkPath: string)
│   │   │   │   │   │      └──⚙️ [function] generateEntityContent(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] generatePropertiesContent(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] generateAccessorsContent(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] generateRelationsContent(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] saveEntityFiles(paths: { entity: string; repository: string }, entity: IEntityJson, content: IEntityGenerationResult)
│   │   │   │   │   │      └──⚙️ [function] getProperty(entityName: string, propName: string, type: string)
│   │   │   │   │   │      └──⚙️ [function] validateEntity(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateMultipleEntitiesService(frameworkPath: string, entities: IEntityJson[])
│   │   │   │   │   │      └──⚙️ [function] generateEntityRelationsOnly(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] generateEntityPropertiesOnly(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] generateEntityAccessorsOnly(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] getEntityStats(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] generateEntityWithValidation(frameworkPath: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 symfony-generate-environments.service.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateEnvironmentsService(frameworkProjectPath: string, configFile: IProjectConfig)
│   │   │   │   │   ├── 📄 symfony-generate-files-framework.service.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateFilesFramework(configFile: IProjectConfig, framework: IFramework, rootPathProjectFramework: string, entitiesJsonFile: object)
│   │   │   │   │   ├── 📄 symfony-generate-fixtures.service.ts
│   │   │   │   │   │      └──⚙️ [function] generateFixtureSymfony(frameworkProjectPath: string, entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] loadFixturesSymfony(frameworkProjectPath: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 symfony-generate-relationships.service.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateRelationShipsService(relationships: IRelation)
│   │   │   │   │   │      └──⚙️ [function] generatePhpAttribute(relation: IRelation)
│   │   │   │   │   │      └──⚙️ [function] generateOneToOne(relation: IRelation)
│   │   │   │   │   │      └──⚙️ [function] generateOneToMany(relation: IRelation)
│   │   │   │   │   │      └──⚙️ [function] generateManyToOne(relation: IRelation)
│   │   │   │   │   │      └──⚙️ [function] generateManyToMany(relation: IRelation)
│   │   │   │   │   │      └──⚙️ [function] getInversePropertyName(relation: IRelation)
│   │   │   │   │   │      └──⚙️ [function] generateGettersSetters(relation: IRelation)
│   │   │   │   │   │      └──⚙️ [function] generateSinglePropertyAccessors(propertyName: string, target: string)
│   │   │   │   │   │      └──⚙️ [function] generateCollectionAccessors(propertyName: string, target: string)
│   │   │   │   │   │      └──⚙️ [function] generateConstructor(relations: IRelation[])
│   │   │   │   │   │      └──⚙️ [function] generateCompleteEntity(entityName: string, relations: IRelation[])
│   │   │   │   │   │      └──⚙️ [function] generateAllEntities(relations: IRelation[])
│   │   │   │   │   │      └──⚙️ [function] validateRelations(relations: IRelation[])
│   │   │   │   │   ├── 📄 symfony-generate-state-processor.service.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateStateProcessorService(frameworkPath: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 symfony-generate-state-provider.service.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGenerateStatePriovider(frameworkPath: string, entity: IEntityJson)
│   │   │   │   │   ├── 📄 symfony-test.service.ts
│   │   │   │   │   │      └──⚙️ [function] createTests(framework: IFramework, frameworkProjectPath: string)
│   │   │   │   │   │      └──⚙️ [function] loadTests(framework: IFramework, frameworkProjectPath: string)
│   │   │   │   │   │      └──⚙️ [function] launchTests(frameworkProjectPath: string)
│   │   │   │   │   ├── 📄 symfony-validation.service.ts
│   │   │   │   │   └── 📄 symfony.service.ts
│   │   │   │   │          └──⚙️ [class] SymfonyService()
│   │   │   │   │          └──⚙️ [method] SymfonyService.installFramework(config: IInstallFramework)
│   │   │   │   │          └──⚙️ [method] SymfonyService.installDependencies(config: IInstallFramework)
│   │   │   │   │          └──⚙️ [method] SymfonyService.generateArchitecture(config: IInstallFramework)
│   │   │   │   │          └──⚙️ [method] SymfonyService.generateFileFramework(config: IInstallFramework, entitiesJson: IGetEntityJson)
│   │   │   │   │          └──⚙️ [method] SymfonyService.updateFile(config: IInstallFramework)
│   │   │   │   ├── 📁 templates
│   │   │   │   │   ├── 📁 api-platform
│   │   │   │   │   │   ├── 📄 api-platform-entity-mapper.template.ts
│   │   │   │   │   │   │      └──⚙️ [function] scalarEntityToDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] toOneEntityToDtoTemplate(entity: IEntityJson, resourceClass: any)
│   │   │   │   │   │   │      └──⚙️ [function] toManyEntityToDtoTemplate(entity: IEntityJson, resourceClass: any)
│   │   │   │   │   │   │      └──⚙️ [function] scalarDtoToEntityTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] toOneDtoToEntityTemplate(entity: IEntityJson, resourceClass: any)
│   │   │   │   │   │   │      └──⚙️ [function] toManyDtoToEntityTemplate(entity: IEntityJson, resourceClass: any)
│   │   │   │   │   │   │      └──⚙️ [function] entityToItemDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] entityToCollectionDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] createDtoToEntityTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] mapEntityToCreateDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] updateDtoToEntityTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] commonFieldsEntityToDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityMapperTemplate(entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 api-platform-entity-processor.template.ts
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityProcessorTemplate(entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 api-platform-entity.template.ts
│   │   │   │   │   │   │      └──⚙️ [function] generatePropertiesContent(entity: IEntityJson)
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityTemplate(entity: IEntityJson)
│   │   │   │   │   │   ├── 📄 api-platform-services.template.ts
│   │   │   │   │   │   │      └──⚙️ [function] apiPlatformServicesTemplate(frameworkPath: string)
│   │   │   │   │   │   ├── 📁 dtos
│   │   │   │   │   │   │   ├── 📄 api-platform-entity-collection-dto.template.ts
│   │   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityCollectionDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   │   ├── 📄 api-platform-entity-create-dto.template.ts
│   │   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityCreateDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   │   ├── 📄 api-platform-entity-item-dto.template.ts
│   │   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityItemDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   │   ├── 📄 api-platform-entity-ressource-dto.template.ts
│   │   │   │   │   │   │   │      └──⚙️ [function] apiPlatformEntityRessourceDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   │   └── 📄 api-platform-entity-update-dto.template.ts
│   │   │   │   │   │   │          └──⚙️ [function] apiPlatformEntityUpdateDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   ├── 📁 mapper
│   │   │   │   │   │   │   ├── 📄 resolve-iri.template.ts
│   │   │   │   │   │   │   │      └──⚙️ [function] resolveIriTemplate(entity: IEntityJson)
│   │   │   │   │   │   │   ├── 📄 scalar-dto-to-entity.template.ts
│   │   │   │   │   │   │   │      └──⚙️ [function] scalarDtoToEntityTemplate(entity: IEntityJson)
│   │   │   │   │   │   │   ├── 📄 scalar-entity-to-dto.template.ts
│   │   │   │   │   │   │   │      └──⚙️ [function] scalarEntityToDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   │   ├── 📄 to-iri-list.template.ts
│   │   │   │   │   │   │   │      └──⚙️ [function] toIriListTemplate(entity: IEntityJson)
│   │   │   │   │   │   │   ├── 📄 to-many-dto-to-entity.template.ts
│   │   │   │   │   │   │   │      └──⚙️ [function] toManyDtoToEntityTemplate(entity: IEntityJson)
│   │   │   │   │   │   │   ├── 📄 to-many-entity-to-dto.template.ts
│   │   │   │   │   │   │   │      └──⚙️ [function] toManyEntityToDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   │   ├── 📄 to-one-dto-to-entity.template.ts
│   │   │   │   │   │   │   │      └──⚙️ [function] toOneDtoToEntityTemplate(entity: IEntityJson)
│   │   │   │   │   │   │   └── 📄 to-one-entity-to-dto.template.ts
│   │   │   │   │   │   │          └──⚙️ [function] toOneEntityToDtoTemplate(entity: IEntityJson)
│   │   │   │   │   │   ├── 📁 services
│   │   │   │   │   │   │   └── 📄 iri-from-resource.template.ts
│   │   │   │   │   │   │          └──⚙️ [function] iriFromResourceTemplate()
│   │   │   │   │   │   └── 📁 states
│   │   │   │   │   │       ├── 📁 processors
│   │   │   │   │   │       │   ├── 📄 api-platform-entity-delete-processor.template.ts
│   │   │   │   │   │       │   │      └──⚙️ [function] apiPlatformEntityDeleteProcessorTemplate(entity: IEntityJson)
│   │   │   │   │   │       │   ├── 📄 api-platform-entity-post-processor.template.ts
│   │   │   │   │   │       │   │      └──⚙️ [function] apiPlatformEntityPostProcessorTemplate(entity: IEntityJson)
│   │   │   │   │   │       │   └── 📄 api-platform-entity-update-processor.template.ts
│   │   │   │   │   │       │          └──⚙️ [function] apiPlatformEntityUpdateProcessorTemplate(entity: IEntityJson)
│   │   │   │   │   │       └── 📁 providers
│   │   │   │   │   │           ├── 📄 api-platform-entity-collection-provider.template.ts
│   │   │   │   │   │           │      └──⚙️ [function] apiPlatformEntityCollectionProviderTemplate(entity: IEntityJson)
│   │   │   │   │   │           └── 📄 api-platform-entity-item-provider.template.ts
│   │   │   │   │   │                  └──⚙️ [function] apiPlatformEntityItemProviderTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📁 bundles
│   │   │   │   │   │   ├── 📄 symfony-env-lexik-jwt-authentication.template.ts
│   │   │   │   │   │   │      └──⚙️ [function] symfonyEnvLexikJwtAuthenticationTemplate()
│   │   │   │   │   │   ├── 📄 symfony-env-mailer.template.ts
│   │   │   │   │   │   │      └──⚙️ [function] symfonyEnvMailerTemplate()
│   │   │   │   │   │   └── 📄 symfony-env-nelmio.template.ts
│   │   │   │   │   │          └──⚙️ [function] symfonyEnvNelmioTemplate()
│   │   │   │   │   ├── 📁 command
│   │   │   │   │   │   └── 📄 symfony-create-all-crud-entities-command.php.template.ts
│   │   │   │   │   │          └──⚙️ [function] symfonyCreateAllCrudEntitiesCommandPhpTemplate()
│   │   │   │   │   ├── 📁 dto
│   │   │   │   │   │   ├── 📄 symfony-create-dto-template.ts
│   │   │   │   │   │   │      └──⚙️ [function] symfonyCreateDtoTemplate(entity: IEntityJson, properties: string, accessors: string)
│   │   │   │   │   │   ├── 📄 symfony-response-dto-template.ts
│   │   │   │   │   │   │      └──⚙️ [function] symfonyResponseDtoTemplate(entity: IEntityJson, properties: string, accessors: string)
│   │   │   │   │   │   └── 📄 symfony-update-dto-template.ts
│   │   │   │   │   │          └──⚙️ [function] symfonyUpdateDtoTemplate(entity: IEntityJson, properties: string, accessors: string)
│   │   │   │   │   ├── 📄 symfony-bundle-template.template.ts
│   │   │   │   │   │      └──⚙️ [function] getBundleTemplate(name: string)
│   │   │   │   │   ├── 📄 symfony-controller.template.ts
│   │   │   │   │   │      └──⚙️ [function] getControllerTemplate(name: string)
│   │   │   │   │   ├── 📄 symfony-dto.template.ts
│   │   │   │   │   │      └──⚙️ [function] getSymfonyDtoTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 symfony-entity.template.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyEntityTemplate(entityName: string, properties: string, accessors: string, relations: string)
│   │   │   │   │   ├── 📄 symfony-env-database-url.template.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyEnvDatabaseUrlTemplate(db: IDatabase)
│   │   │   │   │   ├── 📄 symfony-environment.template.ts
│   │   │   │   │   │      └──⚙️ [function] SymfonyDotEnv(configFile: IProjectConfig)
│   │   │   │   │   │      └──⚙️ [function] SymfonyDotEnvLocal(configFile: IProjectConfig)
│   │   │   │   │   │      └──⚙️ [function] SymfonyDotEnvTest(configFile: IProjectConfig)
│   │   │   │   │   │      └──⚙️ [function] getDatabase(configFile: IProjectConfig)
│   │   │   │   │   ├── 📄 symfony-get-accessor-relation.template.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGetAccessorTemplate(propName: string, type: string)
│   │   │   │   │   ├── 📄 symfony-get-accessor.template.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyGetAccessorTemplate(propName: string, type: string)
│   │   │   │   │   ├── 📄 symfony-repository.template.ts
│   │   │   │   │   │      └──⚙️ [function] getSymfonyInterfaceTemplate(entity: IEntityJson)
│   │   │   │   │   │      └──⚙️ [function] symfonyEntityRepositoryTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 symfony-service.template.ts
│   │   │   │   │   │      └──⚙️ [function] getSymfonyServiceTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 symfony-set-accessor.template.ts
│   │   │   │   │   │      └──⚙️ [function] symfonySetAccessorTemplate(propName: string, type: string)
│   │   │   │   │   ├── 📄 symfony-state-processor-template.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyStateProcessorTemplate(entity: IEntityJson)
│   │   │   │   │   ├── 📄 symfony-state-provider-template.ts
│   │   │   │   │   │      └──⚙️ [function] symfonyStateProviderTemplate(entity: IEntityJson)
│   │   │   │   │   └── 📄 symfony-test.template.ts
│   │   │   │   │          └──⚙️ [function] getSymfonyTestTemplate(entity: IEntityJson)
│   │   │   │   ├── 📁 types
│   │   │   │   │   └── 📄 api-platform-doc-json-ld.type.ts
│   │   │   │   │          └──⚙️ [interface] TApiDocumentation()
│   │   │   │   │          └──⚙️ [property] TApiDocumentation."@context"()
│   │   │   │   │          └──⚙️ [property] TApiDocumentation."@id"()
│   │   │   │   │          └──⚙️ [property] TApiDocumentation."@type"()
│   │   │   │   │          └──⚙️ [property] TApiDocumentation.title()
│   │   │   │   │          └──⚙️ [property] TApiDocumentation.entrypoint()
│   │   │   │   │          └──⚙️ [property] TApiDocumentation.supportedClass()
│   │   │   │   │          └──⚙️ [interface] TSupportedClass()
│   │   │   │   │          └──⚙️ [property] TSupportedClass."@id"()
│   │   │   │   │          └──⚙️ [property] TSupportedClass."@type"()
│   │   │   │   │          └──⚙️ [property] TSupportedClass.title()
│   │   │   │   │          └──⚙️ [property] TSupportedClass.description()
│   │   │   │   │          └──⚙️ [property] TSupportedClass.subClassOf()
│   │   │   │   │          └──⚙️ [property] TSupportedClass.supportedProperty()
│   │   │   │   │          └──⚙️ [property] TSupportedClass.supportedOperation()
│   │   │   │   │          └──⚙️ [interface] TSupportedProperty()
│   │   │   │   │          └──⚙️ [property] TSupportedProperty."@type"()
│   │   │   │   │          └──⚙️ [property] TSupportedProperty.property()
│   │   │   │   │          └──⚙️ [property] TSupportedProperty.title()
│   │   │   │   │          └──⚙️ [property] TSupportedProperty.description()
│   │   │   │   │          └──⚙️ [property] TSupportedProperty.required()
│   │   │   │   │          └──⚙️ [property] TSupportedProperty.readable()
│   │   │   │   │          └──⚙️ [property] TSupportedProperty.writeable()
│   │   │   │   │          └──⚙️ [interface] TPropertyDetail()
│   │   │   │   │          └──⚙️ [property] TPropertyDetail."@id"()
│   │   │   │   │          └──⚙️ [property] TPropertyDetail."@type"()
│   │   │   │   │          └──⚙️ [property] TPropertyDetail.label()
│   │   │   │   │          └──⚙️ [property] TPropertyDetail."rdfs:label"()
│   │   │   │   │          └──⚙️ [property] TPropertyDetail.domain()
│   │   │   │   │          └──⚙️ [property] TPropertyDetail.range()
│   │   │   │   │          └──⚙️ [interface] TSupportedOperation()
│   │   │   │   │          └──⚙️ [property] TSupportedOperation."@type"()
│   │   │   │   │          └──⚙️ [property] TSupportedOperation.method()
│   │   │   │   │          └──⚙️ [property] TSupportedOperation.title()
│   │   │   │   │          └──⚙️ [property] TSupportedOperation.description()
│   │   │   │   │          └──⚙️ [property] TSupportedOperation.returns()
│   │   │   │   │          └──⚙️ [property] TSupportedOperation.expects()
│   │   │   │   │          └──⚙️ [property] TSupportedOperation.expectsHeader()
│   │   │   │   │          └──⚙️ [interface] TExpectsHeader()
│   │   │   │   │          └──⚙️ [property] TExpectsHeader.headerName()
│   │   │   │   │          └──⚙️ [property] TExpectsHeader.possibleValue()
│   │   │   │   └── 📁 utils
│   │   │   │       └── 📄 mapping.ts
│   │   │   │              └──⚙️ [function] sqlToDoctrineType(sqlType: string)
│   │   │   │              └──⚙️ [function] symfonyGetAttributeTypeORM(typeProperty: string | undefined | null)
│   │   │   │              └──⚙️ [function] symfonyGetPropertyType(typeProperty: string | undefined | null)
│   │   │   │              └──⚙️ [function] getPropertyName(prop: TPropertyDetail)
│   │   │   │              └──⚙️ [function] getTypeFromRange(range: string | string[])
│   │   │   │              └──⚙️ [function] resolveTypeScriptType(range: string | string[])
│   │   │   ├── 📁 tools
│   │   │   │   └── 📄 rename_files.py
│   │   │   ├── 📁 types-script
│   │   │   │   ├── 📁 services
│   │   │   │   └── 📁 templates
│   │   │   ├── 📄 utils.ts
│   │   │   │      └──⚙️ [function] getConfigFile(pathFile: string)
│   │   │   │      └──⚙️ [function] getRandomInt(min: number, max: number)
│   │   │   │      └──⚙️ [function] updateTsConfig(frameworkProjectPath: string)
│   │   │   │      └──⚙️ [function] updatePackageJson(configFile: IProjectConfig, framework: IFramework, rootPathProjectFramework: string, entitiesJsonFile: object)
│   │   │   │      └──⚙️ [function] addPropertyToJsonFile(filePath: string, keyPath: string, value: any)
│   │   │   └── 📁 vue
│   │   │       ├── 📁 config
│   │   │       │   ├── 📄 vue-architecture.mock.ts
│   │   │       │   │      └──⚙️ [function] ARCHITECTURE_DIRECTORY_COMMUN_NUXT_MOCK(path: string)
│   │   │       │   │      └──⚙️ [function] ARCHITECTURE_DIRECTORY_PROJECT_NUXT_MOCK()
│   │   │       │   │      └──⚙️ [function] ARCHITECTURE_DIRECTORY_SHARED_NUXT_MOCK()
│   │   │       │   │      └──⚙️ [function] ARCHITECTURE_NUXT_MOCK()
│   │   │       │   │      └──⚙️ [function] ARCHITECTURE_CLASSIC_NUXT_MOCK()
│   │   │       │   │      └──⚙️ [function] ARCHITECTURE_NUXT_LAYERS_CORE_UI_MOCK()
│   │   │       │   ├── 📄 vue-config-generator.ts
│   │   │       │   │      └──⚙️ [function] generateNuxtConfig(targetPath: string)
│   │   │       │   ├── 📄 vue-config-ini.mock.ts
│   │   │       │   ├── 📄 vue-dependencies.mock.ts
│   │   │       │   │      └──⚙️ [function] DEPENDENCIES_NUXT_MOCK()
│   │   │       │   ├── 📄 vue-environments.mock.ts
│   │   │       │   │      └──⚙️ [function] ENVIRONMENTS_NUXT_MOCK()
│   │   │       │   ├── 📄 vue-initiale-architecture-project.mock.ts
│   │   │       │   ├── 📄 vue-install-options.mock.ts
│   │   │       │   │      └──⚙️ [function] INSTALL_OPTIONS_NUXT_MOCK()
│   │   │       │   └── 📄 vue-scripts.mock.ts
│   │   │       │          └──⚙️ [function] SCRIPTS_NUXT_MOCK()
│   │   │       ├── 📁 services
│   │   │       │   ├── 📄 vue-generate-component.service.ts
│   │   │       │   │      └──⚙️ [function] generateVueComponent(entity: IEntityJson)
│   │   │       │   ├── 📄 vue-generate-dto.service.ts
│   │   │       │   │      └──⚙️ [function] generateVueDto(entity: IEntityJson)
│   │   │       │   ├── 📄 vue-generate-entity.service.ts
│   │   │       │   │      └──⚙️ [function] generateVueEntity(entity: IEntityJson)
│   │   │       │   ├── 📄 vue-generate-files-framework.service.ts
│   │   │       │   │      └──⚙️ [function] vueGenerateFilesFramework(configFile: IProjectConfig, framework: IFramework, rootPathProjectFramework: string, entitiesJsonFile: object)
│   │   │       │   │      └──⚙️ [function] updateFiles(rootPathProjectFramework: string)
│   │   │       │   │      └──⚙️ [function] createDependencies(framework: IFramework, rootPathProjectFramework: string)
│   │   │       │   ├── 📄 vue-generate-interface.service.ts
│   │   │       │   │      └──⚙️ [function] generateVueInterface(entity: IEntityJson)
│   │   │       │   ├── 📄 vue-generate-service.service.ts
│   │   │       │   │      └──⚙️ [function] generateVueService(entity: IEntityJson)
│   │   │       │   ├── 📄 vue-generate-store.service.ts
│   │   │       │   │      └──⚙️ [function] generateVueStore(entity: IEntityJson)
│   │   │       │   └── 📄 vue-generate-test.service.ts
│   │   │       │          └──⚙️ [function] generateVueTest(entity: IEntityJson)
│   │   │       └── 📁 templates
│   │   │           ├── 📄 vue-component-template.template.ts
│   │   │           │      └──⚙️ [function] getVueComponentTemplate(entity: IEntityJson)
│   │   │           ├── 📄 vue-dto-template.template.ts
│   │   │           │      └──⚙️ [function] getVueDtoTemplate(entity: IEntityJson)
│   │   │           ├── 📄 vue-entity-template.template.ts
│   │   │           │      └──⚙️ [function] getVueEntityTemplate(entity: IEntityJson)
│   │   │           ├── 📄 vue-interface-template.template.ts
│   │   │           │      └──⚙️ [function] getVueInterfaceTemplate(entity: IEntityJson)
│   │   │           ├── 📄 vue-service-template.template.ts
│   │   │           │      └──⚙️ [function] getVueServiceTemplate(entity: IEntityJson)
│   │   │           ├── 📄 vue-store-template.template.ts
│   │   │           │      └──⚙️ [function] getVueStoreTemplate(entity: IEntityJson)
│   │   │           └── 📄 vue-test-template.template.ts
│   │   │                  └──⚙️ [function] getVueTestTemplate(entity: IEntityJson)
│   │   ├── 📁 parserMdj
│   │   │   ├── 📁 models
│   │   │   │   ├── 📄 entity-json.model.ts
│   │   │   │   │      └──⚙️ [interface] Iref()
│   │   │   │   │      └──⚙️ [property] Iref.$ref()
│   │   │   │   │      └──⚙️ [interface] Iend1()
│   │   │   │   │      └──⚙️ [property] Iend1.type()
│   │   │   │   │      └──⚙️ [property] Iend1.id()
│   │   │   │   │      └──⚙️ [property] Iend1.name()
│   │   │   │   │      └──⚙️ [property] Iend1.parent()
│   │   │   │   │      └──⚙️ [property] Iend1.reference()
│   │   │   │   │      └──⚙️ [property] Iend1.inEntity()
│   │   │   │   │      └──⚙️ [property] Iend1.cardinality()
│   │   │   │   │      └──⚙️ [property] Iend1.relationType()
│   │   │   │   │      └──⚙️ [property] Iend1.relationName()
│   │   │   │   │      └──⚙️ [property] Iend1.relatedEntity()
│   │   │   │   │      └──⚙️ [property] Iend1.relatedEntityCol()
│   │   │   │   │      └──⚙️ [property] Iend1.inverseSide()
│   │   │   │   │      └──⚙️ [interface] IendJson()
│   │   │   │   │      └──⚙️ [property] IendJson.type()
│   │   │   │   │      └──⚙️ [property] IendJson.id()
│   │   │   │   │      └──⚙️ [property] IendJson.parent()
│   │   │   │   │      └──⚙️ [property] IendJson.columnName()
│   │   │   │   │      └──⚙️ [property] IendJson.entityId()
│   │   │   │   │      └──⚙️ [property] IendJson.cardinality()
│   │   │   │   │      └──⚙️ [property] IendJson.inEntity()
│   │   │   │   │      └──⚙️ [property] IendJson.relationType()
│   │   │   │   │      └──⚙️ [property] IendJson.inverseSide()
│   │   │   │   │      └──⚙️ [interface] IRelationsEntity()
│   │   │   │   │      └──⚙️ [property] IRelationsEntity.id()
│   │   │   │   │      └──⚙️ [property] IRelationsEntity.relationships()
│   │   │   │   │      └──⚙️ [interface] IRelation()
│   │   │   │   │      └──⚙️ [property] IRelation.relationName()
│   │   │   │   │      └──⚙️ [property] IRelation.relationType()
│   │   │   │   │      └──⚙️ [property] IRelation.source()
│   │   │   │   │      └──⚙️ [property] IRelation.foreignKeySource()
│   │   │   │   │      └──⚙️ [property] IRelation.columnNameSource()
│   │   │   │   │      └──⚙️ [property] IRelation.target()
│   │   │   │   │      └──⚙️ [property] IRelation.owner()
│   │   │   │   │      └──⚙️ [interface] IRelationshipJson()
│   │   │   │   │      └──⚙️ [property] IRelationshipJson.type()
│   │   │   │   │      └──⚙️ [property] IRelationshipJson.id()
│   │   │   │   │      └──⚙️ [property] IRelationshipJson.parent()
│   │   │   │   │      └──⚙️ [property] IRelationshipJson.name()
│   │   │   │   │      └──⚙️ [property] IRelationshipJson.inEntity()
│   │   │   │   │      └──⚙️ [property] IRelationshipJson.source()
│   │   │   │   │      └──⚙️ [property] IRelationshipJson.target()
│   │   │   │   │      └──⚙️ [interface] IColumnJson()
│   │   │   │   │      └──⚙️ [property] IColumnJson.id()
│   │   │   │   │      └──⚙️ [property] IColumnJson.name()
│   │   │   │   │      └──⚙️ [property] IColumnJson.typeSql()
│   │   │   │   │      └──⚙️ [property] IColumnJson.typeTypeScript()
│   │   │   │   │      └──⚙️ [property] IColumnJson.typeORM()
│   │   │   │   │      └──⚙️ [property] IColumnJson.typeDoctrine()
│   │   │   │   │      └──⚙️ [property] IColumnJson.parent()
│   │   │   │   │      └──⚙️ [property] IColumnJson.length()
│   │   │   │   │      └──⚙️ [property] IColumnJson.maxlength()
│   │   │   │   │      └──⚙️ [property] IColumnJson.minLength()
│   │   │   │   │      └──⚙️ [property] IColumnJson.precision()
│   │   │   │   │      └──⚙️ [property] IColumnJson.isEmpty()
│   │   │   │   │      └──⚙️ [property] IColumnJson.unique()
│   │   │   │   │      └──⚙️ [property] IColumnJson.nullable()
│   │   │   │   │      └──⚙️ [property] IColumnJson.primaryKey()
│   │   │   │   │      └──⚙️ [property] IColumnJson.foreignKey()
│   │   │   │   │      └──⚙️ [property] IColumnJson.documentation()
│   │   │   │   │      └──⚙️ [property] IColumnJson.description()
│   │   │   │   │      └──⚙️ [property] IColumnJson.referenceTo()
│   │   │   │   │      └──⚙️ [property] IColumnJson.propsEntiy()
│   │   │   │   │      └──⚙️ [property] IColumnJson.validations()
│   │   │   │   │      └──⚙️ [interface] IEntityJson()
│   │   │   │   │      └──⚙️ [property] IEntityJson.tableName()
│   │   │   │   │      └──⚙️ [property] IEntityJson.id()
│   │   │   │   │      └──⚙️ [property] IEntityJson.parent()
│   │   │   │   │      └──⚙️ [property] IEntityJson.nameKebabCase()
│   │   │   │   │      └──⚙️ [property] IEntityJson.namePascalCase()
│   │   │   │   │      └──⚙️ [property] IEntityJson.nameCamelCase()
│   │   │   │   │      └──⚙️ [property] IEntityJson.controllerName()
│   │   │   │   │      └──⚙️ [property] IEntityJson.moduleName()
│   │   │   │   │      └──⚙️ [property] IEntityJson.typeEntity()
│   │   │   │   │      └──⚙️ [property] IEntityJson.serviceName()
│   │   │   │   │      └──⚙️ [property] IEntityJson.varServiceName()
│   │   │   │   │      └──⚙️ [property] IEntityJson.createDtoName()
│   │   │   │   │      └──⚙️ [property] IEntityJson.updatreDtoName()
│   │   │   │   │      └──⚙️ [property] IEntityJson.interfaceName()
│   │   │   │   │      └──⚙️ [property] IEntityJson.documentation()
│   │   │   │   │      └──⚙️ [property] IEntityJson.columns()
│   │   │   │   │      └──⚙️ [property] IEntityJson.relationships()
│   │   │   │   │      └──⚙️ [interface] IProjectJson()
│   │   │   │   │      └──⚙️ [property] IProjectJson.name()
│   │   │   │   │      └──⚙️ [property] IProjectJson.entities()
│   │   │   │   │      └──⚙️ [property] IProjectJson.dictEntities()
│   │   │   │   │      └──⚙️ [property] IProjectJson.dictColumns()
│   │   │   │   │      └──⚙️ [property] IProjectJson.dictRelationships()
│   │   │   │   │      └──⚙️ [interface] IGetEntityJson()
│   │   │   │   │      └──⚙️ [property] IGetEntityJson.entities()
│   │   │   │   │      └──⚙️ [property] IGetEntityJson."dictionary-columns"()
│   │   │   │   │      └──⚙️ [property] IGetEntityJson."dictionary-entities-json"()
│   │   │   │   │      └──⚙️ [property] IGetEntityJson."dictionary-entities-pivot"()
│   │   │   │   │      └──⚙️ [property] IGetEntityJson."dictionary-relationships"()
│   │   │   │   │      └──⚙️ [property] IGetEntityJson."dictionary-entities-relationships"()
│   │   │   │   ├── 📄 mdj.model.ts
│   │   │   │   │      └──⚙️ [interface] I$ref()
│   │   │   │   │      └──⚙️ [property] I$ref.$ref()
│   │   │   │   │      └──⚙️ [interface] Iend1()
│   │   │   │   │      └──⚙️ [property] Iend1._type()
│   │   │   │   │      └──⚙️ [property] Iend1._id()
│   │   │   │   │      └──⚙️ [property] Iend1._parent()
│   │   │   │   │      └──⚙️ [property] Iend1.name()
│   │   │   │   │      └──⚙️ [property] Iend1.reference()
│   │   │   │   │      └──⚙️ [property] Iend1.cardinality()
│   │   │   │   │      └──⚙️ [interface] Iend()
│   │   │   │   │      └──⚙️ [property] Iend._type()
│   │   │   │   │      └──⚙️ [property] Iend._id()
│   │   │   │   │      └──⚙️ [property] Iend._parent()
│   │   │   │   │      └──⚙️ [property] Iend.name()
│   │   │   │   │      └──⚙️ [property] Iend.reference()
│   │   │   │   │      └──⚙️ [property] Iend.cardinality()
│   │   │   │   │      └──⚙️ [interface] IERDColumn()
│   │   │   │   │      └──⚙️ [property] IERDColumn._type()
│   │   │   │   │      └──⚙️ [property] IERDColumn._id()
│   │   │   │   │      └──⚙️ [property] IERDColumn._parent()
│   │   │   │   │      └──⚙️ [property] IERDColumn.name()
│   │   │   │   │      └──⚙️ [property] IERDColumn.type()
│   │   │   │   │      └──⚙️ [property] IERDColumn.length()
│   │   │   │   │      └──⚙️ [property] IERDColumn.unique()
│   │   │   │   │      └──⚙️ [property] IERDColumn.nullable()
│   │   │   │   │      └──⚙️ [property] IERDColumn.primaryKey()
│   │   │   │   │      └──⚙️ [property] IERDColumn.foreignKey()
│   │   │   │   │      └──⚙️ [property] IERDColumn.documentation()
│   │   │   │   │      └──⚙️ [property] IERDColumn.referenceTo()
│   │   │   │   │      └──⚙️ [interface] IERDRelationship()
│   │   │   │   │      └──⚙️ [property] IERDRelationship._type()
│   │   │   │   │      └──⚙️ [property] IERDRelationship._id()
│   │   │   │   │      └──⚙️ [property] IERDRelationship._parent()
│   │   │   │   │      └──⚙️ [property] IERDRelationship.name()
│   │   │   │   │      └──⚙️ [property] IERDRelationship.end1()
│   │   │   │   │      └──⚙️ [property] IERDRelationship.end2()
│   │   │   │   │      └──⚙️ [interface] IERDEntity()
│   │   │   │   │      └──⚙️ [property] IERDEntity._type()
│   │   │   │   │      └──⚙️ [property] IERDEntity._id()
│   │   │   │   │      └──⚙️ [property] IERDEntity._parent()
│   │   │   │   │      └──⚙️ [property] IERDEntity.name()
│   │   │   │   │      └──⚙️ [property] IERDEntity.columns()
│   │   │   │   │      └──⚙️ [property] IERDEntity.ownedElements()
│   │   │   │   │      └──⚙️ [interface] IERDModel()
│   │   │   │   │      └──⚙️ [property] IERDModel._type()
│   │   │   │   │      └──⚙️ [property] IERDModel._id()
│   │   │   │   │      └──⚙️ [property] IERDModel._parent()
│   │   │   │   │      └──⚙️ [property] IERDModel.name()
│   │   │   │   │      └──⚙️ [property] IERDModel.ownedElements()
│   │   │   │   │      └──⚙️ [interface] IERDProject()
│   │   │   │   │      └──⚙️ [property] IERDProject._type()
│   │   │   │   │      └──⚙️ [property] IERDProject._id()
│   │   │   │   │      └──⚙️ [property] IERDProject.name()
│   │   │   │   │      └──⚙️ [property] IERDProject.ownedElements()
│   │   │   │   ├── 📄 schema.model.ts
│   │   │   │   │      └──⚙️ [interface] Schema()
│   │   │   │   │      └──⚙️ [property] Schema.entities()
│   │   │   │   │      └──⚙️ [property] Schema.relationships()
│   │   │   │   │      └──⚙️ [interface] Entity()
│   │   │   │   │      └──⚙️ [property] Entity.name()
│   │   │   │   │      └──⚙️ [property] Entity.properties()
│   │   │   │   │      └──⚙️ [interface] Property()
│   │   │   │   │      └──⚙️ [property] Property.name()
│   │   │   │   │      └──⚙️ [property] Property.type()
│   │   │   │   │      └──⚙️ [property] Property.isPrimaryKey()
│   │   │   │   │      └──⚙️ [property] Property.isForeignKey()
│   │   │   │   │      └──⚙️ [interface] IRelationship()
│   │   │   │   │      └──⚙️ [property] IRelationship.name()
│   │   │   │   │      └──⚙️ [property] IRelationship.sourceEntity()
│   │   │   │   │      └──⚙️ [property] IRelationship.targetEntity()
│   │   │   │   │      └──⚙️ [property] IRelationship.sourceCardinality()
│   │   │   │   │      └──⚙️ [property] IRelationship.targetCardinality()
│   │   │   │   └── 📄 star-uml.model.ts
│   │   │   │          └──⚙️ [interface] IStarUmlProject()
│   │   │   │          └──⚙️ [property] IStarUmlProject._type()
│   │   │   │          └──⚙️ [property] IStarUmlProject._id()
│   │   │   │          └──⚙️ [property] IStarUmlProject.name()
│   │   │   │          └──⚙️ [property] IStarUmlProject.ownedElements()
│   │   │   │          └──⚙️ [interface] StarUmlElement()
│   │   │   │          └──⚙️ [property] StarUmlElement._type()
│   │   │   │          └──⚙️ [property] StarUmlElement._id()
│   │   │   │          └──⚙️ [property] StarUmlElement.name()
│   │   │   │          └──⚙️ [property] StarUmlElement.ownedElements()
│   │   │   │          └──⚙️ [property] StarUmlElement.attributes()
│   │   │   │          └──⚙️ [property] StarUmlElement.operations()
│   │   │   │          └──⚙️ [property] StarUmlElement.literals()
│   │   │   │          └──⚙️ [interface] StarUmlAttribute()
│   │   │   │          └──⚙️ [property] StarUmlAttribute._type()
│   │   │   │          └──⚙️ [property] StarUmlAttribute._id()
│   │   │   │          └──⚙️ [property] StarUmlAttribute.name()
│   │   │   │          └──⚙️ [property] StarUmlAttribute.type()
│   │   │   │          └──⚙️ [interface] StarUmlOperation()
│   │   │   │          └──⚙️ [property] StarUmlOperation._type()
│   │   │   │          └──⚙️ [property] StarUmlOperation._id()
│   │   │   │          └──⚙️ [property] StarUmlOperation.name()
│   │   │   │          └──⚙️ [property] StarUmlOperation.parameters()
│   │   │   │          └──⚙️ [interface] StarUmlParameter()
│   │   │   │          └──⚙️ [property] StarUmlParameter._type()
│   │   │   │          └──⚙️ [property] StarUmlParameter._id()
│   │   │   │          └──⚙️ [property] StarUmlParameter.name()
│   │   │   │          └──⚙️ [property] StarUmlParameter.type()
│   │   │   │          └──⚙️ [property] StarUmlParameter.direction()
│   │   │   │          └──⚙️ [interface] StarUmlLiteral()
│   │   │   │          └──⚙️ [property] StarUmlLiteral._type()
│   │   │   │          └──⚙️ [property] StarUmlLiteral._id()
│   │   │   │          └──⚙️ [property] StarUmlLiteral.name()
│   │   │   │          └──⚙️ [interface] IStarUmlType()
│   │   │   │          └──⚙️ [property] IStarUmlType._type()
│   │   │   │          └──⚙️ [property] IStarUmlType._id()
│   │   │   │          └──⚙️ [property] IStarUmlType.name()
│   │   │   │          └──⚙️ [property] IStarUmlType.reference()
│   │   │   │          └──⚙️ [interface] IStarUmlReference()
│   │   │   │          └──⚙️ [property] IStarUmlReference.$ref()
│   │   │   ├── 📁 ressource
│   │   │   │   ├── 📄 shopify.json
│   │   │   │   └── 📄 shopify.mdj
│   │   │   └── 📁 services
│   │   │       ├── 📄 .gitignore
│   │   │       ├── 📄 mapping.ts
│   │   │       │      └──⚙️ [function] sqlToTypeScript(sqlType: string)
│   │   │       │      └──⚙️ [function] sqlToZodType(sqlType: string)
│   │   │       ├── 📁 old_services
│   │   │       │   ├── 📄 get-colums.service.ts
│   │   │       │   │      └──⚙️ [function] getColumns(entity: IERDEntity)
│   │   │       │   ├── 📄 get-entities.service.ts
│   │   │       │   │      └──⚙️ [function] getEntities(mdjFile: string)
│   │   │       │   │      └──⚙️ [function] createdDictionaries(entities: IERDEntity[])
│   │   │       │   │      └──⚙️ [function] generateJsonEntity(entity: IERDEntity)
│   │   │       │   ├── 📄 get-relationships.service.ts
│   │   │       │   │      └──⚙️ [function] getRelationType(source_cardinality: string, target_cardinality: string)
│   │   │       │   │      └──⚙️ [function] getInEntity(dictionaryEntitiesJson: Map<string, IEntityJson>, end: Iend)
│   │   │       │   │      └──⚙️ [function] getRelationships(entity: IERDEntity, dictionaryEntitiesJson: Map<string, IEntityJson>)
│   │   │       │   ├── 📄 mdj-handle-colums.service.ts
│   │   │       │   │      └──⚙️ [function] mdjHandleColumsService(entity: IERDEntity)
│   │   │       │   ├── 📄 mdj-to-json.service.ts
│   │   │       │   │      └──⚙️ [class] MdjToJsonService()
│   │   │       │   │      └──⚙️ [method] MdjToJsonService.parseMdjFile(filePath: string)
│   │   │       │   │      └──⚙️ [method] MdjToJsonService.transformToSchema(starUmlProject: any)
│   │   │       │   │      └──⚙️ [method] MdjToJsonService.collectAllElements(element: any)
│   │   │       │   │      └──⚙️ [method] MdjToJsonService.getElementNameById(id: string)
│   │   │       │   │      └──⚙️ [method] MdjToJsonService.findAllElements(elements: any[], type: string)
│   │   │       │   │      └──⚙️ [method] MdjToJsonService.mapErdTypeToSchemaType(erdType: string)
│   │   │       │   ├── 📄 mdj-update-handle-colums.service.ts
│   │   │       │   │      └──⚙️ [function] mdjUpdateHandleColumsService(fileContent: string)
│   │   │       │   ├── 📄 nestjs-code-generation.service.ts
│   │   │       │   │      └──⚙️ [function] generateNestJsModules(entities: IEntityJson[])
│   │   │       │   │      └──⚙️ [function] generateNestJsModulesFromFile(jsonFilePath: string)
│   │   │       │   ├── 📄 nestjs-generate-dto.service.ts
│   │   │       │   │      └──⚙️ [function] generateCreateDto(entity: IEntityJson)
│   │   │       │   │      └──⚙️ [function] generateUpdateDto(entity: IEntityJson)
│   │   │       │   │      └──⚙️ [function] generateDtoFileContent(entity: IEntityJson)
│   │   │       │   ├── 📄 nestjs-generate-entity.service.ts
│   │   │       │   │      └──⚙️ [function] pluralize(name: string)
│   │   │       │   │      └──⚙️ [function] getImports(entity: IEntityJson, allEntities: IEntityJson[])
│   │   │       │   │      └──⚙️ [function] getColumnDecorators(column: IColumnJson)
│   │   │       │   │      └──⚙️ [function] getRelationDecorators(relation: IRelation, currentEntity: IEntityJson, allEntities: IEntityJson[])
│   │   │       │   │      └──⚙️ [function] generateEntityFileContent(entity: IEntityJson, allEntities: IEntityJson[])
│   │   │       │   ├── 📄 nestjs-generate-interface.service.ts
│   │   │       │   │      └──⚙️ [function] getInterfaceImports(entity: IEntityJson, allEntities: IEntityJson[])
│   │   │       │   │      └──⚙️ [function] generateInterfaceFileContent(entity: IEntityJson, allEntities: IEntityJson[])
│   │   │       │   ├── 📄 symfony-code-generation.service.ts
│   │   │       │   │      └──⚙️ [function] generateSymfonyModules(entities: IEntityJson[])
│   │   │       │   │      └──⚙️ [function] generateSymfonyModulesFromFile(jsonFilePath: string)
│   │   │       │   ├── 📄 symfony-generate-dto.service.ts
│   │   │       │   │      └──⚙️ [function] getValidationAssertions(column: IColumnJson)
│   │   │       │   │      └──⚙️ [function] generateCreateDto(entity: IEntityJson)
│   │   │       │   │      └──⚙️ [function] generateUpdateDto(entity: IEntityJson)
│   │   │       │   │      └──⚙️ [function] generateDtoFileContent(entity: IEntityJson)
│   │   │       │   └── 📄 symfony-generate-entity.service.ts
│   │   │       │          └──⚙️ [function] getEntityImports(entity: IEntityJson)
│   │   │       │          └──⚙️ [function] getColumnAttributes(column: IColumnJson)
│   │   │       │          └──⚙️ [function] getRelationAttributes(relation: IRelation, currentEntity: IEntityJson, allEntities: IEntityJson[])
│   │   │       │          └──⚙️ [function] generateEntityFileContent(entity: IEntityJson, allEntities: IEntityJson[])
│   │   │       ├── 📄 parser-mdj.service.ts
│   │   │       │      └──⚙️ [class] ParserMDJService()
│   │   │       │      └──⚙️ [method] ParserMDJService.init()
│   │   │       │      └──⚙️ [method] ParserMDJService.loadFile(path: string)
│   │   │       │      └──⚙️ [method] ParserMDJService.parseMdjToJson(path: string)
│   │   │       │      └──⚙️ [method] ParserMDJService.getEntities(mdjFile: string)
│   │   │       │      └──⚙️ [method] ParserMDJService.getColumns(entity: IERDEntity)
│   │   │       │      └──⚙️ [method] ParserMDJService.createdDictionaries(entities: IERDEntity[])
│   │   │       │      └──⚙️ [method] ParserMDJService.getRelationType(source_cardinality: string, target_cardinality: string)
│   │   │       │      └──⚙️ [method] ParserMDJService.getInEntity(dictionaryEntitiesJson: Map<string, IEntityJson>, end: Iend)
│   │   │       │      └──⚙️ [method] ParserMDJService.getRelationships(entity: IERDEntity, dictionaryEntitiesJson: Map<string, IEntityJson>)
│   │   │       └── 📄 symfony-mapping.ts
│   │   │              └──⚙️ [function] getPhpType(typeTypeScript: string)
│   │   │              └──⚙️ [function] getDoctrineColumnType(sqlType: string)
│   │   ├── 📁 project
│   │   │   ├── 📄 .gitignore
│   │   │   ├── 📁 commands
│   │   │   │   └── 📄 project.command.ts
│   │   │   │          └──⚙️ [interface] IProjectOptions()
│   │   │   │          └──⚙️ [property] IProjectOptions.code()
│   │   │   │          └──⚙️ [property] IProjectOptions.view()
│   │   │   │          └──⚙️ [property] IProjectOptions.metadata()
│   │   │   │          └──⚙️ [property] IProjectOptions.level()
│   │   │   │          └──⚙️ [property] IProjectOptions.save()
│   │   │   │          └──⚙️ [property] IProjectOptions.output()
│   │   │   │          └──⚙️ [property] IProjectOptions.force()
│   │   │   │          └──⚙️ [property] IProjectOptions.dryRun()
│   │   │   │          └──⚙️ [property] IProjectOptions.internalWatch()
│   │   │   │          └──⚙️ [class] ProjectCommand()
│   │   │   │          └──⚙️ [method] ProjectCommand.execute(args: string[], options: IProjectOptions)
│   │   │   │          └──⚙️ [method] ProjectCommand.handleNewProject()
│   │   │   │          └──⚙️ [method] ProjectCommand.handleGenerateProject(rest: string[])
│   │   │   │          └──⚙️ [method] ProjectCommand.handleWatchProject(rest: string[], options: IProjectOptions)
│   │   │   │          └──⚙️ [method] ProjectCommand.newProject(answers: IProjectCommand)
│   │   │   │          └──⚙️ [method] ProjectCommand.watchAction(path: string)
│   │   │   │          └──⚙️ [method] ProjectCommand.handleFileChange(filePath: string)
│   │   │   ├── 📁 config
│   │   │   │   └── 📄 config.ts
│   │   │   ├── 📁 interfaces
│   │   │   │   ├── 📄 file-node.interface.ts
│   │   │   │   │      └──⚙️ [interface] IFileNode()
│   │   │   │   │      └──⚙️ [property] IFileNode.name()
│   │   │   │   │      └──⚙️ [property] IFileNode.path()
│   │   │   │   │      └──⚙️ [property] IFileNode.type()
│   │   │   │   │      └──⚙️ [property] IFileNode.extension()
│   │   │   │   │      └──⚙️ [property] IFileNode.size()
│   │   │   │   │      └──⚙️ [property] IFileNode.level()
│   │   │   │   │      └──⚙️ [property] IFileNode.content()
│   │   │   │   │      └──⚙️ [property] IFileNode.metadata()
│   │   │   │   │      └──⚙️ [property] IFileNode.children()
│   │   │   │   ├── 📄 project-command.interface.ts
│   │   │   │   │      └──⚙️ [interface] IProjectCommand()
│   │   │   │   │      └──⚙️ [property] IProjectCommand.existence()
│   │   │   │   │      └──⚙️ [property] IProjectCommand.generate()
│   │   │   │   │      └──⚙️ [property] IProjectCommand.name()
│   │   │   │   │      └──⚙️ [property] IProjectCommand.path()
│   │   │   │   │      └──⚙️ [property] IProjectCommand.starUml()
│   │   │   │   │      └──⚙️ [property] IProjectCommand.framework()
│   │   │   │   │      └──⚙️ [property] IProjectCommand.frontends()
│   │   │   │   │      └──⚙️ [property] IProjectCommand.backends()
│   │   │   │   │      └──⚙️ [property] IProjectCommand.databases()
│   │   │   │   ├── 📄 project-service.interface.ts
│   │   │   │   │      └──⚙️ [interface] IProjectService()
│   │   │   │   │      └──⚙️ [property] IProjectService.serviceName()
│   │   │   │   └── 📄 task-service.interface.ts
│   │   │   │          └──⚙️ [interface] TaskService()
│   │   │   │          └──⚙️ [property] TaskService.id()
│   │   │   │          └──⚙️ [property] TaskService.title()
│   │   │   │          └──⚙️ [property] TaskService.description()
│   │   │   │          └──⚙️ [interface] ITaskService()
│   │   │   │          └──⚙️ [property] ITaskService.serviceName()
│   │   │   └── 📁 services
│   │   │       ├── 📄 project.service.ts
│   │   │       │      └──⚙️ [class] ProjectService()
│   │   │       │      └──⚙️ [method] ProjectService.init()
│   │   │       │      └──⚙️ [method] ProjectService.newProject(project: IProjectCommand)
│   │   │       │      └──⚙️ [method] ProjectService.generateProject(configProject: IProjectConfig)
│   │   │       │      └──⚙️ [method] ProjectService.loadFileCliLocal(path: string)
│   │   │       │      └──⚙️ [method] ProjectService.loadProject(targetPath: string)
│   │   │       │      └──⚙️ [method] ProjectService.initProject(path: string)
│   │   │       │      └──⚙️ [method] ProjectService.filterTree(tree: IFileNode[], props: string)
│   │   │       │      └──⚙️ [method] ProjectService.isFileNode(node: any)
│   │   │       └── 📄 task.service.ts
│   │   │              └──⚙️ [class] TaskService()
│   │   │              └──⚙️ [method] TaskService.init()
│   │   │              └──⚙️ [method] TaskService.runTask(name: string, action: () => Promise<T>)
│   │   │              └──⚙️ [method] TaskService.executeTask(name: string, action: () => Promise<T>)
│   │   │              └──⚙️ [method] TaskService.processQueue()
│   │   └── 📁 utils
│   ├── 📄 index.ts
│   │      └──⚙️ [function] bootstrap()
│   ├── 📁 mcp
│   │   ├── 📄 McpCommand.ts.txt
│   │   ├── 📄 mcp-commands.ts.txt
│   │   ├── 📄 mcp-process-utils.ts
│   │   │      └──⚙️ [function] isMcpServerRunning()
│   │   │      └──⚙️ [function] killAllMcpProcesses()
│   │   │      └──⚙️ [function] listMcpProcesses()
│   │   │      └──⚙️ [function] getMcpPid()
│   │   ├── 📄 mcp-server.ts
│   │   │      └──⚙️ [function] stopMcpServer()
│   │   │      └──⚙️ [function] watchPlugins(server: McpServer)
│   │   │      └──⚙️ [function] loadTool(filePath: string)
│   │   │      └──⚙️ [function] runMcpServer()
│   │   └── 📄 mcp-server.ts.txt
│   ├── 📁 plugins
│   │   ├── 📄 architect.plugin.js
│   │   │      └──⚙️ [class] ArchitectPlugin()
│   │   │      └──⚙️ [method] ArchitectPlugin.execute(args: any, context: any)
│   │   ├── 📁 blague
│   │   │   ├── 📄 blague.service.js
│   │   │   │      └──⚙️ [class] BlaguePlugin()
│   │   │   │      └──⚙️ [method] BlaguePlugin.execute(args: any)
│   │   │   └── 📄 manifest.json
│   │   ├── 📄 doc.plugin.js
│   │   │      └──⚙️ [class] GeneratedPlugin()
│   │   │      └──⚙️ [method] GeneratedPlugin.execute(args: any, context: any)
│   │   ├── 📄 hello.plugin.js
│   │   ├── 📁 symfony
│   │   │   ├── 📄 index.js
│   │   │   │      └──⚙️ [class] SymfonyPlugin()
│   │   │   │      └──⚙️ [method] SymfonyPlugin.execute(args: any, data: any)
│   │   │   ├── 📄 manifest.json
│   │   │   ├── 📄 symfony.service.js
│   │   │   │      └──⚙️ [class] SymfonyPlugin()
│   │   │   │      └──⚙️ [method] SymfonyPlugin.generate(config: any, entitiesJson: any, manifest: any)
│   │   │   └── 📁 templates
│   │   ├── 📄 task_manager.data.json
│   │   ├── 📄 task_manager.plugin.js
│   │   │      └──⚙️ [function] getDirname()
│   │   │      └──⚙️ [function] wouldCreateCycle(taskId: any, newDeps: any, allTasks: any)
│   │   │      └──⚙️ [function] loadTasks(context: any)
│   │   │      └──⚙️ [function] saveTasks(context: any, data: any)
│   │   │      └──⚙️ [class] TaskManagerPlugin()
│   │   │      └──⚙️ [method] TaskManagerPlugin.execute(args: any, context: any)
│   │   ├── 📄 task_manager_cli.plugin.js
│   │   │      └──⚙️ [class] TaskManagerCliPlugin()
│   │   │      └──⚙️ [method] TaskManagerCliPlugin.execute(args: any, context: any)
│   │   ├── 📄 task_manager_sql_lite.plugin.js
│   │   │      └──⚙️ [class] DatabaseManager()
│   │   │      └──⚙️ [method] DatabaseManager.initSQLite()
│   │   │      └──⚙️ [method] DatabaseManager.save(taskData: any)
│   │   │      └──⚙️ [method] DatabaseManager.syncToMySQL(query: any, params: any)
│   │   │      └──⚙️ [method] DatabaseManager.getAll()
│   │   │      └──⚙️ [class] TaskManagerPlugin()
│   │   │      └──⚙️ [method] TaskManagerPlugin.execute(args: any, context: any)
│   │   ├── 📄 tasks.db
│   │   ├── 📄 test.plugin.js
│   │   └── 📄 weather.plugin.js
│   ├── 📁 services
│   │   ├── 📁 __tests__
│   │   │   ├── 📄 case-service.test.ts
│   │   │   ├── 📄 logger-service.test.ts.txt
│   │   │   └── 📄 services-container.test.ts
│   │   │          └──⚙️ [class] MockService1()
│   │   │          └──⚙️ [method] MockService1.init()
│   │   │          └──⚙️ [class] MockService2()
│   │   │          └──⚙️ [method] MockService2.init()
│   │   ├── 📄 ai.service.ts
│   │   │      └──⚙️ [class] AiService()
│   │   │      └──⚙️ [method] AiService.init()
│   │   │      └──⚙️ [method] AiService.chat(prompt: string)
│   │   │      └──⚙️ [method] AiService.executeTool(name: string, args: unknown)
│   │   │      └──⚙️ [method] AiService.executeToolMCP(name: string, args: unknown[])
│   │   │      └──⚙️ [method] AiService.generatePlugin(prompt: string)
│   │   │      └──⚙️ [method] AiService.savePlugin(name: string, code: string)
│   │   │      └──⚙️ [method] AiService.listTools()
│   │   │      └──⚙️ [method] AiService.readFile(targetPath: string)
│   │   │      └──⚙️ [method] AiService.writeFile(targetPath: string, content: string)
│   │   ├── 📄 architecture.service.ts
│   │   │      └──⚙️ [class] ArchitectureService()
│   │   ├── 📄 ast.service.ts
│   │   │      └──⚙️ [class] AstService()
│   │   │      └──⚙️ [method] AstService.analyzeFileMetadata(filePath: string, sourceCode: string)
│   │   │      └──⚙️ [function] getDocumentation(node: ts.Node)
│   │   │      └──⚙️ [function] getParams(node: ts.SignatureDeclaration)
│   │   │      └──⚙️ [function] getVisibility(node: ts.Node)
│   │   │      └──⚙️ [function] visit(node: ts.Node)
│   │   ├── 📄 base-generator.service.ts
│   │   │      └──⚙️ [class] BaseGenerator()
│   │   │      └──⚙️ [method] BaseGenerator.getTemplate(name: string)
│   │   │      └──⚙️ [method] BaseGenerator.getFolder()
│   │   │      └──⚙️ [method] BaseGenerator.getSuffix()
│   │   │      └──⚙️ [method] BaseGenerator.generate(name: string)
│   │   ├── 📄 base-service.service.ts
│   │   │      └──⚙️ [class] BaseService()
│   │   │      └──⚙️ [method] BaseService.init()
│   │   ├── 📄 case.service.ts
│   │   │      └──⚙️ [class] CaseService()
│   │   │      └──⚙️ [method] CaseService.getWords(str: string)
│   │   │      └──⚙️ [method] CaseService.toPascalCase(str: string)
│   │   │      └──⚙️ [method] CaseService.toCamelCase(str: string)
│   │   │      └──⚙️ [method] CaseService.toKebabCase(str: string)
│   │   │      └──⚙️ [method] CaseService.toSnakeCase(str: string)
│   │   │      └──⚙️ [method] CaseService.capitalize(str: string)
│   │   │      └──⚙️ [method] CaseService.slugify(str: string)
│   │   ├── 📄 config.service.ts
│   │   │      └──⚙️ [class] ConfigService()
│   │   │      └──⚙️ [method] ConfigService.load(projectPath: string)
│   │   │      └──⚙️ [method] ConfigService.initConfigFile(projectPath: string, dataFrom: IAppConfig)
│   │   │      └──⚙️ [method] ConfigService.refresh()
│   │   │      └──⚙️ [method] ConfigService.deepMerge(target: Record<string, unknown>, source: Record<string, unknown>)
│   │   ├── 📄 data-manager.service.ts
│   │   │      └──⚙️ [class] DataManagerService()
│   │   │      └──⚙️ [method] DataManagerService.init()
│   │   │      └──⚙️ [method] DataManagerService.connect()
│   │   │      └──⚙️ [method] DataManagerService.query(sql: string, params: any)
│   │   │      └──⚙️ [method] DataManagerService.isWriteQuery(sql: string)
│   │   ├── 📄 file-system.service.ts
│   │   │      └──⚙️ [class] FileSystemService()
│   │   │      └──⚙️ [method] FileSystemService.setExcludedDirs(excludedDirs: string[])
│   │   │      └──⚙️ [method] FileSystemService.exists(targetPath: string)
│   │   │      └──⚙️ [method] FileSystemService.createDirectory(dirPath: string)
│   │   │      └──⚙️ [method] FileSystemService.writeFileJson(filePath: string, content: string)
│   │   │      └──⚙️ [method] FileSystemService.readFileJson(filePath: string)
│   │   │      └──⚙️ [method] FileSystemService.writeFile(filePath: string, content: string)
│   │   │      └──⚙️ [method] FileSystemService.writeFileAsync(filePath: string, content: string)
│   │   │      └──⚙️ [method] FileSystemService.writeToOutput(basePath: string, subDir: string, fileName: string, content: string)
│   │   │      └──⚙️ [method] FileSystemService.readFile(filePath: string)
│   │   │      └──⚙️ [method] FileSystemService.copy(source: string, destination: string)
│   │   │      └──⚙️ [method] FileSystemService.resolvePath(segments: string[])
│   │   │      └──⚙️ [method] FileSystemService.createFile(filePath: string, content: any)
│   │   │      └──⚙️ [method] FileSystemService.readDir(dirPath: string)
│   │   │      └──⚙️ [method] FileSystemService.scranDir(dirPath: string, recursive: any)
│   │   │      └──⚙️ [method] FileSystemService.getDirectoryTree(dirPath: string, level: any, maxLevel: any, withMetadata: any, config: { excludedDirs: string[]; analyzeExtensions: string[] })
│   │   │      └──⚙️ [method] FileSystemService.filterTree(node: IFileNode)
│   │   │      └──⚙️ [method] FileSystemService.createDirectoryTreeFromJsonFile(sourcePath: string, targetBaseDir: string)
│   │   │      └──⚙️ [method] FileSystemService.createDirectoryTreeFromJson(sourceJson: any, targetBaseDir: string)
│   │   │      └──⚙️ [method] FileSystemService.readJsonFile(filePath: string)
│   │   │      └──⚙️ [method] FileSystemService.isFileNode(value: unknown)
│   │   │      └──⚙️ [method] FileSystemService.buildPhysicalTree(node: IFileNode, currentPath: string)
│   │   │      └──⚙️ [method] FileSystemService.getContentForFile(node: IFileNode, fullPath: string)
│   │   │      └──⚙️ [method] FileSystemService.applyTemplate(fileName: string)
│   │   │      └──⚙️ [method] FileSystemService.validatePath(filePath: string, paramName: string)
│   │   │      └──⚙️ [method] FileSystemService.updateJson(file: string)
│   │   ├── 📄 generate-dto.service.ts
│   │   │      └──⚙️ [class] GenerateDtoService()
│   │   │      └──⚙️ [method] GenerateDtoService.getFolder()
│   │   │      └──⚙️ [method] GenerateDtoService.getSuffix()
│   │   │      └──⚙️ [method] GenerateDtoService.getTemplate(name: string)
│   │   ├── 📄 generator.service.ts
│   │   │      └──⚙️ [class] GeneratorService()
│   │   │      └──⚙️ [method] GeneratorService.newComponent(type: string, name: string, options: IGenerateOptions)
│   │   │      └──⚙️ [method] GeneratorService.getFileName(type: string, name: string)
│   │   │      └──⚙️ [method] GeneratorService.getTargetFolder(type: string)
│   │   │      └──⚙️ [method] GeneratorService.scaffoldCommand(name: string)
│   │   │      └──⚙️ [method] GeneratorService.scaffoldTemplate(name: string)
│   │   │      └──⚙️ [method] GeneratorService.scaffoldService(name: string)
│   │   │      └──⚙️ [method] GeneratorService.scaffoldInterface(name: string)
│   │   │      └──⚙️ [method] GeneratorService.scaffoldFramework(frameworkName: string)
│   │   │      └──⚙️ [method] GeneratorService.save(targetPath: string, content: string, options: IGenerateOptions)
│   │   ├── 📄 git.service.ts
│   │   │      └──⚙️ [class] GitService()
│   │   │      └──⚙️ [method] GitService.init()
│   │   │      └──⚙️ [method] GitService.pull()
│   │   │      └──⚙️ [method] GitService.push()
│   │   │      └──⚙️ [method] GitService.commit(message: string)
│   │   │      └──⚙️ [method] GitService.addToGitignore(path: string, message: string[])
│   │   │      └──⚙️ [method] GitService.removeInGitignore(path: string, message: string[])
│   │   ├── 📄 handler-error.service.ts
│   │   │      └──⚙️ [class] HandlerErrorService()
│   │   │      └──⚙️ [method] HandlerErrorService.setupGlobalHandlers()
│   │   │      └──⚙️ [method] HandlerErrorService.handle(error: unknown, contextMessage: string)
│   │   │      └──⚙️ [method] HandlerErrorService.safeLogError(contextMessage: string | undefined, message: string)
│   │   │      └──⚙️ [method] HandlerErrorService.safeLogStackTrace(err: Error)
│   │   │      └──⚙️ [method] HandlerErrorService.getLogLevel()
│   │   │      └──⚙️ [method] HandlerErrorService.debugLog(title: string, data: unknown)
│   │   │      └──⚙️ [method] HandlerErrorService.isProperlyConfigured()
│   │   │      └──⚙️ [method] HandlerErrorService.getDiagnostics()
│   │   ├── 📄 ia.service.ts
│   │   │      └──⚙️ [class] IaService()
│   │   ├── 📄 logger.service.ts
│   │   │      └──⚙️ [class] LoggerService()
│   │   │      └──⚙️ [method] LoggerService.init()
│   │   │      └──⚙️ [method] LoggerService.info(message: string, meta: object)
│   │   │      └──⚙️ [method] LoggerService.success(message: string)
│   │   │      └──⚙️ [method] LoggerService.warn(message: string, meta: object)
│   │   │      └──⚙️ [method] LoggerService.error(message: string, error: Error)
│   │   │      └──⚙️ [method] LoggerService.debug(message: string, meta: object)
│   │   ├── 📄 plugin.service.ts
│   │   │      └──⚙️ [class] PluginService()
│   │   │      └──⚙️ [method] PluginService.init()
│   │   │      └──⚙️ [method] PluginService.load(pluginId: string, type: string)
│   │   │      └──⚙️ [method] PluginService.list()
│   │   │      └──⚙️ [method] PluginService.listByType(type: string)
│   │   │      └──⚙️ [method] PluginService.verifyPlugin(manifest: any)
│   │   │      └──⚙️ [method] PluginService.getSDKContext()
│   │   ├── 📄 prompt.service.ts
│   │   │      └──⚙️ [class] PromptService()
│   │   │      └──⚙️ [method] PromptService.askText(message: string, name: any)
│   │   │      └──⚙️ [method] PromptService.askChoiceList(message: string, choices: string[])
│   │   │      └──⚙️ [method] PromptService.askChoiceCheckbox(message: string, choices: string[])
│   │   │      └──⚙️ [method] PromptService.confirm(message: string)
│   │   ├── 📄 services-container.ts
│   │   │      └──⚙️ [class] ServicesContainer()
│   │   │      └──⚙️ [method] ServicesContainer.register(name: string, service: IBaseService)
│   │   │      └──⚙️ [method] ServicesContainer.get(name: string)
│   │   │      └──⚙️ [method] ServicesContainer.getAll()
│   │   │      └──⚙️ [method] ServicesContainer.initializeAll()
│   │   ├── 📄 services-container.ts.txt
│   │   ├── 📄 shell.service.ts
│   │   │      └──⚙️ [class] ShellService()
│   │   │      └──⚙️ [method] ShellService.execute(command: string, cwd: string)
│   │   │      └──⚙️ [method] ShellService.executeSync(command: string, cwd: string)
│   │   │      └──⚙️ [method] ShellService.executeSpawn(command: string, args: string[], cwd: string)
│   │   │      └──⚙️ [method] ShellService.executeSyncSpawn(command: string, args: string[], cwd: string)
│   │   │      └──⚙️ [method] ShellService.list(path: any)
│   │   │      └──⚙️ [method] ShellService.makeDir(path: string)
│   │   │      └──⚙️ [method] ShellService.remove(path: string)
│   │   │      └──⚙️ [method] ShellService.move(source: string, destination: string)
│   │   │      └──⚙️ [method] ShellService.copy(source: string, destination: string)
│   │   │      └──⚙️ [method] ShellService.searchInFiles(pattern: string, path: any)
│   │   ├── 📁 src
│   │   │   └── 📁 commands
│   │   │       └── 📄 test.command.ts
│   │   │              └──⚙️ [class] TestCommand()
│   │   │              └──⚙️ [method] TestCommand.execute(args: string[], options: any)
│   │   ├── 📄 state.service.ts
│   │   │      └──⚙️ [class] StateService()
│   │   │      └──⚙️ [method] StateService.get(key: string)
│   │   │      └──⚙️ [method] StateService.set(key: string, value: T)
│   │   │      └──⚙️ [method] StateService.has(key: string)
│   │   │      └──⚙️ [method] StateService.clear()
│   │   ├── 📄 task-manager.service.ts
│   │   │      └──⚙️ [class] TaskManagerService()
│   │   ├── 📄 template.factory.ts
│   │   │      └──⚙️ [class] TemplateFactory()
│   │   │      └──⚙️ [method] TemplateFactory.render(pluginPath: string, templateName: string, data: any)
│   │   ├── 📄 template.service.ts
│   │   │      └──⚙️ [class] TemplateService()
│   │   │      └──⚙️ [method] TemplateService.init()
│   │   │      └──⚙️ [method] TemplateService.render(pluginDir: string, templateDir: string, templateName: string, data: Record<string, unknown>)
│   │   ├── 📄 test-error-handler.ts
│   │   └── 📄 tool.service.ts
│   │          └──⚙️ [class] ToolService()
│   │          └──⚙️ [method] ToolService.generateAsciiTree(node: IFileNode, viewContent: any, prefix: any)
│   │          └──⚙️ [method] ToolService.generateYamlTree(node: IFileNode, viewContent: any)
│   │          └──⚙️ [method] ToolService.generateAsciiTreeMetadata(node: IFileNode, prefix: any, viewContent: any)
│   │          └──⚙️ [method] ToolService.buildDoc(node: IFileNode, outputPath: string)
│   │          └──⚙️ [function] buildTree(currentNode: IFileNode, currentViewContent: boolean, currentPrefix: string)
│   │          └──⚙️ [function] buildYaml(currentNode: IFileNode, currentPrefix: string)
│   ├── 📁 templates
│   │   ├── 📄 class.ts.txt
│   │   ├── 📄 manifest.ejs
│   │   ├── 📄 plugin.ejs
│   │   └── 📄 service.ejs
│   ├── 📁 test
│   └── 📁 types
│       ├── 📄 cli-options.type.ts
│       ├── 📄 command.interface.ts
│       │      └──⚙️ [interface] IBaseOption()
│       │      └──⚙️ [property] IBaseOption.flags()
│       │      └──⚙️ [property] IBaseOption.description()
│       │      └──⚙️ [property] IBaseOption.required()
│       │      └──⚙️ [property] IBaseOption.choices()
│       │      └──⚙️ [interface] ICommand()
│       │      └──⚙️ [property] ICommand.name()
│       │      └──⚙️ [property] ICommand.description()
│       │      └──⚙️ [property] ICommand.arguments()
│       │      └──⚙️ [property] ICommand.aliases()
│       │      └──⚙️ [property] ICommand.options()
│       │      └──⚙️ [property] ICommand.helpAfterText()
│       │      └──⚙️ [interface] ICommand()
│       │      └──⚙️ [property] ICommand.name()
│       │      └──⚙️ [property] ICommand.description()
│       │      └──⚙️ [property] ICommand.arguments()
│       │      └──⚙️ [property] ICommand.aliases()
│       │      └──⚙️ [property] ICommand.options()
│       ├── 📁 commun
│       │   ├── 📄 database.interface.ts
│       │   │      └──⚙️ [interface] IDataBase()
│       │   │      └──⚙️ [property] IDataBase.type()
│       │   │      └──⚙️ [property] IDataBase.host()
│       │   │      └──⚙️ [property] IDataBase.port()
│       │   │      └──⚙️ [property] IDataBase.user()
│       │   │      └──⚙️ [property] IDataBase.password()
│       │   │      └──⚙️ [property] IDataBase.database()
│       │   │      └──⚙️ [interface] IQueryResult()
│       │   │      └──⚙️ [property] IQueryResult.fieldCount()
│       │   │      └──⚙️ [property] IQueryResult.affectedRows()
│       │   │      └──⚙️ [property] IQueryResult.insertId()
│       │   │      └──⚙️ [property] IQueryResult.serverStatus()
│       │   │      └──⚙️ [property] IQueryResult.warningCount()
│       │   │      └──⚙️ [property] IQueryResult.message()
│       │   │      └──⚙️ [property] IQueryResult.protocol41()
│       │   │      └──⚙️ [property] IQueryResult.changedRows()
│       │   ├── 📄 file-node.interface.ts
│       │   │      └──⚙️ [interface] IFileNode()
│       │   │      └──⚙️ [property] IFileNode.name()
│       │   │      └──⚙️ [property] IFileNode.path()
│       │   │      └──⚙️ [property] IFileNode.type()
│       │   │      └──⚙️ [property] IFileNode.extension()
│       │   │      └──⚙️ [property] IFileNode.size()
│       │   │      └──⚙️ [property] IFileNode.level()
│       │   │      └──⚙️ [property] IFileNode.content()
│       │   │      └──⚙️ [property] IFileNode.metadata()
│       │   │      └──⚙️ [property] IFileNode.children()
│       │   ├── 📄 member-info.interface.ts
│       │   │      └──⚙️ [interface] IMemberInfo()
│       │   │      └──⚙️ [property] IMemberInfo.name()
│       │   │      └──⚙️ [property] IMemberInfo.type()
│       │   │      └──⚙️ [property] IMemberInfo.visibility()
│       │   │      └──⚙️ [property] IMemberInfo.description()
│       │   │      └──⚙️ [property] IMemberInfo.returnType()
│       │   │      └──⚙️ [property] IMemberInfo.arguments()
│       │   └── 📄 sdk-context.interface.ts
│       │          └──⚙️ [interface] ISDKContext()
│       │          └──⚙️ [property] ISDKContext.log()
│       │          └──⚙️ [property] ISDKContext.fs()
│       │          └──⚙️ [method] ISDKContext.render(pluginDir: string, tplDir: string, templateName: string, data: Record<string, unknown>)
│       │          └──⚙️ [property] ISDKContext.config()
│       ├── 📄 config.interface.ts
│       │      └──⚙️ [interface] IOutputTreeConfig()
│       │      └──⚙️ [property] IOutputTreeConfig.type()
│       │      └──⚙️ [property] IOutputTreeConfig.pathOut()
│       │      └──⚙️ [property] IOutputTreeConfig.saveOnExecute()
│       │      └──⚙️ [interface] IAppConfig()
│       │      └──⚙️ [property] IAppConfig.cliFolder()
│       │      └──⚙️ [property] IAppConfig.databases()
│       │      └──⚙️ [property] IAppConfig.doc()
│       │      └──⚙️ [property] IAppConfig.tree()
│       ├── 📄 context.interface.ts
│       │      └──⚙️ [interface] ICliConfig()
│       │      └──⚙️ [property] ICliConfig.templatesPath()
│       │      └──⚙️ [property] ICliConfig.globalTemplatesPath()
│       │      └──⚙️ [property] ICliConfig.logLevel()
│       │      └──⚙️ [property] ICliConfig.theme()
│       │      └──⚙️ [interface] IAppContext()
│       │      └──⚙️ [property] IAppContext.version()
│       │      └──⚙️ [property] IAppContext.rootPath()
│       │      └──⚙️ [property] IAppContext.cliCconfig()
│       │      └──⚙️ [property] IAppContext.services()
│       │      └──⚙️ [property] IAppContext.db()
│       │      └──⚙️ [property] IAppContext.git()
│       │      └──⚙️ [property] IAppContext.ast()
│       │      └──⚙️ [property] IAppContext.case()
│       │      └──⚙️ [property] IAppContext.tool()
│       │      └──⚙️ [property] IAppContext.state()
│       │      └──⚙️ [property] IAppContext.task()
│       │      └──⚙️ [property] IAppContext.shell()
│       │      └──⚙️ [property] IAppContext.plugin()
│       │      └──⚙️ [property] IAppContext.logger()
│       │      └──⚙️ [property] IAppContext.config()
│       │      └──⚙️ [property] IAppContext.prompt()
│       │      └──⚙️ [property] IAppContext.project()
│       │      └──⚙️ [property] IAppContext.template()
│       │      └──⚙️ [property] IAppContext.generator()
│       │      └──⚙️ [property] IAppContext.fileSystem()
│       │      └──⚙️ [property] IAppContext.architecture()
│       │      └──⚙️ [property] IAppContext.errorHandler()
│       ├── 📄 plugin.interface.ts
│       │      └──⚙️ [interface] IPluginService()
│       │      └──⚙️ [interface] IPlugin()
│       │      └──⚙️ [property] IPlugin.type()
│       │      └──⚙️ [property] IPlugin.id()
│       │      └──⚙️ [property] IPlugin.name()
│       │      └──⚙️ [property] IPlugin.pluginDir()
│       │      └──⚙️ [property] IPlugin.templateDir()
│       │      └──⚙️ [interface] IPluginManifest()
│       │      └──⚙️ [property] IPluginManifest.id()
│       │      └──⚙️ [property] IPluginManifest.name()
│       │      └──⚙️ [property] IPluginManifest.templateDir()
│       │      └──⚙️ [property] IPluginManifest.service()
│       │      └──⚙️ [property] IPluginManifest.description()
│       │      └──⚙️ [property] IPluginManifest.blueprints()
│       │      └──⚙️ [interface] IPluginBlueprint()
│       │      └──⚙️ [property] IPluginBlueprint.type()
│       │      └──⚙️ [property] IPluginBlueprint.target()
│       │      └──⚙️ [property] IPluginBlueprint.prefix()
│       │      └──⚙️ [property] IPluginBlueprint.suffix()
│       │      └──⚙️ [property] IPluginBlueprint.template()
│       │      └──⚙️ [property] IPluginBlueprint.description()
│       └── 📁 services
│           ├── 📄 ai-service.interface.ts
│           │      └──⚙️ [interface] IAiService()
│           │      └──⚙️ [property] IAiService.serviceName()
│           │      └──⚙️ [property] IAiService.pluginsPath()
│           ├── 📄 architecture-service.interface.ts
│           │      └──⚙️ [interface] IArchitectureService()
│           │      └──⚙️ [property] IArchitectureService.serviceName()
│           ├── 📄 ast-service.interface.ts
│           │      └──⚙️ [interface] IAstService()
│           │      └──⚙️ [property] IAstService.serviceName()
│           ├── 📄 base-service.interface.ts
│           │      └──⚙️ [interface] IBaseService()
│           │      └──⚙️ [property] IBaseService.serviceName()
│           ├── 📄 case-service.interface.ts
│           │      └──⚙️ [interface] ICaseService()
│           │      └──⚙️ [property] ICaseService.serviceName()
│           ├── 📄 config-service.interface.ts
│           │      └──⚙️ [interface] IConfigService()
│           │      └──⚙️ [property] IConfigService.serviceName()
│           │      └──⚙️ [property] IConfigService.logLevel()
│           │      └──⚙️ [property] IConfigService.defaults()
│           │      └──⚙️ [property] IConfigService.current()
│           ├── 📄 data-manager-service.interface.ts
│           │      └──⚙️ [interface] IDataManagerService()
│           │      └──⚙️ [property] IDataManagerService.serviceName()
│           ├── 📄 error-handler.interface.ts
│           │      └──⚙️ [interface] IHandlerErrorService()
│           │      └──⚙️ [property] IHandlerErrorService.serviceName()
│           ├── 📄 file-system.interface.ts
│           │      └──⚙️ [interface] IFileSystemService()
│           │      └──⚙️ [property] IFileSystemService.serviceName()
│           │      └──⚙️ [property] IFileSystemService.excludedDirs()
│           ├── 📄 generator.interface.ts
│           │      └──⚙️ [interface] IGeneratorService()
│           │      └──⚙️ [property] IGeneratorService.serviceName()
│           ├── 📄 git-service.interface.ts
│           │      └──⚙️ [interface] IGitService()
│           │      └──⚙️ [property] IGitService.serviceName()
│           ├── 📄 logger-service.interface.ts
│           │      └──⚙️ [interface] ILoggerService()
│           │      └──⚙️ [property] ILoggerService.serviceName()
│           ├── 📄 plugin-service.interface.ts
│           │      └──⚙️ [interface] IPluginService()
│           │      └──⚙️ [property] IPluginService.serviceName()
│           ├── 📄 prompt-service.interface.ts
│           │      └──⚙️ [interface] IPromptService()
│           │      └──⚙️ [property] IPromptService.serviceName()
│           ├── 📄 services-container.interface.ts
│           │      └──⚙️ [interface] IServicesContainer()
│           ├── 📄 shell-service.interface.ts
│           │      └──⚙️ [interface] IShellService()
│           │      └──⚙️ [property] IShellService.serviceName()
│           ├── 📄 state-service.interface.ts
│           │      └──⚙️ [interface] IStateService()
│           │      └──⚙️ [property] IStateService.serviceName()
│           ├── 📄 task-manager-service.interface.ts
│           │      └──⚙️ [interface] ITaskManagerService()
│           │      └──⚙️ [property] ITaskManagerService.serviceName()
│           ├── 📄 template.interface.ts
│           │      └──⚙️ [interface] ITemplate()
│           │      └──⚙️ [property] ITemplate.name()
│           │      └──⚙️ [property] ITemplate.path()
│           │      └──⚙️ [property] ITemplate.files()
│           │      └──⚙️ [property] ITemplate.variables()
│           │      └──⚙️ [property] ITemplate.structure()
│           │      └──⚙️ [property] ITemplate.hooks()
│           │      └──⚙️ [interface] ITemplateVariable()
│           │      └──⚙️ [property] ITemplateVariable.name()
│           │      └──⚙️ [property] ITemplateVariable.type()
│           │      └──⚙️ [property] ITemplateVariable.description()
│           │      └──⚙️ [property] ITemplateVariable.required()
│           │      └──⚙️ [property] ITemplateVariable.default()
│           │      └──⚙️ [property] ITemplateVariable.choices()
│           │      └──⚙️ [interface] ITemplateService()
│           │      └──⚙️ [property] ITemplateService.serviceName()
│           │      └──⚙️ [interface] ITemplateStructure()
│           │      └──⚙️ [property] ITemplateStructure.path()
│           │      └──⚙️ [property] ITemplateStructure.content()
│           │      └──⚙️ [property] ITemplateStructure.type()
│           │      └──⚙️ [property] ITemplateStructure.children()
│           │      └──⚙️ [property] ITemplateStructure.conditional()
│           │      └──⚙️ [property] ITemplateStructure.template()
│           └── 📄 tool-service.interface.ts
│                  └──⚙️ [interface] IToolService()
│                  └──⚙️ [property] IToolService.serviceName()
├── 📁 tests
│   ├── 📄 cli-e2e.test.ts
│   ├── 📄 setup.ts
│   └── 📄 utils.ts
│          └──⚙️ [function] runCLI(args: string[])
├── 📁 tree
│   ├── 📄 doc.md
│   ├── 📄 tree.json
│   └── 📄 tree.yaml
├── 📄 tsconfig.json
├── 📄 tsup.config.ts
└── 📄 vite.config.js
