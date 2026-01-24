import { Command } from "commander";
import { IAppContext } from "../types/context.interface.js";
import { HandlerErrorService } from "../services/handler-error.service.js";

export class App {
  private program = new Command();

  constructor(private context: IAppContext) {
    this.setupErrorHandling();
    this.program.name("scrofolder").version(this.context.version);
  }

  private setupErrorHandling() {
    this.context.services.get<HandlerErrorService>("HandlerErrorService").setupGlobalHandlers();
  }

  public registerCommand(CommandClass: any) {
    const cmdInstance = new CommandClass(this.context);
    const cmd = this.program.command(cmdInstance.name).description(cmdInstance.description);

    cmd.action(async (...args) => {
      try {
        await cmdInstance.execute(args.slice(0, -1), args[args.length - 1]);
      } catch (e) {
        this.context.services.get<HandlerErrorService>("HandlerErrorService").handle(e as Error);
      }
    });
  }

  public async run() {
    await this.context.services.initializeAll();
    await this.program.parseAsync(process.argv);
  }
}
