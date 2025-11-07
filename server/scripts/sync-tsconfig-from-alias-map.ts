import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const map = JSON.parse(readFileSync(join(ROOT, 'alias-map.json'), 'utf8')) as Record<string, string>;

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
