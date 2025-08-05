import { snakeToCamel, snakeToKebab, snakeToPascal } from "@utils/convert";
import {
  IColumnJson,
  IEntityJson,
  IRelation,
  IRelationsEntity,
  IRelationshipJson,
} from "../interfaces/entity-json.model";
import { IERDEntity, IERDModel, IERDProject } from "../interfaces/mdj.model";
import { getColumns } from "./get-colums.service";
import { getRelationships } from "./get-relationships.service";
import { IGetEntityJson } from "types/common";

/**
 * Parses the provided MDJ file to extract and return a dictionary of entities.
 *
 * @param mdjFile - The MDJ file content as a string.
 * @returns A dictionary containing the entities extracted from the MDJ file.
 *
 * @throws Will terminate the process if no `ERDDataModel` is found or if no entities are found within the model.
 * Logs an error and terminates the process if an error occurs during parsing.
 */

export function getEntities(mdjFile: string): IGetEntityJson {
  let dictionaries!: IGetEntityJson;
  const project: IERDProject = JSON.parse(mdjFile);
  try {
    let erdModel: IERDModel | undefined;
    for (const model of project.ownedElements) {
      if (model._type === "ERDDataModel") {
        erdModel = model;
        break;
      }
    }

    if (!erdModel) {
      console.error(`❌ Aucun ERDDataModel trouvé dans le fichier MDJ.`);
      process.exit(1);
    }

    const entities: IERDEntity[] = erdModel.ownedElements;
    if (!Array.isArray(entities) || entities.length === 0) {
      console.error(`⏩ Pas d'entités trouvées dans ${erdModel.name}`);
      process.exit(1);
    }
    // Création du dictionnaire des entités
    dictionaries = createdDictionaries(entities);

    return dictionaries;
  } catch (error) {
    console.error(`❌ Erreur lors de la récupération des entités :`, error);
    process.exit(1);
  }
}

/**
 * Crée un dictionnaire d'entités, de colonnes, de relations et de relations d'entités
 * à partir d'une liste d'entités.
 *
 * @param entities - La liste des entités.
 * @returns Un objet contenant les dictionnaires crées.
 */
