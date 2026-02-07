import * as fs from "fs";
import * as path from "path";

export abstract class BaseGenerator {
  // Ces méthodes DOIVENT être implémentées par tes services (ex: Controller, DTO)
  protected abstract getTemplate(name: string): string;
  protected abstract getFolder(): string;
  protected abstract getSuffix(): string;

  public generate(name: string): void {
    const folderPath = this.cli.path.join(
      process.cwd(),
      "src",
      this.getFolder(),
    );
    const fileName = `${name.toLowerCase()}.${this.getSuffix()}.ts`;
    const fullPath = this.cli.path.join(folderPath, fileName);

    // 1. Créer le dossier s'il n'existe pas
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    // 2. Vérifier si le fichier existe déjà pour ne pas écraser
    if (fs.existsSync(fullPath)) {
      console.warn(`⚠️  Attention : ${fileName} existe déjà.`);
      return;
    }

    // 3. Écrire le fichier avec le template de l'enfant
    fs.writeFileSync(fullPath, this.getTemplate(name));
    console.log(`✅ Fichier généré : ${fullPath}`);
  }
}
