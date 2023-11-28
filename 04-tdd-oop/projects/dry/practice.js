class Compare {
  constructor(val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
  }

  getBigger() {
    return this.val1 > this.val2 ? this.val1 : this.val2;
  }

  getSmaller() {
    return this.val1 < this.val2 ? this.val1 : this.val2;
  }
}

function multiplyBiggerNumByTwo(num1, num2) {
  return new Compare(num1, num2).getBigger() * 2;
}

function divideBiggerNumByThree(num1, num2) {
  return new Compare(num1, num2).getBigger() / 3;
}

function eatMostTacos(sum1, sum2) {
  return `I ate ${new Compare(sum1, sum2).getBigger()} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  return `I adopted a dog that weighs ${new Compare(
    weight1,
    weight2
  ).getSmaller()} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
