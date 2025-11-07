export function ARCHITECTURE_ANGULAR_MOCK() {
  return [
    {
      _type: "directory",
      name: ".doc",
      pathInProject: "./",
      gitIgnore: true,
      children: [],
    },
    {
      _type: "directory",
      name: "src",
      gitIgnore: true,
      pathInProject: "./",
      children: [
        {
          _type: "directory",
          name: "core",
          gitIgnore: false,
          pathInProject: "src",
          children: [...ARCHITECTURE_ANGULAR_CORE_MOCK()],
        },
        {
          _type: "directory",
          name: "features",
          gitIgnore: false,
          pathInProject: "src",
          children: [...ARCHITECTURE_ANGULAR_DIR_FEATURE_MOCK()],
        },
        {
          _type: "directory",
          name: "shared",
          gitIgnore: false,
          pathInProject: "src",
          children: [...ARCHITECTURE_ANGULAR_DIR_SHARED_MOCK()],
        },
      ],
    },
  ];
}
export function ARCHITECTURE_ANGULAR_CORE_MOCK() {
  return [...ARCHITECTURE_ANGULAR_DIR_GENERAL_MOCK()];
}
export function ARCHITECTURE_ANGULAR_DIR_SHARED_MOCK() {
  return [...ARCHITECTURE_ANGULAR_DIR_GENERAL_MOCK()];
}
export function ARCHITECTURE_ANGULAR_DIR_FEATURE_MOCK() {
  return [...ARCHITECTURE_ANGULAR_DIR_GENERAL_MOCK()];
}
export function ARCHITECTURE_ANGULAR_DIR_GENERAL_MOCK() {
  return [
    {
      _type: "directory",
      name: "pages",
      gitIgnore: false,
      pathInProject: "src",
      children: [],
    },
    {
      _type: "directory",
      name: "services",
      gitIgnore: false,
      pathInProject: "src",
      children: [],
    },
    {
      _type: "directory",
      name: "models",
      gitIgnore: false,
      pathInProject: "src",
      children: [],
    },
    {
      _type: "directory",
      name: "pipes",
      gitIgnore: false,
      pathInProject: "src",
      children: [],
    },
    {
      _type: "directory",
      name: "directives",
      gitIgnore: false,
      pathInProject: "src",
      children: [],
    },
    {
      _type: "directory",
      name: "components",
      gitIgnore: false,
      pathInProject: "src",
      children: [],
    },
  ];
}
