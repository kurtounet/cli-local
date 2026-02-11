// // src/commands/generate.action.ts
// import { IPluginService } from "@/types/services/plugin-service.interface.js";

// export const generateAction = async (
//   pluginService: IPluginService,
//   framework: string,
//   blueprint: string,
//   options: any,
// ) => {
//   try {
//     // 1. Charger le plugin via le PluginService
//     // Cela valide le manifest et instancie la classe avec le SDKContext
//     const pack = await pluginService.load(framework, "scaffolder");

//     // 2. Vérifier si le blueprint demandé est déclaré dans le manifest
//     const blueprintExists = pack.manifest.blueprints.some((b) => b.name === blueprint);
//     if (!blueprintExists) {
//       throw new Error(`Le blueprint '${blueprint}' n'existe pas pour le plugin ${framework}`);
//     }

//     // 3. Appeler la méthode execute du plugin (ton index.ts compilé)
//     console.log(`\n🚀 Lancement du scaffolder ${framework}...\n`);
//     await pack.instance.execute(blueprint, options);
//   } catch (error: any) {
//     console.error(`❌ Erreur : ${error.message}`);
//     process.exit(1);
//   }
// };
