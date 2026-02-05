import inquirer from "inquirer";

import { IPromptService } from "@/types/services/prompt-service.interface.js";

import { BaseService } from "./base-service.service.js";

export class PromptService extends BaseService implements IPromptService {
  readonly serviceName = "PromptService";

  /**
   * Pose une question simple (texte)
   * @param message
   * @param name
   */
  async askText(message: string, name = "value"): Promise<string> {
    const result = await inquirer.prompt([
      {
        type: "input",
        name: name,
        message: message,
      },
    ]);
    return result[name];
  }

  /**
   * Propose un choix dans une liste
   * @param message
   * @param choices
   */
  async askChoiceList<T>(message: string, choices: string[]): Promise<T> {
    const name = "selection";
    const result = await inquirer.prompt([
      {
        type: "list",
        name: name,
        message: message,
        choices: choices,
      },
    ]);
    return result[name];
  }
  /**
   * Propose un choix dans une liste
   * @param message
   * @param choices
   */
  async askChoiceCheckbox<T>(message: string, choices: string[]): Promise<T> {
    const name = "selection";
    const result = await inquirer.prompt([
      {
        type: "checkbox",
        name: name,
        message: message,
        choices: choices,
      },
    ]);
    return result[name];
  }

  /**
   * Demande une confirmation (Oui/Non)
   * @param message
   */
  async confirm(message: string): Promise<boolean> {
    const name = "isConfirmed";
    const result = await inquirer.prompt([
      {
        type: "confirm",
        name: name,
        message: message,
        default: false,
      },
    ]);
    return result[name];
  }
}
