// server/routes/api/users/[id].delete.ts
import { defineEventHandler } from 'h3';
import { userService } from './_ctx';
import { toHttp } from './_errors';

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params!.id);
    if (Number.isNaN(id)) throw toHttp(new Error('id invalide'));
    return await userService.delete(id);
  } catch (err) {
    throw toHttp(err);
  }
});