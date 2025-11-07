import { writeFile } from "@utils/file-utils";
import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { nuxtFromEntityComponentTemplate } from "../templates/components/nuxt-from-entity-component-template";

export function nuxtGenerateFromEntityComponentService(
  rootPathProjectFramework: string,
  entity: IEntityJson,
) {
  writeFile(
    `${rootPathProjectFramework}/app/components/forms/${entity.nameKebabCase}.form.vue`,
    nuxtFromEntityComponentTemplate(entity),
    `Génération du formulaire pour: ${entity.namePascalCase}`
  );
   
}
