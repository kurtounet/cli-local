import { IAppContext } from "@/types/context.interface.js";
import {
  IColumnJson,
  IEntityJson,
  IGetEntityJson,
  IRelation,
  IRelationsEntity,
  IRelationshipJson,
} from "../models/entity-json.model.js";
import {
  Iend,
  IERDColumn,
  IERDEntity,
  IERDModel,
  IERDProject,
  IERDRelationship,
} from "../models/mdj.model.js";
import { EMOJI } from "@/assets/messages.js";
import { sqlToTypeScript } from "./mapping.js";
import { sqlToDoctrineType } from "@/features/frameworks/symfony/utils/mapping.js";

export class ParserMDJService {
  readonly serviceName = "ParserMDJService";

  constructor(protected cli: IAppContext) {}

  init(): Promise<void> {
    return Promise.resolve();
  }
  async loadFile(path: string): Promise<string> {
    const file = await this.cli.fileSystem.readFileJson(path);
    return JSON.stringify(file, null, 2);
  }
  async parseMdjToJson(path: string): Promise<any> {
    const fileMdj = await this.loadFile(path);
    return await this.getEntities(fileMdj);
  }

  getEntities(mdjFile: string): Promise<IGetEntityJson> {
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
        this.cli.logger.error(
          `${EMOJI.error} Aucun ERDDataModel trouvé dans le fichier MDJ.`,
        );
        process.exit(1);
      }

