import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { nitroIndexGetTemplate } from "../templates/routes/nitro-index-get-template";
import { nitroIndexPostTemplate } from "../templates/routes/nitro-index-post-template";
import { nitroIdGetTemplate } from "../templates/routes/nitro-id-get-template";
import { nitroIdPutTemplate } from "../templates/routes/nitro-id-put-template";
import { nitroIdPatchTemplate } from "../templates/routes/nitro-id-patch-template";
import { nitroIdDeleteTemplate } from "../templates/routes/nitro-id-delete-template";
import { logInfo } from "@utils/logger";

export function nitroGenerateRoutesEntityService(
  rootServerApi: string,
  entity: IEntityJson,
) {
  logInfo(`Génération des routes pour: ${entity.namePascalCase}`);
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}/index.get.ts`,
    nitroIndexGetTemplate(entity),
  );
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}/index.post.ts`,
    nitroIndexPostTemplate(entity),
  );
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}/[id].get.ts`,
    nitroIdGetTemplate(entity),
  );
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}/[id].put.ts`,
    nitroIdPutTemplate(entity),
  );
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}/[id].patch.ts`,
    nitroIdPatchTemplate(entity),
  );
  writeFile(
    `${rootServerApi}/${entity.nameKebabCase}/[id].delete.ts`,
    nitroIdDeleteTemplate(entity),
  );

  console.log(`Génération du contrôleur Nitro pour: ${entity.namePascalCase}`);
}
