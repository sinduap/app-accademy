const isPrime = require('./isPrime');
const commonFactors = require('./commonFactors');

function commonPrimeFactors(num1, num2) {
  return commonFactors(num1, num2).filter(isPrime);
}

console.log(commonPrimeFactors(12, 50)); // => [ 2 ]
console.log(commonPrimeFactors(6, 24)); // => [ 2, 3 ]
console.log(commonPrimeFactors(11, 22)); // => [ 11 ]
console.log(commonPrimeFactors(45, 60)); // => [ 3, 5 ]

module.exports = commonPrimeFactors;
