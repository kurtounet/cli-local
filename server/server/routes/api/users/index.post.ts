// server/routes/api/users/index.post.ts
import { defineEventHandler, readBody } from 'h3';
import { userService } from './_ctx';
import { toHttp } from './_errors';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const created = await userService.create(body);
    event.node.res.statusCode = 201;
    return created;
  } catch (err) {
    throw toHttp(err);
  }
});