import { drizzleConfigUrlTemplate } from "@features/frameworks/drizzle/templates/drizzle-config-url-template";
import { nitroConnectionDrizzleTemplate } from "@features/frameworks/drizzle/templates/nitro-connection-drizzle-template";
import {
  IFramework,
  IProjectConfig,
} from "@frameworks-models/framework-commun.model";
import { writeFile } from "@utils/file-utils";
import { logSuccess } from "@utils/logger";

/**
 *
 * @param rootServer
 * @param configFile
 * @param url
 */
export function nitroGenerateConnectionDrizzleService(
  rootServer: string,
  configFile: IProjectConfig,
  url = false,
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
