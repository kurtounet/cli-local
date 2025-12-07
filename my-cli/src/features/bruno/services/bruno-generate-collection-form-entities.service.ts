import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";
 
import {
  IBrunoCollection,
  IItemBrunoCollection,
  IItemsBrunoCollection,
} from "../models/bruno.models";
import { writeFile } from "@utils/file-utils";
import { IProjectConfig } from "@features/frameworks/models/framework-commun.model";
import { name } from "ejs";
import { el } from "@faker-js/faker/.";

export function brunoGenerateCollectionFormEntitiesService(
  ProjectConfig: IProjectConfig,
  rootPathProjectFramework: string,
  entitiesJsonFile: IEntityJson[],
) {
  const host:string ="https://localhost:8001";
  let items: IItemsBrunoCollection[] = [];
  if (Array.isArray(entitiesJsonFile)) {
    entitiesJsonFile.forEach((entity: IEntityJson) => {
      items.push(itemInItemsBrunoCollection(host, entity));
    });
  }

  const json: IBrunoCollection = {
    name: ProjectConfig.projectName,
    version: "1",
    items: items,
    environments: [],
    brunoConfig: {
      version: "1",
      name: ProjectConfig.projectName,
      type: "collection",
      ignore: ["node_modules", ".git"],
    },
  };
  writeFile(
    `${rootPathProjectFramework}/bruno-collections.json`, 
    JSON.stringify(json, null, 2),
  ) 
}

export function itemInItemsBrunoCollection(
  host: string,
  entity: IEntityJson,
): IItemsBrunoCollection {
  const METHODES = ["GET", "POST", "GET", "DELETE", "PATCH", ];
  let url: string ="";
  let items: IItemBrunoCollection[] = [];

  METHODES.forEach((methode, index) => {  
    let indexMethode = index + 1;
    let group: string =""; 
    let url: string =`${host}/api/${entity.tableName}s`;

    if (methode === "GET" && indexMethode === 1) { 
      group = `-Collection-`;
    }else if (methode === "POST") {
       
    }else if (methode === "GET" && indexMethode === 3) {
      group = `-Item-`
      url = `${host}/api/${entity.tableName}s/{id}`;
    }else if (methode === "PATCH") {
      url = `${host}/api/${entity.tableName}s/{id}`;    
    }else if (methode === "DELETE") {
      url = `${host}/api/${entity.tableName}s/{id}`;
    }
    const query =[ {
                name: "page",
                value: "",
                enabled: false,
              }];

    let item: IItemBrunoCollection = {
          type: "http",
          name: `${methode} ${group} ${entity.namePascalCase}`,
          seq: indexMethode,
          request: {
            url: url,
            method: `${methode}`,
            headers: [],
            body: {
              mode: "none",
              formUrlEncoded: [],
              multipartForm: [],
            },
            script: {},
            vars: {},
            assertions: [],
            tests: "",
            auth: {
              mode: "none",
            },
            query: methode === "GET" && index === 0 ? query :[],
          },
        };
 
    items.push(item);
  });

  const itemsBrunoCollection: IItemsBrunoCollection = {
    type: "folder",
    name: entity.namePascalCase,
    items: items,
  }
  return  itemsBrunoCollection;
}
