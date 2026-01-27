> cli-local-poo@1.0.0 lint
> eslint src/\*_/_.ts

I:\cli\cli-local-poo\src\commands\BaseCommand.ts
5:1 warning '@typedef' is redundant when using a type system jsdoc/check-tag-names
5:1 warning '@property' is redundant when using a type system jsdoc/check-tag-names
5:1 warning Invalid JSDoc @typedef "CommandOption" type "Object"; prefer: "object" jsdoc/check-types
6:1 warning '@property' is redundant when using a type system jsdoc/check-tag-names
7:1 warning '@property' is redundant when using a type system jsdoc/check-tag-names
8:1 warning Prefer a more specific type to `any` jsdoc/reject-any-type
13:1 warning Unexpected inline JSDoc tag. Did you mean to use {@property}, \@property, or `@property`? jsdoc/escape-inline-tags
13:1 warning Should be no multiple asterisks on middle lines jsdoc/no-multi-asterisks
14:1 warning '@property' is redundant when using a type system jsdoc/check-tag-names
14:1 warning Types are not permitted on @property in the supplied context jsdoc/no-types
15:1 warning '@property' is redundant when using a type system jsdoc/check-tag-names
15:1 warning Types are not permitted on @property in the supplied context jsdoc/no-types
16:1 warning '@property' is redundant when using a type system jsdoc/check-tag-names
16:1 warning Types are not permitted on @property in the supplied context jsdoc/no-types
17:1 warning '@property' is redundant when using a type system jsdoc/check-tag-names
17:1 warning Types are not permitted on @property in the supplied context jsdoc/no-types
31:3 warning Missing JSDoc @returns declaration jsdoc/require-returns
46:3 warning Missing JSDoc @param "name" declaration jsdoc/require-param
46:3 warning Missing JSDoc @returns declaration jsdoc/require-returns

I:\cli\cli-local-poo\src\commands\ConfigCommand.ts
26:3 error Async method 'execute' has no 'await' expression @typescript-eslint/require-await
26:49 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
32:17 error Unsafe member access ["-i"] on an `any` value @typescript-eslint/no-unsafe-member-access

I:\cli\cli-local-poo\src\commands\GenerateCommand.ts
1:10 warning 'ValidationError' is defined but never used @typescript-eslint/no-unused-vars
10:3 error Async method 'execute' has no 'await' expression @typescript-eslint/require-await
11:12 warning 'type' is assigned a value but never used @typescript-eslint/no-unused-vars
11:21 warning 'name' is assigned a value but never used @typescript-eslint/no-unused-vars

I:\cli\cli-local-poo\src\commands\ai.command.ts
10:16 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
11:20 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
14:11 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment
15:11 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment
21:42 error Unsafe argument of type `any` assigned to a parameter of type `string` @typescript-eslint/no-unsafe-argument
26:9 error Unexpected lexical declaration in case block no-case-declarations
27:41 error Unsafe argument of type `any` assigned to a parameter of type `string` @typescript-eslint/no-unsafe-argument
32:32 error Unsafe argument of type `any` assigned to a parameter of type `string` @typescript-eslint/no-unsafe-argument
32:44 error Unsafe argument of type `any[]` assigned to a parameter of type `string[]` @typescript-eslint/no-unsafe-argument
39:3 warning Missing JSDoc @param "method" declaration jsdoc/require-param
39:3 warning Missing JSDoc @param "args" declaration jsdoc/require-param
48:11 error Unexpected lexical declaration in case block no-case-declarations
54:11 error Unexpected lexical declaration in case block no-case-declarations
66:11 error Unexpected lexical declaration in case block no-case-declarations
73:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
74:54 error Unsafe member access .message on an `any` value @typescript-eslint/no-unsafe-member-access

I:\cli\cli-local-poo\src\core\App.ts
23:3 warning Missing JSDoc @param "CommandClass" declaration jsdoc/require-param
26:40 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
27:11 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment  
 27:25 error Unsafe construction of an `any` typed value @typescript-eslint/no-unsafe-call
30:11 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment  
 30:35 error Unsafe member access .arguments on an `any` value @typescript-eslint/no-unsafe-member-access
