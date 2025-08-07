import { IEntityJson } from "@parsersMdj/models/entity-json.model";

export function generateReactInterface(entity: IEntityJson) {
  console.log(`Génération de l'interfacereact pour: ${entity.namePascalCase}`);
}
