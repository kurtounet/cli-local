import { IEnvironment } from "@frameworks-models/framework-commun.model";

export function ENVIRONMENTS_NUXT_MOCK(): IEnvironment[] {
  return [
    {
      mode: ".env",
      debug: false,
      dataUrl: "http://localhost:3000",
    },
    {
      mode: ".env.local",
      debug: false,
      dataUrl: "http://localhost:3000",
    },
    {
      mode: "production",
      debug: false,
      dataUrl: "http://localhost:3000",
    },
    {
      mode: ".env.test",
      debug: false,
      dataUrl: "http://localhost:3000",
    },
  ];
}
