import { IEntityJson } from "@parsersMdj/models/entity-json.model";
import { buildAndsaveFile } from "@utils/file-utils";
import fs from "fs";
import path from "path";
import { symfonyStateProcessorTemplate } from "../templates/symfony-state-processor-template";

export function symfonyGenerateStateProcessorService(
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
    pathStateEntity + `/${entity.namePascalCase}Processor.php`,
    symfonyStateProcessorTemplate(entity),
  );
  // gitCommit(frameworkPath,`add state provider ${entity.namePascalCase}`);
  // })
}
