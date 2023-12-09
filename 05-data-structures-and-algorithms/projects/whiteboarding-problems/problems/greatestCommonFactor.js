function greatestCommonFactor(num1, num2) {
  let commonFactors = [];

  for (let i = 1; i < num2; i++) {
    if (num2 % i === 0 && num1 % i === 0) {
      commonFactors.push(i);
    }
  }

  return commonFactors[commonFactors.length - 1];
}

console.log(greatestCommonFactor(15, 25)); // => 5
console.log(greatestCommonFactor(16, 24)); // => 8
console.log(greatestCommonFactor(7, 11)); // => 1

module.exports = greatestCommonFactor;