export function createdDictionaries(
  entities: Array<IERDEntity>,
): IGetEntityJson {
  let dictionaryEntities: Array<IEntityJson> = [];
  let dictionaryEntitiesPivot: Array<IEntityJson> = [];
  let dictionaryEntitiesJson = new Map<string, IEntityJson>();
  let dictionaryColumns = new Map<string, IColumnJson>();
  let dictionaryRelationships = new Map<string, IRelation>();
  let dictionaryEntitiesRelationships = new Map<string, IRelationsEntity>();

  entities.forEach((entity: IERDEntity) => {
    if (!entity.name.includes("ERDDiagram")) {
      let entityJson: IEntityJson = {
        tableName: entity.name.replace("&", "_"), // code_base
        id: entity._id,
        parent: entity._parent.$ref,
        nameKebabCase: snakeToKebab(entity.name), // code-base
        namePascalCase: snakeToPascal(entity.name), // CodeBase
        nameCamelCase: snakeToCamel(entity.name), // codeBase
      };

      dictionaryEntitiesRelationships.set(entity.name.replace("&", "_"), {
        id: entity._id,
        relationships: [],
      });
      // Création du dictionnaire des entités
      dictionaryEntitiesJson.set(entity._id, entityJson);
    }
  });
  entities.forEach((entity: IERDEntity) => {
    if (!entity.name.includes("ERDDiagram")) {
      let relationships: Array<IRelationshipJson> = getRelationships(
        entity,
        dictionaryEntitiesJson,
      );
      relationships.forEach((relationship: IRelationshipJson) => {
        if (relationship) {
          let entSource = dictionaryEntitiesRelationships.get(
            relationship.source.inEntity,
          );
          let entTarget = dictionaryEntitiesRelationships.get(
            relationship.target.inEntity,
          );
          const relSource: IRelation = {
            relationType: relationship.source.relationType,
            source: relationship.source.inEntity,
            target: relationship.source.inverseSide,
            owner: false,
          };
          const relTarget: IRelation = {
            relationType: relationship.target.relationType,
            source: relationship.target.inEntity,
            target: relationship.target.inverseSide,
            owner: false,
          };

          entSource?.relationships.push(relSource);
          entTarget?.relationships.push(relTarget);
        }
      });

      // Création du dictionnaire des colonnes
      let columns: Array<IColumnJson> = getColumns(entity);
      columns.forEach((column: IColumnJson) => {
        dictionaryColumns.set(column.id, column);
      });

      let entityName = entity.name.toLowerCase().replace("&", "_");
      let entityJson: IEntityJson = {
        tableName: entityName, // code_base
        id: entity._id,
        parent: entity._parent.$ref,
        nameKebabCase: snakeToKebab(entityName), // code-base
        namePascalCase: snakeToPascal(entityName), // CodeBase
        nameCamelCase: snakeToCamel(entityName), // codeBase
        typeEntity: entity.name.includes("&") ? "pivot" : "entity",
        columns: columns || [],
        // relationships: relationships || [],
        relationships:
          dictionaryEntitiesRelationships.get(entityName)?.relationships || [],
      };
      dictionaryEntities.push(entityJson);
      dictionaryEntitiesJson.set(entity._id, entityJson);
    }
  });

  const json: IGetEntityJson = {
    entities: dictionaryEntities,
    "dictionary-columns": Object.fromEntries(dictionaryColumns),
    "dictionary-entities-json": Object.fromEntries(dictionaryEntitiesJson),
    "dictionary-entities-pivot": dictionaryEntitiesPivot,
    "dictionary-relationships": Object.fromEntries(dictionaryRelationships),
    "dictionary-entities-relationships": Object.fromEntries(
      dictionaryEntitiesRelationships,
    ),
  };

  return json;
}

/**
 * Converts an IERDEntity into an IEntityJson, which is a standardized format
 * for representing entities in JSON.
 *
 * @param entity The IERDEntity to convert.
 *
 * @returns The converted IEntityJson.
 */
export function generateJsonEntity(entity: IERDEntity) {
  let entityJson: IEntityJson = {
    tableName: entity.name.toLowerCase(), // code_base
    id: entity._id,
    parent: entity._parent.$ref,
    nameKebabCase: snakeToKebab(
      entity.name.toLowerCase().endsWith("_pivot")
        ? entity.name.toLowerCase().replace("_pivot", "")
        : entity.name.toLowerCase(),
    ), // code-base
    namePascalCase: snakeToPascal(entity.name.toLowerCase()).replace("&", "_"), // CodeBase
    nameCamelCase: snakeToCamel(entity.name.toLowerCase()), // codeBase
    // "columns": getColumns(entity) || [],
    // "relationships": getRelationships(entity) || [],
  };
  return entityJson;
}

/*
export function generateFileEntities(entities: IEntityJson[]) {
    return saveFileSync('./entities.json', JSON.stringify(entities, null, 4));

}
export function generateFileDictionaryEntities(entities: Map<string, IEntityJson>) {
    return saveFileSync('./dictionary-entities.json', JSON.stringify(Object.fromEntries(entities)));

}
export function generateFileDictionaryEntitiesJson(entities: Map<string, IEntityJson>) {
    return saveFileSync('./dictionary-entities-json.json', JSON.stringify(Object.fromEntries(entities)));

}
export function generateFileDictionaryColumns(columns: Map<string, IColumnJson>) {
    return saveFileSync('./dictionary-columns-json.json', JSON.stringify(Object.fromEntries(columns)));

}
export function generateFileDictionaryRelationships(Relationships: Map<string, IRelationshipJson>) {
    return saveFileSync('./dictionary-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));

}
export function generateFileDictionaryEntitiesRelationships(Relationships: Map<string, Object>) {
    return saveFileSync('./dictionary-entities-Relationships-json.json', JSON.stringify(Object.fromEntries(Relationships)));
}
*/
