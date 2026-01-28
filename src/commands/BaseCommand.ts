// BaseCommand.ts
import type { IAppContext } from "@/types/context.interface.js";
import type { ICommand, ICommandOption } from "@/types/command.interface.js";
import type {
  AnyOptions,
  MaybePromise,
  OptionKey,
} from "@/types/cli-options.type.js";

/**
 * Classe de base abstraite pour toutes les commandes de la CLI
 */
export abstract class BaseCommand<
  TOptions extends AnyOptions = AnyOptions,
> implements ICommand<TOptions> {
  abstract name: string;
  abstract description: string;

  arguments?: string;
  aliases?: string[];
  options?: ICommandOption[];

  constructor(protected cli: IAppContext) {}

  abstract execute(args: string[], options: TOptions): Promise<void>;

  // ============================================================================
  // Helpers / Services
  // ============================================================================
  protected get logger() {
    return this.cli.logger;
  }

  protected get fileSystem() {
    return this.cli.fileSystem;
  }

  protected get generator() {
    return this.cli.generator;
  }

  protected get templateService() {
    return this.cli.templateService;
  }

  protected get configService() {
    return this.cli.configService;
  }

  // ============================================================================
  // Helpers / UX
  // ============================================================================
  protected validateArgs(args: string[], min: number, usage?: string): void {
    if (args.length < min) {
      const errorMsg = usage
        ? `Arguments insuffisants. ${usage}`
        : `Cette commande nécessite au moins ${min} argument(s), ${args.length} fourni(s).`;

      throw new Error(errorMsg);
    }
  }

  protected success(message: string): void {
    this.logger.info(`✅ ${message}`);
  }

  protected error(message: string): void {
    this.logger.error(`❌ ${message}`);
  }

  protected warning(message: string): void {
    this.logger.warn(`⚠️  ${message}`);
  }

  protected info(message: string): void {
    this.logger.info(`ℹ️  ${message}`);
  }

  // ============================================================================
  // Helpers / Options
  // ============================================================================
  protected hasOption(
    options: TOptions,
    optionName: OptionKey<TOptions>,
  ): boolean {
    return options[optionName] === true;
  }

  protected getOption<K extends OptionKey<TOptions>, TDefault>(
    options: TOptions,
    optionName: K,
    defaultValue: TDefault,
  ): NonNullable<TOptions[K]> | TDefault {
    const value = options[optionName];
    return value ?? defaultValue;
  }

  protected showHelp(): void {
    this.logger.info(`Commande: ${this.name}`);
    this.logger.info(`Description: ${this.description}`);

    if (this.arguments) this.logger.info(`Arguments: ${this.arguments}`);
    if (this.aliases?.length)
      this.logger.info(`Alias: ${this.aliases.join(", ")}`);

    if (this.options?.length) {
      this.logger.info("Options:");
      this.options.forEach((opt) => {
        this.logger.info(`  ${opt.flags.padEnd(20)} ${opt.description}`);
      });
    }
  }

  // ============================================================================
  // Hooks
  // ============================================================================
  protected beforeExecute(
    _args: string[],
    _options: TOptions,
  ): MaybePromise<void> {
    this.logger.info(`beforeExecute: Exécutant la commande ${this.name}`);
    return Promise.resolve();
  }

  protected afterExecute(
    _args: string[],
    _options: TOptions,
  ): MaybePromise<void> {
    this.logger.info(`afterExecute : Commande ${this.name} terminée.`);
    return Promise.resolve();
  }

  protected onError(err: unknown): MaybePromise<void> {
    const msg = err instanceof Error ? err.message : String(err);
    this.error(msg);
    process.exitCode = 1;
    return Promise.resolve();
  }

  public async run(args: string[], options: TOptions): Promise<void> {
    try {
      await this.beforeExecute(args, options);
      await this.execute(args, options);
      await this.afterExecute(args, options);
    } catch (err) {
      await this.onError(err);
    }
  }
}
