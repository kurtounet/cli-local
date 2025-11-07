/* alias-sync-all.ts
 * - scan ./server/{core,db,features/*}
 * - write alias-map.json
 * - write aliases.generated.ts (for nitro.config.ts)
 * - sync tsconfig.json (compilerOptions.paths, include, types)
 * - sync package.json#imports (Node ESM)
 */
import { readdirSync, writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import JSON5 from 'json5';
type AliasMap = Record<string, string>;

const ROOT = process.cwd();
const CODE_DIR = join(ROOT, 'src');
const OUT_TS = join(ROOT, 'aliases.generated.ts');
const OUT_MAP = join(ROOT, 'alias-map.json');
const TSCONFIG = join(ROOT, 'tsconfig.json');
const PKGJSON = join(ROOT, 'package.json');

function scan(): AliasMap {
  const map: AliasMap = {};
  const CORE_DIR = join(CODE_DIR, 'core');
  const DB_DIR = join(CODE_DIR, 'db');
  const FEATURES_DIR = join(CODE_DIR, 'features');

  if (existsSync(DB_DIR)) map['@db'] = './server/db';
  if (existsSync(CORE_DIR)) map['@core'] = './server/core';

  if (existsSync(FEATURES_DIR)) {
    const entries = readdirSync(FEATURES_DIR, { withFileTypes: true });
    for (const d of entries) {
      if (d.isDirectory()) {
        map[`@${d.name}`] = `./src/features/${d.name}`;
      }
    }
  }
  return map;
}

function writeAliasMap(map: AliasMap) {
  writeFileSync(OUT_MAP, JSON.stringify(map, null, 2), 'utf8');
  logInfo(`✅ alias-map.json mis à jour (${Object.keys(map).length} alias)`);
}

function writeAliasesGenerated(map: AliasMap) {
  const header = `/* AUTO-GENERATED — do not edit.
 * Source: alias-map.json
 * Run: npm run alias:gen
 */`;
  const body = `export const ALIASES = ${JSON.stringify(map, null, 2)} as const;
export default ALIASES;
`;
  writeFileSync(OUT_TS, `${header}\n\n${body}`, 'utf8');
  logInfo(`✅ aliases.generated.ts généré`);
}

function syncTsconfig(map: AliasMap) {
  if (!existsSync(TSCONFIG)) {
    console.warn('⚠️ tsconfig.json introuvable, skip.');
    return;
  }
  const ts = JSON.parse(readFileSync(TSCONFIG, 'utf8'));

  ts.compilerOptions = ts.compilerOptions || {};
  ts.compilerOptions.baseUrl = ts.compilerOptions.baseUrl || './src';
  ts.compilerOptions.paths = ts.compilerOptions.paths || {};
  ts.compilerOptions.types = Array.isArray(ts.compilerOptions.types) ? ts.compilerOptions.types : [];
  if (!ts.compilerOptions.types.includes('node')) ts.compilerOptions.types.push('node');

  // Reset/merge only our #aliases to avoid deleting other app paths
  // First, remove existing #* entries we control
  for (const key of Object.keys(ts.compilerOptions.paths)) {
    if (key.startsWith('#')) delete ts.compilerOptions.paths[key];
  }
  // Then add from map (both exact + wildcard)
  for (const [alias, rel] of Object.entries(map)) {
    ts.compilerOptions.paths[alias] = [rel];
    ts.compilerOptions.paths[`${alias}/*`] = [`${rel}/*`];
  }

  // Include helpful dirs/files for editor
  const defIncludes = ['server', 'scripts', 'nitro.config.ts', 'drizzle.config.ts', 'aliases.generated.ts'];
  ts.include = Array.isArray(ts.include) ? ts.include : [];
  for (const item of defIncludes) {
    if (!ts.include.includes(item)) ts.include.push(item);
  }

  writeFileSync(TSCONFIG, JSON.stringify(ts, null, 2), 'utf8');
  logInfo('✅ tsconfig.json synchronisé');
}

function syncPackageImports(map: AliasMap) {
  if (!existsSync(PKGJSON)) {
    console.warn('⚠️ package.json introuvable, skip.');
    return;
  }
  const pkg = JSON.parse(readFileSync(PKGJSON, 'utf8'));
  pkg.type = pkg.type || 'module';
  pkg.imports = pkg.imports || {};

  // Nettoie les anciens alias #* générés
  for (const key of Object.keys(pkg.imports)) {
    if (key.startsWith('#')) delete pkg.imports[key];
  }
  // Ajoute exact + wildcard
  for (const [alias, rel] of Object.entries(map)) {
    pkg.imports[alias] = rel;
    pkg.imports[`${alias}/*`] = `${rel}/*`;
  }

  writeFileSync(PKGJSON, JSON.stringify(pkg, null, 2), 'utf8');
  logInfo('✅ package.json#imports synchronisé');
}

function main() {
  const map = scan();
  writeAliasMap(map);
  writeAliasesGenerated(map);
  syncTsconfig(map);
  syncPackageImports(map);
  logInfo('🎉 Alias synchronisés (map, nitro, tsconfig, pkg)');
}
main();
