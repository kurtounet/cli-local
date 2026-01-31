export interface IpackageJson {
  name: string;
  type: string;
  private: boolean;
  version: string;
  description: string;
  main: string;
  author: string;
  license: string;
  scripts: Record<string, string>;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
}
