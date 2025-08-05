export function ARCHITECTURE_ANGULAR_MOCK() {
  return [
    {
      _type: "directory",
      name: ".doc",
      gitIgnore: true,
      pathInProject: "./",
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
          name: "interfaces",
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
      ],
    },
  ];
}
