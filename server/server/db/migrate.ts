import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db, pool } from './index';

async function main() {
  logInfo('➡️  Migrations…');
  await migrate(db, { migrationsFolder: 'drizzle' });
  logInfo('✅ OK');
  await pool.end();
}
main().catch(async (e) => {
  logError('${EMOJI.error}', e);
  await pool.end();
  process.exit(1);
});