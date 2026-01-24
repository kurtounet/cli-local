import inquirer from "inquirer";
import { BaseService } from "./base-service.service.js";
import { IPromptService } from "@/types/prompt-service.interface.js";

export class PromptService extends BaseService implements IPromptService {
  /**
   * Pose une question simple (texte)
   */
  async askText(message: string, name: string = "value"): Promise<string> {
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
