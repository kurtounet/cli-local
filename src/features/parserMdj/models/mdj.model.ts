export interface I$ref {
  $ref: string;
}

export interface Iend1 {
  // relation : "comment-task",
  _type: string; // son type ex : "ERDRelationshipEnd"
  _id: string; // son id ex : "AAAAAAGVUotgwNQTeI4="
  _parent: I$ref; // AAAAAAGVUotgwNQQqho= -> _id du ERDRelationship au quel il appartient = "AAAAAAGVUotgwNQQqho="
  name: string; // son nom ex : "id"
  reference: I$ref; // "AAAAAAGVUotgv9MWc3M=" ->  _id de ERDEntity = "AAAAAAGVUotgv9MWc3M=" => "comment"
  cardinality: string; // "0..*"
}

export interface Iend {
  _type: string; // son type ex : "ERDRelationshipEnd"
  _id: string; // son id ex : "AAAAAAGVUotgwNQUZsI="
  _parent: I$ref; // "AAAAAAGVUotgwNQQqho=" -> _id du ERDRelationship au quel il appartient = "AAAAAAGVUotgwNQQqho="
  name: string; // son nom ex : "task_id" -> colonne dans l'ERDEntity
  reference: I$ref; // "AAAAAAGVUotgwNOvYZU=" ->  _id de ERDEntity = "AAAAAAGVUotgwNOvYZU=" => "task"
  cardinality: string; // "0..*"
}

export interface IERDColumn {
  _type: string;
  _id: string;
  _parent: I$ref;
  name: string;
  type: string;
  length: string;
  unique: boolean;
  nullable: boolean;
  primaryKey: boolean;
  foreignKey: boolean;
  documentation: string;
  referenceTo: I$ref;
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

export interface IERDRelationship {
  _type: string; //
  _id: string; //
  _parent: I$ref; //
  name: string; //
  end1: Iend; //
  end2: Iend; //
}

export interface IERDEntity {
  _type: string;
  _id: string;
  _parent: I$ref;
  name: string;
  columns: IERDColumn[];
  ownedElements: IERDRelationship[];
}

export interface IERDModel {
  _type: string;
  _id: string;
  _parent: I$ref;
  name: string;
  ownedElements: IERDEntity[];
}

export interface IERDProject {
  _type: string;
  _id: string;
  name: string;
  ownedElements: IERDModel[];
}
