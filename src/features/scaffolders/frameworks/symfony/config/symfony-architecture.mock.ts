import { IDirectory } from "@/features/commun/architecture.interface.js";

/**
 *Construit l'architecture Symfony
 *@returns Architecture Symfony
 */
export function dirSymfony(): IDirectory[] {
  let architectureSymfony: IDirectory[] = [];
  const dir = [
    "src/Dto",
    "src/Entity",
    "src/EventListener",
    "src/EventSubscriber",
    "src/State",
    "src/Service",
    "src/Traits",
    "src/Utils",
  ];
  architectureSymfony = dir.map((d) => ({
    type: "directory",
    pathInProject: d,
    path: "./",
    name: d.replace("src/", ""),
    extension: "",
    size: 0,
    level: 2,
    gitIgnore: true,
    children: [],
  }));

  return architectureSymfony;
}

/**
 * Construit l'architecture du Projet
 *@returns Objet:IDirectory[] qui représente l'Architecture Projet
 */
export function ARCHITECTURE_SYMFONY_MOCK(): IDirectory[] {
  return [
    {
      type: "directory",
      pathInProject: "./",
      path: "./",
      name: ".doc",
      extension: "",
      size: 0,
      level: 1,
      gitIgnore: true,
      children: [],
    },
    {
      type: "directory",
      pathInProject: "./src",
      path: "./src",
      name: "src",
      extension: "",
      size: 0,
      level: 1,
      gitIgnore: true,
      children: [...dirSymfony()],
    },
  ];
}

/**
 *
 */
export function dirApi(): IDirectory[] {
  let architectureSymfony: IDirectory[] = [];
  const dir = [
    "src/ApiResource",
    "src/ApiResource/Dtos",
    "src/ApiResource/Resources",
    "src/ApiResource/States",
    "src/ApiResource/Mappers",
    "src/ApiResource/Services",
  ];
  architectureSymfony = dir.map((d) => ({
    type: "directory",
    pathInProject: d,
    path: "./",
    name: d.replace("src/", ""),
    extension: "",
    size: 0,
    level: 2,
    gitIgnore: true,
    children: [],
  }));

  return architectureSymfony;
}
/**
 *
 */
export function ARCHITECTURE_SYMFONY_API_PLATFORM_MOCK() {
  return [
    {
      type: "directory",
      name: ".doc",
      gitIgnore: true,
      pathInProject: "./",
      children: [],
    },
    {
      type: "directory",
      name: "src",
      gitIgnore: true,
      pathInProject: "./",
      children: [
        {
          type: "directory",
          name: "ApiResource",
          gitIgnore: false,
          pathInProject: "src",
          children: [
            {
              type: "directory",
              name: "Mappers",
              gitIgnore: false,
              pathInProject: "src/ApiResource",
              children: [],
            },
            {
              type: "directory",
              name: "Dto",
              gitIgnore: false,
              pathInProject: "src/ApiResource",
              children: [],
            },
            {
              type: "directory",
              name: "Resources",
              gitIgnore: false,
              pathInProject: "src/ApiResource",
              children: [],
            },
            {
              type: "directory",
              name: "State",
              gitIgnore: false,
              pathInProject: "src/ApiResource",
              children: [],
            },
          ],
        },
      ],
    },
  ];
}
