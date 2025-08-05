// Template pour un DTO Symfony
import { IEntityJson } from "@interfaces/entity-json.model";

export function getSymfonyDtoTemplate(entity: IEntityJson) {
  const properties =
    entity.columns?.map((col: any) => `    public ${col.name};`).join("\n") ||
    "";
  return `<?php\n\nnamespace App\n\nclass Create${entity.namePascalCase}Dto\n{\n${properties}\n}\n`;
}
