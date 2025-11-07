export interface Iref {
  $ref: string;
}

export interface Iend1 {
  type: string; // son type ex : "ERDRelationshipEnd"
  id: string; // son id ex : "AAAAAAGVUotgwNQTeI4="
  name: string; // son nom ex : "id" -> colonne dans l'ERDEntity à la quelle il est lié
  parent?: string; // AAAAAAGVUotgwNQQqho= -> _id du ERDRelationship au quel il appartient = "AAAAAAGVUotgwNQQqho="
  reference?: string; // "AAAAAAGVUotgv9MWc3M=" ->  _id de ERDEntity = "AAAAAAGVUotgv9MWc3M=" => "comment"
  inEntity?: string; // "AAAAAAGVUotgv9MWc3M=" ->  _id de ERDEntity = "AAAAAAGVUotgv9MWc3M=" => "comment"
  cardinality?: string; // "0..*"
  relationType: string;
  relationName: string;
  relatedEntity: string;
  relatedEntityCol: string;
  inverseSide: string;
}

export interface IendJson {
  type: string; // son type ex : "ERDRelationshipEnd"
  id: string; // son id ex : "AAAAAAGVUotgwNQUZsI="
  parent?: string; // "AAAAAAGVUotgwNQQqho=" -> _id du ERDRelationship au quel il appartient = "AAAAAAGVUotgwNQQqho="
  columnName: string; // son nom ex : "task_id" -> colonne dans l'ERDEntity
  entityId: string; // "AAAAAAGVUotgwNOvYZU=" ->  _id de ERDEntity = "AAAAAAGVUotgwNOvYZU=" => "task"
  // "AAAAAAGVUotgwNOvYZU=" ->  _id de ERDEntity = "AAAAAAGVUotgwNOvYZU=" => "task"
  cardinality: string | null; // "0..*"
  inEntity: string;
  relationType: string;
  inverseSide: string;
  // relation: string[];
}

export interface IRelationsEntity {
  id: string;
  relationships: Array<IRelation>;
}

export interface IRelation {
  relationName: string;
  relationType: string;
  source: string;
  target: string;
  owner: boolean;
}

export interface IRelationshipJson {
  type: string;
  id: string;
  parent?: string;
  name?: string;
  inEntity: string;
  // relation: IRelation;
  // propertiesTypeOrm?: string;
  source: IendJson;
  target: IendJson;
}

export interface IColumnJson {
  id: string;
  name: string;
  typeSql: string;
  typeTypeScript: string;
  typeORM?: string;
  typeDoctrine: string;
  parent: string | null;
  length: string | null;
  maxlength?: number | null;
  minLength?: number | null;
  precision?: number | null | undefined;
  isEmpty?: boolean | null;
  unique: boolean;
  nullable: boolean;
  primaryKey: boolean;
  foreignKey: boolean;
  documentation?: string | null;
  description?: string | null;
  referenceTo?: string;
  propsEntiy?: string[];
  validations?: string[];
}

// interface IRelationship {
//   name: string; // Nom de la relation
//   sourceEntity: string; // Entité source
//   targetEntity: string; // Entité cible
//   cardinality: '1-1' | '1-N' | 'N-N'; // Cardinalité de la relation
//   attributes?: { [key: string]: string }; // Attributs spécifiques à la relation (ex: date, statut, etc.)
// }
// const relationships: IERDRelationship[] = [
//   {
//     name: "Possède",
//     sourceEntity: "Client",
//     targetEntity: "Voiture",
//     cardinality: "1-N",
//     attributes: {
//       dateAchat: "string",
//     },
//   },
//   {
//     name: "TravaillePour",
//     sourceEntity: "Employé",
//     targetEntity: "Entreprise",
//     cardinality: "N-N",
//   },
// ];

export interface IEntityJson {
  // _type: string;
  // _id: string;
  // _parent: I$ref;
  tableName: string;
  id: string;
  parent: string;
  nameKebabCase: string;
  namePascalCase: string;
  nameCamelCase: string;
  controllerName?: string;
  moduleName?: string;
  typeEntity?: string;
  serviceName?: string;
  varServiceName?: string;
  createDtoName?: string;
  updatreDtoName?: string;
  interfaceName?: string;
  documentation?: string;
  columns?: IColumnJson[];
  // relationships?: IRelationshipJson[];
  relationships?: IRelation[];
}

// export interface Iinterface {
//   _type: string;
//   _id: string;
//   _parent: I$ref;
//   name: string;
//   ownedElements: IEntity[];
// }
// export interface IProject {
//   _type: string;
//   _id: string;
//   name: string;
//   ownedElements: Iinterface[];
// }
export interface IProjectJson {
  name: string;
  entities: IEntityJson[];
  dictEntities: Map<string, IEntityJson>;
  dictColumns: Map<string, IColumnJson>;
  dictRelationships: Map<string, IRelationshipJson>;
}
