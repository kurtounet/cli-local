import { IEnvironment } from "@/features/commun/framework.interface.js";

/**
 *
 */
export function ENVIRONMENTS_SYMFONY_MOCK(): IEnvironment[] {
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
