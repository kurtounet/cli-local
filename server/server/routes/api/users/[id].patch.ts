// server/routes/api/users/[id].put.ts
import { defineEventHandler, readBody } from 'h3';
import { userService } from './_ctx';
import { toHttp } from './_errors';

export default defineEventHandler(async (event) => {
  try {
    const id = Number(event.context.params!.id);
    if (Number.isNaN(id)) throw toHttp(new Error('id invalide'));
    const body = await readBody(event);
    return await userService.update(id, body);
  } catch (err) {
    throw toHttp(err);
  }
});