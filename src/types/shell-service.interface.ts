export interface IShellService {
  // Version classique (bloquante)
  executeSync(command: string): string;

  // Version moderne (non-bloquante)
  execute(command: string): Promise<string>;
}
