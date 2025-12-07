export interface IBrunoConfigBrunoCollection {
  name: string;
  version: string;
  type: string;
  ignore: string[];
}
export interface IItemBrunoCollectionQuery {
  name?: string;
  value?: string;
  enabled?: boolean;
}
export interface IItemBrunoCollection {
  type: string; // folder
  name: string; // entity name
  seq: number;
  request: {
    url: string;
    method: string;
    headers: [];
    body: {
      mode: string;
      formUrlEncoded: [];
      multipartForm: [];
    };
    script: {};
    vars: {};
    assertions: [];
    tests: string;
    auth: {
      mode: string;
    };
    query?: IItemBrunoCollectionQuery[];
  };
}
export interface IItemsBrunoCollection {
  type: string; // folder
  name: string; // entity name
  items: IItemBrunoCollection[];
}
export interface IEnvironmentBrunoCollection {
  name: string;
  version: string;
  path: string;
  description: string;
  type: string;
  ignore: string[];
}
export interface IBrunoCollection {
  name: string;
  version: string | undefined;
  items: IItemsBrunoCollection[];
  environments: IEnvironmentBrunoCollection[];
  brunoConfig: IBrunoConfigBrunoCollection;
}
