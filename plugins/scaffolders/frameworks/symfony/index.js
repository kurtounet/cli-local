export default class SymfonyPlugin {
    sdk;
    constructor(sdk) {
        this.sdk = sdk;
    }
    async execute(options, data) {
        const manifest = data.manifest;
        const pluginDir = data.pluginDir;
        const bagData = data.data;
        this.sdk.log.success(`[Symfony] Plugin chargé. ${process.cwd()}`);
        // const data = {
        //   className: options.name ?? "DefaultController",
        //   namespace: "App\\Controller",
        // };
        // const templateDir = "templates";
        // const templateName = "controller/controller.php.ejs";
        // Ton PluginService utilisera ce chemin pour EJS
        console.log(pluginDir);
        try {
            // const content = await this.sdk.render(pluginDir, templateDir, templateName, data);
            // this.sdk.log.success(`[Symfony]:${content}`);
            // await this.sdk.fs.writeAsync(`./src/Controller/${data.className}.php`, content);
            this.sdk.log.success(`[manifest] ${JSON.stringify(manifest)}`);
            this.sdk.log.success(`[pluginDir] ${pluginDir}`);
            this.sdk.log.success(`[bagData] ${JSON.stringify(bagData)}`);
        }
        catch (error) {
            this.sdk.log.error(`Erreur lors de la génération du contrôleur: ${error}`);
            throw error;
        }
    }
}
