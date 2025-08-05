import { Iend, IERDEntity, IERDRelationship } from "../interfaces/mdj.model";
import {
  IEntityJson,
  IRelationshipJson,
} from "../interfaces/entity-json.model";

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
  source_cardinality ??= "1..1";
  target_cardinality ??= "1..1";

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

export function getRelationships(
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
      name: `${getInEntity(dictionaryEntitiesJson, r.end1)}--${getInEntity(dictionaryEntitiesJson, r.end2)}`,
      inEntity: entity.name.replace("&", "_"),

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
      },
    };

    relationshipsJson.push(relation);
  });
  return relationshipsJson;
}
