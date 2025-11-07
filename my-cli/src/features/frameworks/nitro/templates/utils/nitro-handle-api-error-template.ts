export function nitroHandleApiErrorTemplate(): string {
  return `// server/utils/handleApiError.ts

import { createError, H3Error } from 'h3'
export interface IhandleApiError {
    statusCode: number
    statusMessage: string
    message: string
    data?: any
    fatal?: boolean
    stack?: string[]
  }
export function handleApiError(error: any) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || 'Erreur interne du serveur.';
  const message = error.message || 'Une erreur interne du serveur s’est produite.';
  const data = error.data || {};
  const fatal = error.fatal;
  
  // Crée une erreur H3 personnalisée sans stack
  const cleanError: Partial<H3Error> = {
    statusCode,
    statusMessage,
    message,
    // data,
    // fatal,
  }
  console.error('[API Error]', error)
  throw createError(cleanError)
}
`;
}