      const entities: IERDEntity[] = erdModel.ownedElements;
      if (!Array.isArray(entities) || entities.length === 0) {
        this.cli.logger.error(
          `⏩ Pas d'entités trouvées dans ${erdModel.name}`,
        );
        process.exit(1);
      }
      // Création du dictionnaire des entités
      dictionaries = this.createdDictionaries(entities);
      return dictionaries;
    } catch (error) {
      this.cli.logger.error(
        `${EMOJI.error} Erreur lors de la récupération des entités : ${error}`,
      );
      process.exit(1);
    }
  }

  getColumns(entity: IERDEntity) {
    if (!Array.isArray(entity.columns)) {
      this.cli.logger.info(`⏩ ${entity.name} n'a pas de colonnes. Ignoré.`);
      return [];
    }

    let columnsJson: Array<IColumnJson> = [];

    entity.columns.forEach((column: IERDColumn) => {
      // vérifier si le type de la colonne n'est pas undifined ou null avant de l'ajouter à la relation
      if (column.type === undefined || column.type === null) {
        this.cli.logger.info(`⏩ ${column.name} n'a pas de type. Ignoré.`);
        column.type = "VARCHAR(255)";
      }
      columnsJson.push({
        id: column._id,
        name: column.name,
        typeSql: column.type.toLowerCase(),
        typeTypeScript: sqlToTypeScript(column.type),
        typeDoctrine: sqlToDoctrineType(column.type),
        parent: column._parent.$ref,
        primaryKey: Boolean(column.primaryKey),
        foreignKey: Boolean(column.foreignKey),
        length: column.length ? column.length : null,
        unique: Boolean(column.unique),
        nullable: Boolean(column.nullable),
        documentation: column.documentation,
        referenceTo: column.referenceTo ? column.referenceTo.$ref : "",
      });
    });

    return columnsJson;
  }

  createdDictionaries(entities: Array<IERDEntity>): IGetEntityJson {
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
          nameKebabCase: this.cli.case.toKebabCase(entity.name), // code-base
          namePascalCase: this.cli.case.toPascalCase(entity.name), // CodeBase
          nameCamelCase: this.cli.case.toCamelCase(entity.name), // codeBase
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
        let relationships: Array<IRelationshipJson> = this.getRelationships(
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
              relationName: `${relationship.source.inEntity}`,
              relationType: relationship.source.relationType,
              source: relationship.source.inEntity,
              foreignKeySource: relationship.target.columnName,
              columnNameSource: relationship.source.columnName,
              target: relationship.source.inverseSide,
              owner: false,
            };
            const relTarget: IRelation = {
              relationName: `${relationship.target.inEntity}`,
              relationType: relationship.target.relationType,
              source: relationship.target.inEntity,
              foreignKeySource: relationship.target.columnName,
              columnNameSource: relationship.source.columnName,
              target: relationship.target.inverseSide,
              owner: false,
            };

            entSource?.relationships.push(relSource);
            entTarget?.relationships.push(relTarget);
          }
        });

        // Création du dictionnaire des colonnes
        let columns: Array<IColumnJson> = this.getColumns(entity);
        columns.forEach((column: IColumnJson) => {
          dictionaryColumns.set(column.id, column);
        });

        let entityName = entity.name.toLowerCase().replace("&", "_");
        let entityJson: IEntityJson = {
          tableName: entityName, // code_base
          id: entity._id,
          parent: entity._parent.$ref,
          nameKebabCase: this.cli.case.toKebabCase(entityName), // code-base
          namePascalCase: this.cli.case.toPascalCase(entityName), // CodeBase
          nameCamelCase: this.cli.case.toCamelCase(entityName), // codeBase
          typeEntity: entity.name.includes("&") ? "pivot" : "entity",
          columns: columns || [],
          // relationships: relationships || [],
          relationships:
            dictionaryEntitiesRelationships.get(entityName)?.relationships ||
            [],
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

  getRelationType(
    source_cardinality: string,
    target_cardinality: string,
  ): string {
    const mapping: Record<string, string> = {
      "0..1-0..1": "OneToOne", // (optionnel)
      "1..1-1..1": "OneToOne", //(obligatoire)
      "0..*-0..1": "ManyToOne",
      "1..*-0..1": "ManyToOne", //(obligatoire)
      "0..*-1..1": "ManyToOne",
      "1..*-1..1": "ManyToOne", //(obligatoire)
      "0..1-0..*": "OneToMany",
      "1..1-0..*": "OneToMany",
      "0..*-0..*": "ManyToMany",
      "1..*-1..*": "ManyToMany",
    };
    source_cardinality ??= "1..1";
    target_cardinality ??= "1..1";

    const key = `${source_cardinality}-${target_cardinality}`;
    return mapping[key] || "Unknown Relation";
  }

  getInEntity(
    dictionaryEntitiesJson: Map<string, IEntityJson>,
    end: Iend,
  ): string {
    if (end.reference) {
      return (
        dictionaryEntitiesJson.get(end.reference.$ref || "")?.tableName || ""
      );
    }
    return "";
  }

  getRelationships(
    entity: IERDEntity,
    dictionaryEntitiesJson: Map<string, IEntityJson>,
  ): Array<IRelationshipJson> {
    if (!Array.isArray(entity.ownedElements)) {
      return [];
    }
    let relationshipsJson: Array<IRelationshipJson> = [];
    entity.ownedElements.forEach((r: IERDRelationship) => {
      let relation = {
        type: r._type,
        id: r._id,
        parent: r._parent.$ref,
        name: `${this.getInEntity(dictionaryEntitiesJson, r.end1)}--${this.getInEntity(dictionaryEntitiesJson, r.end2)}`,
        inEntity: entity.name.replace("&", "_"),

        source: {
          type: r.end1._type,
          id: r.end1._id,
          entityId: r.end1.reference.$ref,
          inEntity: this.getInEntity(dictionaryEntitiesJson, r.end1),
          columnName: r.end1.name || "id",
          cardinality: r.end1.cardinality || "1",
          parent: r.end1._parent ? r.end1._parent.$ref : "",
          relationType: this.getRelationType(
            r.end1.cardinality,
            r.end2.cardinality,
          ),
          inverseSide: this.getInEntity(dictionaryEntitiesJson, r.end2),
        },
        target: {
          type: r.end2._type,
          id: r.end2._id,
          entityId: r.end2.reference.$ref,
          inEntity: this.getInEntity(dictionaryEntitiesJson, r.end2),
          columnName: r.end2.name,
          cardinality: r.end2.cardinality || "1",
          parent: r.end2._parent ? r.end2._parent.$ref : "",
          relationType: this.getRelationType(
            r.end2.cardinality,
            r.end1.cardinality,
          ),
          inverseSide: this.getInEntity(dictionaryEntitiesJson, r.end1),
        },
      };

      relationshipsJson.push(relation);
    });
    return relationshipsJson;
  }
}
