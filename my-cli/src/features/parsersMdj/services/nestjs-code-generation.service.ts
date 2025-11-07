import { IEntityJson } from "../models/entity-json.model";
import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { join } from "path";
import { generateEntityFileContent } from "./nestjs-generate-entity.service";
import { generateDtoFileContent } from "./nestjs-generate-dto.service";
import { generateInterfaceFileContent } from "./nestjs-generate-interface.service";
import { logInfo } from "@utils/logger";

const OUTPUT_BASE_PATH = join(process.cwd(), "dist", "generated-nestjs");

/**
 * Orchestrates the generation of all NestJS files for a given set of entities.
 * @param entities - An array of entity definitions from the parsed JSON.
 */
export function generateNestJsModules(entities: IEntityJson[]): void {
  if (!entities) {
    console.error("No entities provided.");
    return;
  }

  console.info(`🚀 Starting NestJS module generation...`);

  for (const entity of entities) {
    if (entity.typeEntity === "pivot") {
      console.info(`⏩ Skipping pivot entity: ${entity.namePascalCase}`);
      continue;
    }

    const modulePath = join(OUTPUT_BASE_PATH, entity.nameKebabCase);

    // Create directories
    const dtoPath = join(modulePath, "dto");
    const entitiesPath = join(modulePath, "entities");
    const interfacesPath = join(modulePath, "interfaces");

    mkdirSync(dtoPath, { recursive: true });
    mkdirSync(entitiesPath, { recursive: true });
    mkdirSync(interfacesPath, { recursive: true });

    // Generate files
    try {
      const entityContent = generateEntityFileContent(entity, entities);
      writeFileSync(
        join(entitiesPath, `${entity.nameKebabCase}.entity.ts`),
        entityContent,
      );
      console.info(`✅  Generated entity for ${entity.namePascalCase}`);

      const dtoContent = generateDtoFileContent(entity);
      writeFileSync(
        join(dtoPath, `create-${entity.nameKebabCase}.dto.ts`),
        dtoContent.createDto,
      );
      writeFileSync(
        join(dtoPath, `update-${entity.nameKebabCase}.dto.ts`),
        dtoContent.updateDto,
      );
      writeFileSync(
        join(dtoPath, `response-${entity.nameKebabCase}.dto.ts`),
        dtoContent.createDto,
      );
      console.info(`✅  Generated DTOs for ${entity.namePascalCase}`);

      const interfaceContent = generateInterfaceFileContent(entity, entities);
      writeFileSync(
        join(interfacesPath, `${entity.nameKebabCase}.interface.ts`),
        interfaceContent,
      );
      logInfo(`✅  Generated interface for ${entity.namePascalCase}`);
    } catch (error) {
      console.error(
        `❌ Error generating files for entity ${entity.namePascalCase}:`,
        error,
      );
    }
  }

  logInfo("🎉 NestJS module generation complete!");
}

/**
 * Loads entities from a JSON file and starts the generation process.
 * This would typically be called from a CLI command.
 * @param jsonFilePath - The absolute path to the JSON file.
 */
export function generateNestJsModulesFromFile(jsonFilePath: string): void {
  try {
    const fileContent = readFileSync(jsonFilePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    const entities: IEntityJson[] = jsonData.entities;

    if (!entities) {
      console.error(`❌ No 'entities' array found in ${jsonFilePath}`);
      return;
    }

    generateNestJsModules(entities);
  } catch (error) {
    console.error(`❌ Failed to load or parse ${jsonFilePath}:`, error);
    process.exit(1);
  }
}

// To run this script directly for testing, you can uncomment the following lines
// and execute with `ts-node`:
/*
import { join } from 'path';
generateNestJsModulesFromFile(
  join(process.cwd(), 'src/features/parsersMdj/ressource/shopify.json')
);
*/
