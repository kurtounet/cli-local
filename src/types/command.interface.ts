export interface ICommand {
  name: string;
  description: string;
  aliases?: string[];
  options?: ICommandOption[];
  execute(args: string[], options: Record<string, unknown>): Promise<void>;
}

export interface ICommandOption {
  flags: string;
  description: string;
  defaultValue?: unknown;
  required?: boolean;
}
