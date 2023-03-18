import { HTTP_STATUS_CODE } from "../enums/http-status-code.enum";

export class UnauthorizeException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HTTP_STATUS_CODE.UNAUTHORIZED;
  }
}

export class NotFoundException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HTTP_STATUS_CODE.NOT_FOUND;
  }
}

export class ServerErrorException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
  }
}

export class BadRequestException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HTTP_STATUS_CODE.BAD_REQUEST;
  }
}

export class UnprocessableContent extends Error {
    constructor(message) {
      super(message);
      this.message = message;
      this.statusCode = HTTP_STATUS_CODE.UNPROCESSABLE_CONTENT;
    }
  }
  

export class ConflictException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HTTP_STATUS_CODE.CONFLICT;
  }
}

export class ForbiddenException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = HTTP_STATUS_CODE.FORBIDDEN;
  }
}
