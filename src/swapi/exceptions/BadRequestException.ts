export default class BadRequestException extends Error {

    code: number

    constructor(message) {
      super(message);
      
      this.name = this.constructor.name;
      this.code = 400;
      
      Error.captureStackTrace(this, this.constructor);
    }
  }