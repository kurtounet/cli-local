export interface IProjectCommand {
  existence: "y" | "yes" | "no" | "n";
  name: string;
  path: string;
  starUml: string;
  framework?: string;
  frontends: Array<string>;
  backends: Array<string>;
  databases: Array<string>;
}
