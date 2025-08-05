## Sujet 3 : Parsing des fichiers `.mdj` (StarUML)

### 1. Objectif

Le cœur de la CLI réside dans sa capacité à comprendre la structure d'un projet définie dans un fichier `.mdj` de StarUML. Cette section détaille le processus de parsing de ce fichier pour en extraire un modèle de données simplifié et exploitable.

### 2. Le format `.mdj`

Un fichier `.mdj` est en réalité un fichier JSON qui décrit tous les éléments d'un projet UML, y compris les diagrammes, les classes, les attributs, les opérations et les relations. La structure peut être complexe et imbriquée. Notre objectif est de la transformer en une structure plus simple et plus facile à manipuler.

### 3. Le modèle de données simplifié (`schema.model.ts`)

Nous allons définir une série d'interfaces TypeScript pour représenter notre modèle de données simplifié. Ce sera la sortie de notre processus de parsing.

*   **Lieu :** `cli/features/parsersMdj/interfaces/schema.model.ts`

```typescript
export interface Attribute {
  name: string;
  type: string;
  isPrimaryKey?: boolean;
  isForeignKey?: boolean;
  isUnique?: boolean;
  isRequired?: boolean;
  // ... autres contraintes
}

export interface Relation {
  type: 'one-to-one' | 'one-to-many' | 'many-to-one' | 'many-to-many';
  targetEntity: string;
  owningSide: boolean; // Indique si cette entité est propriétaire de la relation
}

export interface Entity {
  name: string;
  attributes: Attribute[];
  relations: Relation[];
}

export interface Schema {
  entities: Entity[];
}
```

### 4. Le service de parsing (`mdjToJson.ts`)

Ce service contiendra la logique pour lire le fichier `.mdj`, le parcourir et le transformer en notre `Schema` simplifié.

*   **Lieu :** `cli/features/parsersMdj/services/mdjToJson.ts`

```typescript
import * as fs from 'fs-extra';
import { Schema, Entity, Attribute, Relation } from '../interfaces/schema.model';
// Importer les interfaces du modèle StarUML (à définir)
import { StarUMLProject, UMLClass, UMLAttribute, UMLAssociation } from '../interfaces/starUml.model';

export async function mdjToJson(filePath: string): Promise<Schema> {
  const mdjContent: StarUMLProject = await fs.readJson(filePath);

  const umlPackage = mdjContent.ownedElements.find(el => el._type === 'UMLPackage');
  if (!umlPackage) {
    throw new Error('Aucun package UML trouvé dans le fichier .mdj');
  }

  const classes = umlPackage.ownedElements.filter(el => el._type === 'UMLClass') as UMLClass[];
  const associations = umlPackage.ownedElements.filter(el => el._type === 'UMLAssociation') as UMLAssociation[];

  const entities: Entity[] = classes.map(cls => {
    const attributes: Attribute[] = (cls.attributes || []).map(attr => {
      // Logique pour mapper les types, contraintes, etc.
      return {
        name: attr.name,
        type: mapType(attr.type), // fonction de mapping de type à créer
        // ... autres propriétés
      };
    });

    const relations: Relation[] = associations
      .filter(assoc => assoc.end1.reference.$ref === cls._id || assoc.end2.reference.$ref === cls._id)
      .map(assoc => {
        // Logique complexe pour déterminer le type de relation et le propriétaire
        // ...
        return { /* ... */ };
      });

    return {
      name: cls.name,
      attributes,
      relations,
    };
  });

  return { entities };
}

function mapType(starUmlType: string | any): string {
  // Logique pour mapper les types de StarUML (ex: "Integer") vers des types TypeScript (ex: "number")
  if (typeof starUmlType === 'string') {
      switch (starUmlType.toLowerCase()) {
          case 'integer':
          case 'number':
              return 'number';
          case 'string':
          case 'varchar':
          case 'text':
              return 'string';
          case 'boolean':
              return 'boolean';
          case 'date':
          case 'datetime':
              return 'Date';
          default:
              return 'any';
      }
  }
  return 'any';
}

```

### 5. Les interfaces StarUML (`starUml.model.ts`)

Il est également nécessaire de définir des interfaces pour typer le JSON brut de StarUML. Celles-ci peuvent être complexes et ne sont qu'partiellement représentées ici.

*   **Lieu :** `cli/features/parsersMdj/interfaces/starUml.model.ts`

```typescript
// Ceci est une représentation très simplifiée.
// Il faudrait l'étendre pour couvrir tous les cas nécessaires.
export interface StarUMLElement {
  _type: string;
  _id: string;
  name: string;
  ownedElements: StarUMLElement[];
}

export interface StarUMLProject extends StarUMLElement {}

export interface UMLPackage extends StarUMLElement {}

export interface UMLClass extends StarUMLElement {
  attributes: UMLAttribute[];
}

export interface UMLAttribute extends StarUMLElement {
  type: string | { $ref: string };
  // ... autres propriétés
}

export interface UMLAssociation extends StarUMLElement {
  end1: UMLAssociationEnd;
  end2: UMLAssociationEnd;
}

export interface UMLAssociationEnd {
  reference: { $ref: string };
  multiplicity: string; // ex: "1", "0..*", "*"
}
```
