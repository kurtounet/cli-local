import fs from 'fs/promises';
import path from 'path';
import ejs from 'ejs';
import SymfonyPlugin from './symfony.service.js'; // Assurez-vous que le chemin est correct
import { symfonyGetAttributeTypeORM, symfonyGetPropertyType } from './utils/mapping.js';
import { snakeToCamel, snakeToPascal } from './utils/convert.js';
import pluralize from 'pluralize'; // pluralize doit être accessible ou mocké
import { fileURLToPath } from 'url'; // Importation déplacée ici

// Mock des fonctions de pluralisation utilisées dans enrichEntity
const pluralizeMock = {
  singular: (str) => {
    // Implémentation simple pour le mock, pourrait être plus robuste
    if (str.endsWith('s')) {
        if (str.endsWith('ss')) return str; // Avoid cutting 'ss'
        if (str.endsWith('ies')) return str.slice(0, -3) + 'y';
        if (str.endsWith('es')) return str.slice(0, -2);
        return str.slice(0, -1);
    }
    return str;
  }
};


// Mock du contexte (ctx) fourni par le framework CLI
const mockCtx = {
  log: {
    info: (...args) => console.log('INFO:', ...args),
    warn: (...args) => console.warn('WARN:', ...args),
    error: (...args) => console.error('ERROR:', ...args),
    success: (...args) => console.log('SUCCESS:', ...args),
  },
  fs: {
    writeAsync: async (filePath, content) => {
      const dir = path.dirname(filePath);
      await fs.mkdir(dir, { recursive: true });
      await fs.writeFile(filePath, content, 'utf8');
      mockCtx.log.info(`Écrit : ${filePath}`);
    },
  },
  render: async (pluginDir, templateDir, templateName, data) => {
    const templatePath = path.join(pluginDir, templateDir, templateName);
    const options = { root: path.join(pluginDir, templateDir), async: true, filename: templatePath };
    try {
        return await ejs.renderFile(templatePath, data, options); // Rendre asynchrone
    } catch (e) {
        mockCtx.log.error(`EJS Render Error in ${templatePath}:`, e);
        throw e;
    }
  },
  renderTemplateString: async (templateString, data) => { // Rendre asynchrone
    try {
        // EJS `include` in string rendering is tricky. Assuming renderTemplateString for simple strings.
        return await ejs.render(templateString, data, { async: true }); // Rendre asynchrone
    } catch (e) {
        mockCtx.log.error(`EJS Render String Error: "${templateString}"`, e);
        throw e;
    }
  }
};

// Fonction pour simuler enrichEntity avec le mock de pluralize
function enrichEntityMock(entity) {