30:45 error Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator @typescript-eslint/prefer-nullish-coalescing
40:31 error Unsafe member access .name on an `any` value @typescript-eslint/no-unsafe-member-access  
 41:20 error Unsafe argument of type `any` assigned to a parameter of type `string` @typescript-eslint/no-unsafe-argument  
 41:32 error Unsafe member access .description on an `any` value @typescript-eslint/no-unsafe-member-access  
 44:21 error Unsafe member access .aliases on an `any` value @typescript-eslint/no-unsafe-member-access  
 44:58 error Unsafe member access .aliases on an `any` value @typescript-eslint/no-unsafe-member-access  
 45:19 error Unsafe argument of type `any` assigned to a parameter of type `readonly string[]` @typescript-eslint/no-unsafe-argument  
 45:31 error Unsafe member access .aliases on an `any` value @typescript-eslint/no-unsafe-member-access  
 49:21 error Unsafe member access .options on an `any` value @typescript-eslint/no-unsafe-member-access  
 49:58 error Unsafe member access .options on an `any` value @typescript-eslint/no-unsafe-member-access  
 50:7 error Unsafe call of an `any` typed value @typescript-eslint/no-unsafe-call
50:19 error Unsafe member access .options on an `any` value @typescript-eslint/no-unsafe-member-access  
 50:41 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
51:20 error Unsafe argument of type `any` assigned to a parameter of type `string` @typescript-eslint/no-unsafe-argument  
 51:24 error Unsafe member access .flags on an `any` value @typescript-eslint/no-unsafe-member-access  
 51:31 error Unsafe argument of type `any` assigned to a parameter of type `string | undefined` @typescript-eslint/no-unsafe-argument  
 51:35 error Unsafe member access .description on an `any` value @typescript-eslint/no-unsafe-member-access  
 51:48 error Unsafe argument of type `any` assigned to a parameter of type `string | boolean | string[] | undefined` @typescript-eslint/no-unsafe-argument  
 51:52 error Unsafe member access .defaultValue on an `any` value @typescript-eslint/no-unsafe-member-access  
 55:32 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
74:15 error Unsafe call of an `any` typed value @typescript-eslint/no-unsafe-call
74:27 error Unsafe member access .execute on an `any` value @typescript-eslint/no-unsafe-member-access

I:\cli\cli-local-poo\src\index.ts
41:1 error Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator @typescript-eslint/no-floating-promises

I:\cli\cli-local-poo\src\mcp-server.ts
53:13 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment
55:18 error Unsafe member access .default on an `any` value @typescript-eslint/no-unsafe-member-access
56:33 error Unsafe member access .default on an `any` value @typescript-eslint/no-unsafe-member-access
58:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
60:56 error Unsafe member access .message on an `any` value @typescript-eslint/no-unsafe-member-access
78:19 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
81:33 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment
81:45 error Unsafe member access .message on an `any` value @typescript-eslint/no-unsafe-member-access

I:\cli\cli-local-poo\src\services\_\_tests\_\_\case-service.test.ts
69:50 error Unnecessary escape character: \@ no-useless-escape

