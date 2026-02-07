import { IConfigDatabase } from "@/features/commun/database.interface.js";
import { IConfigFramework } from "@/features/commun/framework.interface.js";

import {
  DATABASE_MAP,
  FRAMEWORK_MAP,
} from "../common/config/config-frameworks.js";

export class ConfigFrameworkService {
  readonly serviceName = "ConfigFrameworkService";

  configFrameworks(frameWorks: string[]): IConfigFramework[] {
    const configFramework: IConfigFramework[] = [];
    frameWorks.forEach((element) => {
      if (element != "no") {
        const config = this.configFrameworkMock(element);
        if (config != null) {
          configFramework.push(config);
        }
      }
    });
    return configFramework;
  }
  configDatabases(database: string[]): IConfigDatabase[] {
    const configDatabase: IConfigDatabase[] = [];
    database.forEach((element) => {
      const config = this.configDatabaseMock(element);
      if (config != null) {
        configDatabase.push(config);
      }
    });
    return configDatabase;
  }
  configFrameworkMock(name: string) {
    const key = name.toLowerCase();
    const framework = FRAMEWORK_MAP[key];
    if (!framework) {
      throw new Error(`Framework ${name} not supported`);
    }
    return framework;
  }
  configDatabaseMock(name: string) {
    const key = name.toLowerCase();
    const database = DATABASE_MAP[key];
    if (!database) {
      throw new Error(`Database ${name} not supported`);
    }
    return database;
  }
}
