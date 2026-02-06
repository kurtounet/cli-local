export interface ISDKContext {
  /** Affiche des messages dans la console */
  log: {
    info: (msg: string) => void;
    success: (msg: string) => void;
    error: (msg: string) => void;
    warning: (msg: string) => void;
    debug: (msg: string) => void;
  };

  /** Accès aux méthodes de manipulation de fichiers */
  fs: {
    writeAsync: (path: string, content: string) => Promise<void>;
    exists: (path: string) => boolean;
    readFile: (path: string, encoding?: string) => Promise<string>;
  };

  /** Moteur de rendu EJS lié au plugin */
  render: (
    pluginDir: string,
    tplDir: string,
    templateName: string,
    data: Record<string, unknown>,
  ) => Promise<string>;

  /** Configuration du projet */
  config: {
    projectPath: string;
    [key: string]: unknown;
  };
}
