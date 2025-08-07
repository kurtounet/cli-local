export function ARCHITECTURE_NUXT_MOCK() {
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
          name: "Dto",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
        {
          _type: "directory",
          name: "Service",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
        {
          _type: "directory",
          name: "EventListener",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
        {
          _type: "directory",
          name: "EventSubscriber",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
        {
          _type: "directory",
          name: "State",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
      ],
    },
  ];
}
