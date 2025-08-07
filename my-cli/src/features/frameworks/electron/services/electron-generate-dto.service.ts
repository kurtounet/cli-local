import { IEntityJson } from "@parsersMdj/models/entity-json.model";

/**
 * Generates an Electron DTO (Data Transfer Object).
 * @param entity The entity JSON object.
 */
export function generateElectronDto(entity: IEntityJson) {
  console.log(`Génération du DTO Electron pour: ${entity.namePascalCase}`);
}
