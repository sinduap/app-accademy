const ValidationError = require('./validation-error');

class MaximumLengthExceededError extends ValidationError {
  constructor(excess = null, ...args) {
    super(...args);

    if (
      Error.captureStackTrace &&
      this.constructor.name === 'MaximumLengthExceededError'
    ) {
      Error.captureStackTrace(this, this.constructor.name);
    }

    this.name = this.constructor.name;
    this.message = 'Maximum length exceeded';

    if (excess) {
      this.message += ` by ${excess}`;
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
