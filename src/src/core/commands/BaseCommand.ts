import { Command } from "commander";

export abstract class BaseCommand {
  // Chaque commande définit son nom, sa description et ses arguments
  abstract name: string;
  abstract description: string;

  abstract register(program: Command): void;
  protected abstract execute(...args: any[]): Promise<void>;
}
