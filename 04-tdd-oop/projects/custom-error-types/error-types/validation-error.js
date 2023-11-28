class ValidationError extends Error {
  constructor(message = 'Invalid input', ...args) {
    super(...args);

    if (
      Error.captureStackTrace &&
      this.constructor.name === 'ValidationError'
    ) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = 'ValidationError';
    this.message = message;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