I:\cli\cli-local-poo\src\services\ai.service.ts
14:1 warning '@private' is redundant when using a type system jsdoc/check-tag-names
14:1 warning @private should be empty jsdoc/empty-tags
14:3 warning Missing JSDoc block description jsdoc/require-description
14:3 warning Missing JSDoc @returns declaration jsdoc/require-returns
16:11 error Variable name `__filename` must match one of the following formats: camelCase, UPPER_CASE @typescript-eslint/naming-convention
17:11 error Variable name `__dirname` must match one of the following formats: camelCase, UPPER_CASE @typescript-eslint/naming-convention
42:11 warning 'mcpContext' is assigned a value but never used @typescript-eslint/no-unused-vars
60:1 warning Types are not permitted on @param jsdoc/no-types
61:1 warning Prefer a more specific type to `any` jsdoc/reject-any-type
61:1 warning Defaults are not permitted on @param jsdoc/no-defaults
61:1 warning Types are not permitted on @param jsdoc/no-types
62:1 warning Prefer a more specific type to `any` jsdoc/reject-any-type
62:1 warning Types are not permitted on @returns jsdoc/no-types
72:13 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment
80:22 error Unsafe construction of a type that could not be resolved @typescript-eslint/no-unsafe-call
83:1 warning Should be no multiple asterisks on middle lines jsdoc/no-multi-asterisks
86:20 error Unsafe call of a type that could not be resolved @typescript-eslint/no-unsafe-call
92:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
93:62 error Unsafe member access .message on an `any` value @typescript-eslint/no-unsafe-member-access
101:1 warning Missing JSDoc @returns description jsdoc/require-returns-description
109:13 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment
111:13 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment
111:22 error Unsafe construction of an `any` typed value @typescript-eslint/no-unsafe-call
111:33 error Unsafe member access .default on an `any` value @typescript-eslint/no-unsafe-member-access
114:20 error Unsafe call of an `any` typed value @typescript-eslint/no-unsafe-call
114:27 error Unsafe member access .execute on an `any` value @typescript-eslint/no-unsafe-member-access
120:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
121:59 error Unsafe member access .message on an `any` value @typescript-eslint/no-unsafe-member-access
127:1 warning Types are not permitted on @param jsdoc/no-types
128:1 warning Types are not permitted on @returns jsdoc/no-types
130:3 error Async method 'generatePlugin' has no 'await' expression @typescript-eslint/require-await
131:11 warning 'systemContext' is assigned a value but never used @typescript-eslint/no-unused-vars
145:1 warning Types are not permitted on @param jsdoc/no-types
146:1 warning Types are not permitted on @param jsdoc/no-types
147:1 warning Types are not permitted on @returns jsdoc/no-types
158:1 warning Types are not permitted on @returns jsdoc/no-types
173:1 warning Types are not permitted on @param jsdoc/no-types
174:1 warning Types are not permitted on @returns jsdoc/no-types
182:1 warning Types are not permitted on @param jsdoc/no-types
183:1 warning Types are not permitted on @param jsdoc/no-types
184:1 warning Types are not permitted on @returns jsdoc/no-types

I:\cli\cli-local-poo\src\services\architecture.service.ts
14:17 warning 'path' is defined but never used. Allowed unused args must match /^\_/u
@typescript-eslint/no-unused-vars
17:3 warning Missing JSDoc block description
jsdoc/require-description
19:1 warning Missing JSDoc @param "node" description
jsdoc/require-param-description
20:1 warning Missing JSDoc @param "prefix" description
jsdoc/require-param-description
21:1 warning Missing JSDoc @returns description
jsdoc/require-returns-description
23:35 error Unexpected any. Specify a different type
@typescript-eslint/no-explicit-any
25:11 error Unsafe assignment of an `any` value
@typescript-eslint/no-unsafe-assignment
25:27 error Unsafe member access .children on an `any` value
@typescript-eslint/no-unsafe-member-access
25:36 error Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator
@typescript-eslint/prefer-nullish-coalescing
28:5 error Unsafe call of an `any` typed value
@typescript-eslint/no-unsafe-call
28:14 error Unsafe member access .forEach on an `any` value
@typescript-eslint/no-unsafe-member-access
28:30 error Unexpected any. Specify a different type
@typescript-eslint/no-explicit-any
29:41 error Unsafe member access .length on an `any` value
@typescript-eslint/no-unsafe-member-access
33:27 error Unsafe member access .type on an `any` value
@typescript-eslint/no-unsafe-member-access
33:71 error Unsafe member access .children on an `any` value
@typescript-eslint/no-unsafe-member-access
37:50 error Unsafe member access .name on an `any` value
@typescript-eslint/no-unsafe-member-access
40:26 error Unsafe member access .children on an `any` value
@typescript-eslint/no-unsafe-member-access
49:3 warning Missing JSDoc @param "pathsOut" declaration
jsdoc/require-param
53:1 warning Expected @param names to be "pathsIn, pathsOut, type, action". Got "pathsIn, pathsOutn, type, action"
jsdoc/check-param-names
87:5 error Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator @typescript-eslint/no-floating-promises

I:\cli\cli-local-poo\src\services\base-service.service.ts
2:23 warning 'ICliConfig' is defined but never used @typescript-eslint/no-unused-vars
3:10 warning 'ILoggerService' is defined but never used @typescript-eslint/no-unused-vars

