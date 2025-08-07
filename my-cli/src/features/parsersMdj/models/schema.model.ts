export interface Schema {
  entities: Entity[];
  relationships: IRelationship[];
}

export interface Entity {
  name: string;
  properties: Property[];
}

export interface Property {
  name: string;
  type: string;
  isPrimaryKey: boolean;
  isForeignKey: boolean;
}

export interface IRelationship {
  name: string;
  sourceEntity: string;
  targetEntity: string;
  sourceCardinality: string;
  targetCardinality: string;
}
