import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { writeFile } from "@utils/file-utils";

import { nuxtFromEntityComponentTemplate } from "../templates/components/nuxt-from-entity-component-template";

/**
 *
 * @param rootPathProjectFramework
 * @param entity
 */
export function nuxtGenerateFromEntityComponentService(
  rootPathProjectFramework: string,
  entity: IEntityJson,
) {
  writeFile(
    `${rootPathProjectFramework}/app/components/forms/${entity.nameKebabCase}.form.vue`,
    nuxtFromEntityComponentTemplate(entity),
    `Génération du formulaire pour: ${entity.namePascalCase}`,
  );
}
