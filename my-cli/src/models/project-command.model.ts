export interface IProjectCommand {
    name: string;
    path: string;
    starUml: string;
    framework?: string;
    frontends: Array<string>;
    backends: Array<string>;
    databases: Array<string>;
}