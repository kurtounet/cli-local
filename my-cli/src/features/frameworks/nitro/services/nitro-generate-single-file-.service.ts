import { writeFile } from "@utils/file-utils";
import { logSuccess } from "@utils/logger";
import { baseRepositoryTemplate } from "../templates/repositories/base-repository-template";
import { interfaceBaseServiceTemplate } from "../templates/models/model-base-service-template";
import { interfaceBaseRepositoryTemplate } from "../templates/models/model-base-repository-template";
import { baseServiceTemplate } from "../templates/services/base-service-template";
import { nitroHandleApiErrorTemplate } from "../templates/utils/nitro-handle-api-error-template";

export function nitroGenerateSingleFileService(rootServer: string) {
  // server/database

  // server/models
  writeFile(
    `${rootServer}/models/base-service.model.ts`,
    interfaceBaseServiceTemplate(),
  );

  writeFile(
    `${rootServer}/models/base-repository.model.ts`,
    interfaceBaseRepositoryTemplate(),
  );
  // server/services
  writeFile(
    `${rootServer}/services/base-service.service.ts`,
    baseServiceTemplate(),
  );
  // server/repositories
  writeFile(
    `${rootServer}/repository/base-repository.repository.ts`,
    baseRepositoryTemplate(),
  );
  // server/utils
  writeFile(
    `${rootServer}/utils/handle-api-error.utils.ts`,
    nitroHandleApiErrorTemplate(),
  );

  logSuccess(`Génération du BaseRepository`);
}
