import { IFramework } from "../../models/framework-commun.model.js";

/**
 *
 * @param framework
 * @param command
 */
export function buildCommandService(
  framework: IFramework,
  command: string,
): string {
  if (framework.cliCmd) {
    return `${framework.cliCmd} ${command}`;
  }
  return `${command}`;
}
