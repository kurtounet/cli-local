export default class SymfonyPlugin {
    sdk;
    constructor(sdk) {
        this.sdk = sdk;
    }
    async execute(blueprint, options) {
        this.sdk.log.success(`[Symfony] Plugin chargé.${process.cwd()}`);
        const data = {
            className: options.name ?? "DefaultController",
            namespace: "App\\Controller",
        };
        const pluginDir = process.cwd() + "/plugins/scaffolders/frameworks/symfony";
        const templateDir = "templates";
        const templateName = "controller/controller.php.ejs";
        // Ton PluginService utilisera ce chemin pour EJS
        console.log(pluginDir);
        try {
            const content = await this.sdk.render(pluginDir, templateDir, templateName, data);
            this.sdk.log.success(`[Symfony]:${content}`);
            await this.sdk.fs.writeAsync(`./src/Controller/${data.className}.php`, content);
            this.sdk.log.success(`[Symfony] ${data.className} généré.`);
        }
        catch (error) {
            this.sdk.log.error(`Erreur lors de la génération du contrôleur: ${error}`);
            throw error;
        }
    }
}
