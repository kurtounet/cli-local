import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { logInfo } from "@utils/logger";

import { nitroIdDeleteTemplate } from "../templates/routes/nitro-id-delete-template";
import { nitroIdGetTemplate } from "../templates/routes/nitro-id-get-template";
import { nitroIdPatchTemplate } from "../templates/routes/nitro-id-patch-template";
import { nitroIdPutTemplate } from "../templates/routes/nitro-id-put-template";
import { nitroIndexGetTemplate } from "../templates/routes/nitro-index-get-template";
import { nitroIndexPostTemplate } from "../templates/routes/nitro-index-post-template";

/**
 *
 * @param rootServerApi
 * @param entity
 * @param mode
 */
export function nitroGenerateRoutesEntityService(
  rootServerApi: string,
  entity: IEntityJson,
  mode: string,
) {
  logInfo(`Génération des routes pour: ${entity.namePascalCase}`);
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}s/index.get.ts`,
    nitroIndexGetTemplate(entity, mode),
  );
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}s/index.post.ts`,
    nitroIndexPostTemplate(entity, mode),
  );
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}s/[id].get.ts`,
    nitroIdGetTemplate(entity, mode),
  );
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}s/[id].patch.ts`,
    nitroIdPatchTemplate(entity, mode),
  );
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}s/[id].delete.ts`,
    nitroIdDeleteTemplate(entity, mode),
  );

  logInfo(`Génération du contrôleur Nitro pour: ${entity.namePascalCase}`);
}
