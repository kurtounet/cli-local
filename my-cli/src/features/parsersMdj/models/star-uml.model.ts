export interface IStarUmlProject {
  _type: string;
  _id: string;
  name: string;
  ownedElements: StarUmlElement[];
}

export interface StarUmlElement {
  _type: string;
  _id: string;
  name: string;
  ownedElements?: StarUmlElement[];
  attributes?: StarUmlAttribute[];
  operations?: StarUmlOperation[];
  literals?: StarUmlLiteral[];
  // Add other common properties as needed based on StarUML export
}

export interface StarUmlAttribute {
  _type: string;
  _id: string;
  name: string;
  type?: IStarUmlType;
  // Add other attribute properties
}

export interface StarUmlOperation {
  _type: string;
  _id: string;
  name: string;
  parameters?: StarUmlParameter[];
  // Add other operation properties
}

export interface StarUmlParameter {
  _type: string;
  _id: string;
  name: string;
  type?: IStarUmlType;
  direction?: string; // 'in', 'out', 'inout', 'return'
  // Add other parameter properties
}

export interface StarUmlLiteral {
  _type: string;
  _id: string;
  name: string;
  // Add other literal properties for enums
}

export interface IStarUmlType {
  _type: string;
  _id: string;
  name?: string; // For primitive types or references to other elements
  reference?: IStarUmlReference; // For references to other elements
}

export interface IStarUmlReference {
  $ref: string; // Reference to another element's _id
}
