export interface IPromptService {
  askText(message: string, name: string): Promise<string>;
  confirm(message: string): Promise<boolean>;
  askChoiceList<T>(message: string, choices: string[]): Promise<T>;
  askChoiceCheckbox<T>(message: string, choices: string[]): Promise<T>;
}
