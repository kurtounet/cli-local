import { I } from "@faker-js/faker/dist/airline-CHFQMWko";
import { IFramework } from "@features/frameworks/models/framework-commun.model";

import { logInfo } from "@utils/logger";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

export function updatePackageJsonService(
  rootPathProjectFramework: string,
  framework: IFramework,
) {
  const packageJson = JSON.parse(
    readFileSync(join(rootPathProjectFramework, "package.json"), "utf8"),
  );

  // Ajout des script personnalisé
  Object.entries(framework.scripts).forEach(([key, value]) => {
    packageJson.scripts[key] = value;
  });

  writeFileSync(
    join(rootPathProjectFramework, "package.json"),
    JSON.stringify(packageJson, null, 2),
    "utf8",
  );
  logInfo("✅ package.json synchronisé depuis framework.json");
  /*
const TSCONFIG = join(ROOT, 'tsconfig.json');
const ts = JSON.parse(readFileSync(TSCONFIG, 'utf8'));

ts.compilerOptions = ts.compilerOptions || {};
ts.compilerOptions.baseUrl = ts.compilerOptions.baseUrl || ".";
ts.compilerOptions.paths = ts.compilerOptions.paths || {};
ts.compilerOptions.types = Array.isArray(ts.compilerOptions.types) ? ts.compilerOptions.types : [];
if (!ts.compilerOptions.types.includes('node')) ts.compilerOptions.types.push('node');

// construis les paths: "#alias/*" -> ["./path/*"], et "#alias" -> ["./path"]
for (const [alias, rel] of Object.entries(map)) {
  ts.compilerOptions.paths[`${alias}`] = [rel];
  ts.compilerOptions.paths[`${alias}/*`] = [`${rel}/*`];
}

if (!Array.isArray(ts.include)) {
  ts.include = ["server", "scripts", "nitro.config.ts", "drizzle.config.ts", "aliases.generated.ts"];
} else {
  for (const item of ["server", "scripts", "aliases.generated.ts"]) {
    if (!ts.include.includes(item)) ts.include.push(item);
  }
}

writeFileSync(TSCONFIG, JSON.stringify(ts, null, 2), 'utf8');
logInfo('✅ tsconfig.json synchronisé depuis alias-map.json');
*/
}