I:\cli\cli-local-poo\src\services\case.service.ts
13:3 warning Missing JSDoc @param "str" declaration jsdoc/require-param
13:3 warning Missing JSDoc @returns declaration jsdoc/require-returns
22:39 error Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator @typescript-eslint/prefer-nullish-coalescing

I:\cli\cli-local-poo\src\services\config.service.ts
18:9 error Unsafe call of a type that could not be resolved @typescript-eslint/no-unsafe-call
18:21 error Unsafe member access .debug on a type that cannot be resolved @typescript-eslint/no-unsafe-member-access
20:14 warning 'e' is defined but never used @typescript-eslint/no-unused-vars
21:7 error Unsafe call of a type that could not be resolved @typescript-eslint/no-unsafe-call
21:19 error Unsafe member access .warn on a type that cannot be resolved @typescript-eslint/no-unsafe-member-access

I:\cli\cli-local-poo\src\services\data-manager.service.ts
14:28 warning 'params' is assigned a value but never used. Allowed unused args must match /^\_/u @typescript-eslint/no-unused-vars

I:\cli\cli-local-poo\src\services\file-system.service.ts
7:10 warning 'CliError' is defined but never used
@typescript-eslint/no-unused-vars
10:7 error Variable name `__filename` must match one of the following formats: camelCase, UPPER_CASE
@typescript-eslint/naming-convention
11:7 error Variable name `__dirname` must match one of the following formats: camelCase, UPPER_CASE
@typescript-eslint/naming-convention
43:7 error Unsafe call of a type that could not be resolved
@typescript-eslint/no-unsafe-call
43:19 error Unsafe member access .debug on a type that cannot be resolved
@typescript-eslint/no-unsafe-member-access
44:14 warning 'error' is defined but never used
@typescript-eslint/no-unused-vars
57:7 error Unsafe call of a type that could not be resolved
@typescript-eslint/no-unsafe-call
57:19 error Unsafe member access .debug on a type that cannot be resolved
@typescript-eslint/no-unsafe-member-access
80:5 error Unsafe call of a type that could not be resolved
@typescript-eslint/no-unsafe-call
80:17 error Unsafe member access .info on a type that cannot be resolved
@typescript-eslint/no-unsafe-member-access
91:14 warning 'error' is defined but never used
@typescript-eslint/no-unused-vars
103:7 error Unexpected `await` of a non-Promise (non-"Thenable") value
@typescript-eslint/await-thenable
104:7 error Unsafe call of a type that could not be resolved
@typescript-eslint/no-unsafe-call
104:19 error Unsafe member access .debug on a type that cannot be resolved
@typescript-eslint/no-unsafe-member-access
105:14 warning 'error' is defined but never used
@typescript-eslint/no-unused-vars
112:1 warning Types are not permitted on @param
jsdoc/no-types
113:1 warning Types are not permitted on @returns
jsdoc/no-types
122:7 error Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator @typescript-eslint/no-floating-promises
124:5 error Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator @typescript-eslint/no-floating-promises
129:1 warning Types are not permitted on @param
jsdoc/no-types
130:1 warning Invalid JSDoc @returns type "Object"; prefer: "object"
jsdoc/check-types
130:1 warning Types are not permitted on @returns
jsdoc/no-types
134:17 error Unexpected any. Specify a different type
@typescript-eslint/no-explicit-any
140:12 error Unsafe member access .type on an `any` value
@typescript-eslint/no-unsafe-member-access
142:12 error Unsafe member access .children on an `any` value
@typescript-eslint/no-unsafe-member-access
146:12 error Unsafe member access .type on an `any` value
@typescript-eslint/no-unsafe-member-access
147:12 error Unsafe member access .size on an `any` value
@typescript-eslint/no-unsafe-member-access
158:7 error Unsafe assignment of an error typed value
@typescript-eslint/no-unsafe-assignment
158:17 error Unsafe call of a type that could not be resolved
@typescript-eslint/no-unsafe-call
158:17 error Unsafe call of a type that could not be resolved
@typescript-eslint/no-unsafe-call
159:10 error Unsafe member access .filter on a type that cannot be resolved
@typescript-eslint/no-unsafe-member-access
159:65 error Unsafe argument of type error typed assigned to a parameter of type `string`
@typescript-eslint/no-unsafe-argument
160:10 error Unsafe member access .map on a type that cannot be resolved
@typescript-eslint/no-unsafe-member-access
171:13 error Unsafe assignment of an `any` value
@typescript-eslint/no-unsafe-assignment
177:21 error Unexpected any. Specify a different type
@typescript-eslint/no-explicit-any
179:53 error Unsafe member access .message on an `any` value
@typescript-eslint/no-unsafe-member-access
185:11 error Unexpected any. Specify a different type
@typescript-eslint/no-explicit-any
188:45 error Unsafe argument of type `any` assigned to a parameter of type `string`
@typescript-eslint/no-unsafe-argument
188:50 error Unsafe member access .name on an `any` value
@typescript-eslint/no-unsafe-member-access
190:14 error Unsafe member access .type on an `any` value
@typescript-eslint/no-unsafe-member-access
190:40 error Unsafe member access .children on an `any` value
@typescript-eslint/no-unsafe-member-access
195:16 error Unsafe member access .children on an `any` value
@typescript-eslint/no-unsafe-member-access
195:47 error Unsafe member access .children on an `any` value
@typescript-eslint/no-unsafe-member-access
196:34 error Unsafe member access .children on an `any` value
@typescript-eslint/no-unsafe-member-access
202:11 error Unsafe assignment of an `any` value
@typescript-eslint/no-unsafe-assignment
202:26 error Unsafe member access .content on an `any` value
@typescript-eslint/no-unsafe-member-access
202:34 error Prefer using nullish coalescing operator (`??`) instead of a logical or (`||`), as it is a safer operator
@typescript-eslint/prefer-nullish-coalescing
216:15 error Unexpected `await` of a non-Promise (non-"Thenable") value
@typescript-eslint/await-thenable
221:43 error Unsafe member access .name on an `any` value
@typescript-eslint/no-unsafe-member-access
225:15 error Unsafe assignment of an `any` value
@typescript-eslint/no-unsafe-assignment
225:21 error Unsafe call of an `any` typed value
@typescript-eslint/no-unsafe-call
225:26 error Unsafe member access .name on an `any` value
@typescript-eslint/no-unsafe-member-access
229:18 warning 'error' is defined but never used
@typescript-eslint/no-unused-vars
229:25 error Unexpected any. Specify a different type
@typescript-eslint/no-explicit-any
231:46 error Unsafe member access .name on an `any` value
@typescript-eslint/no-unsafe-member-access
241:53 error Unsafe argument of type `any` assigned to a parameter of type `string`
@typescript-eslint/no-unsafe-argument
242:38 error Unsafe argument of type `any` assigned to a parameter of type `string`
@typescript-eslint/no-unsafe-argument

