import { IEntityJson, IProjectConfig } from "../../../types";
import { angularExampleTemplate } from "../templates/angular-example.template";

type EntityFn = (entity: IEntityJson) => string;
type ConfigFn = (config: IProjectConfig) => string;

export const AngularGen = {
  views: {
    example: angularExampleTemplate as EntityFn,
  },
  configs: {
    // Tes futurs templates de config ici
  },
  data: {
    // Tes futurs templates de config ici
  },
};
