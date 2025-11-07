import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";
import { nuxtStoreTemplate } from "../templates/stores/nuxt-store.template";
import { logInfo } from "@utils/logger";
 

export function nuxtGenerateStoreEntityService(
  rootPathProjectFramework: string,
  entity: IEntityJson
) {
  writeFile(
    `${rootPathProjectFramework}/app/stores/${entity.nameKebabCase}.store.ts`,
    nuxtStoreTemplate(entity)
  )
  logInfo(`Génération de l'interface Nuxt pour: ${entity.namePascalCase}`);
}