I:\cli\cli-local-poo\src\services\generator.service.ts
10:3 warning Missing JSDoc @param "type" declaration
jsdoc/require-param
10:3 warning Missing JSDoc @param "name" declaration
jsdoc/require-param
10:3 warning Missing JSDoc @param "options" declaration
jsdoc/require-param
13:3 error Async method 'newComponent' has no 'await' expression
@typescript-eslint/require-await
16:14 error Unexpected any. Specify a different type
@typescript-eslint/no-explicit-any
25:9 error Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator @typescript-eslint/no-floating-promises
30:9 error Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator @typescript-eslint/no-floating-promises
34:9 error Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator @typescript-eslint/no-floating-promises
38:9 error Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator @typescript-eslint/no-floating-promises
42:17 error Unsafe member access .dryRun on an `any` value
@typescript-eslint/no-unsafe-member-access
43:7 error Unsafe call of a type that could not be resolved
@typescript-eslint/no-unsafe-call
43:19 error Unsafe member access .info on a type that cannot be resolved
@typescript-eslint/no-unsafe-member-access
119:68 error Unexpected any. Specify a different type
@typescript-eslint/no-explicit-any
120:20 error Unexpected `await` of a non-Promise (non-"Thenable") value
@typescript-eslint/await-thenable
121:28 error Unsafe member access .force on an `any` value
@typescript-eslint/no-unsafe-member-access
122:7 error Unsafe call of a type that could not be resolved
@typescript-eslint/no-unsafe-call
122:19 error Unsafe member access .warn on a type that cannot be resolved
@typescript-eslint/no-unsafe-member-access
125:5 error Promises must be awaited, end with a call to .catch, end with a call to .then with a rejection handler or be explicitly marked as ignored with the `void` operator @typescript-eslint/no-floating-promises

