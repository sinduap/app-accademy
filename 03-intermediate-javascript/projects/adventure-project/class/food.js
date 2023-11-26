const { Item } = require('./item');
// FILL THIS OUT

class Food extends Item {
  isFood = true;

  constructor(name, description) {
    super(name, description);
  }
}

module.exports = {
  Food,
};
