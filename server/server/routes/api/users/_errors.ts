// // server/routes/api/users/_errors.ts
// import { AppError } from '#core/errors.js';
// import { createError } from 'h3';
 

// export function toHttp(err: any) {
//   if (err instanceof AppError) {
//     return createError({ statusCode: err.status, statusMessage: err.message, data: err.details ?? { code: err.code } });
//   }
//   // MySQL duplicate
//   if (err?.code === 'ER_DUP_ENTRY') {
//     return createError({ statusCode: 409, statusMessage: 'Conflit de ressource (duplication)' });
//   }
//   return createError({ statusCode: 500, statusMessage: 'Erreur serveur' });
// }

// server/routes/api/users/_errors.ts
import { createError, type H3Error, isError } from 'h3';

export function toHttp(err: unknown): H3Error {
  if (isError(err)) return err;

  if (typeof err === 'string') {
    return createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      data: { message: err },
    });
  }

  if (err && typeof err === 'object') {
    const anyErr = err as any;
    if (typeof anyErr.statusCode === 'number') {
      return createError({
        statusCode: anyErr.statusCode,
        statusMessage: anyErr.statusMessage ?? 'Error',
        data: anyErr.data ?? { message: anyErr.message },
      });
    }
    if (typeof anyErr.message === 'string') {
      return createError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        data: { message: anyErr.message },
      });
    }
  }

  return createError({
    statusCode: 500,
    statusMessage: 'Internal Server Error',
    data: { message: 'Unknown error' },
  });
}
