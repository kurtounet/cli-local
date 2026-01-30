import path from "path";
import fs from "fs";
import { INuxtConfigTs } from "../models/nuxt-config-ts.model";
import { writeFile } from "@utils/file-utils";
import { pathToFileURL } from "url";

//import type { NuxtConfig } from '@nuxt/schema'
export async function nuxtUpdateFileNuxtConfigTsService(
  rootPathProjectFramework: string,
) {
  const nuxtConfigPath = path.join(rootPathProjectFramework, "nuxt.config.ts");

  if (!fs.existsSync(nuxtConfigPath)) {
    return `Erreur: Aucun fichier nuxt.config.ts trouvé dans ${rootPathProjectFramework}`;
  }
  try {
    // 1) Charger le module (TS/JS) via import dynamique
    const mod = await import(pathToFileURL(nuxtConfigPath).href);
    const currentConfig: INuxtConfigTs = (mod &&
      (mod.default ?? mod)) as INuxtConfigTs;

    // 2) Mettre a jour la config (defensif)
    const updated = nuxtUpdateContentFileNuxtConfigTs(currentConfig);

    // 3) Re-ecrire le fichier proprement
    const content = `import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig(${JSON.stringify(updated, null, 2)})
`;
    //fs.writeFile(nuxtConfigPath, content, "utf8")
    writeFile(
      nuxtConfigPath,
      content,
      `Mise à jour du fichier nuxt.config.ts : ${rootPathProjectFramework} ✅`,
    );
  } catch (error) {
    return `Erreur lors de la mise à jour de nuxt.config.ts : ${error}`;
  }
}
export function nuxtUpdateContentFileNuxtConfigTs(
  nuxtConfigFileJson: INuxtConfigTs,
): INuxtConfigTs {
  const cfg: INuxtConfigTs = { ...nuxtConfigFileJson };

  cfg.ssr = true;
  cfg.app ??= {};
  cfg.app.head ??= {};
  cfg.app.head.title = "Mon App Nuxt";
  cfg.app.head.meta = [{ name: "description", content: "Super app Nuxt 3" }];

  // Eviter de dupliquer si deja present
  const ensureModule = (arr: any[] | undefined, entry: any) => {
    const a = arr ?? [];
    return a.some((x) => JSON.stringify(x) === JSON.stringify(entry))
      ? a
      : [...a, entry];
  };

  cfg.modules = ensureModule(cfg.modules, "@nuxtjs/tailwindcss");
  cfg.css = Array.from(
    new Set([
      ...(cfg.css ?? []),
      "~/assets/css/main.css",
      "~/assets/css/tailwind.css",
    ]),
  );

  cfg.runtimeConfig ??= {};
  cfg.runtimeConfig.public ??= {};
  cfg.runtimeConfig.public.apiBase = "/api";

  return cfg;
}
// import { defineNuxtConfig } from 'nuxt/config'
// import type { NuxtConfig } from './nuxt-config.interface'
/*
export default defineNuxtConfig(<NuxtConfig>{
  ssr: true,
  app: {
    head: {
      title: 'Mon App Nuxt',
      meta: [{ name: 'description', content: 'Super app Nuxt 3' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },
})
*/
