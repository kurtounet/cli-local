import { IFramework } from "@frameworks-models/framework-commun.model";

import { logSuccess } from "@utils/logger";
import { writeFile } from "@utils/file-utils";
import { nitroConnectionDrizzleTemplate } from "../templates/db/nitro-connection-drizzle-template";
 

export function nitroGenerateConnectionDrizzleService(
  rootServer: string,
  framework: IFramework,
) {
  writeFile(
    `${rootServer}/utils/db.ts`,
    nitroConnectionDrizzleTemplate(framework),
  );
  logSuccess("./server/utils/db.ts created");
}
