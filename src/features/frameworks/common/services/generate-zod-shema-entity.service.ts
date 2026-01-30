import { I } from "@faker-js/faker/dist/airline-CHFQMWko";
import {
  IColumnJson,
  IEntityJson,
} from "@features/parsersMdj/models/entity-json.model";
import { snakeToCamel } from "@utils/convert";

export function generateZodShemaEntityService(entity: IEntityJson) {
  const properties =
    entity.columns
      ?.map(
        (col: IColumnJson) =>
          `  ${snakeToCamel(col.name)}: z${ZodProperty(col)}`,
      )
      .join("\n") || "";
  return `import z from "zod";

export const ${entity.namePascalCase}Schema = z.object({
    ${properties}
})

export const insert${entity.namePascalCase}Schema = ${entity.namePascalCase}Schema.omit(
    {
        id: true,
        //createdAt: true,
        //updatedAt: true
    }
)
export const update${entity.namePascalCase}Schema = ${entity.namePascalCase}Schema.partial()

export type Z${entity.namePascalCase} = z.infer<typeof ${entity.namePascalCase}Schema>;
export type Z${entity.namePascalCase}Insert = z.infer<typeof insert${entity.namePascalCase}Schema>;
export type Z${entity.namePascalCase}Update = z.infer<typeof update${entity.namePascalCase}Schema>;
`;
}
export function ZodProperty(col: IColumnJson) {
  let zodProperty = "";
  const colTypeTypeScript = col.typeTypeScript.toLowerCase();
  // Base type mapping
  if (colTypeTypeScript === "number") {
    zodProperty += `.number()`;
  } else if (colTypeTypeScript === "date") {
    zodProperty += `.date()`;
  } else if (colTypeTypeScript === "datetime") {
    zodProperty += `.date()`;
  } else if (colTypeTypeScript === "time") {
    zodProperty += `.date()`;
  } else if (colTypeTypeScript === "email") {
    zodProperty += `.string().email()`;
  } else if (colTypeTypeScript === "url") {
    zodProperty += `.string().url()`;
  } else if (colTypeTypeScript === "phone") {
    zodProperty += `.string().regex(/^\\+[1-9]{1}[0-9]{3,14}$/)`;
  } else if (colTypeTypeScript === "string") {
    zodProperty += `.string()`; // Fixed: was z.number()
  } else if (colTypeTypeScript === "boolean") {
    zodProperty += `.boolean()`; // Fixed: was z.number()
  } else if (colTypeTypeScript === "record<string, any>") {
    zodProperty += `.record(z.string(), z.string())`; // https://zod.dev/api#records
  } else {
    // Default fallback for unknown types
    zodProperty += `.string()`;
  }

  // Apply constraints based on column properties

  // Length constraints for strings
  if (
    colTypeTypeScript === "string" ||
    colTypeTypeScript === "email" ||
    colTypeTypeScript === "url" ||
    colTypeTypeScript === "phone"
  ) {
    if (col.minLength && col.minLength > 0) {
      zodProperty += `.min(${col.minLength})`;
    }
    if (col.maxlength && col.maxlength > 0) {
      zodProperty += `.max(${col.maxlength})`;
    } else if (col.length) {
      // Parse length if it's a string
      const lengthNum = parseInt(col.length);
      if (!isNaN(lengthNum)) {
        zodProperty += `.max(${lengthNum})`;
      }
    }
  }

  // Number constraints
  if (colTypeTypeScript === "number") {
    if (col.minLength && col.minLength > 0) {
      zodProperty += `.min(${col.minLength})`;
    }
    if (col.maxlength && col.maxlength > 0) {
      zodProperty += `.max(${col.maxlength})`;
    }
  }

  // Handle nullable - this should come at the end of the chain
  if (col.nullable) {
    zodProperty += `.nullable()`;
  }

  // Optional vs required handling
  if (!col.nullable && !col.primaryKey) {
    // Field is required (non-nullable, non-primary key)
    // No additional modifier needed as z.string(), z.number() etc. are required by default
  }

  // Add trailing comma
  zodProperty += ",";

  return zodProperty;
}

/*
export function ZodProperty(col: IColumnJson) {
  
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
  
  let zodProperty = '';
  
  // Base type mapping
  if (colTypeTypeScript === "number") {
    zodProperty += `  ${col.name}: z.number()`;
  } else if (colTypeTypeScript === "date") {
    zodProperty += `  ${col.name}: z.date()`;
  } else if (colTypeTypeScript === "datetime") {
    zodProperty += `  ${col.name}: z.date()`;
  } else if (colTypeTypeScript === "time") {
    zodProperty += `  ${col.name}: z.date()`;
  } else if (colTypeTypeScript === "email") {
    zodProperty += `  ${col.name}: z.string().email()`;
  } else if (colTypeTypeScript === "url") {
    zodProperty += `  ${col.name}: z.string().url()`;
  } else if (colTypeTypeScript === "phone") {
    zodProperty += `  ${col.name}: z.string().regex(/^\\+[1-9]{1}[0-9]{3,14}$/)`;
  } else if (colTypeTypeScript === "string") {
    zodProperty += `  ${col.name}: z.string()`; // Fixed: was z.number()
  } else if (colTypeTypeScript === "boolean") {
    zodProperty += `  ${col.name}: z.boolean()`; // Fixed: was z.number()
  } else {
    // Default fallback for unknown types
    zodProperty += `  ${col.name}: z.string()`;
  }
  
  // Apply constraints based on column properties
  
  // Length constraints for strings
  if (colTypeTypeScript === "string" || colTypeTypeScript === "email" || 
      colTypeTypeScript === "url" || colTypeTypeScript === "phone") {
    if (col.minLength && col.minLength > 0) {
      zodProperty += `.min(${col.minLength})`;
    }
    if (col.maxlength && col.maxlength > 0) {
      zodProperty += `.max(${col.maxlength})`;
    } else if (col.length) {
      // Parse length if it's a string
      const lengthNum = parseInt(col.length);
      if (!isNaN(lengthNum)) {
        zodProperty += `.max(${lengthNum})`;
      }
    }
  }
  
  // Number constraints
  if (colTypeTypeScript === "number") {
    if (col.minLength && col.minLength > 0) {
      zodProperty += `.min(${col.minLength})`;
    }
    if (col.maxlength && col.maxlength > 0) {
      zodProperty += `.max(${col.maxlength})`;
    }
  }
  
  // Handle nullable - this should come at the end of the chain
  if (col.nullable) {
    zodProperty += `.nullable()`;
  }
  
  // Optional vs required handling
  if (!col.nullable && !col.primaryKey) {
    // Field is required (non-nullable, non-primary key)
    // No additional modifier needed as z.string(), z.number() etc. are required by default
  }
  
  // Add trailing comma
  zodProperty += ',';
  
  return zodProperty;
}*/
