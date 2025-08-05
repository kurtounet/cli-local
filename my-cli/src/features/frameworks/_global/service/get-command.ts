import {
  COMMAND_ANGULAR,
  COMMAND_ELECTRON,
  COMMAND_NESTJS,
  COMMAND_SYMFONY,
  COMMAND_VUE,
} from "@constants/global.constants";
import { IFramework } from "../interface/framework-commun.model";

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
    console.error("❌ Framework non renseigné.");
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
  } else {
    console.error(`❌ Framework frameWork non reconnu.`);
    process.exit(1);
  }
}
