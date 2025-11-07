
import * as fs from 'fs-extra';
import * as path from 'path';

const source = path.resolve(__dirname, '../src/features/frameworks/nuxt/templates-ejs');
const destination = path.resolve(__dirname, '../dist/features/frameworks/nuxt/templates-ejs');

fs.ensureDirSync(path.dirname(destination));

fs.copy(source, destination)
  .then(() => console.log('Successfully copied nuxt templates!'))
  .catch(err => console.error(err));
