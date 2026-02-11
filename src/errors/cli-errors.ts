export enum ErrorCode {
  INTERNAL_ERROR = "INTERNAL_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  FILESYSTEM_ERROR = "FILESYSTEM_ERROR",
  TEMPLATE_NOT_FOUND = "TEMPLATE_NOT_FOUND",
  SERVICE_NOT_FOUND = "SERVICE_NOT_FOUND",
}

export class CliError extends Error {
  constructor(
    public readonly message: string,
    public readonly code: ErrorCode = ErrorCode.INTERNAL_ERROR,
    public readonly exitCode = 1,
  ) {
    super(message);
    this.name = "CliError";
  }
}

export class ValidationError extends CliError {
  constructor(message: string) {
    super(message, ErrorCode.VALIDATION_ERROR, 1);
  }
}

export class FilesystemError extends CliError {
  constructor(message: string) {
    super(message, ErrorCode.FILESYSTEM_ERROR, 1);
  }
}

export class TemplateNotFoundError extends CliError {
  constructor(message: string) {
    super(message, ErrorCode.TEMPLATE_NOT_FOUND, 1);
  }
}

export class ServiceNotFoundError extends CliError {
  constructor(message: string) {
    super(message, ErrorCode.SERVICE_NOT_FOUND, 1);
  }
}

export class InternalError extends CliError {
  constructor(message: string) {
    super(message, ErrorCode.INTERNAL_ERROR, 1);
  }
}

export class UnknownError extends CliError {
  constructor(message: string) {
    super(message, ErrorCode.INTERNAL_ERROR, 1);
  }
}

export class NotImplemented extends CliError {
  constructor(message: string) {
    super(message, ErrorCode.INTERNAL_ERROR, 1);
  }
}
