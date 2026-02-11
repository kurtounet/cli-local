export interface IProjectCommand {
  existence: "y" | "yes" | "no" | "n";
  generate: "y" | "yes" | "no" | "n";
  name: string;
  path: string;
  starUml: string;
  framework?: string;
  frontends: string[];
  backends: string[];
  databases: string[];
}
