PS I:\cli\cli-local\my-cli> npm run build

> cli-local@1.0.0 build
> tsc && tsc-alias     

src/commands/global/scaffold.command.ts:119:41 - error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.

119     await processItem(item as BaseItem, opts.rootDir, opts);
                                            ~~~~~~~~~~~~

src/features/frameworks/nuxt/config/nuxt-config-ini.mock.ts:19:3 - error TS2322: Type '({ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: { _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: ({ _type: string; 
name: string; gitIgnore: boolean; pathInProject: string; children?: undefined; } | { ...; })[]; }[]; } | { ...; })[]' is not assignable to type 'IDirectory[]'.
  Type '{ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: { _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: ({ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children?: undefined; } | { ...; })[]; }[]; } | { ...; }' is not assignable to type 'IDirectory'.
    Type '{ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: { _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: ({ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children?: undefined; } | { ...; })[]; }[]; }' is not assignable to type 'IDirectory'.
      Types of property 'children' are incompatible.
        Type '{ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: ({ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children?: undefined; } | { _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: never[]; })[]; }[]' is not assignable to type 'IDirectory[]'.
          Type '{ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: ({ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children?: undefined; } | { _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: never[]; })[]; }' is not assignable to type 'IDirectory'.
            Types of property 'children' are incompatible.
              Type '({ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children?: undefined; } | { _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: never[]; })[]' is not assignable to type 'IDirectory[]'.
                Type '{ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children?: undefined; } | { _type: string; name: string; gitIgnore: boolean; pathInProject: string; children: never[]; }' is not assignable to type 'IDirectory'.
                  Type '{ _type: string; name: string; gitIgnore: boolean; pathInProject: string; children?: undefined; }' is not assignable to type 'IDirectory'.
                    Types of property 'children' are incompatible.
                      Type 'undefined' is not assignable to type 'IDirectory[]'.

19   architecture: ARCHITECTURE_NUXT_MOCK(),
     ~~~~~~~~~~~~

  src/features/frameworks/models/framework-commun.model.ts:84:3
    84   architecture: IDirectory[];
         ~~~~~~~~~~~~
    The expected type comes from property 'architecture' which is declared here on type 'IFramework'


Found 2 errors in 2 files.

Errors  Files
     1  src/commands/global/scaffold.command.ts:119
     1  src/features/frameworks/nuxt/config/nuxt-config-ini.mock.ts:19
PS I:\cli\cli-local\my-cli>