import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";

import { logSuccess } from "@utils/logger";
import { writeFile } from "@utils/file-utils";
import { nitroConnectionDrizzleTemplate } from "@features/frameworks/drizzle/templates/nitro-connection-drizzle-template";
import { drizzleConfigUrlTemplate } from "@features/frameworks/drizzle/templates/drizzle-config-url-template";

export function nitroGenerateConnectionDrizzleService(
  rootServer: string,
  configFile: IProjectConfig,
  url: boolean = false,
) {
  // writeFile(
  //   `${rootServer}/database/db.ts`,
  //   drizzleConfigUrlTemplate(configFile),
  //   `Création de ./server/database/db.ts`
  // );

  writeFile(
    `${rootServer}/database/db.ts`,
    nitroConnectionDrizzleTemplate(configFile),
    `Création de ./server/database/db.ts`,
  );
}
