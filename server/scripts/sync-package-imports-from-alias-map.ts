import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const map = JSON.parse(readFileSync(join(ROOT, 'alias-map.json'), 'utf8')) as Record<string, string>;

const PKG = join(ROOT, 'package.json');
const pkg = JSON.parse(readFileSync(PKG, 'utf8'));

pkg.type = pkg.type || 'module';
pkg.imports = pkg.imports || {};

for (const [alias, rel] of Object.entries(map)) {
  // clé sans wildcard -> répertoire racine
  pkg.imports[alias] = rel;
  // clé wildcard -> sous-chemins
  pkg.imports[`${alias}/*`] = `${rel}/*`;
}

writeFileSync(PKG, JSON.stringify(pkg, null, 2), 'utf8');
logInfo('✅ package.json#imports synchronisé depuis alias-map.json');
