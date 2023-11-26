const Calculator = require('./02-calculator');

class FancyCalculator extends Calculator {
  setTotal(newTotal) {
    return (this.total = newTotal);
  }

  modulo(num) {
    this.total %= num;
    return this.total;
  }

  squared() {
    this.total **= 2;
    return this.total;
  }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
  module.exports = FancyCalculator;
} catch {
  module.exports = null;
}
