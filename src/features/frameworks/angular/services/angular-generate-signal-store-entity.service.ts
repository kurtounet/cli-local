import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { angularSignalStoreEntityTemplate } from "../templates/angular-signal-store-entity.template";

export function angularGenerateSignalStoreEntityService(
  componentDir: string,
  entity: IEntityJson,
) {
  `'@app/features/dashboard`;

  writeFile(
    `${componentDir}/${entity.nameKebabCase}.store.ts`,
    angularSignalStoreEntityTemplate(entity, `@app/features/dashboard`),
  );
}
