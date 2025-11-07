import { readdirSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();                    // dossier avec package.json + nitro.config.ts
const CODE_DIR = join(ROOT, 'server');         // ton code (core, db, features) est dans ./server
const OUT_FILE = join(ROOT, 'aliases.generated.ts');

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

function generateFile(map: AliasMap) {
  const header = `/* AUTO-GENERATED — do not edit.
 * Run: npm run alias:gen
 */`;
  const body =
`export const ALIASES = ${JSON.stringify(map, null, 2)} as const;
export default ALIASES;
`;
  writeFileSync(OUT_FILE, `${header}\n\n${body}`, 'utf8');
  logInfo(`✅ Généré: ${OUT_FILE}`);
}

generateFile(scan());
