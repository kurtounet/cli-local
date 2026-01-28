// command.interface.ts
import type { AnyOptions } from "./cli-options.type.js";
import type { IAppContext } from "./context.interface.js";
/*
export interface IBaseOption {
  flags: string;
  description?: string;
  required?: boolean;
  choices?: readonly string[];
}
export interface IBaseOptionBoolean extends IBaseOption {
  type: "boolean";
  defaultValue?: boolean;
}

export interface IBaseOptionString extends IBaseOption {
  type: "string";
  defaultValue?: string;
}

export interface IBaseOptionNumber extends IBaseOption {
  type: "number";  
  defaultValue?: number;
}
*/
export interface IBaseOption {
  flags: string;
  description?: string;
  required?: boolean;
  choices?: readonly string[];
}

export type BooleanOption = IBaseOption & {
  type: "boolean";
  defaultValue?: boolean;
};

export type StringOption = IBaseOption & {
  type: "string";
  defaultValue?: string;
};

export type NumberOption = IBaseOption & {
  type: "number";
  /**
   * IMPORTANT:
   * Commander ne prend pas `number` en defaultValue (il veut string/boolean/string[])
   * Donc on stocke number ici pour le typage, mais on NE le passe PAS à cmd.option().
   */
  defaultValue?: number;
};

export type ICommandOption = BooleanOption | StringOption | NumberOption;

export interface ICommand<TOptions extends AnyOptions = AnyOptions> {
  name: string;
  description: string;
  arguments?: string;
  aliases?: string[];
  options?: ICommandOption[];
  execute(args: string[], options: TOptions): Promise<void>;
  run?(args: string[], options: TOptions): Promise<void>;
}

/**
 * Interface pour une classe de commande (instanciation dynamique)
 */
export interface ICommandClass<TOptions extends AnyOptions = AnyOptions> {
  new (context: IAppContext): ICommand<TOptions>;
}

/**
 * Interface représentant une option de commande CLI
 */
/*
export interface ICommandOption {
 
  flags: string;

  
  description: string;

 
  defaultValue?: number | string | boolean | string[]; // 👈 IMPORTANT

  
  type?: "boolean" | "string" | "number";

 
  required?: boolean;

  
  choices?: readonly string[];
}
*/
/**
 * Interface pour une instance de commande
 */
export interface ICommand<TOptions extends AnyOptions = AnyOptions> {
  name: string;
  description: string;
  arguments?: string;
  aliases?: string[];
  options?: ICommandOption[];

  execute(args: string[], options: TOptions): Promise<void>;

  /**
   * Optionnel : certaines implémentations (BaseCommand) exposent run().
   * Ça permet d’appeler run() si présent, sinon execute().
   */
  run?(args: string[], options: TOptions): Promise<void>;
}
