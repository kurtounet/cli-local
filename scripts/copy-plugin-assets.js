import fs from "fs-extra";
import path from "path";

async function copyPluginAssets() {
  const srcDir = "./plugins-src";
  const destDir = "./plugins";

  // Liste des dossiers ou fichiers à ignorer
  const excludeList = [];

  try {
    console.log("📂 Copie des assets des plugins (avec exclusions)...");

    await fs.copy(srcDir, destDir, {
      overwrite: true,
      filter: (src) => {
        const relativePath = path.relative(srcDir, src);
        const fileName = path.basename(src);

        // 1. Exclure si le fichier est du TypeScript (tsc s'en occupe)
        if (src.endsWith(".ts") && !src.endsWith(".d.ts")) {
          return false;
        }

        // 2. Exclure si le nom du fichier ou dossier est dans la liste d'exclusion
        if (
          excludeList.some(
            (exclude) =>
              relativePath.startsWith(exclude) || fileName === exclude,
          )
        ) {
          return false;
        }

        return true;
      },
    });

    console.log("✅ Assets filtrés et copiés avec succès dans /plugins");
  } catch (err) {
    console.error("❌ Erreur lors de la copie des assets:", err);
    process.exit(1);
  }
}

copyPluginAssets();
