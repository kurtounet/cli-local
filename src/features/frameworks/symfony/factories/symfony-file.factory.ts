// features/symfony/factories/symfony-file.factory.ts

export type SymfonyFileType = "entity" | "dto" | "repository";

export class SymfonyFileFactory {
  /**
   * Retourne le contenu et le chemin cible selon le type
   * @param type
   * @param entity
   */
  static create(
    type: SymfonyFileType,
    entity: any,
  ): { content: string; fileName: string } {
    switch (type) {
      case "dto":
        return this.buildDto(entity);
      case "entity":
        return this.buildEntity(entity);
      default:
        throw new Error(`Type de fichier ${type} non supporté par la Factory.`);
    }
  }

  private static buildDto(entity: any) {
    const content = `<?php\n\nnamespace App\\Dto;\n\nclass ${entity.name}Dto\n{\n    // Propriétés DTO... \n}`;
    return { content, fileName: `${entity.name}Dto.php` };
  }

  private static buildEntity(entity: any) {
    const content = `<?php\n\nnamespace App\\Entity;\n\nuse Doctrine\\ORM\\Mapping as ORM;\n\n#[ORM\\Entity]\nclass ${entity.name}\n{\n    // Propriétés ORM... \n}`;
    return { content, fileName: `${entity.name}.php` };
  }
  static createEntity(entity: any): string {
    return `<?php\n\nnamespace App\\Entity;\n\n#[ORM\\Entity]\nclass ${entity.name} { ... }`;
  }

  static createDto(entity: any): string {
    return `<?php\n\nnamespace App\\Dto;\n\nclass ${entity.name}Dto { ... }`;
  }
}

/*  
import fs from 'node:fs';
import path from 'node:path';

export class SymfonyFileFactory {
  // On peut mettre en cache les templates pour ne pas les relire sur le disque à chaque fois
  private static templateCache: Record<string, string> = {};

  static createFromTemplate(type: string, data: any): string {
    const templatePath = path.join(__dirname, `../templates/symfony/${type}.php.tpl`);
    
    // Lecture (avec petit cache pour la performance)
    if (!this.templateCache[type]) {
      this.templateCache[type] = fs.readFileSync(templatePath, 'utf-8');
    }

    let content = this.templateCache[type];

    // Remplacement des variables simples
    content = content.replace(/{{NAME}}/g, data.name);
    
    // Génération complexe pour les propriétés
    const propertiesCode = data.fields.map((field: any) => {
        return `    #[ORM\\Column(type: '${field.type}')]\n    private $${field.name};`;
    }).join('\n\n');

    content = content.replace(/{{PROPERTIES}}/g, propertiesCode);

    return content;
  }
}




*/
