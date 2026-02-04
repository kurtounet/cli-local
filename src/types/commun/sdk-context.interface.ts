export interface ISDKContext {
  /** Affiche des messages dans la console */
  log: (msg: string) => void;

  /** Accès aux méthodes de manipulation de fichiers */
  fs: {
    writeAsync: (path: string, content: string) => Promise<void>;
    exists: (path: string) => boolean;
    readFile: (path: string, encoding?: string) => Promise<string>;
  };

  /** Moteur de rendu EJS lié au plugin */
  render: (templateName: string, data: any) => Promise<string>;

  /** Configuration du projet */
  config: {
    projectPath: string;
    [key: string]: any;
  };
}
