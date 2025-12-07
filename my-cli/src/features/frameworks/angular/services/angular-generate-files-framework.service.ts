import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";

import { logInfo } from "@utils/logger";
import { angularGenerateFormEntityService } from "./angular-generate-form-entity.service";
import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
import { angularGenerateCrudEntityService } from "./angular-generate-crud-entity.service";
import { installTSDependencies } from "@features/frameworks/commun/services/install-dependencies.service";
import { angularGenerateEnvironmentsService } from "./angular-generate-environments.service";
import { angularGenerateInterfaceEntityService } from "./angular-generate-interface-entity.service";
import { angularGenerateZodSchemaEntityService } from "./angular-generate-zod-schema-entity.service";
import { angularGenerateRouteService } from "@features/frameworks/commun/services/generate-route.service";
import { angularGeneratePagesService } from "./angular-generate-pages.service";
import { angularGenerateAppHtmlService } from "./angular-generate-app-html.service";
import { fr } from "@faker-js/faker/.";

export function angularGenerateFilesFramework(
  configFile: IProjectConfig,
  framework: IFramework,
  rootPathProjectFramework: string,
  entitiesJsonFile: object,
  mode: string,
) {
  const srcPath = `${rootPathProjectFramework}/src`;
  const appPath = `${srcPath}/app`;
  const pages: string[] = ["home"];

  if (framework.mode === "install") {
    installTSDependencies(framework, rootPathProjectFramework);
  }
  /* assets    
    angularGenerateFilesCssService(rootPathProjectFramework);
  */
  /*  Components
  angularGenerateComponentService(`${rootPathProjectFramework}/src/app/components`, componentName);
  */
  /*  Pages */
  angularGeneratePagesService(
    `${rootPathProjectFramework}/src/app/pages`,
    pages,
  );
  angularGenerateRouteService(`${appPath}`, []);
  angularGenerateAppHtmlService(`${appPath}`);
  /*  Environments */
  angularGenerateEnvironmentsService(`${srcPath}`);

  if (Array.isArray(entitiesJsonFile)) {
    entitiesJsonFile.forEach((entity: IEntityJson) => {
      /*  Génération du formulaire pour l'entity   */
      angularGenerateFormEntityService(
        `${appPath}/components/forms`,
        entity,
        "signal",
        ".component",
      );
      /*  Génération du formulaire pour l'entity   */
      angularGenerateCrudEntityService(`${appPath}/services`, entity);
      /*  Génération de l'interface pour l'entity   */
      angularGenerateInterfaceEntityService(`${appPath}/models`, entity);
      /*  Génération de shema zod pour l'entity   */
      angularGenerateZodSchemaEntityService(`${appPath}/schemas`, entity);
    });
  }

  /*
      updateFilesTSConfigJson(rootPathProjectFramework);
      generateFileTailwindConfig(rootPathProjectFramework);
      generateFileESLint(rootPathProjectFramework);
      generateFilePrettier(rootPathProjectFramework);
      
 */

  logInfo("Génération de fichiers Angular");
}
