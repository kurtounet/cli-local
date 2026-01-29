import { IEntityJson } from "../../../types";

export function angularExampleTemplate(entity: IEntityJson): string {
  return `// Fichier généré pour l'entité : ${entity.name}
export class ${entity.name} {
  constructor() {
    console.log("Hello from angular!");
  }
}`;
}
