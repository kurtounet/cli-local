import { App } from "./core/App.js";

import { PluginService } from "./src/core/services/plugin.service.js";

async function test() {
  // 1. Simuler l'objet CLI avec ses services
  const cli = bootstrap();
  await cli.init();

  console.log("--- Test de la liste des plugins ---");
  const list = await cli.plugin.list();
  console.log("Plugins détectés :", list);

  console.log("\n--- Chargement du plugin Symfony ---");
  try {
    const { instance, manifest } = await cli.plugin.load("symfony");
    console.log(`Plugin ${manifest.name} chargé avec succès.`);

    // 2. Simuler des données d'entrée
    const mockData = {
      entities: [{ name: "User", fields: [{ name: "email", type: "string" }] }],
    };

    // 3. Exécuter le plugin
    console.log("Exécution du plugin...");
    await instance.execute({}, mockData);

    console.log("✅ Test réussi : Vérifie le dossier /output !");
  } catch (error) {
    console.error("❌ Échec du test :", error.message);
  }
}

test();
