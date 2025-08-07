import { writeFile } from "@utils/file-utils";
import { logSuccess } from "@utils/logger";
import { baseRepositoryTemplate } from "../templates/repositories/base-repository-template";
import { interfaceBaseRepositoryTemplate } from "../templates/repositories/interface-base-repository-template";
import { baseServiceTemplate } from "../templates/repositories/base-service-template";
import { interfaceBaseServiceTemplate } from "../templates/repositories/interface-base-service-template";


export function nitroGeneratBaseService(
  rootServer: string,
) {

  writeFile(
    `${rootServer}/models/base-service.model.ts`,
    interfaceBaseServiceTemplate(),
  );

  writeFile(
    `${rootServer}/models/base-repository.model.ts`,
    interfaceBaseRepositoryTemplate(),
  );

  writeFile(
    `${rootServer}/services/base-service.service.ts`,
    baseServiceTemplate(),
  );

  writeFile(
    `${rootServer}/repository/base-repository.repository.ts`,
    baseRepositoryTemplate(),
  );

  logSuccess(`Génération du BaseRepository`);
}
