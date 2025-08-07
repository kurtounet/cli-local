import { IEntityJson } from "../models/entity-json.model";
import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { join } from "path";
import { generateEntityFileContent } from "./symfony-generate-entity.service";
import { generateDtoFileContent } from "./symfony-generate-dto.service";

const OUTPUT_BASE_PATH = join(process.cwd(), "dist", "generated-symfony");

export function generateSymfonyModules(entities: IEntityJson[]): void {
  if (!entities) {
    console.error("No entities provided.");
    return;
  }

  console.log(`🚀 Starting Symfony module generation...`);

  for (const entity of entities) {
    if (entity.typeEntity === "pivot") {
      console.log(`⏩ Skipping pivot entity: ${entity.namePascalCase}`);
      continue;
    }

    const modulePath = join(OUTPUT_BASE_PATH, entity.namePascalCase);
    const dtoPath = join(modulePath, "Dto", "Request");
    const entityPath = join(modulePath, "Entity");

    mkdirSync(dtoPath, { recursive: true });
    mkdirSync(entityPath, { recursive: true });

    try {
      const entityContent = generateEntityFileContent(entity, entities);
      writeFileSync(
        join(entityPath, `${entity.namePascalCase}.php`),
        entityContent,
      );
      console.log(`✅  Generated entity for ${entity.namePascalCase}`);

      const dtoContent = generateDtoFileContent(entity);
      writeFileSync(
        join(dtoPath, `Create${entity.namePascalCase}Dto.php`),
        dtoContent.createDto,
      );
      writeFileSync(
        join(dtoPath, `Update${entity.namePascalCase}Dto.php`),
        dtoContent.updateDto,
      );
      console.log(`✅  Generated DTOs for ${entity.namePascalCase}`);
    } catch (error) {
      console.error(
        `❌ Error generating files for entity ${entity.namePascalCase}:`,
        error,
      );
    }
  }

  console.log("🎉 Symfony module generation complete!");
}

export function generateSymfonyModulesFromFile(jsonFilePath: string): void {
  try {
    const fileContent = readFileSync(jsonFilePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    const entities: IEntityJson[] = jsonData.entities;

    if (!entities) {
      console.error(`❌ No 'entities' array found in ${jsonFilePath}`);
      return;
    }

    generateSymfonyModules(entities);
  } catch (error) {
    console.error(`❌ Failed to load or parse ${jsonFilePath}:`, error);
    process.exit(1);
  }
}
