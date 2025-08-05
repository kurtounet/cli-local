import inquirer from "inquirer";

export async function askQuestion(question: any): Promise<any> {
  return inquirer.prompt(question);
}
