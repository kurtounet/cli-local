import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const MAP = JSON.parse(readFileSync(join(ROOT, 'alias-map.json'), 'utf8')) as Record<string, string>;
const OUT_TS = join(ROOT, 'aliases.generated.ts');

const header = `/* AUTO-GENERATED — do not edit.
 * Source: alias-map.json
 * Run: npm run alias:gen
 */`;

const body = `export const ALIASES = ${JSON.stringify(MAP, null, 2)} as const;
export default ALIASES;
`;

writeFileSync(OUT_TS, `${header}\n\n${body}`, 'utf8');
logInfo(`✅ aliases.generated.ts généré`);
