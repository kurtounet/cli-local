export function ARCHITECTURE_SYMFONY_MOCK() {
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
        {
          _type: "directory",
          name: "Traits",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
      ],
    },
  ];
}
export function ARCHITECTURE_SYMFONY_API_PLATFORM_MOCK() {
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
          name: "ApiResource",
          gitIgnore: false,
          pathInProject: "src",
          children: [
            {
              _type: "directory",
              name: "Mappers",
              gitIgnore: false,
              pathInProject: "src/ApiResource",
              children: [],
            },
            {
              _type: "directory",
              name: "Dto",
              gitIgnore: false,
              pathInProject: "src/ApiResource",
              children: [],
            },
            {
              _type: "directory",
              name: "Resources",
              gitIgnore: false,
              pathInProject: "src/ApiResource",
              children: [],
            },
            {
              _type: "directory",
              name: "State",
              gitIgnore: false,
              pathInProject: "src/ApiResource",
              children: [],
            },
          ],
        },
        {
          _type: "directory",
          name: "Dto",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
        {
          _type: "directory",
          name: "Services",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
        {
          _type: "directory",
          name: "EventListeners",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
        {
          _type: "directory",
          name: "EventSubscribers",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
        {
          _type: "directory",
          name: "States",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
        {
          _type: "directory",
          name: "Traits",
          gitIgnore: false,
          pathInProject: "src",
          children: [],
        },
      ],
    },
  ];
}
