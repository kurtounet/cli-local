// server/routes/api/users/index.get.ts
import { defineEventHandler, getQuery, sendError } from 'h3';
import { userService } from './_ctx';
import { toHttp } from './_errors';

export default defineEventHandler(async (event) => {
  try {
    const q = getQuery(event);

    // Parsing robuste avec valeurs par defaut
    const pageRaw = Number(q.page ?? 1);
    const pageSizeRaw = Number(q.pageSize ?? 20);
    const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;
    const pageSize = Number.isFinite(pageSizeRaw) && pageSizeRaw > 0 ? pageSizeRaw : 20;

    const result = await userService.list(
      { page, pageSize },
      { orderBy: { column: (t: any) => t.id, direction: 'asc' } },
    );

    return result;
  } catch (err) {
    // Choisis UNE seule strategie:
    // A) envoyer la reponse d’erreur et stopper
    sendError(event, toHttp(err));
    return;

    // B) ou bien:
    // throw toHttp(err);
  }
});
