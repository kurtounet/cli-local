import { readFileSync } from "fs";
import {
  Schema,
  Entity,
  Property,
  IRelationship,
} from "../models/schema.model";
import { sqlToTypeScript } from "@utils/mapping";

export class MdjToJsonService {
  private allElements: any[] = [];

  parseMdjFile(filePath: string): any {
    try {
      const fileContent = readFileSync(filePath, "utf-8");
      const project = JSON.parse(fileContent);
      this.collectAllElements(project);
      return project;
    } catch (error: unknown) {
      console.error(
        `Error reading or parsing MDJ file: ${(error as Error).message}`,
      );
      throw error;
    }
  }

  transformToSchema(starUmlProject: any): Schema {
    const schema: Schema = {
      entities: [],
      relationships: [],
    };

    const erdEntities = this.findAllElements(
      starUmlProject.ownedElements,
      "ERDEntity",
    );

    for (const erdEntity of erdEntities) {
      const entity: Entity = {
        name: erdEntity.name,
        properties: [],
      };

      // Extract columns as properties
      if (erdEntity.columns) {
        for (const column of erdEntity.columns) {
          const property: Property = {
            name: column.name,
            type: this.mapErdTypeToSchemaType(column.type),
            isPrimaryKey: column.primaryKey || false,
            isForeignKey: column.foreignKey || false,
          };
          entity.properties.push(property);
        }
      }
      schema.entities.push(entity);

      // Extract relationships owned by the entity
      if (erdEntity.ownedElements) {
        const erdRelationships = this.findAllElements(
          erdEntity.ownedElements,
          "ERDRelationship",
        );
        for (const rel of erdRelationships) {
          const sourceEntity = this.getElementNameById(rel.end1.reference.$ref);
          const targetEntity = this.getElementNameById(rel.end2.reference.$ref);

          if (sourceEntity && targetEntity) {
            const relationship: IRelationship = {
              name: rel.name || "",
              sourceEntity: sourceEntity,
              targetEntity: targetEntity,
              sourceCardinality: rel.end1.cardinality || "",
              targetCardinality: rel.end2.cardinality || "",
            };
            schema.relationships.push(relationship);
          }
        }
      }
    }

    return schema;
  }

  private collectAllElements(element: any) {
    if (element && typeof element === "object") {
      if (element._id) {
        this.allElements.push(element);
      }
      for (const key in element) {
        if (Object.prototype.hasOwnProperty.call(element, key)) {
          this.collectAllElements(element[key]);
        }
      }
    }
  }

  private getElementNameById(id: string): string | undefined {
    const element = this.allElements.find((el) => el._id === id);
    return element ? element.name : undefined;
  }

  private findAllElements(elements: any[], type: string): any[] {
    let foundElements: any[] = [];
    for (const element of elements) {
      if (element._type === type) {
        foundElements.push(element);
      }
      if (element.ownedElements) {
        foundElements = foundElements.concat(
          this.findAllElements(element.ownedElements, type),
        );
      }
    }
    return foundElements;
  }

  private mapErdTypeToSchemaType(erdType: string): string {
    return sqlToTypeScript(erdType);
  }
}
