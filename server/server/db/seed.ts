import 'dotenv/config';
import { db, pool } from './index';
import { users } from './schema';

// On peut utiliser faker pour des données réalistes
import { faker } from '@faker-js/faker';

async function main() {
  logInfo('🌱 Démarrage du seed...');

  // Exemple : vider la table avant d’insérer
  await db.delete(users).execute();

  // Exemple : créer 10 users aléatoires
  const fakeUsers = Array.from({ length: 10 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
  }));

  await db.insert(users).values(fakeUsers).execute();

  logInfo(`✅ ${fakeUsers.length} utilisateurs insérés.`);

  await pool.end();
}

main().catch(async (err) => {
  logError('${EMOJI.error} Erreur seed:', err);
  await pool.end();
  process.exit(1);
});
