import { IEntityJson } from "../models/entity-json.model";
import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { join } from "path";
import { generateEntityFileContent } from "./symfony-generate-entity.service";
import { generateDtoFileContent } from "./symfony-generate-dto.service";
import { logError, logInfo } from "@utils/logger";
import { EMOJI } from "@constants/messages";

const OUTPUT_BASE_PATH = join(process.cwd(), "dist", "generated-symfony");

export function generateSymfonyModules(entities: IEntityJson[]): void {
  if (!entities) {
    logError("No entities provided.");
    return;
  }

  logInfo(`🚀 Starting Symfony module generation...`);

  for (const entity of entities) {
    if (entity.typeEntity === "pivot") {
      logInfo(`⏩ Skipping pivot entity: ${entity.namePascalCase}`);
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
      logInfo(`✅  Generated entity for ${entity.namePascalCase}`);

      const dtoContent = generateDtoFileContent(entity);
      writeFileSync(
        join(dtoPath, `Create${entity.namePascalCase}Dto.php`),
        dtoContent.createDto,
      );
      writeFileSync(
        join(dtoPath, `Update${entity.namePascalCase}Dto.php`),
        dtoContent.updateDto,
      );
      logInfo(`✅  Generated DTOs for ${entity.namePascalCase}`);
    } catch (error) {
      logError(
        `${EMOJI.error} Error generating files for entity ${entity.namePascalCase}: ${error}`,
      );
    }
  }

  logInfo("🎉 Symfony module generation complete!");
}

export function generateSymfonyModulesFromFile(jsonFilePath: string): void {
  try {
    const fileContent = readFileSync(jsonFilePath, "utf-8");
    const jsonData = JSON.parse(fileContent);
    const entities: IEntityJson[] = jsonData.entities;

    if (!entities) {
      logError(`${EMOJI.error} No 'entities' array found in ${jsonFilePath}`);
      return;
    }

    generateSymfonyModules(entities);
  } catch (error) {
    logError(
      `${EMOJI.error} Failed to load or parse ${jsonFilePath}: ${error}`,
    );
    process.exit(1);
  }
}
