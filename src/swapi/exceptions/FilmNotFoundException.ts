export default class FilmNotFoundException extends Error {

    code: number

    constructor(message) {
      super(message);
      this.name = this.constructor.name;
      this.code = 404;
      
      Error.captureStackTrace(this, this.constructor);
    }
  }