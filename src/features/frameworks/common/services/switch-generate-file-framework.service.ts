import { angularGenerateFilesFramework } from "@features/frameworks/angular/services/angular-generate-files-framework.service";
import { electronGenerateFilesFramework } from "@features/frameworks/electron/services/electron-generate-files-framework.service";
import {
  IFramework,
  IProjectConfig,
} from "@features/frameworks/models/framework-commun.model";
import { nestjsGenerateFilesFramework } from "@features/frameworks/nestjs/services/nestjs-generate-files-framework.service";
import { nitroGenerateFilesFramework } from "@features/frameworks/nitro/services/nitro-generate-files-framework.service";
import { nuxtGenerateFilesFramework } from "@features/frameworks/nuxt/services/nuxt-generate-files-framework.service";
import { nuxtUpdateFileNuxtConfigTsService } from "@features/frameworks/nuxt/services/nuxt-update-file-nuxt-config-ts.service";
import { symfonyGenerateFilesFramework } from "@features/frameworks/symfony/services/symfony-generate-files-framework.service";
import { vueGenerateFilesFramework } from "@features/frameworks/vue/services/vue-generate-files-framework.service";
import { logInfo } from "@utils/logger";
import { updatePackageJsonService } from "./update-package-json.service";
import { executeCommand } from "@utils/execute-command";
import { EMOJI } from "@constants/messages";

export function switchGenerateFileFrameworkService(
  configFile: IProjectConfig,
  framework: IFramework,
  rootPathProjectFramework: string,
  entitiesJsonFile: object,
) {
  switch (framework.name.toLowerCase()) {
    case "angular":
      angularGenerateFilesFramework(
        configFile,
        framework,
        rootPathProjectFramework,
        entitiesJsonFile,
        "install",
      );
      updatePackageJsonService(rootPathProjectFramework, framework);
      break;
    case "vuejs":
      vueGenerateFilesFramework(
        configFile,
        framework,
        rootPathProjectFramework,
        entitiesJsonFile,
      );
      break;
    case "nuxt":
      nuxtGenerateFilesFramework(
        rootPathProjectFramework,
        configFile,
        framework,
        entitiesJsonFile,
        "install",
      );

      nitroGenerateFilesFramework(
        rootPathProjectFramework,
        configFile,
        framework,
        entitiesJsonFile,
        "nuxt",
      );
      nuxtUpdateFileNuxtConfigTsService(rootPathProjectFramework);
      updatePackageJsonService(rootPathProjectFramework, framework);
      // executeCommand(
      //   `npm run db:cp`,
      //   { cwd: `${rootPathProjectFramework}`, stdio: 'inherit' },
      //   `🚀 Génération de la base de données`,
      //   `✅ Génération de la base de données avec succès !`,
      //   `${EMOJI.error} Erreur lors de laGénération de la base de données !`,
      // );

      break;
    case "react":
      logInfo("React GenerateFilesFramework");
      break;
    case "nestjs":
      nestjsGenerateFilesFramework(
        configFile,
        framework,
        rootPathProjectFramework,
        entitiesJsonFile,
      );
      break;
    case "electron":
      electronGenerateFilesFramework(
        configFile,
        framework,
        rootPathProjectFramework,
        entitiesJsonFile,
      );
      break;
    case "symfony":
      symfonyGenerateFilesFramework(
        configFile,
        framework,
        rootPathProjectFramework,
        entitiesJsonFile,
      );
      break;
    case "nitro":
      nitroGenerateFilesFramework(
        rootPathProjectFramework,
        configFile,
        framework,
        entitiesJsonFile,
        "nitro",
      );
      updatePackageJsonService(rootPathProjectFramework, framework);
      break;
    case "fastapi":
      logInfo("fastapiGenerateFilesFramework");
      break;
    default:
      break;
  }

  executeCommand(
    `npm run format`,
    { cwd: `${rootPathProjectFramework}`, stdio: "inherit" },
    `🚀 Formatage`,
    `✅ Formatage avec réussit !`,
    `${EMOJI.error} Erreur lors du Formatage !`,
  );
}
