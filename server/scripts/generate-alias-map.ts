import { readdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const CODE_DIR = join(ROOT, 'server'); // <-- change ça si ton code n'est pas sous ./server
const OUT_JSON = join(ROOT, 'alias-map.json');

type AliasMap = Record<string, string>;

function scan(): AliasMap {
  const map: AliasMap = {};
  const CORE_DIR = join(CODE_DIR, 'core');
  const DB_DIR = join(CODE_DIR, 'db');
  const FEATURES_DIR = join(CODE_DIR, 'features');

  if (existsSync(DB_DIR))   map['#db']   = './server/db';
  if (existsSync(CORE_DIR)) map['#core'] = './server/core';

  if (existsSync(FEATURES_DIR)) {
    const entries = readdirSync(FEATURES_DIR, { withFileTypes: true });
    for (const d of entries) {
      if (d.isDirectory()) {
        map[`#${d.name}`] = `./server/features/${d.name}`;
      }
    }
  }
  return map;
}

function main() {
  const map = scan();
  writeFileSync(OUT_JSON, JSON.stringify(map, null, 2), 'utf8');
  logInfo(`✅ alias-map.json généré (${Object.keys(map).length} alias)`);
}

main();
