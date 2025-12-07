import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { faker, fakerFR, fr } from "@faker-js/faker";
import { snakeToCamel } from "@utils/convert";
// ------------------- Interfaces -------------------
// export interface IColumnJson {
//   name: string;
//   type: string;
//   length?: number;
//   min?: number;
//   max?: number;
//   enumValues?: string[];
// }
export interface IColumnJson {
  id: string;
  name: string;
  typeSql: string;
  typeTypeScript: string;
  typeORM?: string;
  typeDoctrine: string;
  parent: string | null;
  length: string | null;
  maxLength?: number | null;
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
  enumValues?: string[];
}
// export interface IEntityJson {
//   name: string;
//   columns: IColumnJson[];
// }
function formatDate(time: string) {
  return `new Date('${time}')`;
}
// ------------------- Générateur de valeurs -------------------
export function generateValue(column: IColumnJson): any {
  const { typeSql, length, minLength, maxLength, enumValues, name } = column;
  if (name === "id") return null;
  switch (typeSql.toLowerCase()) {
    // --- Nombres entiers ---
    case "tinyint":
    case "smallint":
    case "mediumint":
    case "int":
    case "integer":
    case "bigint": {
      const minValue = minLength ?? 0;
      const maxValue = maxLength ?? 100;
      return faker.number.int({ min: minValue, max: maxValue });
    }

    // --- Nombres décimaux ---
    case "decimal":
    case "dec":
    case "numeric":
    case "fixed":
    case "float":
    case "double":
    case "real": {
      const minValue = minLength ?? -1000;
      const maxValue = maxLength ?? 1000;
      return faker.number.float({
        min: minValue,
        max: maxValue,
        fractionDigits: 2,
      });
    }

    // --- Booléen ---
    case "boolean":
    case "bool":
      return faker.datatype.boolean();

    // --- Date & temps ---
    case "date":
      return formatDate(faker.date.past().toISOString().split("T")[0]); //faker.date.past().toISOString().split("T")[0];
    case "datetime":
    case "timestamp":
      return formatDate(faker.date.recent().toISOString());
    case "time":
      return formatDate(
        faker.date.recent().toISOString().split("T")[1].split("Z")[0],
      );
    case "year":
      return formatDate(faker.date.past().getFullYear().toString());

    // --- Chaînes ---
    case "char":
    case "varchar":
      return `'${faker.string.alpha({ length: maxLength ?? 10 })}'`;
    case "tinytext":
    case "text":
    case "mediumtext":
    case "longtext":
      return `'${faker.lorem.sentence()}'`;
    case "binary":
    case "varbinary":
    case "tinyblob":
    case "blob":
    case "mediumblob":
    case "longblob":
      // return `'${faker.string.alpha({ length: maxLength ?? 10 })}'`;
      return faker.string.hexadecimal({ length: maxLength ?? 16 });
    case "enum":
      if (Array.isArray(enumValues) && enumValues.length > 0) {
        return faker.helpers.arrayElement(enumValues);
      }
      return null;
    case "set":
      if (Array.isArray(enumValues) && enumValues.length > 0) {
        return faker.helpers.arrayElements(enumValues);
      }
      return null;

    // --- JSON ---
    case "json":
      return JSON.stringify(
        {
          example: faker.lorem.word(),
          valeur: faker.lorem.word(),
          type: faker.lorem.word(),
        },
        null,
        2,
      );

    // --- Spatial (on génère du GeoJSON-like) ---
    case "geometry":
    case "point":
      return {
        type: "Point",
        coordinates: [faker.location.longitude(), faker.location.latitude()],
      };
    case "linestring":
      return {
        type: "LineString",
        coordinates: [
          [faker.location.longitude(), faker.location.latitude()],
          [faker.location.longitude(), faker.location.latitude()],
        ],
      };
    case "polygon":
      return {
        type: "Polygon",
        coordinates: [
          [
            [faker.location.longitude(), faker.location.latitude()],
            [faker.location.longitude(), faker.location.latitude()],
            [faker.location.longitude(), faker.location.latitude()],
            [faker.location.longitude(), faker.location.latitude()],
          ],
        ],
      };

    default:
      return null;
  }

  // switch (typeSql.toLowerCase()) {
  //   case "int":
  //   case "smallint":
  //   case "integer": {
  //     const minValue = minLength ?? 1;
  //     const maxValue = maxLength ?? 1000;
  //     return faker.number.int({ min: minValue, max: maxValue });
  //   }

  //   case "float":
  //   case "double":
  //   case "decimal": {
  //     const minValue = minLength ?? 0;
  //     const maxValue = maxLength ?? 1000;
  //     return faker.number.float({ min: minValue, max: maxValue, fractionDigits: 2 });
  //   }

  //   case "boolean":
  //     return faker.datatype.boolean();

  //   case "date":
  //   case "datetime":
  //     return faker.date.recent().toISOString();

  //   case "enum":
  //     if (Array.isArray(enumValues) && enumValues.length > 0) {
  //       return faker.helpers.arrayElement(enumValues);
  //     }
  //     return null;

  //   case "varchar":
  //   case "text": {
  //     const len = length ?? 12;
  //     // Exemple : adapter selon le nom de la colonne
  //     if (name.toLowerCase().includes("email")) {
  //       return faker.internet.email();
  //     }
  //     if (name.toLowerCase().includes("name")) {
  //       return faker.person.fullName();
  //     }
  //     if (name.toLowerCase().includes("phone")) {
  //       return faker.phone.number();
  //     }
  //     if (name.toLowerCase().includes("city")) {
  //       return faker.location.city();
  //     }
  //     if (name.toLowerCase().includes("country")) {
  //       return faker.location.country();
  //     }
  //     if (name.toLowerCase().includes("address")) {
  //       return faker.location.streetAddress();
  //     }
  //     return faker.string.alphanumeric(len);
  //   }

  //   default:
  //     return null;
  // }
}

// ------------------- Générateur d'objet -------------------
export function item(
  entity: IEntityJson,
  exclude: string[],
): Record<string, any> {
  if (!entity.columns) {
    return {};
  }
  const row = entity.columns.reduce(
    (acc, column) => {
      if (!exclude.includes(column.name)) {
        acc[snakeToCamel(column.name)] = generateValue(column);
      }

      return acc;
    },
    {} as Record<string, any>,
  );

  return row;
}
/*
  return Object.fromEntries(
    entity.columns.map((column) => {

      return {
        [snakeToCamel(column.name)]: generateValue(column),
      };
    } 
  );)
  ;
}
*/
