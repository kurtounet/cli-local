import { logInfo } from "@utils/logger";
import { angularGenerateFilesFramework } from "../angular/services/angular-generate-files-framework.service";
import { electronGenerateFilesFramework } from "../electron/services/electron-generate-files-framework.service";
import { IFramework, IProjectConfig } from "../models/framework-commun.model";
import { nestjsGenerateFilesFramework } from "../nestjs/services/nestjs-generate-files-framework.service";
import { nitroGenerateFilesFramework } from "../nitro/services/nitro-generate-files-framework.service";
import { nuxtGenerateFilesFramework } from "../nuxt/services/nuxt-generate-files-framework.service";
import { nuxtUpdateFileNuxtConfigTsService } from "../nuxt/services/nuxt-update-file-nuxt-config-ts.service";
import { symfonyGenerateFilesFramework } from "../symfony/services/symfony-generate-files-framework.service";
import { updatePackageJson } from "../utils";
import { vueGenerateFilesFramework } from "../vue/services/vue-generate-files-framework.service";
import { executeCommand } from "@utils/execute-command";

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
      );
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
        "install",
      );
      nuxtUpdateFileNuxtConfigTsService(rootPathProjectFramework);
      
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
        "install",
      );
      break;
    case "fastapi":
      logInfo("fastapiGenerateFilesFramework");
      break;
    default:
      break;
  }
}
