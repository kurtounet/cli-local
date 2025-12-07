import {
  COMMAND_ANGULAR,
  COMMAND_ELECTRON,
  COMMAND_NESTJS,
  COMMAND_SYMFONY,
  COMMAND_VUE,
  COMMAND_NUXT,
  COMMAND_NEXTJS,
  COMMAND_NITRO,
} from "@constants/global.constants";

import { logError } from "@utils/logger";
import { EMOJI } from "@constants/messages";
import { IFramework } from "@features/frameworks/models/framework-commun.model";

/**
 * Generates the appropriate command string for creating a new framework project.
 * @param frameWork The framework configuration object.
 * @param projectName The name of the project to be created.
 * @returns The command string for creating the framework project.
 */
export function getCommandFramework(
  frameWork: IFramework,
  projectName: string,
) {
  let options = ``;
  if (!frameWork) {
    logError("${EMOJI.error} Framework non renseigné.");
    process.exit(1);
  }
  if (
    COMMAND_NESTJS.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `nest new ${projectName} --package-manager npm ${options}`;
  }
  if (
    COMMAND_SYMFONY.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `symfony new ${projectName} --version=${frameWork.version} ${frameWork.app}`;
  }
  if (
    COMMAND_ANGULAR.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `ng new ${projectName} --style=scss --ssr=false --ai-config="gemini" ${options}`;
  }
  if (COMMAND_VUE.some((cmd) => frameWork.name.toLowerCase().includes(cmd))) {
    return `npx vue create ${projectName}`;
  }
  if (
    COMMAND_ELECTRON.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `npx create-electron-app@latest ${projectName} ${options}`;
  }
  if (COMMAND_NUXT.some((cmd) => frameWork.name.toLowerCase().includes(cmd))) {
    return `npx nuxi init ${projectName} && cd ${projectName} && npm install`;
  }
  if (COMMAND_NITRO.some((cmd) => frameWork.name.toLowerCase().includes(cmd))) {
    return `npx giget@latest nitro ${projectName} --install `;
  }
  if (
    COMMAND_NEXTJS.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `npx create-next-app ${projectName}`;
  }

  logError(`${EMOJI.error} Framework frameWork non reconnu.`);
  return `not-found`;
}
