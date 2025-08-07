import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { buildAndsaveFile } from "@utils/file-utils";

import path from "path";
import { symfonyStateProviderTemplate } from "../templates/symfony-state-provider-template";

export function symfonyGenerateStatePriovider(
  frameworkPath: string,
  entity: IEntityJson,
) {
  const pathStateEntity = path.join(
    frameworkPath,
    "src",
    "State",
    entity.namePascalCase,
  );

  buildAndsaveFile(
    pathStateEntity + `/${entity.namePascalCase}Provider.php`,
    symfonyStateProviderTemplate(entity),
  );
  // gitCommit(frameworkPath,`add state provider ${entity.namePascalCase}`);
}
