import * as fs from "fs";
import * as path from "path";

export async function getServices(directory: string) {
  const services: Record<string, any> = {};
  const files = fs.readdirSync(directory).filter((f) => f.endsWith(".service.ts"));

  for (const file of files) {
    // Importation dynamique du fichier
    const module = await import(path.join(directory, file));

    // On récupère la première classe exportée (ou celle qui correspond au nom)
    const ClassRef = Object.values(module)[0] as any;

    // On crée une clé simple (ex: "page" pour "NuxtGeneratePageService")
    const key = file.replace("nuxt-generate-", "").replace(".service.ts", "");
    services[key] = new ClassRef();
  }

  return services;
}