I:\cli\cli-local-poo\src\services\handler-error.service.ts
17:47 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
35:11 warning 'code' is assigned a value but never used @typescript-eslint/no-unused-vars
39:7 error Unsafe call of a type that could not be resolved @typescript-eslint/no-unsafe-call
39:19 error Unsafe member access .error on a type that cannot be resolved @typescript-eslint/no-unsafe-member-access
41:7 error Unsafe call of a type that could not be resolved @typescript-eslint/no-unsafe-call
41:19 error Unsafe member access .error on a type that cannot be resolved @typescript-eslint/no-unsafe-member-access
45:21 error Unsafe member access .logLevel on a type that cannot be resolved @typescript-eslint/no-unsafe-member-access

I:\cli\cli-local-poo\src\services\plugin.service.ts
6:29 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
9:3 error Async method 'registerPlugin' has no 'await' expression @typescript-eslint/require-await
9:37 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
10:11 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment
10:36 error Unsafe member access .definition on an `any` value @typescript-eslint/no-unsafe-member-access
11:22 error Unsafe argument of type `any` assigned to a parameter of type `string` @typescript-eslint/no-unsafe-argument
11:33 error Unsafe member access .name on an `any` value @typescript-eslint/no-unsafe-member-access
11:39 error Unsafe construction of an `any` typed value @typescript-eslint/no-unsafe-call
12:63 error Unsafe member access .name on an `any` value @typescript-eslint/no-unsafe-member-access
16:58 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
17:11 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment
29:20 error Unsafe call of an `any` typed value @typescript-eslint/no-unsafe-call
29:27 error Unsafe member access .execute on an `any` value @typescript-eslint/no-unsafe-member-access
30:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
32:32 error Unsafe assignment of an `any` value @typescript-eslint/no-unsafe-assignment
32:45 error Unsafe member access .message on an `any` value @typescript-eslint/no-unsafe-member-access

I:\cli\cli-local-poo\src\services\prompt.service.ts
6:3 warning Missing JSDoc @param "message" declaration jsdoc/require-param
6:3 warning Missing JSDoc @param "name" declaration jsdoc/require-param
6:3 warning Missing JSDoc @returns declaration jsdoc/require-returns
17:5 error Unsafe return of a value of type `any` @typescript-eslint/no-unsafe-return
20:3 warning Missing JSDoc @param "message" declaration jsdoc/require-param
20:3 warning Missing JSDoc @param "choices" declaration jsdoc/require-param
20:3 warning Missing JSDoc @returns declaration jsdoc/require-returns
33:5 error Unsafe return of a value of type `any` @typescript-eslint/no-unsafe-return
35:3 warning Missing JSDoc @param "message" declaration jsdoc/require-param
35:3 warning Missing JSDoc @param "choices" declaration jsdoc/require-param
35:3 warning Missing JSDoc @returns declaration jsdoc/require-returns
48:5 error Unsafe return of a value of type `any` @typescript-eslint/no-unsafe-return
51:3 warning Missing JSDoc @param "message" declaration jsdoc/require-param
51:3 warning Missing JSDoc @returns declaration jsdoc/require-returns
64:5 error Unsafe return of a value of type `any` @typescript-eslint/no-unsafe-return

I:\cli\cli-local-poo\src\services\shell.service.ts
10:3 warning Missing JSDoc @param "command" declaration jsdoc/require-param
10:3 warning Missing JSDoc @returns declaration jsdoc/require-returns
28:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
29:48 error Unsafe member access .message on an `any` value @typescript-eslint/no-unsafe-member-access
30:65 error Unsafe member access .message on an `any` value @typescript-eslint/no-unsafe-member-access
33:3 warning Missing JSDoc @param "command" declaration jsdoc/require-param
33:3 warning Missing JSDoc @returns declaration jsdoc/require-returns
46:21 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
47:39 error Unsafe member access .message on an `any` value @typescript-eslint/no-unsafe-member-access
48:65 error Unsafe member access .message on an `any` value @typescript-eslint/no-unsafe-member-access

