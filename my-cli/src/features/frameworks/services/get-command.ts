import {
  COMMAND_ANGULAR,
  COMMAND_ELECTRON,
  COMMAND_NESTJS,
  COMMAND_SYMFONY,
  COMMAND_VUE,
  COMMAND_NUXT,
  COMMAND_NEXTJS,
} from "@constants/global.constants";
import { IFramework } from "../models/framework-commun.model";
import { logError } from "@utils/logger";
import { EMOJI } from "@constants/messages";

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
    console.error("${EMOJI.error} Framework non renseigné.");
    process.exit(1);
  }
  if (
    COMMAND_NESTJS.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `nest new ${projectName} --package-manager npm ${options}`;
  } else if (
    COMMAND_SYMFONY.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `symfony new ${projectName} --version=${frameWork.version} ${frameWork.app}`;
  } else if (
    COMMAND_ANGULAR.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `ng new ${projectName} --style=scss --ssr=false ${options}`;
  } else if (
    COMMAND_VUE.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `npx vue create ${projectName}`;
  } else if (
    COMMAND_ELECTRON.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `npx create-electron-app@latest ${projectName} ${options}`;
  } else if (
    COMMAND_NUXT.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `npx nuxi init ${projectName} && cd ${projectName} && npm install`;
  } else if (
    COMMAND_NEXTJS.some((cmd) => frameWork.name.toLowerCase().includes(cmd))
  ) {
    return `npx create-next-app ${projectName}`;
  } else {
    logError(`${EMOJI.error} Framework frameWork non reconnu.`);
    return `not-found`;
    //process.exit(1);
  }
}
