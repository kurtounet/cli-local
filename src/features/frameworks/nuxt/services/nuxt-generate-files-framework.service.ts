import {
  createDependencies,
  updateFiles,
} from "@features/frameworks/vue/services/vue-generate-files-framework.service";
import { logSuccess } from "@utils/logger";
import { updatePackageJson } from "@features/frameworks/utils";
import { nuxtGeneratePagesService } from "./nuxt-generate-page.service";
import { nuxtGenerateModelService } from "./nuxt-generate-model.service";
import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { nuxtGenerateFilesCssService } from "./nuxt-generate-files-css.service";
import { nuxtGenerateComponentService } from "./nuxt-generate-component.service";
import { nuxtGenerateStoreEntityService } from "./nuxt-generate-store.entity.service";
import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";
import { nuxtUpdateFileNuxtConfigTsService } from "./nuxt-update-file-nuxt-config-ts.service";
import { nuxtGenerateFromEntityComponentService } from "./nuxt-generate-form-entity-component.service";
import { nuxtGenerateModelSchemaEntityService } from "@features/frameworks/nuxt/services/nuxt-generate-model-schema-entity.service";

export function nuxtGenerateFilesFramework(
  rootPathProjectFramework: string,
  configFile: IProjectConfig,
  framework: IFramework,
  entitiesJsonFile: object,
  mode: string,
) {
  nuxtGenerateModelService(rootPathProjectFramework);
  nuxtGenerateFilesCssService(rootPathProjectFramework);
  nuxtGenerateComponentService(rootPathProjectFramework);
  nuxtGeneratePagesService(rootPathProjectFramework, configFile.projectName);
  if (Array.isArray(entitiesJsonFile)) {
    entitiesJsonFile.forEach((entity: IEntityJson) => {
      nuxtGenerateStoreEntityService(rootPathProjectFramework, entity);
      nuxtGenerateModelSchemaEntityService(rootPathProjectFramework, entity);
      nuxtGenerateFromEntityComponentService(rootPathProjectFramework, entity);
    });
  }
  if (mode === "install") {
    createDependencies(framework, rootPathProjectFramework);
  }
  // updateFilesTSConfigJson(rootPathProjectFramework);
  // generateFileTailwindConfig(rootPathProjectFramework);
  // generateFileESLint(rootPathProjectFramework);
  // generateFilePrettier(rootPathProjectFramework);
  updatePackageJson(
    configFile,
    framework,
    rootPathProjectFramework,
    entitiesJsonFile,
  );
  nuxtUpdateFileNuxtConfigTsService(rootPathProjectFramework);
  logSuccess("Génération de fichiers Nuxt Terminé");
}