I:\cli\cli-local-poo\src\services\state.service.ts
5:37 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
8:5 error Unsafe return of a value of type `any` @typescript-eslint/no-unsafe-return

I:\cli\cli-local-poo\src\services\template.service.ts
7:3 warning Missing JSDoc @returns declaration jsdoc/require-returns
16:7 error Unsafe call of a type that could not be resolved @typescript-eslint/no-unsafe-call
16:19 error Unsafe member access .warn on a type that cannot be resolved @typescript-eslint/no-unsafe-member-access
51:3 warning Missing JSDoc @param "dir" declaration jsdoc/require-param
51:3 warning Missing JSDoc @param "allFiles" declaration jsdoc/require-param
51:3 warning Missing JSDoc @returns declaration jsdoc/require-returns

I:\cli\cli-local-poo\src\services\tool.service.ts
6:23 error Invalid type "string[]" of template literal expression @typescript-eslint/restrict-template-expressions

I:\cli\cli-local-poo\src\types\ai-service.interface.ts
2:10 warning 'IBaseService' is defined but never used @typescript-eslint/no-unused-vars
12:1 warning Types are not permitted on @param jsdoc/no-types
13:1 warning Types are not permitted on @returns jsdoc/no-types
19:1 warning Types are not permitted on @param jsdoc/no-types
20:1 warning Types are not permitted on @returns jsdoc/no-types
26:1 warning Types are not permitted on @param jsdoc/no-types
27:1 warning Types are not permitted on @param jsdoc/no-types
28:1 warning Types are not permitted on @returns jsdoc/no-types
34:1 warning Types are not permitted on @returns jsdoc/no-types
40:1 warning Types are not permitted on @param jsdoc/no-types
41:1 warning Types are not permitted on @returns jsdoc/no-types
47:1 warning Types are not permitted on @param jsdoc/no-types
48:1 warning Types are not permitted on @param jsdoc/no-types
49:1 warning Types are not permitted on @returns jsdoc/no-types
55:1 warning Types are not permitted on @param jsdoc/no-types
56:1 warning Prefer a more specific type to `any` jsdoc/reject-any-type
56:1 warning Types are not permitted on @param jsdoc/no-types
57:1 warning Prefer a more specific type to `any` jsdoc/reject-any-type
57:1 warning Types are not permitted on @returns jsdoc/no-types
59:36 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
59:52 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
63:1 warning Types are not permitted on @param jsdoc/no-types
64:1 warning Prefer a more specific type to `any` jsdoc/reject-any-type
64:1 warning Types are not permitted on @param jsdoc/no-types
65:1 warning Prefer a more specific type to `any` jsdoc/reject-any-type
65:1 warning Types are not permitted on @returns jsdoc/no-types
67:38 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
67:54 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

I:\cli\cli-local-poo\src\types\base-service.interface.ts
1:10 warning 'IAppContext' is defined but never used @typescript-eslint/no-unused-vars
1:23 warning 'ICliConfig' is defined but never used @typescript-eslint/no-unused-vars
2:10 warning 'ILoggerService' is defined but never used @typescript-eslint/no-unused-vars

I:\cli\cli-local-poo\src\types\config-project-service.interface.ts
6:18 error An empty interface declaration allows any non-nullish value, including literals like `0` and `""`.

- If that's what you want, disable this lint rule with an inline comment or configure the 'allowInterfaces' rule option.
- If you want a type meaning "any object", you probably want `object` instead.
- If you want a type meaning "any value", you probably want `unknown` instead @typescript-eslint/no-empty-object-type

I:\cli\cli-local-poo\src\types\generator.interface.ts
14:53 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

I:\cli\cli-local-poo\src\types\plugin-service.interface.ts
2:24 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
3:31 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any
4:52 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

I:\cli\cli-local-poo\src\types\plugin.interface.ts
19:17 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

I:\cli\cli-local-poo\src\types\services-container.interface.ts
11:35 error Unexpected any. Specify a different type @typescript-eslint/no-explicit-any

✖ 322 problems (199 errors, 123 warnings)
0 errors and 76 warnings potentially fixable with the `--fix` option.

PS I:\cli\cli-local-poo>
