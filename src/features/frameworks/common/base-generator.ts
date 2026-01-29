import * as fs from "fs";
import * as path from "path";

export abstract class BaseGenerator {
  // Chaque service enfant devra remplir ces infos
  protected abstract getTemplate(name: string): string;
  protected abstract getTargetFolder(): string;
  protected abstract getFileSuffix(): string;

  public execute(name: string): void {
    // Chemin dynamique basé sur ce que l'enfant fournit
    const targetDir = path.join(process.cwd(), this.getTargetFolder());
    const fileName = `${name.toLowerCase()}.${this.getFileSuffix()}.ts`;
    const fullPath = path.join(targetDir, fileName);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    if (fs.existsSync(fullPath)) {
      console.log(`[SKIP] ${fileName} existe déjà.`);
      return;
    }

    fs.writeFileSync(fullPath, this.getTemplate(name));
    console.log(`[CREATE] ${fullPath}`);
  }
}
