import { IEntityJson } from "@interfaces/entity-json.model";

/**
 * Generates an Angular entity.
 * @param entity The entity JSON object.
 */
export function angularGenerateEntity(entity: IEntityJson) {
  // Logique de génération d'entité Angular ici
  console.log(`Génération de l'entité Angular pour: ${entity.namePascalCase}`);
  // Exemple: Écrire le contenu de l'entité dans un fichier
  // const content = `export class ${entity.namePascalCase} {\n  //   // ... propriétés basées sur entity.columns\n  // }`;
  // saveFileSync(`path/to/angular/entities/${entity.nameKebabCase}.ts`, content);
}
