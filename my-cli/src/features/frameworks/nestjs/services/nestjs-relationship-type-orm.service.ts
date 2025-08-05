import {
  IEntityJson,
  IRelationshipJson,
} from "@features/parsersMdj/interfaces/entity-json.model";
import {
  Iend,
  IERDEntity,
  IERDRelationship,
} from "@features/parsersMdj/interfaces/mdj.model";
import { snakeToCamel, snakeToPascal } from "@utils/convert";

export function getRelation(
  type: string,
  inEntity: string,
  toEntity: string,
): string[] {
  console.log(type, inEntity, toEntity);
  let tab = "";
  let s = "";
  let ps = "";
  let isArray = false;
  if (type === "OneToMany") {
    tab = "[]";
    s = "s";
    isArray = true;
  }
  if (type === "ManyToOne") {
    tab = "";
    ps = "s";
  }
  return [
    `@${type}(() => ${snakeToPascal(toEntity)}, (${snakeToCamel(toEntity)}) => ${snakeToCamel(toEntity)}.${snakeToCamel(inEntity)}${ps})`,
    `@ApiProperty({ type: () => ${snakeToPascal(toEntity)}, ${isArray ? "isArray: true" : ""}})`,
    `${snakeToCamel(toEntity)}${s}: ${snakeToPascal(toEntity)}${tab};`,
  ];
}

// export function getRelation(relation: IRelations): string[] {
//     let tab = "";
//     if (relation.relationType === "OneToMany") {
//         tab = "[]";
//     }
//     return [
//         `@${relation.relationType}(() => ${snakeToPascal(relation.relatedEntity)}, (${relation.relatedEntityVar}) => ${relation.relatedEntityVar}.${relation.inverseSide}${tab})`,
//         `${relation.relationName}: ${snakeToPascal(relation.relatedEntity)}${tab};`
//     ];
//   }

export function getRelationType(
  source_cardinality: string,
  target_cardinality: string,
): string {
  const mapping: Record<string, string> = {
    "0..1-0..1": "OneToOne (optionnel)",
    "1..1-1..1": "OneToOne (obligatoire)",
    "0..*-0..1": "ManyToOne",
    "1..*-0..1": "ManyToOne (obligatoire)",
    "0..*-1..1": "ManyToOne",
    "1..*-1..1": "ManyToOne (obligatoire)",
    "0..1-0..*": "OneToMany",
    "1..1-0..*": "OneToMany",
    "0..*-0..*": "ManyToMany",
    "1..*-1..*": "ManyToMany",
  };
  if (source_cardinality === undefined) {
    source_cardinality = "1..1";
  }
  if (target_cardinality === undefined) {
    target_cardinality = "1..1";
  }
  const key = `${source_cardinality}-${target_cardinality}`;
  return mapping[key] || "Unknown Relation";
}

export function getInEntity(
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

export function getinverseSide(): string {
  return "inverseSide";
}

export function getRelationShips(
  entity: IERDEntity,
  dictionaryEntitiesJson: Map<string, IEntityJson>,
): Array<IRelationshipJson> {
  if (!Array.isArray(entity.ownedElements)) {
    // console.log(`⏩ ${entity.name} n'a pas de relations. Ignoré.`);
    return [];
  }
  // let relationships: IERDRelationship[] = entity.ownedElements;
  let relationshipsJson: Array<IRelationshipJson> = [];

  entity.ownedElements.map((r: IERDRelationship) => {
    let propertiesTypeOrmColumn = ""; // JSON.stringify(column.propertiesTypeOrmColumn);

    relationshipsJson.push({
      type: r._type,
      id: r._id,
      parent: r._parent.$ref,
      name: `${getInEntity(dictionaryEntitiesJson, r.end1)}--${getInEntity(dictionaryEntitiesJson, r.end2)}`,
      inEntity: entity.name.replace("&", "_"),
      // propertiesTypeOrm: propertiesTypeOrmColumn,
      // referenceTo: column.referenceTo ? column.referenceTo.$ref : "",
      // relation: {
      //     relationName: `${getInEntity(dictionaryEntitiesJson, r.end1)}--${getInEntity(dictionaryEntitiesJson, r.end2)}`,
      //     relationType: getRelationType(
      //         r.end1.cardinality,
      //         r.end2.cardinality,
      //     ),
      //     source: entity.name.replace('&', '_'),
      //     target: getInEntity(dictionaryEntitiesJson, r.end2),
      // },
      source: {
        type: r.end1._type,
        id: r.end1._id,
        entityId: r.end1.reference.$ref,
        inEntity: getInEntity(dictionaryEntitiesJson, r.end1),
        columnName: r.end1.name || "id",
        cardinality: r.end1.cardinality || "1",
        parent: r.end1._parent ? r.end1._parent.$ref : "",
        relationType: getRelationType(r.end1.cardinality, r.end2.cardinality),
        inverseSide: getInEntity(dictionaryEntitiesJson, r.end2),
        // relation: getRelation(
        //     getRelationType(r.end1.cardinality, r.end2.cardinality),
        //     getInEntity(dictionaryEntitiesJson, r.end1),
        //     getInEntity(dictionaryEntitiesJson, r.end2),
        // ),
      },
      target: {
        type: r.end2._type,
        id: r.end2._id,
        entityId: r.end2.reference.$ref,
        inEntity: getInEntity(dictionaryEntitiesJson, r.end2),
        columnName: r.end2.name,
        cardinality: r.end2.cardinality || "1",
        parent: r.end2._parent ? r.end2._parent.$ref : "",
        relationType: getRelationType(r.end2.cardinality, r.end1.cardinality),
        inverseSide: getInEntity(dictionaryEntitiesJson, r.end1),
        // relation: getRelation(
        //     getRelationType(r.end2.cardinality, r.end1.cardinality),
        //     getInEntity(dictionaryEntitiesJson, r.end2),
        //     getInEntity(dictionaryEntitiesJson, r.end1),
        // ),
      },

      // relations: [r.end1, r.end2]
      // {
      //     relationType: "ManyToOne",
      //     relationName: "role",
      //     relatedEntity: "Role",
      //     relatedEntityVar: "role",
      //     inverseSide: "users"
      // },
      // {
      //     relationType: "OneToMany",
      //     relationName: "posts",
      //     relatedEntity: "Post",
      //     relatedEntityVar: "post",
      //     inverseSide: "user"
      // }
    });
  });

  return relationshipsJson;
}
