export class AppError extends Error {
  status: number;
  code?: string;
  details?: unknown;
  constructor(message: string, status = 400, code?: string, details?: unknown) {
    super(message);
    this.status = status;
    this.code = code;
    this.details = details;
  }
}
export class NotFoundError extends AppError {
  constructor(message = 'Ressource introuvable') { super(message, 404); }
}
export class ConflictError extends AppError {
  constructor(message = 'Conflit de ressource') { super(message, 409); }
}
export class ValidationError extends AppError {
  constructor(details?: unknown, message = 'Données invalides') { super(message, 400, 'VALIDATION_ERROR', details); }
}